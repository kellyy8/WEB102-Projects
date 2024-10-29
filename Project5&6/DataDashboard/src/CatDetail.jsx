import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CatDetail = () => {
    let params = useParams()
    const [img, setImg] = useState('')
    const [description, setDescription] = useState([])

    useEffect(() => {
      const getCatDetails = async () => {
        // Store the breed id into param.symbol to use to fetch breed and image of cat.
        const details = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${params.symbol}`)
        // Get descriptions of all breeds.
        const description = await fetch('https://api.thecatapi.com/v1/breeds')

        const detailsJson = await details.json()
        const descripJson = await description.json()

        setImg(detailsJson[0].url) // Store image url of the cat.
  
        for(let i = 0; i < descripJson.length; i++){  // Store description of breed with matching breed id.
          if(descripJson[i].id === params.symbol){
            setDescription(descripJson[i])
            break
          }
        }
      }
        
      getCatDetails().catch(console.error)
    }, [params.symbol])

    return (
      <div>
        <h1> Cat Details </h1>
        <img src={img} height="300px" min-with="100%" title="Image of a cat of described breed."/>
        <h2> Breed: {description.name} </h2>
        <p> <span style={{fontWeight: "bolder"}}> Description: </span> {description.description} </p>
      </div>
    )
}

export default CatDetail