import React from 'react'
import H1, { LinkStyle } from './style/HeaderStyle'
import DivStyle from './style/ContainerStyle'
import ButtonStyle, { RedButton } from './style/ButonStyle'

const Home = () => {
  return (
    <DivStyle>
        <H1>This Header was created with styled components</H1>
        <LinkStyle href='#'>LinkStyle with a element</LinkStyle>
        <ButtonStyle>ButtonStyle-1</ButtonStyle>
        <ButtonStyle>ButtonStyle-2</ButtonStyle>
        <RedButton blocked >RedButton-1</RedButton>
        <RedButton>RedButton-2</RedButton>
    </DivStyle>
    
  )
}

export default Home