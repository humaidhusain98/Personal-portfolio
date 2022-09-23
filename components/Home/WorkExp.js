import React,{useState,useEffect} from 'react'
import styled from  'styled-components';

const MainCont =  styled.div`
    width: 100%;
    height: 850px;
   
    @media (max-width: 900px) {
       height: 1000px;
       padding-top: 30px;
    }

    .heading{
        width: 80%;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .name{
        margin-top: 40px;
        font-size: 25px;
        color: #7562E0;
    }

    .position{
        margin-top: 10px;
    }

    .duration{
        margin-top: 10px;
    }

    .description{
        margin-top: 40px;
        width: 750px;
        @media (max-width: 900px) {
            width: 350px;
        }
    }

    .lang-img{
        height: 100px;
        cursor: pointer;
        transition-duration: 250ms;

        &:hover{
            transform: scale(1.1);
        }

        @media (max-width: 900px) {
            height: 85px;
        }
    }

    .lang-img-sel{
        height: 250px;
        cursor: pointer;
        transition-duration: 1s;

        &:hover{
            transform: scale(1.1);
        }

        @media (max-width: 900px) {
            height: 130px;
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

    .dot{
        border-radius: 50%;
        border: 1px solid white;
        min-width: 10px;
        min-height: 10px;
    
    }

    .lines{
        margin-top: 5px;
        gap: 10px;
    }

`;

