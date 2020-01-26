import React from 'react';
import {MdApps, MdShoppingCart, MdAccountCircle, MdHome} from 'react-icons/md';
import './Footer.css';

function Footer () {
    return (
        <div className='foot'>
            <div className='logo'>
                <a href='#home'>
                <MdHome className='logo1'/>
                <p className='p-foot'>
                    Home
                </p>
                </a>
            </div>
            <div className='logo'>
            <a href='#home'>
                <MdApps className='logo1'/>
                <p className='p-foot'>
                    Categories
                </p>
            </a>
            </div>
            <div className='logo'>
            <a href='#home'>
                <MdShoppingCart className='logo1'/>
                <p className='p-foot'>
                    Cart
                </p>
            </a>
            </div>
            <div className='logo'>
            <a href='#home'>
                <MdAccountCircle className='logo1'/>
                <p className='p-foot'>
                    Account
                </p>
            </a>
            </div>
        </div>
    )
}
export default Footer;