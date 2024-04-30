import React from 'react';
import NewsItems from '../newsItem/NewsItems';

function Article() {
    return (
        <>
           <div className='text-center p-5'><img src="/images/news.png" alt="picture" /></div>
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
           <p className='mt-5 big-text-news'>Sewing has an ancient history estimated to begin during the Paleolithic Era. Sewing was used to stitch together animal hides for clothing and for shelter. The Inuit, for example, used sinew from caribou for thread and needles made of bone; the indigenous peoples of the American Plains and Canadian Prairies used sophisticated sewing methods to assemble tipi shelters. Sewing was combined with the weaving of plant leaves in Africa to create baskets, such as those made by Zulu weavers, who used thin strips of palm leaf as "thread" to stitch wider strips of palm leaf that had been woven into a coil. The weaving of cloth from natural fibers originated in the Middle East around 4000 BC, and perhaps earlier during the Neolithic Age, and the sewing of cloth accompanied this development.

During the Middle Ages, Europeans who could afford it employed seamstresses and tailors. The vital importance of sewing was indicated by the honorific position of "Lord Sewer" at many European coronations from the Middle Ages. An example was Robert Radcliffe, 1st Earl of Sussex who was appointed Lord Sewer at the coronation of Henry VIII of England in 1509. Sewing for the most part was a woman's occupation, and most sewing before the 19th century was practical. Clothing was an expensive investment for most people, and women had an important role in extending the longevity of items of clothing. Sewing was used for mending. Clothing that was faded would be turned inside-out so that it could continue to be worn, and sometimes had to be taken apart and reassembled to suit this purpose. Once clothing became worn or torn, it would be taken apart and the reusable cloth sewn together into new items of clothing, made into quilts, or otherwise put to practical use. The many steps involved in making clothing from scratch (weaving, pattern making, cutting, alterations, and so forth) meant that women often bartered their expertise in a particular skill with one another. Decorative needlework such as embroidery was a valued skill, and young women with the time and means would practice to build their skill in this area. From the Middle Ages to the 17th century, sewing tools such as needles, pins and pincushions were included in the trousseaus of many European brides. Sewing birds or sewing clamps were used as a third hand and were popular gifts for seamstresses in the 19th century.</p>
<div className='text-center my-5'><img src="/images/article.png" alt="picture"/></div>
<p className='mb-5 big-text-news'>Sewing has an ancient history estimated to begin during the Paleolithic Era. Sewing was used to stitch together animal hides for clothing and for shelter. The Inuit, for example, used sinew from caribou for thread and needles made of bone; the indigenous peoples of the American Plains and Canadian Prairies used sophisticated sewing methods to assemble tipi shelters. Sewing was combined with the weaving of plant leaves in Africa to create baskets, such as those made by Zulu weavers, who used thin strips of palm leaf as "thread" to stitch wider strips of palm leaf that had been woven into a coil. The weaving of cloth from natural fibers originated in the Middle East around 4000 BC, and perhaps earlier during the Neolithic Age, and the sewing of cloth accompanied this development.

During the Middle Ages, Europeans who could afford it employed seamstresses and tailors. The vital importance of sewing was indicated by the honorific position of "Lord Sewer" at many European coronations from the Middle Ages. An example was Robert Radcliffe, 1st Earl of Sussex who was appointed Lord Sewer at the coronation of Henry VIII of England in 1509. Sewing for the most part was a woman's occupation, and most sewing before the 19th century was practical. Clothing was an expensive investment for most people, and women had an important role in extending the longevity of items of clothing. Sewing was used for mending. Clothing that was faded would be turned inside-out so that it could continue to be worn, and sometimes had to be taken apart and reassembled to suit this purpose. Once clothing became worn or torn, it would be taken apart and the reusable cloth sewn together into new items of clothing, made into quilts, or otherwise put to practical use. The many steps involved in making clothing from scratch (weaving, pattern making, cutting, alterations, and so forth) meant that women often bartered their expertise in a particular skill with one another. Decorative needlework such as embroidery was a valued skill, and young women with the time and means would practice to build their skill in this area. From the Middle Ages to the 17th century, sewing tools such as needles, pins and pincushions were included in the trousseaus of many European brides. Sewing birds or sewing clamps were used as a third hand and were popular gifts for seamstresses in the 19th century.</p>
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
<div className='d-flex flex-row justify-content-between mt-4'><NewsItems></NewsItems></div>

           </div>
          
           
        </>
    );
}

export default Article;