import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CatDetail = () => {
    let params = useParams()
    const [fullDetails, setFullDetails] = useState(null)

    useEffect(() => {
        const getCatDetails = async () => {
          const details = await fetch('')
          const description = await fetch('')
      
          const detailsJson = await details.json()
          const descripJson = await description.json()
      
          console.log(detailsJson, descripJson)
        }
        
        getCatDetails().catch(console.error)
      }, [params.symbol])

    return (
        <div> Cat Details </div>
    )
}
  
export default CatDetail