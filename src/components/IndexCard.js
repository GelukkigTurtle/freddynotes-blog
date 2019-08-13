import React from 'react'
import styled from 'styled-components';



const BContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  
    color: white;
    min-height: 50vh;
  
    font: {
      family: 'NanumSquareRound';
      size: 18px;
      weight: 800px;
      color: white;
    }
  
      & .img{
        & img{
          margin: 0;
        }
        & .img-circle{
          width: 150px;
          height: 150px;
          border-radius: 100%;
        }
      }
  
      & .name{
        color: white;
        margin: 2rem;
        
        font: {
          family: 'NanumSquareRound';
          size: 23px;
          weight: 800;
        }
      }
  
      & .title{
        min-width: 80%;
        text-align: center;
        border-top: 1px solid rgba(244, 244, 244, 0.8);
        border-bottom: 1px solid rgba(244, 244, 244, 0.8);
  
        margin-bottom: 1.25rem;
        padding: 0.75rem 0px;
      }
  
      & .sns{
        margin-bottom: 1.25rem;
      }
  
      & .menu{
        & .menuItem{
          display: inline-block;
          border: 1px solid rgba(244, 244, 244, 0.8);
          border-radius: 10px;
  
          margin: 5px;
  
          &:hover{
            box-shadow: $0px 0px 5px 1px #aaaaaa;
          }
  
          a {
            padding: 0.5rem 0.75rem;
          }
        }
      }
  
      & a{
        color: white;
        border: 0px;
      }
    }

    @media only screen and (max-width: 640px) {
        .HeaderContainer {
          flex-direction: column;
          justify-content: space-between;
          box-shadow: none;
          border-bottom: 1px solid #aaaaaa;
      
          padding: 0.7rem;
      
          height: $header-height + 1rem;
      
          font: {
            size: 15px;
          }
      
          .HeaderTitle {
            font: {
              size: 29px;
            }
          }
        }
      }
`;
const BCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #000;

    min-width: 500px;
    max-width: 700px;
    padding: 5rem 5rem;

    border: 1px solid rgba(244, 244, 244, 0);
    border-radius: 3px;
    box-shadow: $shadow;
`;

const LinkButton = styled.div`
    display: inline-block;
    padding: 0.75rem 1rem;
    border: 2px solid black;
    text-decoration: none;
    position: relative;
  
  
  .moveLink {
    padding: 0.3rem 1.2rem;
    margin: 0.5rem 0.4rem;
  
    border: 1px solid black;
    background: white;
  }
  
  .HeaderTitle {
    color: black;
  }
  
`;


const IndexCard = props => {
  return (
      <BContainer>
        <BCard>
          {/* Main Image */}
          <div className="img">
          <LinkButton to="/">
              <img
                className="img-circle"
                src="https://avatars0.githubusercontent.com/u/3178361?s=400&u=97329d07f2ba08f5c37455436cdc4ee1a5c35483&v=4"
                alt="MainImge"
              />
            </LinkButton>
          </div>
          {/* My Name */}
          <div className="name">Freddy Ayala</div>
          {/* Title */}
          <div className="title">Software Engineer</div>
          

        </BCard>
      </BContainer>
  )
}

export default IndexCard
