import React,{useState,useEffect} from 'react'
import styled from 'styled-components';


const TechUsedDiv = styled.div`
  width: 100%;
  height: 850px; 

  .heading{
    width: 80%;
    margin-top: 20px;
  }

  .name{
    margin-top: 10px;
    color: #7562E0;
    font-family: 'Poppins';
    font-size: 25px;
  }

  .dot{
    border-radius: 50%;
    border: 1px solid white;
    width: 10px;
    height: 10px;
    margin: 10px;
  }

  .dot-purple{
    border-radius: 50%;
    border: 1px solid #7562E0;;
    width: 10px;
    height: 10px;
    margin: 10px;
    color: #7562E0;
  }

  .img{
    height: 350px;
    margin-top: 20px;

    .logo{
      padding: 10px;
      height: 300px;
      border-radius: 12px;
      
    }
  }

  .descrip{
    width: 900px;
    margin-top: 25px;
  }

  .numbers{
    margin-top: 50px;
  }

 

@media (max-width: 900px) {
  height: 1020px;

  .img{
 

    .logo{
    
      max-width: 350px;
    }
  }



  .descrip{
    width: 350px;

    .lines{
     
    }
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

const techData = [
  {
    name:"OAuth2.0",
    description:"Creating an Account and setting the password in an unknown site can risk your password getting exposed.-- We cannot trust any company except the Big ones like Google, Meta and Microsoft. -- Oauth2.0  helps us log in through our Google, Meta, LinkedIn and Github accounts to a site where its implemented. -- Have implemented Google, Github, LinkedIn and Facebook Oauth2.0 ",
    image:"/miniProjects/oauth2.svg"
  },
  {
    name:"2 Factor Authentication",
    description:"Two-factor identification works by using two unrelated authentication methods to secure an account. -- The second authentication method usually needs to be verified with something in your personal possession — such as your phone — in addition to your normal username and password -- Have implemented Google Authenticator for 2 Factor Authentication",
    image:"/miniProjects/googleAuth.png"
  },
  {
    name:"OTP & Mail Authentication",
    description:" Have implemented OTP or Mail authentication using Node.js and AWS Simple Notification Service or AWS Simple Email Service . -- First we generate 6 digit random code for a particular user and then send through AWS SNS or AWS SES. -- This code is then recieved on Users phone or mail and he can successfully log in after verifying coden",
    image:"/miniProjects/otp.png"
  },
  {
    name:"NFT MintPad & AuctionPad",
    description:"Integrated Read and Write Functions of Smart Contracts and interaction of Wallet with Smart Contrat in DApp  -- Built NFT MintPad where you can mint an NFT by interacting with Smart Contracts through App. -- After Minting this NFT can be auctioned. -- built an AuctionPad where we can Auction NFTs and the highest bidder gets the NFT ",
    image:"/miniProjects/nft.png"
  },
  {
    name:"Smart Contract Tracker",
    description:"Whenever a Smart Contract write function is called , some Events may be triggered. -- Listening to these Contract Events via a Web Socket Connection through the Provider Node -- Using this events data triggered in real time and storing in Server DB to track the changes and new data. -- Have built an NFT Tracker that will track the minting, transfer and related activities of the NFT",
    image:"/miniProjects/SC.png"
  },
  {
    name:"Video Streaming Server",
    description:"The size of videos are quite large -- A server may crash returning such a large file at once. Also downloading the whole video on Frontend will take a lot of time before we can view it. -- Even Static videos used on the Frontend slow the App and may even crash it. -- Rather than Sending the whole video file, we divide the video into chunks/parts of small size. This can easily be returned by the server -- Frontend can easily download these parts/chunks quickly and we can watch the downloaded part/chunk. After the chunk has been watched, the next part/chunk of video data is requested by the client side to the Server which then returns the requested part.-- This goes on till the video has been fully watched. We stream the video rather than downloading at once",
    image:"/miniProjects/stream1.png"
  }
  ,
  {
    name:"JSON Web Token",
    description:"JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.  -- This information can be verified and trusted because it is digitally signed. -- JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. --JWT may contain an expiry peroid after which it cannot be accessed  -- JWT cannot be modified and can be used for Authorization and Information Exchange -- JWT solves the problem of multiple servers using same data as to decode a JWT we only need the private key and algorithm and ensures Data safety. The private key if exposed though can decode the JWT",
    image:"/miniProjects/jwt.png"
  },
  {
    name:"Chat Application",
    description:"Chat Applications are in-demand and required by almost all web businesses. -- Sockets have traditionally been the solution around which most real-time chat systems are architected, providing a bi-directional communication channel between a client and a server. -- Have built a Chat Application using React as Frontend, Node.js as backend with socket.io as socket and Redis as a Caching In Memory Database ",
    image:"/miniProjects/chat.png"
  }
]

export default function TechUsed() {

  const [pointer,setPointer] = useState(1);

  const handleChangeSlide = (num)=>{
    setPointer(num);
  }

  const nextSlide = ()=>{
    setPointer((pointer)=>((pointer)%techData.length)+1);

  }

  useEffect(()=>{
   const timer = setInterval(nextSlide,10000);

   return ()=>{
     clearInterval(timer);
   }
  },[])


  return (
    <TechUsedDiv className='fcfsc'>
      <div className="heading fs32">
        Mini Projects
      </div>
      <div className="img ">
        <img src={techData[pointer-1].image} alt="" className="logo" />
      </div>
      <div className="name">
        {techData[pointer-1].name}
      </div>
      <div className="descrip fcfsfs">
          {
            techData[pointer-1].description.split("--").map((content,key)=>(
              <div key={key} className="lines frfsc">
                <div className="dot"></div>
                <div className='fs12'>{content}</div>
              </div>
            ))
          }
      </div>
      <div className="numbers frfsc">
          <div onClick={()=>{handleChangeSlide(1)}} className={pointer==1?"dot-purple frcc pointer":"dot frcc pointer"}>
            
          </div>

          <div onClick={()=>{handleChangeSlide(2)}} className={pointer==2?"dot-purple frcc pointer":"dot frcc pointer"}>
            
          </div>

          <div onClick={()=>{handleChangeSlide(3)}} className={pointer==3?"dot-purple frcc pointer":"dot frcc pointer"}>
            
          </div>
          <div onClick={()=>{handleChangeSlide(4)}} className={pointer==4?"dot-purple frcc pointer":"dot frcc pointer"}>
            
          </div>
          <div onClick={()=>{handleChangeSlide(5)}} className={pointer==5?"dot-purple frcc pointer":"dot frcc pointer"}>
            
          </div>
          <div onClick={()=>{handleChangeSlide(6)}} className={pointer==6?"dot-purple frcc pointer":"dot frcc pointer"}>
            
          </div>
          <div onClick={()=>{handleChangeSlide(7)}} className={pointer==7?"dot-purple frcc pointer":"dot frcc pointer"}>
            
            </div>
          <div onClick={()=>{handleChangeSlide(8)}} className={pointer==8?"dot-purple frcc pointer":"dot frcc pointer"}>
              
          </div>
      </div>

    </TechUsedDiv>
  )
}
