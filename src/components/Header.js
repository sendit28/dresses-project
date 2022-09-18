import React from 'react'
import styled from 'styled-components'

function Header() {
  const Head = styled.div`
    font-family: papyrus;
    font-size: 42px;
    font-weight: bold;
    padding: 20px;
    text-align: center;
    text-decoration: underline;
  `
  
  return (
    <Head>Mila's Children Boutique</Head>
  )
}

export default Header