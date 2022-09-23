import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components';


const NavigatorDiv = styled.div`
    gap: 25px;
    cursor: pointer;
    background: transparent;

    @media (max-width: 900px) {
        gap: 8px;
        .btn{
            font-size: 12px;
        }

        .btn-selected{
            font-size: 12px;
        }
    }

    .btn{
        color: white;
        transition-duration: 1s;
        background: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .btn-selected{
        color: #7562E0;
        transition-duration: 1s;
        transform: scale(1.1);
        background: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }

`;

export default function Navigator({page,setPage,handleScroll}) {

  const router = useRouter();



  const handleBtnClick = (btn)=>{
    if(page!=btn){
        handleScroll(btn);
        setPage(btn);
    }    
  
  }


  return (
    
    <NavigatorDiv className='frfsc'>
        <button  onClick={()=>handleBtnClick(0)} className={page==0?"btn-selected":"btn"}>
            Home
        </button>
        <button onClick={()=>handleBtnClick(1)} className={page==1?"btn-selected":"btn"}>
            Mini Projects  
        </button>
        <button onClick={()=>handleBtnClick(2)} className={page==2?"btn-selected":"btn"}>
            Tech
        </button>    
        <button onClick={()=>handleBtnClick(3)} className={page==3?"btn-selected":"btn"}>
            Certifications         
        </button>
        <button onClick={()=>handleBtnClick(4)} className={page==4?"btn-selected":"btn"}>
            Contact         
        </button>
    </NavigatorDiv>
  )
}
