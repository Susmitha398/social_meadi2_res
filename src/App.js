// App.js
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Home from './Home';         
import About from './About';       
import NewPost from './NewPost';  
import PostPage from './PostPage'; 
import Post from './Post';
import Missing from './Missing'; // Import the Missing component
import PostLayout from './PostLayout'; // Import the PostLayout component
import './App.css';


function App() {
  
    return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/postpage">Post Page</Link></li>
        </ul>
      </nav>
    
      
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Use PostLayout for nested routes */}
        <Route path="/postpage" element={<PostLayout />}>
          <Route path="newpost" element={<NewPost />} />
          <Route path=":id" element={<Post />} />
        </Route>

        {/* Catch all undefined routes */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
