import React, { useState } from 'react'
// import styled from 'styled-components'


function DressForm({ setDresslist }) {
  // make form with JSX, 
  // control the form with State
  // handle SubmitEvent, fetch
  // const Form = styled.form`
  //   font-family: papyrus;
    /* font-weight: bold; */
    /* padding-left: 15px;
  //   padding-top:30px; */
  // `

  const initialState = {
    name: "",
    style: "",
    image: "",
    price: "",
    size: "",
    color: "",
    description: "",
  }

  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:4000/dresses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r=> r.json())
      .then(data => setDresslist((dresslist) => [...dresslist, data]))
    
      // setFormData(initialState)
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor= "name">Name: </label>
      <input name="name" value={formData.name} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor= "style">Style: </label>
      <input name="style" value={formData.style} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor= "image">Image: </label>
      <input name="image" value={formData.image} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor= "price">Price: </label>
      <input name="price" value={formData.price} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor= "size">Size: </label>
      <input name="size" value={formData.size} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor= "color">Color: </label>
      <input name="color" value={formData.color} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor= "description">Description: </label>
      <input name="description" value={formData.description} onChange={handleChange} />
    </div>
    <button>Submit</button>
  </form>
  )
}

export default DressForm;
