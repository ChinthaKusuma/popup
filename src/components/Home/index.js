// Write your code here
import Header from '../Header'
import './index.css'

const Home = props => {
  // eslint-disable-next-line
  const item = {props}
  return (
    <>
      <Header />
      <div className="home">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="img2"
        />
      </div>
    </>
  )
}
export default Home
