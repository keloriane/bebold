import React from "react";
import styled from "styled-components"
import employability from "./../../assets/images/employabilité.png"
import CV from "../components/Cv";
const Accompagnement = () => {

    const Accompagnement = styled.main `
        position: relative;
        header {
          width: 100vw;
          height: 50vh;
          background-image: url(${employability});
          background-size: cover;
          background-position: center;
        }
        .layer {
            background-color: rgba(38,46,95,0.3);
            width: 100%;
            max-width: 600px;
            height: 17%;
            position: absolute;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            bottom: 37%;
            left: 20%;
        }
          .text-wrapper {
            width: 400px;
            margin: auto;
            
          p {
          font-size: 1em;
          font-family: sans-serif;
          }
          }
          
        }
      
      `


    return (
        <Accompagnement>
            <header>

            </header>
            <div className="layer">
                <div className="text-wrapper">
                    <p>
                        Notre offre se compose de 4 thématiques. Nous discuterons ensemble lors d’un premier entretien gratuit des thématiques à aborder pour vous aider, en fonction de votre situation personnelle, à augmenter votre employabilité et vos chances d’obtenir un contrat !
                    </p>
                </div>
            </div>
            <CV />
        </Accompagnement>
    )
}
export default Accompagnement;