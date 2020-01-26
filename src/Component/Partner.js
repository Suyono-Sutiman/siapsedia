import React from 'react';
import {FaAmazon, FaEbay,} from 'react-icons/fa';
import {AiOutlineAlibaba, AiOutlinePercentage, AiOutlineAppstore} from 'react-icons/ai';
import './Partner.css';

function Partner () {
    return (
        <div className='part'>
            <div className='part1' >
            <a href='#home' className='as' >
                <FaAmazon className='fa-ico'/>
                <p className='p-part'>
                    Amazon
                </p>
            </a>
            </div>
            <div className='part1'>
            <a href='#home' className='as' >
                <FaEbay className='fa-ico'/>
                <p className='p-part'>
                    eBay
                </p>
            </a>
            </div>
            <div className='part1'>
            <a href='#home' className='as' >
                <AiOutlineAlibaba className='fa-ico'/>
                <p className='p-part'>
                    Alibaba
                </p>
            </a>
            </div>
            <div className='part1'>
            <a href='#home' className='as' >
                 <AiOutlinePercentage className='fa-ico'/>
                <p className='p-part'>
                    Vouchers
                </p>
            </a>
            </div>
            <div className='part1'>
            <a href='#home' className='as' >
                <AiOutlineAppstore className='fa-ico'/>
                <p className='p-part'>
                    Categories
                </p>
            </a>
            </div>
        </div>
    )
}

export default Partner;