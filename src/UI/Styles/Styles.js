import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit ,minmax(350px , 1fr));
  grid-gap: 15px;
  justify-items: center;
  margin: 90px 0;
`

export const NoItems = styled.div`
  margin: 100px auto;
  text-align: center;
  
  & h3 {
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    margin: 10px 0;
  }
    `

export const Card = styled.div`
  max-width: 300px;
  margin-top: 15px;
    `

export const CardImgWrapper = styled.div`
  position: relative;
  z-index: 1;
`

export const CardImg= styled.img`
  width: 300px;
  height: 450px;
`

export const CardIconStar = styled.span`
  position: absolute;
  top: 430px;
  left: 281px;
`
