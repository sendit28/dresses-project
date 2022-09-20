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
    li{
      transform: translateX(30px);
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
      <label htmlFor= "price">Price: </label>
      <p>{price}</p>
      <label htmlFor= "size">Size: </label>
      <p>{size}</p>
      <label htmlFor= "color">Color: </label>
      <p>{color}</p>
      <h5> DESCRIPTION: </h5>
        <p>{description}</p>
      <ul>
        <li>100% organic cotton fabric</li>
        <li>back button closure</li>
        <li>lining</li>
        <li>Fits true to size</li>
      </ul>
    </DressPrev>
  )
}

export default DressPreview