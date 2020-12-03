import React from 'react';
import styled from "styled-components";
import BoostEmployability from "./../../assets/images/employabilité.png"
import leftArrow from './../../assets/images/left-arrow.png';
import rightArrow from './../../assets/images/right-arrow.png';

const Boost = () => {

    const BoostWrapper = styled.section `
      width: 100vw;
      height: 80vh;
      background-image:url(${BoostEmployability});
      background-size: cover;
      position: relative;
      .section-title {
        h2 {
          color: ${props => props.theme.orange};
          font-family: "Abuget" , sans-serif;
          font-size: 80px;
          text-align: center;
          font-weight: 100;
           text-shadow: 0 1px 0 #302e2e, 0px -5px 3px #302e2e, 0 3px 0 #302e2e, 0 4px 12px #302e2e, 0 5px 0 #302e2e, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
          
          
        }
      }
      .section-text-container {
        .text-wrapper {
          width: 470px;
          margin: auto;
          p {
            font-family: sans-serif;
            
          }
        }
        .call-to-action {
        width: 100%;
        max-width: 610px;
        margin: auto;
        
          button {
            background-color: lightgray;
            color: ${props => props.theme.orange};
            border: none;
            font-family: "Abuget" , sans-serif;
            font-weight: 100;
            font-size: 60px;
          }
        }
      }
     
`
    return (
        <BoostWrapper id={"boost"}>
            <div className="section-title">
                <h2>Boostez votre employabilité</h2>
            </div>
            <div className="section-text-container">
                <div className="text-wrapper">
                <p>
                    Notre offre se compose de 4 thématiques. Nous discuterons ensemble lors d’un premier entretien gratuit des thématiques à aborder pour vous aider, en fonction de votre situation personnelle, à augmenter votre employabilité et vos chances d’obtenir un contrat !
                </p>

                </div>
            <div className="call-to-action">
                <img src={leftArrow} alt=""/>
                <button>
                    Accéder à l'accompagnement
                </button>
                <img src={rightArrow} alt=""/>
            </div>
            </div>
            <div className="center-call-to-action absolute">
                <button>Contactez nous pour un entretien gratuit</button>
            </div>
        </BoostWrapper>
    )
}
export default Boost;