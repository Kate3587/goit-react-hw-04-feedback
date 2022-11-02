import React from "react";
import PropTypes from 'prop-types';
import { SectionTitle } from '../Section/Section.styled';

const Section = ({ title, children }) => {
    return (
        <>
        <SectionTitle>{title}</SectionTitle>
            { children }
        </> 
    )};

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}