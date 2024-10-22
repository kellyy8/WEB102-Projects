import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [allCatData, setAllCatData] = useState(null)
  const [filteredCatData, setFilteredCatData] = useState(null)

  const [breedFilters, setBreedFilters] = useState(new Set())
  
  const [numBengals, setNumBengals] = useState(0)
  const [numAbyssinians, setNumAbyssinians] = useState(0)
  const [numSiamese, setNumSiamese] = useState(0)

  useEffect(() => {
    const fetchCatData = async () => {
      try{
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=24&breed_ids=beng,abys,siam&api_key=live_4mHL81FnurbqobEZjD6YZpFeKhtGD2tDgOts5lUQdH5DQIowiicW5BnCFIroRQB4')

        if(!response.ok){
          throw error(`Response failed with status code ${response.status}.`)}

        const json = await response.json()
        setAllCatData(json)
        setFilteredCatData(json)

        setNumBengals(json.filter(cat => cat.breeds[0].name === "Bengal").length)
        setNumAbyssinians(json.filter(cat => cat.breeds[0].name === "Abyssinian").length)
        setNumSiamese(json.filter(cat => cat.breeds[0].name === "Siamese").length)

        console.log(json)
      }
      catch (error){
        console.error(error.message)
      }
    }

    fetchCatData()
  }, [])

  useEffect(() => {
    if(breedFilters.size > 0){
      const filteredData = allCatData.filter(cat => breedFilters.has(cat.breeds[0].name))
      setFilteredCatData(filteredData)
    }
    else{
      setFilteredCatData(allCatData)
    }
  }, [breedFilters])

  const addBengalFilter = () => {
    const breedFiltersCopy = new Set(breedFilters)
    breedFiltersCopy.has("Bengal") ? breedFiltersCopy.delete("Bengal") : breedFiltersCopy.add("Bengal")
    setBreedFilters(breedFiltersCopy)
  }

  const addAbyssinianFilter = () => {
    const breedFiltersCopy = new Set(breedFilters)
    breedFiltersCopy.has("Abyssinian") ? breedFiltersCopy.delete("Abyssinian") : breedFiltersCopy.add("Abyssinian")
    setBreedFilters(breedFiltersCopy)
  }

  const addSiameseFilter = () => {
    const breedFiltersCopy = new Set(breedFilters)
    breedFiltersCopy.has("Siamese") ? breedFiltersCopy.delete("Siamese") : breedFiltersCopy.add("Siamese")
    setBreedFilters(breedFiltersCopy)
  }

  return (
    <div>
      <h1> Cat Island's Stats on Cats! </h1>

      <div className="stats"> 
        <h2> # of Bengal Cats: {numBengals} </h2>
        <h2> # of Abyssinian Cats: {numAbyssinians} </h2>
        <h2> # of Siamese Cats: {numSiamese} </h2>
      </div>

      <div className="filters">
        <p>Filter by breeds: </p>
        <button className={breedFilters.has("Bengal") ? "on" : "off"} onClick={addBengalFilter}>Bengal</button>
        <button className={breedFilters.has("Abyssinian") ? "on" : "off"} onClick={addAbyssinianFilter}>Abyssinian</button>
        <button className={breedFilters.has("Siamese") ? "on" : "off"} onClick={addSiameseFilter}>Siamese</button>
      </div>

      <div className="dataHeader">
        <p>Cat #:</p>
        <p>Breed Name</p>
        <p>Likes to be indoor?</p>
        <p>Origin</p>
      </div>

      {filteredCatData && filteredCatData.map((cat, index) => (
        <div key={index} className="catDataRow">
          <p>{index + 1}</p>
          <p>{cat.breeds[0].name}</p>
          <p>{cat.breeds[0].indoor ? "Yes" : "No"}</p>
          <p>{cat.breeds[0].origin}</p>
        </div>
      ))}
    </div>
  )
}

export default App
