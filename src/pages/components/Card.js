import React from "react";
import styled from 'styled-components';
import Leftquote from './../../assets/images/leftquote.png'
import Rightquote from './../../assets/images/right-quote.png'
const Card = () => {
    const CardWrapper = styled.section `
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;

      .section-title{
        h2 {
          font-family: "Abuget" , sans-serif;
          font-size: 100px;
          font-weight: 100;
          color: ${props => props.theme.orange};
          text-align:right;
          
        }
      }
      .card-wrapper {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
       
        position: relative;
        .left-quote {
          position: absolute;
          top: -21%;
          left: 5%;
        }
        .right-quote {
          position: absolute;
          bottom: -17%;
          right: 0;
        }
          
        }
        .card {
          width: 250px;
          height: 430px;
          display:flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          padding: 30px;
          
       
          &.first {
            background-color: #e8eef1;
          }
           &.second {
            background-color: #d4d5df;
          }
           &.third  {
            background-color: #e8eef1;
          }
          .text-wrapper {
            height: 200px;
            
          }
        }
      }
    

    `
    return (
        <CardWrapper class={"card-wrapper"}>
            <div className="section-title">
                <h2>Vous parlez de nous ! </h2>
            </div>
            <div className="card-wrapper">
                <img src={Leftquote} alt="" className="left-quote"/>
                <div className="card first">
                    <div className="text-card">
                        <p>
                            At omnihic iendam fugiatquia cuptatecerae quasimil ipiendus reperes sitatum reperum aut harum estota invero te est eum id exer!


                        </p>
                    </div>
                    <div className="signature">
                        <p>
                            Nisit acest harum sequot
                        </p>
                    </div>
                </div>
                <div className="card second">
                    <div className="text-card">
                        <p>
                            At omnihic iendam fugiatquia cuptatecerae quasimil ipiendus reperes sitatum reperum aut harum estota invero te est eum id exer!


                        </p>
                    </div>
                    <div className="signature">
                        <p>
                            Nisit acest harum sequot
                        </p>
                    </div>
                </div>
                <div className="card third">
                    <div className="text-card">
                        <p>
                            At omnihic iendam fugiatquia cuptatecerae quasimil ipiendus reperes sitatum reperum aut harum estota invero te est eum id exer!


                        </p>
                    </div>
                    <div className="signature">
                        <p>
                            Nisit acest harum sequot
                        </p>
                    </div>
                </div>

                <img src={Rightquote} alt="" className={"right-quote"}/>

            </div>
        </CardWrapper>

    )
}
export default Card