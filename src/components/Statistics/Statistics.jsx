import React from "react";
import PropTypes from 'prop-types';
import { StatItem } from '../Statistics/Statistics.styled';


const Statistics = ({good,neutral, bad, total, positivePercentage}) => (

    <div>
        <StatItem>Good: {good} </StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>Positive Feedback: {positivePercentage} %</StatItem>
    </div>
    
);

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,])
}