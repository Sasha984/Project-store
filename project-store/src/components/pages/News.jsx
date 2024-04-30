import React from 'react';
import NewsItems from '../newsItem/NewsItems';
import { NavLink } from 'react-router-dom';

function News() {

    let shortText = 'Lorem ipsum';
    let longText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'

    return (
        <>
        <section className='news-top p-5'>
            <div className='bg-light text-center p-5'>
                <p className='news-big-text mb-3'>News</p>
                <p className='news-small-text mb-1'>{longText}</p>
            </div>
        </section>
        <section className='homepage p-5'>
        <div className='pb-5'><p className='big-text'>Today</p></div>
<div className='d-flex flex-row gap-3'>
 <div className='news-first d-flex flex-column text-center pb-2'><img className='p-2' src="/images/news.png" alt="first-news" width='100%' />
<p className='category mt-3'>{shortText}</p>
 <p className='topic mt-4'>{longText}</p>
 <p className='author mt-5'>Di&nbsp;<span>Angela Rossi</span></p>
 <NavLink to='/article'><button className='btn-news mt-4'>Scopri di piu</button></NavLink>
 </div>
 <div className='d-flex flex-column'>
 <div className='news-small d-flex justify-content-center text-center pb-3'><img className='p-2' src="/images/imghears.png" alt="second-news" width='100%'/>
 <div className='d-flex flex-column'>
<p className='category pt-2'>{shortText}</p>
 <p className='topic-small'>{longText}</p>
 <p className='author-small mt-5'>Di&nbsp;<span>{shortText}</span></p>
 <NavLink to='/article'><button className='btn-news-small'>Scopri di piu</button></NavLink>
 </div>
 </div>
 <div className='news-small d-flex justify-content-center text-center pb-3'><img className='p-2' src="/images/imgbutterflyes.png" alt="third-news" width='100%'/>
 <div className='d-flex flex-column'>
<p className='category pt-2'>{shortText}</p>
 <p className='topic-small'>{longText}</p>
 <p className='author-small mt-5'>Di&nbsp;<span>{shortText}</span></p>
 <NavLink to='/article'><button className='btn-news-small'>Scopri di piu</button></NavLink>
 </div>
 </div>
 </div>
 </div>
        </section>
        <section className='news-list p-5'>
            <p className='news-list-text mb-4'>Sewing</p>
            <div className='d-flex flex-row justify-content-between'><NewsItems></NewsItems></div>
            <p className='news-list-text mb-4 mt-5'>Embroidery</p>
            <div className='d-flex flex-row justify-content-between'><NewsItems></NewsItems></div>
            <p className='news-list-text mb-4 mt-5'>Knitting</p>
            <div className='d-flex flex-row justify-content-between'><NewsItems></NewsItems></div>
            <p className='news-list-text mb-4 mt-5'>Weaving</p>
            <div className='d-flex flex-row justify-content-between'><NewsItems></NewsItems></div>
            <p className='news-list-text mb-4 mt-5'>Weaving</p>
            <div className='d-flex flex-row justify-content-between'><NewsItems></NewsItems></div>
           </section>

        </>
    );
}


export default News;