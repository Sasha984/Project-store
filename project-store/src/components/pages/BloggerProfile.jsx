import React from 'react';
import NewsItems from '../newsItem/NewsItems';

function BloggerProfile() {
    return (
        <>
        <div className='news-list p-5'>
            <div className='bg-light p-5 d-flex flex-row justify-content-between'>
            <div className='ps-5 py-5'><img className='border rounded-circle p-3 border-black' src="/images/avatar-big.png" alt="big avatar"/></div>
            <div className='d-flex flex-column px-5 col-6'>
            <p className='blogger-name mb-3'>Angela Forsi</p>
            <p className='mb-3 author-news'>@angelaforsi</p>
            <p className='big-text-news mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat similique, laudantium deleniti dolore.</p>
            <p className='big-text-news mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo sunt sapiente consequatur impedit magni laboriosam molestiae omnis ducimus quos exercitationem facilis debitis, reprehenderit rem assumenda? Amet quod natus animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam alias consequuntur dolorum voluptatem adipisci veritatis illo, fugit sequi consectetur perspiciatis, qui minima sapiente deleniti voluptas libero assumenda voluptatum optio earum!</p>
            <button className='btn-blogger p-2 big-text-news text-center'>Guarda</button>
            </div>
            <div className='social-blogger d-flex flex-column gap-3 align-items-center'>
                <a href="#"><img src="/images/Web.png" alt="web-icon" /></a>
                <a href="#"><img src="/images/facebook.png" alt="facebook" /></a>
                <a href="#"><img src="/images/instagram.png" alt="instagram" /></a>
                <a href="#"><img src="/images/Etsy.png" alt="etsy" /></a>
            </div>
            </div>
            </div>
            <div className='news-list p-5'>
            <p className='news-list-text mb-4'>My other articles</p>
            <div className='d-flex flex-row justify-content-between mb-4'><NewsItems></NewsItems></div>
            <div className='d-flex flex-row justify-content-between'><NewsItems></NewsItems></div>
            </div>
        </>
    );
}

export default BloggerProfile;