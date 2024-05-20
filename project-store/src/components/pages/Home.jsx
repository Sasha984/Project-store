import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper} from 'swiper/react';
import 'swiper/swiper.min.css';


function Home() {

  let shortText = 'Lorem ipsum';
  let longText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';

  const [value, setValue] = useState('');
  const [valueEmail, setValueEmail] = useState('');

  function handleChange(event) {
		setValue(event.target.value);
	}
  console.log(value);


  function handleChangeEmail(event) {
		setValueEmail(event.target.value);
	}
  console.log(valueEmail);


 
  
  


    return (
      
      

      <>

<section className='homepage p-5'>
            <div className='pb-5'><p className='big-text'>News</p></div>

           
            <div className='news-first d-flex flex-column text-center pb-2 mb-5'><img className='p-2' src="/images/news.png" alt="first-news" width='100%' />
        <p className='category mt-3'>{shortText}</p>
            <p className='topic mt-4'>{longText}</p>
            <p className='author mt-5'>Di&nbsp;<span>Angela Rossi</span></p>
            <NavLink to="/article"><button className='btn-news mt-4'>Scopri di piu</button></NavLink>
            </div>
            <div className='news-first d-flex flex-column text-center pb-2 mb-5'><img className='p-2' src="/images/news.png" alt="first-news" width='100%' />
        <p className='category mt-3'>{shortText}</p>
            <p className='topic mt-4'>{longText}</p>
            <p className='author mt-5'>Di&nbsp;<span>Angela Rossi</span></p>
            <NavLink to="/article"><button className='btn-news mt-4'>Scopri di piu</button></NavLink>
            </div>
            <div className='news-first d-flex flex-column text-center pb-2 mb-5'><img className='p-2' src="/images/news.png" alt="first-news" width='100%' />
        <p className='category mt-3'>{shortText}</p>
            <p className='topic mt-4'>{longText}</p>
            <p className='author mt-5'>Di&nbsp;<span>Angela Rossi</span></p>
            <NavLink to="/article"><button className='btn-news mt-4'>Scopri di piu</button></NavLink>
            </div>
            </section>
            <section className='tutorial p-5'>
            <p className='big-text'>Tutorial</p>
            <div className='sections pt-5 d-flex flex-row justify-content-between gap-3'>
            <div className="swiper swiper-tutorial pt-5">
  <div className="swiper-wrapper">
  <div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/tutorial1.png" alt="photo" width='100%'/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center'>Guarda</button></NavLink>
</div>
<div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/news.png" alt="photo" width='100%' height={250}/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center text-decoration-none'>Guarda</button></NavLink>
</div>
<div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/tutorial2.png" alt="photo" width='100%'/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center'>Guarda</button></NavLink>
</div>
<div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/tutorial1.png" alt="photo" width='100%'/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center'>Guarda</button></NavLink>
</div>
<div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/news.png" alt="photo" width='100%' height={250}/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center text-decoration-none'>Guarda</button></NavLink>
</div>
<div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/tutorial2.png" alt="photo" width='100%'/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center'>Guarda</button></NavLink>
</div>
  <div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/tutorial1.png" alt="photo" width='100%'/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center'>Guarda</button></NavLink>
</div>
<div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/news.png" alt="photo" width='100%' height={250}/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center text-decoration-none'>Guarda</button></NavLink>
</div>
<div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/tutorial2.png" alt="photo" width='100%'/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center'>Guarda</button></NavLink>
</div>
  <div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/tutorial1.png" alt="photo" width='100%'/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center'>Guarda</button></NavLink>
</div>
<div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/news.png" alt="photo" width='100%' height={250}/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center text-decoration-none'>Guarda</button></NavLink>
</div>
<div className='swiper-slide tutorial-el .bg-light d-flex justify-content-center flex-column p-2'>
<img className='p-2' src="/images/tutorial2.png" alt="photo" width='100%'/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>{shortText}</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>{longText}</p>
    <NavLink to="/tutorialpage"><button className='btn-tutorial text-center'>Guarda</button></NavLink>
</div>
  </div>
  <div className="swiper-button-prev tutorial-btn-prev"></div>
  <div className="swiper-button-next tutorial-btn-next"></div>
</div>
      </div>
    
            </section>
            
            <section className='p-5 .b-light'>
      <div className='sponsors p-4'>
                   <p className='text-sponsor p-4'>Sponsor</p>
                   <div className="swiper pt-5">
  <div className="swiper-wrapper">
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  <div className='swiper-slide div-sponsors'>Sponsors</div>
  </div>
  <div className="swiper-button-prev btn-sponsors"></div>
  <div className="swiper-button-next btn-sponsors"></div>
</div>
                </div>
             </section>

            <section className='courses p-5 d-flex flex-row'>
<div className='courses-el p-4 d-flex flex-column'>
        <p className='topic mb-5'>{shortText}</p>
        <p className='text-courses'>{longText}{longText}</p>
        <p className='text-courses mt-4'>{longText}</p>
        </div>
    <div className='w-50'> 
        <div className='courses-first d-flex flex-row p-4 gap-3'>
        <div className='div-courses d-flex mt-2 justify-content-center'></div>
            <div className='d-flex flex-column'>
            <p className='courses-offers mb-2'>Roma</p>
            <p className='courses-offers mb-3'>Data: 20.06 - 13.07</p>
            <button className='btn-courses-f p-2 mt-2'>Guarda</button></div>
            </div>
        <div className='courses-second d-flex flex-row p-4 gap-3'>
            <div className='div-courses d-flex justify-content-center mt-2'></div>
            <div className='d-flex flex-column'>
            <p className='courses-offers mb-2'>Vicenza</p>
            <p className='courses-offers mb-3'>Data: 23.05 - 13.08</p>
            <button className='btn-courses-s p-2 mt-2'>Guarda</button></div>
            </div>
</div>
            </section>
            <section className='courses-input p-5'>
                <div className='courses-input-in p-5'>
             <div>
                <p className='topic mb-4 mt-3'>{shortText}!</p>
                <p className='text-courses mt-5 p-4'>{longText} {longText} {longText} {longText}</p>
             </div>

<div className='d-flex flex-column gap-5'>
<form action="#" className="form">
	<div className="form__field">
		<input type="text" name="name" placeholder="Name*" required className='form-label topic-tutorial' id="name" value={value} onChange={handleChange}/>
	</div>
	<div className="form__field">
		<input type="email" name="name" placeholder="E-Mail" className='form-label topic-tutorial' id="email" value={valueEmail} onChange={handleChangeEmail} />
		<span className="form__error">This field must contain E-Mail in form example@site.com</span>
	</div>

  <p className='text-agreement mt-4'>{longText} {longText} {longText} {longText}</p>


	<button className='btn-registration mt-5' type="submit">Registration for courses</button>
</form>

    </div>

                </div>
            </section>
        </>

    );
}

export default Home;