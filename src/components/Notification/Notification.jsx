import React from "react";
import PropTypes from 'prop-types';
import { NonMessage } from '../Notification/Notification.styled';

const Notification = ({ message, onHide}) => (
    <>
        <NonMessage onClick={onHide}>{message}</NonMessage>
    </>
);

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    onHide: PropTypes.func,
}