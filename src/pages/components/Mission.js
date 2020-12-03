import React from "react";
import mission from "../../assets/images/mission.png";
import styled from "styled-components";



const Mission = () => {

    const MissionWrapper = styled.section `
   
      
              width: 100%;
              max-width: 1280px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-column-gap: 40px;
              margin-top: 200px;
              
                .text-about-container{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .title-container{
                      position: relative;
                          .title-frame {
                            position: absolute;
                            border: 4px solid #d4d5df;
                            width: 400px;
                            height: 60px;
                            right: 16%;
                            top: 30%;
                            z-index: -1;
                          }
                      h2{
                        font-size: 5em;
                        font-weight: 100;
                        color: ${props => props.theme.orange};
                      }
                    }
                    .inner-text{
                      max-width: 498px;
                      width: 100%;
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
                .about-image-container{
                  img {
                    width: 100%;
                    max-width: 600px;
                  }
                }
             }

`

    return (
        <MissionWrapper className="section-container">
            <div className="text-about-container">
                <div className="title-container">
                    <div className="title-frame"></div>
                    <h2>Notre mission</h2>

                </div>
                <div className="inner-text">
                    <p>Notre mission est de mettre toute notre expertise à votre service afin de mettre toutes les chances de votre coté pour trouver un emploi qui vous correspond !
                    </p>
                </div>
                <div className="call-to-action">
                    <button className="learn-more">
                        Découvrir notre méthode
                    </button>
                </div>
            </div>
            <div className="about-image-container">
                <img src={mission} alt="soyez audacieux"/>
            </div>

        </MissionWrapper>
    )
}

export default Mission;