import { useState } from 'react';

import { Container } from '../App/App.styled';
import Section from '../Section'
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification'
import Statistics from '../Statistics';
import options from '../../data/Options';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [visible, setVisible] = useState(false);

          
  const handleChange = (event) => {
    setVisible(true)
    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default: {
        return;
      }
    }
  };  
   
  const total = good + neutral + bad;
  const positivePercentage = (good &&  (good * 100 / total).toFixed(1));

  return (
    <Container>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleChange}
        />
      </Section>

      <Section title={"Statistics"}>
        {!visible && (
          <Notification
            message={"There is no feedback"}
          />)}
              
        {visible && (
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
  );
};


export default App;