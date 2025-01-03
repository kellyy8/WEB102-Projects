import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './App.css'

function App() {
  const [allCatData, setAllCatData] = useState(null)
  const [filteredCatData, setFilteredCatData] = useState(null)

  const [breedFilters, setBreedFilters] = useState(new Set())
  
  const [numBengals, setNumBengals] = useState(0)
  const [numAbyssinians, setNumAbyssinians] = useState(0)
  const [numThailand, setNumThailand] = useState(0)

  const [searchTerm, setSearchTerm] = useState("")

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
        setNumThailand(json.filter(cat => cat.breeds[0].origin === "Thailand").length)
      }
      catch (error){
        console.error(error.message)
      }
    }

    fetchCatData()
  }, [])

  useEffect(() => {
    if(breedFilters.size > 0){
      const filteredData = allCatData.filter(cat => breedFilters.has(cat.breeds[0].name) || breedFilters.has(cat.breeds[0].origin))
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

  const addEgyptFilter = () => {
    const breedFiltersCopy = new Set(breedFilters)
    breedFiltersCopy.has("Egypt") ? breedFiltersCopy.delete("Egypt") : breedFiltersCopy.add("Egypt")
    setBreedFilters(breedFiltersCopy)
  }

  const addThailandFilter = () => {
    const breedFiltersCopy = new Set(breedFilters)
    breedFiltersCopy.has("Thailand") ? breedFiltersCopy.delete("Thailand") : breedFiltersCopy.add("Thailand")
    setBreedFilters(breedFiltersCopy)
  }

  const addUSFilter = () => {
    const breedFiltersCopy = new Set(breedFilters)
    breedFiltersCopy.has("United States") ? breedFiltersCopy.delete("United States") : breedFiltersCopy.add("United States")
    setBreedFilters(breedFiltersCopy)
  }

  const filterDataBySearch = () => {
    const filteredData = allCatData.filter(cat => cat.breeds[0].name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredCatData(filteredData)
  }

  return (
    <div>
      <h1> Cat Island's Stats on Cats! </h1>
      <h2> Explore the dashboard of different cats. </h2>
      <h2> Click on a row to learn more about the cat! </h2>
      <h3> At a glance, we can see that most Abyssinian cats are from Egypt,
          whereas Bengal cats are from the United States and Siamese cats are from Thailand.</h3>

      <br></br>
      <br></br>
      <br></br>

      <div className="stats"> 
        <h2> # of Bengal Cats: {numBengals} </h2>
        <h2> # of Abyssinian Cats: {numAbyssinians} </h2>
        <h2> # of Cats From Thailand: {numThailand} </h2>
      </div>
      
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search by a breed..."
          onChange={(e) => {setSearchTerm(e.target.value)}}
          />
        <button onClick={filterDataBySearch}>Search</button>
      </div>

      <div className="filters">
        <div className="filterCategory">
          <p>Filter by breeds: </p>
          <button className={breedFilters.has("Bengal") ? "on" : "off"} onClick={addBengalFilter}>Bengal</button>
          <button className={breedFilters.has("Abyssinian") ? "on" : "off"} onClick={addAbyssinianFilter}>Abyssinian</button>
          <button className={breedFilters.has("Siamese") ? "on" : "off"} onClick={addSiameseFilter}>Siamese</button>
        </div>
        <div className="filterCategory">
          <p>Filter by breeds: </p>
          <button className={breedFilters.has("Egypt") ? "on" : "off"} onClick={addEgyptFilter}>Egypt</button>
          <button className={breedFilters.has("Thailand") ? "on" : "off"} onClick={addThailandFilter}>Thailand</button>
          <button className={breedFilters.has("United States") ? "on" : "off"} onClick={addUSFilter}>United States</button>
        </div>
      </div>

      <div className="dataHeader">
        <p>Cat #:</p>
        <p>Breed Name</p>
        <p>Likes to be indoor?</p>
        <p>Origin</p>
      </div>

      {filteredCatData && filteredCatData.map((cat, index) => (
        <Link
          style={{ color: "White" }}
          to={`/catDetails/${cat.breeds[0].id}${index}`}
          key={cat.breeds[0].id+index}
        >
          <div key={index} className="catDataRow">
            <p>{index + 1}</p>
            <p>{cat.breeds[0].name}</p>
            <p>{cat.breeds[0].indoor ? "Yes" : "No"}</p>
            <p>{cat.breeds[0].origin}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default App
