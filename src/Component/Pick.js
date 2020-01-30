import React from 'react';
import pick1 from '../Image/abstract-apple-art-black-and-white-434346.jpg';
import pick2 from '../Image/aperture-black-blur-brand-279906.jpg';
import pick3 from '../Image/apple-devices-cellphone-close-up-electronics-341523.jpg';
import pick4 from '../Image/attraction-auto-automobile-automotive-207555.jpg';
import pick5 from '../Image/beauty-product-in-pink-color-2720447.jpg';
import pick6 from '../Image/black-dslr-camera-on-white-surface-51383.jpg';
import pick7 from '../Image/bottles-on-green-and-brown-moss-3259584.jpg';
import pick8 from '../Image/caffeine-coffee-coffee-beans-roasted-585750.jpg';
import pick9 from '../Image/camera.jpg';
import pick10 from '../Image/cosmetik.jpg';
import pick11 from '../Image/drink.jpg';
import pick12 from '../Image/escada-perfume-bottle-on-table-724635.jpg';
import pick13 from '../Image/fashion.jpg';
import pick14 from '../Image/headphone.jpg';
import pick15 from '../Image/pair-of-beige-leather-open-toe-heeled-platform-shoes-on-1445696.jpg';
import pick16 from '../Image/pair-of-white-air-jordan-1-s-2385477.jpg';
import pick17 from '../Image/parfume.jpg';
import pick18 from '../Image/pepsi-cola-bottle-988954.jpg';
import pick19 from '../Image/phone.jpg';
import pick20 from '../Image/shoes.jpg';
import pick21 from '../Image/watch.jpg';
import LazyLoad from 'react-lazyload';
import Rating from 'react-rating';
import {IoIosStarOutline, IoIosStar} from 'react-icons/io';


class Pick extends React.Component {
    render () {
        return (
            <div>
                <div className='f-text'>
                    <p className='p-k'>
                        Just For You
                    </p>
                    <p className='p-l'>
                        Shop More
                    </p>
                </div>
                <div className='pop-i'>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick1} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick2} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                </div>
                <div className='pop-i'>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick3} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick4} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                </div>
                <div className='pop-i'>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick5} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick6} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                </div>
                <div className='pop-i'>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick7} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick8} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                </div>
                <div className='pop-i'>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick9} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick10} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                </div>
                <div className='pop-i'>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick11} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick12} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                </div>
                <div className='pop-i'>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick13} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick14} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                </div>
                <div className='pop-i'>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick15} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick16} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                </div>
                <div className='pop-i'>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick17} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick18} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                </div>
                <div className='pop-i'>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick19} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick20} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                </div>
                <div className='pop-i'>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick21} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                <div className='pop-2'>
                    <LazyLoad height='200' once={true}>
                    <img src={pick2} alt='pop' className='g-pop1'/>
                    </LazyLoad>
                    <p className='p-big'>Product Name</p>
                    <p className='harga'>$15.00</p>
                    <p className='diskon'><del>$30.00</del> -50%</p>
                    <Rating
                    emptySymbol={<IoIosStarOutline style={{color: '#FFDF00'}}/>}
                    fullSymbol={<IoIosStar style={{color: '#FFDF00'}}/>}
                    initialRating={4}
                    readonly
                    />
                </div>
                </div>
            </div>
        )
    }
}

export default Pick;