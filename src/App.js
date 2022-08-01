import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      

      
      <nav class="bg-gray-900 text-white p-4 drop-shadow-lg mb-10">
        <ul class="w-full max-w-screen-md">
          <li class="inline px-2 font-bold">
            <span>ReactJS SPA</span>
          </li>
          <li class="inline px-2">
            <a href="/" >Home</a>
          </li>
          <li class="inline px-2">
            <a href="/about" >About</a>
          </li>
        </ul>
      </nav>
        {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
     
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div class="flex items-center justify-center w-full max-w-screen-md">
      <p>Welcome to this example ReactJS Application</p>
    </div>
  );
}

function About() {
  return (
    <div class="flex items-center justify-center w-full max-w-screen-md">
      <p>This is just playing around to test writing a basic Single Page Application using ReactJS</p>
    </div>
  );
}


export default App;
