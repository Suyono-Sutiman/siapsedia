import React from 'react';
import cat1 from '../Image/camera.jpg';
import cat2 from '../Image/cosmetik.jpg';
import cat3 from '../Image/drink.jpg';
import cat4 from '../Image/fashion.jpg';
import cat5 from '../Image/headphone.jpg';
import cat6 from '../Image/parfume.jpg';
import cat7 from '../Image/phone.jpg';
import cat8 from '../Image/shoes.jpg';
import cat9 from '../Image/watch.jpg';

function Categories () {
    return (
        <div>
            <div className='f-text'>
                <p className='p-k'>
                    Categories
                </p>
                <p className='p-l'>
                    Shop More
                </p>
            </div>
            <div className='pop-i'>
                <div className='pop-2'>
                    <img src={cat1} alt='pop' className='g-pop1'/>
                    <p className='p-big'>Camera</p>    
                </div>
                <div className='pop-2'>
                    <img src={cat2} alt='pop' className='g-pop1'/>
                    <p className='p-big'>Cosmetics</p>    
                </div><div className='pop-2'>
                    <img src={cat3} alt='pop' className='g-pop1'/>
                    <p className='p-big'>Drink</p>    
                </div>
            </div>
            <div className='pop-i'>
                <div className='pop-2'>
                    <img src={cat4} alt='pop' className='g-pop1'/>
                    <p className='p-big'>Fashion</p>    
                </div>
                <div className='pop-2'>
                    <img src={cat5} alt='pop' className='g-pop1'/>
                    <p className='p-big'>Headphone</p>    
                </div><div className='pop-2'>
                    <img src={cat6} alt='pop' className='g-pop1'/>
                    <p className='p-big'>Parfume</p>    
                </div>
            </div>
            <div className='pop-i'>
                <div className='pop-2'>
                    <img src={cat7} alt='pop' className='g-pop1'/>
                    <p className='p-big'>Smartphone</p>    
                </div>
                <div className='pop-2'>
                    <img src={cat8} alt='pop' className='g-pop1'/>
                    <p className='p-big'>Shoes</p>    
                </div><div className='pop-2'>
                    <img src={cat9} alt='pop' className='g-pop1'/>
                    <p className='p-big'>Watch</p>    
                </div>
            </div>
        </div>    
    )
}

export default Categories;