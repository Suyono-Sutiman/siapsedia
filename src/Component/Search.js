import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import {IoIosSearch} from 'react-icons/io';
import './Search.css';

class Search extends React.Component {
    state = {
        background: ''
      }
    
      listenScrollEvent = e => {
        if (window.scrollY > 40) {
          this.setState({background: 'linear-gradient(to right,#003e52 0,#003e52 25%,#196a80 75%,#1a9cb7 100%)'})
        } else {
          this.setState({background: ''})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render () {
        return (
            <div className='ser' style={{background: this.state.background}} >
            <InputGroup className="inp1">
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