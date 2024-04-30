import React from 'react';
import TutorialCards from '../TutorialCards';

function TutorialPage() {

    let data = '1 april 2023';
    let difficulty = 'Easy';
    let topic = 'Lorem ipsum dolor sit amet';
    let author = 'Angela Forsi';

    return (
        <>
            <div className='p-5'><img src="/images/news.png" alt="picture"/></div>

            <div className='d-flex flex-row px-5'> 
           <div>
           <div className='pt-5'><img src="/images/avatar.png" alt="avatar" /></div>
           <p className='avatar-news mt-3 mb-2'>News by</p>
           <p className='author-news'>Angela Forsi</p></div>
           <div className='text-block d-flex flex-column px-5'>
           <div className='d-flex flex-row justify-content-between'>
           <div className='tags'>
            <a href="#">#tag1</a>
            <a href="#">#tag2</a>
            <a href="#">#tag3</a>
           </div>
           <p className='data'>1 april 2023</p>
           </div>
           <p className='topic mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           <p className='avatar-news mt-4 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita harum sequi consequuntur beatae aliquam quae maxime, laborum quisquam inventore nobis molestias ut dignissimos ipsum! Ad dolorem maiores iste? Voluptas, illum?</p>
           <p className='mt-5 big-text-news'>You can’t knit a scarf out of thin air. Before you start knitting my pattern, you will have to buy a couple of things. But certainly remember to ask around – maybe somebody in your family already has what you need!
<br /><br />
Knitting professionals can spin magic out of every yarn, but as a beginner, you are a bit more limited. For this scarf, I recommend you to get some good quality wool for needles size 15 (no blend, but 100% sheep wool) in your favorite color. I used Malabrigo Rasta in this tutorial.
<br /><br />
You’ll find a very detailed guide to the best yarns for beginners here if you have trouble picking the right wool.
<br /><br />
For this pattern, we will need around 160-180 yards which will yield a scarf of around 1.6 yards. Depending on your body size, you may want to knit a longer scarf and buy more yarn. So, here’s a detailed tutorial showing how to calculate how much yarn you need for a scarf.
<br /><br />
It probably won’t surprise you either, that you will need knitting needles. I put together a very detailed buying guide to finding the best knitting needles for beginners here.
<br /><br />
The short answer: Buy some bamboo single-pointed bamboo needles size 15. Like these Takumi Clover needles
<br /><br />
If you have some other needles in that size around the house, you can, of course, use them as well. But bamboo is great for beginners as the needles are not as slippery.
<br /><br />
You will have to cut the yarn at one point and you also will want to create some nice little fringes. You won’t need any special scissors. They should be moderately sharp so you can get a nice clean cut out of them, though. To weave the ends in, you’ll need a tapestry needle. (No worries, I’ll show you how later on).  Here’s a link to Amazon for a nice tapestry needle and scissors.
<br /><br />
Important note: I firmly believe that size 6 to 8 needles are the best for beginners. The reason, why I recommended bigger needles for this project is not because they are easier to knit. In fact, because they are so big and heavy, they are actually a bit harder to knit. BUT the simple Garter Stitch pattern looks better with big wool & it’s faster to knit. It’s a fine line, though and you can easily adapt this pattern & instructions to smaller needle sizes.
<br /><br />
Tip: Here’s a more detailed post about the basic knitting supplies every beginner needs</p>
<div className='text-center my-5'><img src="/images/scarf.png" alt="picture" width='100%'/></div>
<p className='mb-5 big-text-news'>It will take you between 4-6 hours to knit a short scarf in Garter Stitch. You can take pauses in between. A lot of knitters pick up their project for an hour or two in the evening while watching TV. And nothing speaks against you doing the same.
<br /><br />
Some expectation management at the start. It took me 2.5 hours to finish this scarf. But I’m a fast knitter and I know what I’m doing. If you never knitted a single stitch, you will probably need 2 hours to learn the basics, and then the first couple of rows will be slow going. You will probably end up with a mistake or two. From experience, chances are high that you might have to unravel the scarf on your first try. But don’t be afraid – I’m going to show you some tips how to avoid that so you can easily finish knitting your first scarf.
<br /><br />
I broke down this simple scarf knitting pattern into three easy steps. I will be highlighting the essential instructions in blue boxes. Read this tutorial, if you don’t know how to read a knitting.</p>
           </div>
           <div className='d-flex flex-column gap-3'>
           <p className='text-sponsor mb-5'>Other news</p>
           <div className='news-el d-flex justify-content-center flex-column'>
<img className='p-2' src="/images/tutorial1.png" alt="photo" width='100%'/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>Lorem ipsum dolor sit amet</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>Lorem ipsum dolor sit amet</p>
    <button className='btn-tutorial text-center my-2'>Guarda</button>
</div>

<div className='news-el d-flex justify-content-center flex-column'>
<img className='p-2' src="/images/tutorial1.png" alt="photo" width='100%'/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>Lorem ipsum dolor sit amet</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>Lorem ipsum dolor sit amet</p>
    <button className='btn-tutorial text-center my-2'>Guarda</button>
</div>

<div className='news-el d-flex justify-content-center flex-column'>
<img className='p-2' src="/images/tutorial1.png" alt="photo" width='100%'/>
<div className='d-flex flex-row justify-content-between p-2'>
    <p className='category'>Lorem ipsum dolor sit amet</p>
    <p className='author'>Di <span>Angelica Forchi</span></p>
    </div>
    <p className='topic-tutorial p-2 text-center'>Lorem ipsum dolor sit amet</p>
    <button className='btn-tutorial text-center my-2'>Guarda</button>
</div>


           </div>
           </div>
           <div className='news-top p-5'>
<p className='text-sponsor'>Other articles</p>
<div className='d-flex flex-row justify-content-between mt-4'>
<TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
<TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
<TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>
<TutorialCards data={data} difficulty={difficulty} topic={topic} author={author}></TutorialCards>

</div>

           </div>
        </>
    );
}

export default TutorialPage;