import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import {IoIosSearch, IoMdCart} from 'react-icons/io';
import logo from '../Image/favicon.png'
import './Search.css';

class Search extends React.Component {
    state = {
        background: '',
        opacity: '',
        boxShadow: '0 0 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24)',
        display: ''
      }
    
      listenScrollEvent = e => {
        if (window.scrollY > 40) {
          this.setState({
            background: 'linear-gradient(to right,#003e52 0,#003e52 25%,#196a80 75%,#1a9cb7 100%)',
            transition: 'opacity 0.8s ease-in-out',
            opacity: '1',
            boxShadow: ''})
        } else {
          this.setState({
            background: '',
            opacity: '0',
            boxShadow:'0 0 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24)'
          })
        }
        if (window.scrollY > 1500) {
          this.setState ({
            display: 'none'
          })
        }
        if (window.scrollY < 1500) {
          this.setState ({
            display: ''
          })
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render () {
        return (
          <div className='ser'>
            <div className='tp-d' style={{display: this.state.display}} >
              <p className='tp'>Save More On App</p>
              <p className='tp'>Sell On SiapSedia</p>
              <p className='tp'>Customer Care</p>
              <p className='tp'>Track My Order</p>
              <p className='tp'>Login</p>
              <p className='tp'>Sign Up</p>
            </div>
            <div className='des'>
              <img src={logo} alt='logo' className='lo'/>
              <p className='judul'>SiapSedia</p>
              <div className="search-container">
                <form>
                  <input type="text" placeholder="Search.." name="search"/>
                  <button type="submit"><IoIosSearch/></button>
                </form>
              </div>
              <IoMdCart className='cart'/>
            </div>
            <div style={{
                background: this.state.background,
                transition: this.state.transition,
                opacity: this.state.opacity
                }}
                className='d-bg'>
            </div>
            <InputGroup className="inp1" style={{boxShadow: this.state.boxShadow}} >
                <InputGroup.Prepend>
                <InputGroup.Text id="lop"><IoIosSearch/></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Search in SerbaSedia"
                aria-label="Search in SerbaSedia"
                aria-describedby="basic-addon1"
                className='fom'
                />
            </InputGroup>
          </div>
        )
    }
}

export default Search;