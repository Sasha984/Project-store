import React from 'react';
import TutorialCards from '../TutorialCards'

function Tutorial() {

let data = '1 april 2023';
let difficulty = 'Easy';
let topic = 'Lorem ipsum dolor sit amet';
let author = 'Angela Forsi';


   
    return (
        <>
            <section className='news-top p-5'>
            <div className='bg-light text-center p-5'>
                <p className='news-big-text mb-3'>Tutorial</p>
                <p className='news-small-text mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae hic vitae</p>
            </div>
        </section>
        <section className='news-list p-5'>
            <p className='news-list-text mb-4'>Sewing</p>
            <div className='d-flex flex-row justify-content-between'>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           </div> 
           
            
            <p className='news-list-text mb-4 mt-5'>Embroidery</p>
            <div className='d-flex flex-row justify-content-between'>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           </div> 
           
           
            <p className='news-list-text mb-4 mt-5'>Knitting</p>
        
            <div className='d-flex flex-row justify-content-between'>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           </div> 
           

            <p className='news-list-text mb-4 mt-5'>Weaving</p>
            
            <div className='d-flex flex-row justify-content-between'>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           </div> 
            
            <p className='news-list-text mb-4 mt-5'>Weaving</p>
            
            <div className='d-flex flex-row justify-content-between'>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           <TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
           </div> 
           

       </section>
        </>
    );
}

export default Tutorial;