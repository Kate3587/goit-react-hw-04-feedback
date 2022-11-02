import React from "react";
import PropTypes from 'prop-types';
import { OpinionWrapper, OpinionBtn } from '../FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
     <>
        <OpinionWrapper>
        {options.map(item => (
            <OpinionBtn
                key={item.name}
                name={item.name}
                type="button"
                onClick={onLeaveFeedback}>
                {item.title}
            </OpinionBtn>
        ))}
        </OpinionWrapper>
    </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
    onLeaveFeedback: PropTypes.func.isRequired,
};