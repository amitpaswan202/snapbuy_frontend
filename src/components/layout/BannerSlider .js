import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {sliderItems} from '../../data'
import { mobile } from '../../responsive'


const Container =styled.div`
width:137%;
height:100vh;
display:flex;
margin-left: -207px;
position:relative;
overflow:hidden;
${mobile({ display: "none" })}
`
const Arrow =styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=> props.direction ==="left" && "10px"};
right:${props=> props.direction ==="right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper =styled.div`
 height:100%;
 display:flex;
 transition: all 1.5s ease;
 transform:translate(${(props) => props.slideIndex * -100}vw);
 `

 const Slide =styled.div` 
 width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color:#${props=>props.bg};
 `
 const ImgContainer =styled.div`
 height:100%;
 flex:1;`
 const InfoContainer =styled.div`flex:1;

 padding:50px;`
 const Image=styled.img`
 height:100%`

 const Title = styled.h1`
 font-size:40px;
`;

const Desc = styled.p`
 margin: 50px 0px;
 font-size: 20px;
 font-weight: 500;
 letter-spacing: 3px;
`;

const Button = styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 cursor: pointer;
`;

const BannerSlider  = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
      if (direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
  }
  return (
    <Container>
    <Arrow direction="left" onClick={() => handleClick("left")}>
       <ArrowLeftOutlined/>
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
       {sliderItems.map((items) => (
       <Slide bg={items.bg} key={items.id} >
       <ImgContainer>
         <Image src={items.img}/>
         
       </ImgContainer>
       <InfoContainer>
         <Title>{items.title}</Title>
         <Desc>{items.desc}</Desc>
         
         {/* <Button><Link to={`/search/${items.title}`}>SHOP NOW</Link></Button> */}
       </InfoContainer>
      
       </Slide>
      ) )}
       
    
    </Wrapper>
    <Arrow direction="right" onClick={() => handleClick("right")}>
       <ArrowRightOutlined/>
    </Arrow>

   </Container>
  )
}

export default BannerSlider 