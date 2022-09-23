import React from 'react'
import styled from 'styled-components'
import Navigator from './component/Navigator';

const MainNavContainer = styled.div`
    position: fixed;
    height: 60px;
    width: 100%;
    top: 0px;
    padding-left: 160px;
    padding-right: 160px;

    background: #181824;
    backdrop-filter: blur(5px);
    z-index: 2;


    @media (max-width: 900px) {
      padding-left: 20px;
      padding-right: 20px;
      justify-content: center;

      .name{
        display:none;
      }
    }
    
    color: white;

    .name{
      color: #7562E0;
      font-family: 'Poppins';

    }

`;

export default function Navbar({page,setPage,handleScroll}) {
  return (
    <MainNavContainer className='frsbc'>
      <div className="name">
        Md Humaid Husain
      </div>
    
      <Navigator page={page} setPage={setPage} handleScroll={handleScroll} />

    </MainNavContainer>
  )
}
