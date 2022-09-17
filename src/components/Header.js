import React from 'react'
import styled from 'styled-components'

function Header() {
  const Head = styled.div`
    font-family: papyrus;
    font-size: 36px;
    font-weight: bold;
    padding: 30px;
    text-align: center;
    text-decoration: underline;
  `
  
  return (
    <Head>Mila's Children Boutique</Head>
  )
}

export default Header