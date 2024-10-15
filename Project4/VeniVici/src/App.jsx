import React, { useState } from 'react'
import './App.css'

function App() {
  const [imgSrc, setImgSrc] = useState(null)
  const [breedInfo, setBreedInfo] = useState(null)
  const [banned, setBanned] = useState(new Set())

  async function discoverDog() {
    try {
      const response = await fetch("https://api.thedogapi.com/v1/images/search?api_key=live_JiQwFSk3Hdr6hHl7vo7VkYFvEgyghk0R4KlnBVnyF7m3jTbCVgLQuEN08mi4aDL2")

      if(!response.ok)
        throw new Error(`Response failed with status code ${response.status}.`)

      const json = await response.json()
      setImgSrc(json[0].url)
      setBreedInfo(json[0].breeds[0])
      console.log(json)
    }
    catch (error){
      console.error(error.message)
    }
  }

  const addToBanned = (info) => {
    setBanned(new Set([...banned, info]))
  }

  return (
    <>
      <h1>Dog Island!</h1>
      <h2>Discover all different kinds of dogs!</h2>
      <div className='container'>
        <div>
          {imgSrc &&
            <div>
              {breedInfo && 
                <div className="breedInfoContainer">
                  {"life_span" in breedInfo && <p className='breedInfo' onClick={() => {addToBanned(breedInfo.life_span)}}>{breedInfo.life_span}</p>}
                  {"name" in breedInfo && <p className='breedInfo' onClick={() => {addToBanned(breedInfo.name)}}>{breedInfo.name}</p>}
                  {"breed_group" in breedInfo && <p className='breedInfo' onClick={() => {addToBanned(breedInfo.breed_group)}}>{breedInfo.breed_group}</p>}
                </div>
              }
              <img src={imgSrc} alt="A photo of a dog." height="400px" min-width="100%"/>
            </div>
          }
          <button className='discover' onClick={discoverDog}>Discover!</button>
        </div>
        <div>
          <h2>Banned Breeds</h2>
          <ul>
            {[...banned].map((breed, index) => <li key={index}>{breed}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
