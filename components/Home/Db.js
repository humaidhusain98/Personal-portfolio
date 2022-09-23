import React from 'react'
import styled from  'styled-components';

const DbDiv =  styled.div`
    width: 100%;
    height: 250px;

    @media (max-width: 900px) {
       height: 500px;
       padding-top: 30px;
    }

    .heading{
        width: 80%;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .lang-img{
        height: 100px;
        cursor: pointer;
        transition-duration: 250ms;

        &:hover{
            transform: scale(1.1);
        }
    }

    .logo-cont-mobile{
        display: none;

        @media (max-width: 900px) {
            display: flex;
            gap: 30px;
            margin-top: 15px;
        }
    }

    .logo-cont{
        gap: 50px;
        margin-top: 35px;

        @media (max-width: 900px) {
            display: none;
        }
    }

`;

export default function Db() {
  return (
    <DbDiv className='fcfsc'>
        <div className="heading fs32">
            Databases Used
        </div>

        <div className="logo-cont frfsc">
            <img src="/db/mongodb.png" alt="" className='lang-img' />
            <img src="/db/mysql.png" alt="" className='lang-img' />
            <img src="/db/postgresql.png" alt="" className='lang-img' />
            <img src="/db/redis.png" alt="" className='lang-img' />
            <img src="/db/mariadb.png" alt="" className='lang-img' />
        </div>

        <div className="logo-cont-mobile frfsc">
            <img src="/db/mongodb.png" alt="" className='lang-img' />
            <img src="/db/mysql.png" alt="" className='lang-img' />
        </div>

        <div className="logo-cont-mobile frfsc">
            <img src="/db/postgresql.png" alt="" className='lang-img' />
        </div>

        <div className="logo-cont-mobile frfsc">
            <img src="/db/redis.png" alt="" className='lang-img' />
            <img src="/db/mariadb.png" alt="" className='lang-img' />
        </div>   

    </DbDiv>
  )
}
