import './Home.css'
import './shared_variables.css'
import CreatePost from './CreatePost'
import Gallery from './Gallery'

const Home = () => {

  return (
    <div>
      <h1>Crafty Cats</h1>

      {/** TODO: Sample content to test components. Update later. */}
      <CreatePost />
      <Gallery />
    </div>
  )
}

export default Home
