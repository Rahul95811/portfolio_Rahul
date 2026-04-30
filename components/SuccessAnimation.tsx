import React from 'react';

const SuccessAnimation: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center my-4">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <p className="text-green-400 text-center mt-4">
                Thank you for your message! I will get back to you soon.
            </p>
        </div>
    );
};

export default SuccessAnimation;
