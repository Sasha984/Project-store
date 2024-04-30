import React from 'react';

function Contacts() {
    return (
        <>
            <div className='news-top p-5'>
            <div className='bg-light text-center p-5'>
                <p className='news-big-text mb-3'>Contacts</p>
            </div>
        </div>
        <div className='news-top px-5'>
            <div className='bg-light text-center p-5'>
                <p className='mb-3 news-big-text'>Do you need help?</p>
                <p className='news-small-text mb-5'>Contact us!</p>
                <p className='news-small-text mb-2'>example@gmail.com</p>
                <p className='news-small-text'>+380966397534</p>
            </div>
        </div>
        <div className='homepage p-5'>
        <p className='news-list-text mb-4'>Our commercial team</p>
            <div className='d-flex flex-row justify-content-between p-5'>
            <div>
                <p className='contacts-name mb-4'>Angela Forsi</p>
                <p className='author-news mb-2'>Brand Manager</p>
                <p className='big-text-news mb-2'>example@gmail.com</p>
                <p className='author-news'>+380966397534</p>
            </div>

            <div>
                <p className='contacts-name mb-4'>Debora Lunardon</p>
                <p className='author-news mb-2'>Event specialist</p>
                <p className='big-text-news mb-2'>example@gmail.com</p>
                <p className='author-news'>+380966397534</p>
            </div>

            <div>
                <p className='contacts-name mb-4'>Carolina Smit</p>
                <p className='author-news mb-2'>Sales account manager</p>
                <p className='big-text-news mb-2'>example@gmail.com</p>
                <p className='author-news'>+380966397534</p>
            </div>

            <div>
                <p className='contacts-name mb-4'>Sirena Rizzotto</p>
                <p className='author-news mb-2'>Sales account manager</p>
                <p className='big-text-news mb-2'>example@gmail.com</p>
                <p className='author-news'>+380966397534</p>
            </div>

            </div>
          

        </div>
        </>
    );
}

export default Contacts;