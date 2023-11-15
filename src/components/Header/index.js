// Write your code here
import {Component} from 'react'
import {Link, Redirect, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

class Header extends Component {
  //   state = {one: false}

  //   get1 = props => {
  //     const item = {props}
  //     return <Redirect to="/" />
  //   }

  close = () => <Redirect to="/" />

  render() {
    return (
      <div>
        <div className="one">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
              className="img1"
            />
          </Link>
          <Popup
            modal
            trigger={
              <button type="button" data-testid="hamburgerIconButton">
                {/* <h1>one</h1> */}
                <GiHamburgerMenu className="img1" />
              </button>
            }
            // position="center"
            className="popup-content"
          >
            <>
              <button
                className="one123"
                data-testid="closeButton"
                onClick={this.get1}
                type="button"
              >
                <Link to="/">
                  {/* <h1>one</h1> */}
                  <IoMdClose className="img1" onClick={this.close()} />
                </Link>
              </button>
              <ul>
                <div className="one13">
                  <Link to="/">
                    <li className="one12" onClick={this.close()}>
                      <AiFillHome className="img1" />
                      <h1>HOME</h1>
                    </li>
                  </Link>
                  <Link to="/about">
                    <li className="one12">
                      <BsInfoCircleFill
                        className="img1"
                        onClick={ this.close()}
                      />
                      <h1>ABOUT</h1>
                    </li>
                  </Link>
                </div>
              </ul>
            </>
          </Popup>
        </div>
        <hr />
      </div>
    )
  }
}
export default withRouter(Header)
