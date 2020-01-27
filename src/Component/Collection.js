import React from 'react';
import './Collection.css';
import col1 from '../Image/aperture-black-blur-brand-279906.jpg';
import col2 from '../Image/apple-devices-cellphone-close-up-electronics-341523.jpg';
import col3 from '../Image/beauty-product-in-pink-color-2720447.jpg';
import col4 from '../Image/caffeine-coffee-coffee-beans-roasted-585750.jpg';
import col5 from '../Image/pair-of-beige-leather-open-toe-heeled-platform-shoes-on-1445696.jpg';
import col6 from '../Image/black-dslr-camera-on-white-surface-51383.jpg';

function Collection () {
    return (
        <div className='collect'>
            <div className='f-text'>
            <p className='p-amall'>
                Collection
            </p>
            <p className='p-l'>
                Shop More
            </p>
            </div>
            <div className='scroll-img'>
                <div className='gmb'>
                    <img src={col1} alt='siji' className='sc-img'/>
                    <p className='p-siji'>Be Ready!!</p>
                    <p className='p-loro'>135 Product</p>
                </div>
                <div className='gmb'>
                    <img src={col2} alt='siji' className='sc-img'/>
                    <p className='p-siji'>Get Smart!!</p>
                    <p className='p-loro'>1684 Product</p>
                </div>
                <div className='gmb'>
                    <img src={col3} alt='siji' className='sc-img'/>
                    <p className='p-siji'>More Beauty!!</p>
                    <p className='p-loro'>954 Product</p>
                </div>
                <div className='gmb'>
                    <img src={col4} alt='siji' className='sc-img'/>
                    <p className='p-siji'>Refresh Your Mind!!</p>
                    <p className='p-loro'>574 Product</p>
                </div>
                <div className='gmb'>
                    <img src={col5} alt='siji' className='sc-img'/>
                    <p className='p-siji'>Stylish Look!!</p>
                    <p className='p-loro'>744 Product</p>
                </div>
                <div className='gmb'>
                    <img src={col6} alt='siji' className='sc-img'/>
                    <p className='p-siji'>Pro Gear!!</p>
                    <p className='p-loro'>894 Product</p>
                </div>
            </div>
        </div>
    )
}

export default Collection;