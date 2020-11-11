import React from "react";
import audace from "../../assets/images/audace.png";
import styled from "styled-components";


const Mission = () => {

    const MissionWrapper = styled.section `
              width: 100%;
             max-width: 1280px;
             margin: 0 auto;
   
             .section-container{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 40px;
                width: 100%;
              
                .about-image-container{
                  img {
                    width: 100%;
                    max-width: 600px;
                  }
                }
                .text-about-container{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .title-container{
                      position: relative;
                          .title-frame {
                            position: absolute;
                            border: 7px solid #d4d5df;
                            width: 400px;
                            height: 60px;
                            right: 16%;
                            top: 30%;
                            z-index: -1;
                          }
                      h2{
                        font-size: 5em;
                        
                        color: ${props => props.theme.orange};
                      }
                    }
                    .inner-text{
                      width: 350px;
                      p{
                        font-size: 1.1em;
                        text-align: left;
                        font-family: 'Dino', sans-serif;
                        line-height: 22px;
                        
                      }
                    }
                    .call-to-action{
                      .learn-more{
                      font-family: 'Abuget';
                      color: ${props => props.theme.orange};
                      font-size: 3rem;
                      background: none;
                      border: none;
                      
                      }
                      
                    }
                }
             }

`

    return (
        <MissionWrapper className="section-container">
            <div className="text-about-container">
                <div className="title-container">
                    <div className="title-frame"></div>
                    <h2>Soyez audacieux</h2>

                </div>
                <div className="inner-text">
                    <p>Le marché de l’emploi est plus que jamais lieu de concurrence, faire la différence est donc
                        primordiale pour décrocher le plus rapidement possible un emploi à hauteur de vos ambitions.
                        <br/>
                        <br/>
                        Chez Be Bold, nous souhaitons contribuer au développement de votre carrière et vous donner
                        les moyens d’atteindre vos objectifs professionnels !
                    </p>
                </div>
                <div className="call-to-action">
                    <button className="learn-more">
                        En savoir plus sur vous
                    </button>
                </div>
            </div>
            <div className="about-image-container">
                <img src={audace} alt="soyez audacieux"/>
            </div>

        </MissionWrapper>
    )
}

export default Mission;