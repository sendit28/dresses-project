import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'


function DressPreview() {
  const [dress, setDress] = useState({})
  const { id } = useParams()
  const { name, style, image, price, size, color, description } = dress

  useEffect (() => {
    fetch(`http://localhost:4000/dresses/${id}`)
      .then(r => r.json())
      .then(data => setDress(data))
  }, [])


  return (
    <li>
      <h3>{name}</h3>
      <h4>{style}</h4>
      <img src={image} alt={name} />
      <p>{price}</p>
      <p>{size}</p>
      <p>{color}</p>
      <p>{description}</p>
    </li>
  )
}

export default DressPreview