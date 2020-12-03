import React from "react";
import styled from 'styled-components';
import audace from "../../assets/images/audace.png";

const CV = () => {
    const CvWrapper = styled.section `
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
                      height: 165px;
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
                    .inner-text-cadre {
                      background-color: #d4d5df;
                      h3 {
                        font-family: "Abuget" , serif;
                        font-size: 60px;
                        color: ${props => props.theme.orange};
                        font-weight: 100x;
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
    <CvWrapper>

        <div className="section-container">

            <div className="about-image-container">
                <img src={audace} alt="soyez audacieux"/>
            </div>
            <div className="text-about-container">
                <div className="title-container">
                    <div className="title-frame"></div>
                    <h2>CV et lettre de motivation</h2>

                </div>
                <div className="inner-text-cadre">
                    
                    <div className="text-wrapper">
                    <h3>Le saviez vous</h3>
                    <p>
                        Un recruteur met en moyenne une dizaine de seconde à analyser votre candidature. Ainsi, même si vous avez toutes les compétences nécessaires, un mauvais CV / lettre de motivation rejoindra la masse des candidatures refusées.
                    </p>

                    </div>
                </div>
                <div className="inner-text">
                 <p>Nous vous proposons : </p>
                    <ul>
                        <li>Une relecture complète de votre CV et lettre de motivation actuelle
                        </li>
                        <li>
                            Des conseils pour que votre candidature corresponde aux attentes des recruteurs

                        </li>
                        <li>
                            Une méthode pour pouvoir adapter votre candidature en fonction des offres d’emploi auxquelles vous postuler

                        </li>
                        <li>
                            Un feedback sur les modifications apportées à la suite de nos conseils
                        </li>
                    </ul>
                </div>
                <div className="call-to-action">
                    <button className="learn-more">
                        En savoir plus sur vous
                    </button>
                </div>
            </div>
        </div>

    </CvWrapper>
    )
}

export default CV;