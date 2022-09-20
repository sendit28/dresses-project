import React from "react";
import DressCard from "./DressCard";
import styled from 'styled-components'


function DressList({ dresslist }) {
  const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: brown solid;
    padding: 50px;
    font-family: papyrus;
    margin: 25px 25px;
    background-color: beige;
  `
  const dresseslist = dresslist.map((dress) =>
    <DressCard id={dress.id} name={dress.name} style={dress.style} image={dress.image} price={dress.price} /> )

  return (
    <List>{dresseslist}</List>
  )
}

export default DressList