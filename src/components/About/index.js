// Write your code here
import Header from '../Header'
import './index.css'

const About = props => {
  // eslint-disable-next-line
  const item = {props}
  return (
    <>
      <Header />
      <div className="home">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
          className="img2"
        />
      </div>
    </>
  )
}
export default About
