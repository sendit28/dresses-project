import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom"

function DressCard({ id, name, style, image, price }) {
  const Card = styled.div`
    img{
      width: 300px;
    }
    div{
      margin-bottom: 20px;
    }
    p{
      margin-bottom: 20px;
    } 
  `
  let history = useHistory()
   
  function handleClick() {
    history.push(`/dresses/${id}`)
  }
  
  return (
    <Card>
      <h3>{name}</h3>
      <h4>{style}</h4>
      <img src={image} alt={name} onClick={handleClick} />
      <p>{price}</p>
    </Card>
  )
}

export default DressCard