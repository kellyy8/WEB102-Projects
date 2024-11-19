import './App.css'
import './shared_variables.css'
import CreatePost from './CreatePost'
import Gallery from './Gallery'

function App() {

  return (
    <div>
      <h1>Crafty Cats</h1>

      {/** TODO: Sample content to test components. Update later. */}
      <CreatePost />
      <Gallery />
    </div>
  )
}

export default App
