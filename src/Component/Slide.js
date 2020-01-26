import React from 'react';
import {Carousel} from 'react-bootstrap';
import satu from '../Image/adult-beautiful-elegant-eyewear-291762.jpg';
import dua from '../Image/paper-bags-near-wall-749353.jpg';
import tiga from '../Image/two-women-walking-side-by-side-1426191.jpg';
import empat from '../Image/working-macbook-computer-keyboard-34577.jpg';
import './Slide.css'

class Slide extends React.Component {
    render () {
        return (
            <div className='slide'>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={satu}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={dua}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={tiga}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={empat}
                    alt="First slide"
                    />
                </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Slide;