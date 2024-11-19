import './App.css'
import './shared_variables.css'
import PostCard from './PostCard'
import CreatePost from './CreatePost'

function App() {

  return (
    <div className="homeContainer">
      <h1>Crafty Cats</h1>

      {/** TODO: Sample content to test components. Update later. */}
      <PostCard title="Title" timestamp="11:11PM" upvotes={1}/>
      <CreatePost />
    </div>
  )
}

export default App
