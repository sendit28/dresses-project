import React from 'react'
import styled from 'styled-components'


function Home({ name }) {
    const Home = styled.div`
    font-family: papyrus;
    font-size: 18px;
    padding-left: 15px;
    padding-bottom: 5px;
    img{
      width: 500px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 20%;
    }
    p{
      margin-left: 50px;
      margin-right: 50px;
      margin-top: 20px;
      font-weight: bold;
    }
  `
  return (
    <Home>
        <p>Mila's Children Boutique specializes in handmade girl's dresses sizes 2T to 6.  Each are unique and made with all the love, care, and tenderness that come from home.  The idea started with Noni's (grandmother) second granddaughter, Una.  She loved dresses and well...Noni is a professional seamstress.  Let's make our own dresses using fabrics of our choice.  Let's use organic.  Let's create heirlooms that can be passed from generation to generation!  The styles are perfect for any occasion, holiday, or even everyday with sweater and boots.  Find what speaks to your little angels.</p>
        <img src= "https://bananarepublic.gap.com/webcontent/0029/279/199/cn29279199.jpg" name={name} />
    </Home>
  )
}

export default Home