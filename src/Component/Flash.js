import React from 'react';
import './Flash.css';
import promo1 from '../Image/paper-bags-near-wall-749353.jpg';
import promo2 from '../Image/bottles-on-green-and-brown-moss-3259584.jpg';
import promo3 from '../Image/aperture-black-blur-brand-279906.jpg';
import promo4 from '../Image/beauty-product-in-pink-color-2720447.jpg';

class Flash extends React.Component {
    state = {
        hours: 12,
        minutes: 0,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes, hours } = this.state
            
            if (seconds > 0) {
                this.setState(({seconds}) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        clearInterval(this.myInterval)
                    } else  this.setState (({hours}) => ({
                        hours: hours - 1,
                        minutes: 60
                    }))
                } else  this.setState (({minutes}) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render () {
        const { minutes, seconds, hours } = this.state
        return (
            <div className='flash'>
                <div className='f-text'>
                    <p className='p-k'>
                        Flash Sale
                    </p>
                    <p className='p-l'>
                        Shop More
                    </p>
                </div>
                {seconds===0&&minutes===0&&hours===0?
                <div className='timer'>
                    <h2>Time Up</h2>
                </div>
                :
                <div className='timer'>
                <p className='p-timer'>Ending in</p>
                    <div className='tick' >{hours}</div>
                    <div className='tick' >{minutes}</div> 
                    <div className='tick'>{seconds}</div>   
                </div>
                }
                <div className='promo'>
                    <div className='promo-k'>
                        <img src={promo1} alt='promo' className='g-promo'/>
                        <p className='harga'>$15.00</p>
                        <p className='diskon'><del>$30.00</del> -50%</p>
                    </div>
                    <div className='promo-k'>
                        <div className='promo-l'>
                            <div className='promo-l-1'>
                                <img src={promo2} alt='promo' className='g-promo1'/>
                                <div>
                                    <p className='harga'>$15.00</p>
                                    <p className='diskon'><del>$30.00</del> -50%</p>
                                </div>
                            </div>
                            <div className='promo-l-1'>
                                <img src={promo3} alt='promo' className='g-promo1'/>
                                <div>
                                    <p className='harga'>$15.00</p>
                                    <p className='diskon'><del>$30.00</del> -50%</p>
                                </div>
                            </div>
                            <div className='promo-l-1'>
                                <img src={promo4} alt='promo' className='g-promo1'/>
                                <div>
                                    <p className='harga'>$15.00</p>
                                    <p className='diskon'><del>$30.00</del> -50%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Flash;