// App.js

import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Footer from './Footer';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* Your other components and content will go here */}
        <h1>Welcome to My Blog</h1>
        <p>This is a simple React blogging website.</p>
        <Post />
      </div>
      <Footer />
    </div>
  );
}

export default App;
