import React from 'react'
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100%;
    height: 800px;

    .deg{
        width: 350px;
        margin-top: 20px;
    }

    .heading{
        width: 80%;
        margin-top: 30px;
    }

    .text{
        color: white;
        font-size: 25px;
        font-family: 'Poppins';

        @media (max-width: 900px) {
            font-size: 20px;
            margin-top: 5px;
        }
    }

    .blue{
        color: #7562E0;
        font-size: 40px;
        margin-top: 30px;
    }

`;

export default function Education() {
  return (
    <MainContainer className='fcfsc'>
     
        <div className="heading fs32">
            Education
        </div>

        <img src="/education/degree.png" alt="" className="deg" />
        
        <div className="text">
        Bachelor of Technology 
        </div>

        <div className="text">
        In 
        </div>

        <div className="text">
        Computer Science & Engineering
        </div>

        <div className="text">
         From
        </div>

        <div className="text">
            IEM, Kolkata
        </div>

        <div className="text blue">
            Final CGPA: 9.3
        </div>

        <div className="text blue">
        Awarded 6th Rank 
        </div>

       <div className="text">
       among all streams of Engineering
        </div> 

        <div className="text">
        in College 1st Year
        </div>

    </MainContainer>
  )
}
