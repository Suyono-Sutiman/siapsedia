import React from 'react';
import {MdApps, MdShoppingCart, MdAccountCircle, MdHome} from 'react-icons/md';
import './Footer.css';
import classnames from "classnames";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
      }
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
      handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };
    
    render () {
        return (
            <div className={classnames('foot', {'foot--hidden': !this.state.visible})}>
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
}
export default Footer;