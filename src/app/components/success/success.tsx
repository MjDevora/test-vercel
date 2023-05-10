import './success.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export interface SuccessProps {
    className?: string;
    message: string;
}

const quit = () => {
    // hide the current element
    document.getElementsByClassName("success-modal")[0].classList.add("hidden");
}

export const Success: React.FC<SuccessProps> = ({ className = '', message }) => (
    <div className={`${className} success-modal`}>
        <span>
            <div className="quit-modal">
                <FontAwesomeIcon icon={faXmark} className="quit-icon" onClick={quit} />
            </div>
            <div className="success-title">
                <FontAwesomeIcon icon={faCircleCheck} className="modal-icon" />
                <h1>¡Listo!</h1>
            </div>
            <div>
                <h2 className="sucess-body">{message}</h2>
            </div></span></div>
);