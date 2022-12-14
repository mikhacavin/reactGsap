import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Images from './Images';
import {gsap, Power3} from 'gsap';

function App() {
  let tl = new gsap.timeline();
  let ease = new Power3.easeOut()
  return (
    <div className="hero">
      <Header timeline={tl} ease={ease} />
      <div className='contaniner'>
        <Content timeline = {tl} />
        <Images timeline={tl} ease={ease} />
      </div>
    </div>
  );
}

export default App;
