import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


TutorialCards.propTypes = {
    data:PropTypes.string,
    difficulty:PropTypes.string,
    topic:PropTypes.string,
    author:PropTypes.string
};

function TutorialCards(props) {
    return (
        <>
        <div className='tutorial-cards bg-light p-1'>
            <img className='p-1' src="/images/tutorial-video.png" alt="tutorial" />
            <div className='d-flex flex-row justify-content-between mt-2 px-2 align-items-center'>
            <p className='data'>{props.data}</p>
            <p className=''>{props.difficulty}</p></div>
            <h5 className='mt-4 px-2'>{props.topic}</h5>
            <p className='author-news mt-3 px-2 mb-4'>{props.author}</p>
            <NavLink to="/tutorialPage"><button className='mb-2'>Guarda</button></NavLink>
            </div>
        </>
    );
}

export default TutorialCards;