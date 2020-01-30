import React from 'react';
import './Amall.css'
import amal1 from '../Image/abstract-apple-art-black-and-white-434346.jpg';
import amal2 from '../Image/attraction-auto-automobile-automotive-207555.jpg';
import amal3 from '../Image/escada-perfume-bottle-on-table-724635.jpg';
import amal4 from '../Image/pair-of-white-air-jordan-1-s-2385477.jpg';
import amal5 from '../Image/pepsi-cola-bottle-988954.jpg';
import {FaAmazon, FaEbay} from 'react-icons/fa';
import {AiOutlineAlibaba, AiFillTaobaoSquare, AiOutlineApple} from 'react-icons/ai';
import LazyLoad from 'react-lazyload';

class Amall extends React.Component {
    render () {
        return (
            <div className='amall'>
            <div className='f-text'>
            <p className='p-amall'>
                Mall
            </p>
            <p className='p-l'>
                Shop More
            </p>
            </div>
            <div className='scroll-amal'>
                <div className='gmb-am'>
                <LazyLoad height='200'>
                    <img src={amal1} alt='siji' className='sc-img-amal'/>
                </LazyLoad>
                    <div>
                    <AiOutlineApple className='famal'/>
                    </div>
                    <p className='p-siji-amal'>Apple</p>
                    <p className='p-loro-amal'>Think Different</p>
                </div>
                <div className='gmb-am'>
                <LazyLoad height='200'>
                    <img src={amal2} alt='siji' className='sc-img-amal'/>
                </LazyLoad>
                    <div>
                    <FaEbay className='famal'/>
                    </div>
                    <p className='p-siji-amal'>eBay</p>
                    <p className='p-loro-amal'>Buy it, sell it</p>
                </div>
                <div className='gmb-am'>
                <LazyLoad height='200'>
                    <img src={amal3} alt='siji' className='sc-img-amal'/>
                </LazyLoad>
                    <div>
                    <AiOutlineAlibaba className='famal'/>
                    </div>
                    <p className='p-siji-amal'>Alibaba</p>
                    <p className='p-loro-amal'>Ready for more</p>
                </div>
                <div className='gmb-am'>
                <LazyLoad height='200'>
                    <img src={amal4} alt='siji' className='sc-img-amal'/>
                </LazyLoad>
                    <div>
                    <AiFillTaobaoSquare className='famal'/>
                    </div>
                    <p className='p-siji-amal'>Taobao</p>
                    <p className='p-loro-amal'>Capture different</p>
                </div>
                <div className='gmb-am'>
                <LazyLoad height='200'>
                    <img src={amal5} alt='siji' className='sc-img-amal'/>
                </LazyLoad>
                    <div>
                    <FaAmazon className='famal'/>
                    </div>
                    <p className='p-siji-amal'>Amazon</p>
                    <p className='p-loro-amal'>You Shop, Amazon Gives</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Amall;