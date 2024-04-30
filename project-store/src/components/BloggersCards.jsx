import React from 'react';
import PropTypes from 'prop-types';

BloggersCards.propTypes = {
    category:PropTypes.string,
    name:PropTypes.string,
    desc:PropTypes.string,
    nickname:PropTypes.string
};

function BloggersCards(props) {
    return (
        <div className='blogger-cards bg-light p-3 text-center'>
            <div className=''><img className='border rounded-circle p-3 border-black' src="/images/avatar-big.png" alt="big avatar" width={250}/></div>
            <p className='author-news mt-4'>{props.category}</p>
            <p className='author-news mt-3'>{props.name}</p>
            <p className='author-news mt-3'>{props.nickname}</p>
            <p className='big-text-news my-5'>{props.desc}</p>
            <button className='btn-blogger p-2'>Guarda</button>
        </div>
    );
}

export default BloggersCards;