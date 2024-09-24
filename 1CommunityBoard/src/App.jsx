import {React} from 'react'
import ReactDOM from 'react-dom'
import Card from './Card.jsx'
import './App.css'

const App = () => {
  return (
    <div className="homeContainer"> 
      <h1> Dance Styles </h1>

      <div className="cardContainer"> 
        <Card
          title="Jazz"
          src="../images/jazz.gif"
          url="https://en.wikipedia.org/wiki/Jazz_dance"
          info="Grew popular in the U.S. in the early 1900s."
          alt="Person performing jazz dance."
        />
        <Card
          title="Contemporary"
          src="../images/contemporary.gif"
          url="https://en.wikipedia.org/wiki/Contemporary_dance"
          info="Originated in the mid-20th century."
          alt="Person performing contemporary dance."
        />
        <Card
          title="Modern"
          src="../images/modern.gif"
          url="https://en.wikipedia.org/wiki/Modern_dance"
          info="Encapsulates many styles including ballet and folk."
          alt="Person performing modern dance."
        />
        <Card
          title="Ballet"
          src="../images/ballet.gif"
          url="https://en.wikipedia.org/wiki/Ballet"
          info="Roots in the Italian Renaissance, France, and Russia."
          alt="Person performing ballet."
        />
        <Card
          title="Tap"
          src="../images/tap.gif"
          url="https://en.wikipedia.org/wiki/Tap_dance"
          info="Uses special shoes to make different noises with the balls and heels of the shoes."
          alt="Person performing tap dance."
        />
        <Card
          title="Swing"
          src="../images/swing.gif"
          url="https://en.wikipedia.org/wiki/Swing_(dance)"
          info="The most popular swing dance is called the Lindy Hop."
          alt="Person performing swing dance."
        />
        <Card
          title="House"
          src="../images/house.gif"
          url="https://en.wikipedia.org/wiki/House_dance"
          info="A form of social dancing with roots in Chicago and New York."
          alt="Person performing house dance."
        />
        <Card
          title="Popping"
          src="../images/popping.gif"
          url="https://en.wikipedia.org/wiki/Popping"
          info="Also known as the 'robottin.'"
          alt="Person performing popping."
        />
        <Card
          title="Locking"
          src="../images/locking.gif"
          url="https://en.wikipedia.org/wiki/Locking_(dance)"
          info="Involves quick variance between tense and relaxed movements."
          alt="Person performing locking."
        />
        <Card
          title="Breakdance"
          src="../images/breakdance.gif"
          url="https://en.wikipedia.org/wiki/Breakdancing"
          info="Consists of the moves called 'toprock,' 'downrock', 'power moves', and 'freezes'."
          alt="Person performing breakdance."
        />  
      </div>    
    </div>
  )
}

export default App
