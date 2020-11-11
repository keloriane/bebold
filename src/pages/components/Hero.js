import React from "react";
import rightgap from "./../../assets/images/arrow-up.png"
import arrowDow from "./../../assets/images/arrow-down.png";
import styled from "styled-components";

const Hero = () => {


    const GridContainer = styled.div `
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      height: 100%;
      width: 100%;

      .right-grid{
        grid-row-start: 2;
        grid-column-start:3;
        img{
          width: 250px;
        }
      }
      .main-title{
          grid-row-start: 2;
          grid-column-start: 2; 
          width: 350px;
          margin: 0 auto;
          h1{
            font-family: 'Abuget';
            font-size: 6em;
            color: ${props=> props.theme.orange};
          }
          
    
      }
      .arrow-down{
        grid-row-start: 3;
          grid-column-start: 2; 
          display: flex;
          align-items: flex-end;
          justify-content: center;
      }
`
     return (
         <div className="hero-bg">
             <div className="main-background">
                <GridContainer className="hero-container">
                    <div className="columns"></div>

                        <div className="main-title">
                        <h1>Faites le grand saut pour votre carrière</h1>

                        </div>
                        <div className="arrow-down">
                            <img src={arrowDow} alt="call be bold"/>
                        </div>

                    <div className="columns right-grid">

                            <img src={rightgap} alt="call be bold"/>
                    </div>
                </GridContainer>
             </div>
         </div>
     )
}
export default Hero;