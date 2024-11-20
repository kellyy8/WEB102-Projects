import './Home.css'
import './shared_variables.css'
import logo from './images/logo.png'

const Home = () => {
  return (
    <div>
      <h1>Crafty Cats</h1>
      <p className="description"> This is a place for everyone to share their favorite crafts!</p>
      <p className="description"> Click on the Gallery tab to view all the posts.</p>
      <img src={logo} height="400px" alt='Latte art of a cat in a coffee cup. Created with Canva.'/>
    </div>
  )
}

export default Home
