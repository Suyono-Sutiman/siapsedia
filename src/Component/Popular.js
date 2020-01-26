import React from 'react';
import './Popular.css';
import pop1 from '../Image/black-dslr-camera-on-white-surface-51383.jpg';
import pop2 from '../Image/caffeine-coffee-coffee-beans-roasted-585750.jpg';
import pop3 from '../Image/pair-of-beige-leather-open-toe-heeled-platform-shoes-on-1445696.jpg';
import pop4 from '../Image/apple-devices-cellphone-close-up-electronics-341523.jpg';

class Popular extends React.Component {
    render () {
        return (
            <div className='pop'>
                <p className='p-pop'>Most Popular</p>
                <div className='pop-i'>
                    <div className='pop-2'>
                        <div className='pop-3'>
                            <div>
                                <p className='p-big'>Camera</p>
                                <p className='p-sml'>53 Favourite</p>
                            </div>
                            <img src={pop1} alt='pop' className='g-pop'/>
                        </div>
                    </div>
                    <div className='pop-2'>
                        <div className='pop-3'>
                            <div>
                                <p className='p-big'>Coffee</p>
                                <p className='p-sml'>163 Favourite</p>
                            </div>
                            <img src={pop2} alt='pop' className='g-pop'/>
                        </div>
                    </div>
                </div>
                <div className='pop-i'>
                    <div className='pop-2'>
                        <div className='pop-3'>
                            <div>
                                <p className='p-big'>Shoes</p>
                                <p className='p-sml'>249 Favourite</p>
                            </div>
                            <img src={pop3} alt='pop' className='g-pop'/>
                        </div>
                    </div>
                    <div className='pop-2'>
                        <div className='pop-3'>
                            <div>
                                <p className='p-big'>SmartPhone</p>
                                <p className='p-sml'>558 Favourite</p>
                            </div>
                            <img src={pop4} alt='pop' className='g-pop'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Popular;