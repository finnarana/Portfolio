
import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    
    return <><h1 id="miracles">No Miracles, </h1>
    
    <h2 id="mercy">No Mercy.</h2> 
    <p id="quote">"Life is what you make it. Invite positive energy, work towards your goals, improve your skills. Strive to be the best version of yourself in every form." - Rana</p>
    <img id = "regret" src= "/public/discipline.jpg" alt="img" className="myImg"/>
    <Link to="/about" id = "link">Click</Link></>
    
}