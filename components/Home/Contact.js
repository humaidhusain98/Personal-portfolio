import React from 'react'
import styled from 'styled-components';

const MainCont = styled.div`
    height: 400px;
    width: 100%;
    .heading{
        width: 80%;
        margin-top: 30px;
    }

    .icon-cont{
        gap: 50px;
        margin-top: 50px;
    }

    .social-icons{
        cursor: pointer;
        height: 100px;
        width: 100px;
        transition-duration: 500ms;
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
        }

        @media (max-width: 900px) {
            height: 50px;
            width: 50px;
        }
    }

    .text{
        margin-top: 40px;
    }

`;

export default function Contact() {

  const handleOnClick=(num)=>{
    if(num==0){
        window.open("https://github.com/humaidhusain98")
    }
     else if(num==1){
          window.open("https://www.instagram.com/humaidhusain/")
      }
      else if(num==2){
          window.open("https://www.linkedin.com/in/humaid-husain-178804180/");
      }
      else if(num==3){
          window.open("https://www.facebook.com/humaid.husain.9");
      }
  }

  return (
    <MainCont className='fcfsc'>
        <div className="heading fs32">Contact</div>    
        <div className="icon-cont frfsc">
            <img onClick={()=>{handleOnClick(0)}} src="/social/git.png" alt="" className="social-icons" />
            <img onClick={()=>{handleOnClick(1)}} src="/social/insta.png" alt="" className="social-icons" />
            <img onClick={()=>{handleOnClick(2)}} src="/social/linkedin.png" alt="" className="social-icons" />
            <img onClick={()=>{handleOnClick(3)}} src="/social/meta.png" alt="" className="social-icons" />
        </div>

        <div className="text">humdev101@gmail.com</div>
        <div className="text">+91-8420617036</div>
    </MainCont>
  )
}
