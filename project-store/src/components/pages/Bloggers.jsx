import React from 'react';
import BloggersCards from '../BloggersCards';


function Bloggers() {

    let category = 'Sewing';
    let name = 'First name, last name';
    let nickname = '@nickname';
    let desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

    return (
        <>
             <section className='news-top p-5'>
            <div className='bg-light text-center p-5'>
                <p className='news-big-text mb-3'>Bloggers</p>
                <p className='news-small-text mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae hic vitae</p>
            </div>
            </section>
            <section className='news-list p-5 d-flex flex-row justify-content-between flex-wrap gap-3'>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>
           <BloggersCards category={category} name={name} nickname={nickname} desc={desc}></BloggersCards>


            </section>
            
        </>
    );
}

export default Bloggers;