export default function WorkExp() {

  const [description,setDescription] = useState([
      {
       name:"RareCandy",
       description:"Building the RareCandy MVP DApp--The MVP would include a website landing page and marketplace page for an already existing ERC20 token and ERC721 NFT tokens.--Working on UI, Backend  and Web3 Integration. I am building the whole frontend.--Closely working with the Founders , UI Designers, Backend and Smart Contract Devs.--Working on Kovan Testnet to integrate Smart Contracts -- Integrated Metamask and WalletConnect Wallets ",
       position:"Web3 Frontend Developer (Next.js) Freelancer",
       duration: "Current - March 2022"

    },
    {
        name:"Blockchain Nigeria User Group",
        description:"Built the whole Staking and Liquidity DApp using Next.js -- Integrated WalletConnect , Metamask , and Binance Smart Chain Wallet and Lead Wallet -- Integrated Staking and Liquidity Smart Contracts  and wallets in the DApp -- Black and White Themes -- The App Rewards Stakers and Liquidity Providers with Reward Tokens",
        position:"Web3 Frontend Developer Next.js Freelancer",
        duration: "March 2022 - February 2022"
    },
    {
        name:"Vefi",
        description:"Worked on the Vefi Wallet Screens using React Native for mobile applications. -- Built Vefi NFT Marketplace v1 UI and integrating functionality using Next TypeScript --Reviewing and approving Pull Requests of other Developers --Using built in React Context APIs for state management and latest coding practices",
        position:"React and React Native Developer Freelancing",
        duration: "April 2022 - March 2022"
    },
     {
        name:"Lead Wallet",
        description:"Working on a Node.js Backend App with MySql as Database and Redis used as a In memory Database for Caching -- Integrated Cross Chain and Same Chain Token swaps -- Worked with Ethereum, BSC , Polygon and Avalanche Chains  --Collaborating with internal and external team members to implement desired Functionality -- Integrated Partner Company SWFT API for Token Swaps -- Integrated Partner Company Symbiosis Cross Chain Token Swap SDK -- Helped in API integrations of SDKs and API integrated on Backend from Front End. -- Worked on data collection for Referral Program",
        position:"Node.js Backend Developer (Freelancer)",
        duration: "Current -February 2022"
    },
     {
        name:"Despace",
        description:"Worked on a Next TypeScript App --Worked on frontend of NFT AuctionPad , Mint Pad , Staking Pad and DEX and its API Integrations. --Worked on price Charts of  1hour,1Day, 1Week, 1Year for Exchange using React recharts --Integrated web3 Wallets like Metamask, WalletConnect , Binance Wallet etc. --Worked on Smart Contract Integrations on BSC Testnet, Ethereum Ropsten and alike Networks",
        position:"Web3 Frontend Developer Full Time",
        duration:"January 2022 - June 2021",
    },
     
     {
        name:"Onix Advisors",
        description:"Worked on a Live Project made in Spring MVC (Java) with PostGreSQL as Database and hosted in AWS. -- Developed the Job Board and Career Board API including all functionalities like user applying for a Job, Search API with various filters for Job, Adding tags etc. -- To Apply for a Job, CV has to be uploaded. -- Implemented uploading/removal of CV to AWS s3 Bucket before Job Application can be Submitted and uploading of Company Logo to be Shown on Job --Collaborated with Front-End React Native Developer to integrate API and know his needs for the UI",
        position:"Java Backend and API Developer Intern",
        duration:"April 2021 - January 2021",
    },
     {
        name:"Crosscut-E-Solutions",
        description:"First time developing API and Backend -- Was Given Task to develop Backend for Medical App with doctors,appointment booking and cancellation --Learned GitHub basics like push ,pull and commit --Learned Concepts like REST API and JSON --Learned Rapid Application Development(RAD) using Spring Boot(Java) as Backend with MySql as Database --Learned Angular to integrate API for a short while",
        position:"Java Spring Boot Developer Intern",
        duration:"July 2020 - Jun 2020 ",
    }
  ])
  const [pointer,setPointer] = useState(1);

  const nextSlide = ()=>{
    setPointer((pointer)=>((pointer)%description.length)+1);

  }

  useEffect(()=>{
   const timer = setInterval(nextSlide,8500);

   return ()=>{
     clearInterval(timer);
   }
  },[])



  return (
    <MainCont className='fcfsc'>
        <div className="heading fs32">
            Work Experience
        </div>

        <div className="logo-cont frfsc">
            <img onClick={()=>{setPointer(1)}} src="/exp/Rarecandy.webp" alt="" className={pointer==1?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(2)}} src="/exp/bnug.svg" alt="" className={pointer==2?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(3)}} src="/exp/vefi.webp" alt="" className={pointer==3?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(4)}} src="/exp/lead.png" alt="" className={pointer==4?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(5)}} src="/exp/despace.png" alt="" className={pointer==5?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(6)}} src="/exp/onix.jpeg" alt="" className={pointer==6?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(7)}} src="/exp/cross.jpeg" alt="" className={pointer==7?'lang-img-sel':'lang-img'} />
        </div>

        <div className="logo-cont-mobile frfsc">
            <img onClick={()=>{setPointer(1)}} src="/exp/Rarecandy.webp" alt="" className={pointer==1?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(2)}} src="/exp/bnug.svg" alt="" className={pointer==2?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(3)}} src="/exp/vefi.webp" alt="" className={pointer==3?'lang-img-sel':'lang-img'} />
        </div>

        <div className="logo-cont-mobile frfsc">
            <img onClick={()=>{setPointer(4)}} src="/exp/lead.png" alt="" className={pointer==4?'lang-img-sel':'lang-img'}  />
        </div>

        <div className="logo-cont-mobile frfsc">
            <img onClick={()=>{setPointer(5)}} src="/exp/despace.png" alt="" className={pointer==5?'lang-img-sel':'lang-img'} />   
            <img onClick={()=>{setPointer(6)}} src="/exp/onix.jpeg" alt="" className={pointer==6?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(7)}} src="/exp/cross.jpeg" alt="" className={pointer==7?'lang-img-sel':'lang-img'} />
        </div>
 
        <div className="name">
            {description[pointer-1].name}
        </div>

        <div className="position">
            {description[pointer-1].position}
        </div>

        <div className="duration">
            {description[pointer-1].duration}
        </div>

        <div className="description">
            {
            description[pointer-1].description.split("--").map((content,key)=>(
              <div key={key} className="lines frfsc">
                  <div className="dot"></div>   
                    <div>
                    {content}
                    </div>
            
              </div>
            ))
          }
        </div>


    </MainCont>
  )
}
