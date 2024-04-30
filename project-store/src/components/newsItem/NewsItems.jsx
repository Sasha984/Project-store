import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';



function NewsItems() {

    return (
        <>
        <div className='card-news bg-light p-2 text-center'>
            <img src={"/images/imghears2.png"} alt="card"/>
            <p className='data mt-2 mb-2'>1 april 2023</p>
           <h5 className='mb-3'>itaque dolor repudiandae error dolores</h5>
            <p className='author-news mb-2'>Angela Forsi</p>
            <NavLink to="/article"><button className='mb-1'>Guarda</button></NavLink>
        </div>
        <div className='card-news bg-light p-2 text-center'>
            <img src={"/images/flowers.png"} alt="card"/>
            <p className='data mt-2 mb-2'>1 april 2023</p>
            <h5 className='mb-3'>itaque dolor repudiandae error dolores</h5>
            <p className='author-news mb-2'>Angela Forsi</p>
            <NavLink to="/article"><button className='mb-1'>Guarda</button></NavLink>
        </div>
        <div className='card-news bg-light p-2 text-center'>
            <img src={"/images/decorate.png"} alt="card"/>
            <p className='data mt-2 mb-2'>1 april 2023</p>
            <h5 className='mb-3'>itaque dolor repudiandae error dolores</h5>
            <p className='author-news mb-2'>Angela Forsi</p>
            <NavLink to="/article"><button className='mb-1'>Guarda</button></NavLink>
        </div>
        <div className='card-news bg-light p-2 text-center'>
            <img src={"/images/eggs.png"} alt="card"/>
            <p className='data mt-2 mb-2'>1 april 2023</p>
            <h5 className='mb-3'>itaque dolor repudiandae error dolores</h5>
            <p className='author-news mb-2'>Angela Forsi</p>
            <NavLink to="/article"><button className='mb-1'>Guarda</button></NavLink>
        </div>
        </>
    );
}

export default NewsItems;
        /*constructor(props){
            super(props)
            this.state = {
             const newsitems = [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet consecte',
          img: 'imghears.png',
          data: '1 april 2023',
          author: 'Angela Forsi'
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet consecte',
          img: 'flowers.png',
          data: '1 april 2023',
          author: 'Angela Forsi'
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet consecte',
          img: 'decorate.png',
          data: '1 april 2023',
          author: 'Angela Forsi'
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit amet consecte',
          img: 'eggs.png',
          data: '1 april 2023',
          author: 'Angela Forsi'
        },]
            }
            }*/
