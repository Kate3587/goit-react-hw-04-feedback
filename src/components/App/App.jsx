import React from "react";
import { Component } from 'react';
import Section from '../Section'
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification'
import Statistics from '../Statistics';
import options from '../../data/Options';
import { Container } from '../App/App.styled';


class App extends Component{
     state = {
        good: 0,
        neutral: 0,
        bad: 0,
        visible: false,
     };

    handleChange = (event) => {
      const { name } = event.target;
      
        this.setState(prevState => {
            return {
              [name]: prevState[name] + 1,
              visible: true,
            }})
    };
        
    render() {
        const { good, neutral, bad} = this.state;
        const total = good + neutral + bad;
        const positivePercentage = (good &&  (good * 100 / total).toFixed(1));

        return (
            <Container>
              <Section title={"Please leave feedback"}>
                    <FeedbackOptions
                    options={options}
                    onLeaveFeedback={this.handleChange}
                    />
              </Section>

            <Section title={"Statistics"}>
              {!this.state.visible && (
                <Notification
                message={"There is no feedback"}
              />)}
              
              {this.state.visible && (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positivePercentage}
                  />
              )}
                 
            </Section>
            </Container>
        )
    };
};


export default App;