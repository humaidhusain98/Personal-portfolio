import React from 'react'
import styled from 'styled-components';

const IntroDiv = styled.div`
    height: 700px;
    width: 100%;
    max-width: 1700px;    
    
    .mobile-pic{
        display: none;
    }



    .sub-div{
        margin-top: 0px;
        width: 80%;
        
        .hello{
            margin-top: 150px;
        }

        .name{
            
        }

        .desc{
            letter-spacing: 1px;
            width: 850px;
        }

        .btn-container{
            margin-top: 30px;
            gap: 20px;

            .view-git{
                background: #7562E0;
                border-radius: 8px;
                width: 160px;
                height: 48px;
                color: white;
                outline: none;
                border: none;
            }

            .projects{
                width: 159px;
                height: 48px;
                border: 2px solid #7562E0;
                border-radius: 8px;
                color: white;
                background: none;
             
            }
        }
    }

    .left{
        width: 50%;
        height: 400px;
    }

    .right{
        width: 40%;
        height: 400px;

        .profile-img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 4px solid #7562E0;
        }
    }


    @media (max-width: 900px) {

        height: 1080px;

        .mobile-pic{
            display: flex;
            margin-top: 30px;
            .mobile-profile{
                width: 200px;
                height: 200px;
                border-radius: 50%;
                border: 4px solid #7562E0;;
            }

        }


    .block{
        height: 30px;
        margin-top: 10px;
    }

        .sub-div{
            margin-top: 30px;
            width: 90%;
            flex-direction: column;

            .hello{
                margin-top: 20px;
                font-size: 20px;
            }

            .name{
                font-size: 30px;
                line-height: 50px;
            }

            .desc{
                letter-spacing: 0.8px;
                width: 100%;
            }
        }

        .left{
            width: 100%;
            height: 300px;
        }

        .right{
            display: none;
        }
        
    }


`;

export default function Intro() {
  return (
    <IntroDiv className='fcfsc '>
        <div className="mobile-pic">
             <img src="/dp.jpg" className='mobile-profile' />
        </div>

        <div className="sub-div frsbc">
            <div className="left fcfsfs">
               <div className="hello fs32">Hello, i'm</div>
               <div className="name fs52">Md Humaid Husain</div>
               <div className="desc">
               A Computer Science Engineer, an avid thinker, a Problem Solver and a highly skilled Developer who has worked on all the Latest Technologies. I have been coding in Java since High School and posses strong OOPs skills. I have 1+ years of Professional Experience mostly in the Blockchain Industry where I have worked as a web3 Frontend Developer integrating Smart Contracts and building DApps. <br /> <br />
                I have developed backends in Java, Python and Javascript/TypeScript using Frameworks like Spring Boot, Django , Flask and Express.js. I have used almost all the Databases used today like MySQl, MongoDB, PostGreSQL, Redis and Mariadb and have connected these databases to the Backend. <br /> <br />
                 On the Frontend I have built React.js, Next.js , React-native and Angular Apps using HTML, CSS and JavaScript/TypeScript. Currently I build Frontend of web apps using Next.js and follow latest coding practices  
                <br /><br /> For Deploying an App, I have used Amazon Web Services and Heroku as cloud service provider. Before Deploying multiple Virtual Containers may be created using Docker to effectively utilize the hardware resources and prevent Complexities.
                </div>
                {/* <div className="btn-container frfsc">
                    <button className="view-git pointer">View Github</button>
                    <button className='projects pointer'>Projects</button>
                </div> */}
        </div>

            <div className="right frcc">
                <img src="/dp.jpg" className='profile-img' />
            </div>
        </div>
        

      
    </IntroDiv>
  )
}
