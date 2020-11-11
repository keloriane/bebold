import React from "react";
import hero from "../../assets/images/background-home.png";
import styled from "styled-components";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {

    const HeaderWrapper = styled.header `
      width: 100vw;
      height: 100vh;
      nav{
        width: 50%;
        margin: 0 auto;
  
        ul{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            list-style: none;
            li{
              a{
                text-decoration: none;
                color: #282c34;
                font-size: 1em;
                &:hover{
                  color: orange;
                }
                img{
                  height: 50px;
                }
              }
            }
            
        }
        
      }
      .hero-bg{
        width: 100%;
        height: 100%;
        .main-background{
          background-image: url(${hero});
          background-size: cover;
          background-repeat: no-repeat;
          width: 90%;
          height: 80%;
          margin: 0 auto;
        }
      }
`
    return (
        <HeaderWrapper>
            <Nav />
            <Hero />
        </HeaderWrapper>
    )
}
export default Header;