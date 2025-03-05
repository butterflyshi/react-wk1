import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div className="container">
        <div className="header">
          <h1>Vegetables</h1>
          <div className="header-right">
            <div className="icon">
              <img src="image/btn_fb.png"/>
              <img src="image/btn_ig.png"/>
            </div>
            <div className="icon-right">
              <h6>|</h6>
              <p className="login">LOGIN</p>
              <p className="join">JOIN</p>
            </div>
          </div>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#" className="nli-link">Home</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nli-link">About Us</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nli-link">Vegetables</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nli-link">Online</a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nli-link">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="content-area">
          <img src="image/img_main_pumpkin.png"/>

          <div className="JoJo">
            <div className="left-content">
              <div className="left-ti">
                <p className="small-title">Vegetables</p>
              </div>
              <div className="left-img">
                <img src="image/img_vegetables_carrot.png"/>
                <img src="image/img_vegetables_corn.png"/>
                <img src="image/img_vegetables_pepper.png"/>
              </div>
            </div>

            <div className="right-content">
              <div className="right-ti">
                <p className="small-title">Contact</p>
              </div>
              <div className="right-text">
                <p>For any questions or suggestions about Vegetables, Vegetables Club or your online order you can contact Vegetables Customer Service by phone, email or post and we'll be happy to help.</p>
                <hr />
                <p>E-mail:Vegetables@aaabbccc.com</p>
                <p>PHONE:+886-123-456-789</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <footer className="footer">
        <p>Copyrights 2017 Vegetables cise / Design by Vegetables</p>
      </footer>

    </div>
  )
}

export default App
