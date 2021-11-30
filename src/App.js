import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

// Home
// Contact
// About Us
// Career
// Blog

function HomePage(){
  return (
    <div>
      Home Page
      <div>
        <a href="/about">About Page</a>
      </div>
      <div>
        <Link to="/about">About Page With Router</Link>
      </div>
    </div>
  )
}

function ContactPage(){
  return (
    <div>Contact Page</div>
  )
}

function AboutUsPage(){
  return (
    <div>About Us</div>
  )
}

function PetPage(props){
  const pets = [
    { id: "a234", name: "Oreo", species: "cat" },
    { id: "a345", name: "Luna", species: "dog" },
    { id: "b234", name: "Bell", species: "cat" }
  ];
  let choosenPet = pets.find((pet)=>{
    return pet.id === props.match.params.id;
  })

  return (
    <div>
      <h1>Pet Page</h1>
      
      <div>Name: {choosenPet.name}</div>
      <div>Species: {choosenPet.species}</div>
    </div>
  )
}

function App(){
  return(    
      <div>
        {/* Navbar */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        
        {/* Routes */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          
          <Route path="/about">
            <AboutUsPage />
          </Route>

          <Route path="/contact">
            <ContactPage />
          </Route>

          <Route path="/users/:id" component={PetPage} />
          {/* <Route path="/users/:id">
            <PetPage />
          </Route> */}
        </Switch>
      </div>
  )
}

export default App;
