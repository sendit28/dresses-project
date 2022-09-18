import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'


function DressPreview() {
  const DressPrev = styled.div`
    img{
      width: 500px;
      float: left; 
      margin: 15px 15px 15px 15px
    }
    div{
      margin-bottom: 20px;
    }
    h3{
      font-size: 36px;
    }
    h4{
      font-size: 32px;
    }
    p{
      font-size: 22px;
    }
    h5{
      font-size: 22px;
    }
  `
  const [dress, setDress] = useState({})
  const { id } = useParams()
  const { name, style, image, price, size, color, description } = dress

  useEffect (() => {
    fetch(`http://localhost:4000/dresses/${id}`)
      .then(r => r.json())
      .then(data => setDress(data))
  }, [])


  return (
    <DressPrev>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{style}</h4>
      {/* <img src={image} alt={name} /> */}
      <p>{price}</p>
      <p>{size}</p>
      <p>{color}</p>
      <h5> DESCRIPTION: </h5>
        <p>{description}</p>
    </DressPrev>
  )
}

export default DressPreview