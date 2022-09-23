import React,{useState,useEffect} from 'react'
import styled from 'styled-components';


const TechUsedDiv = styled.div`
  width: 100%;
  height: 1080px; 

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

  .name-mobile{
    display: none;
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
      height: 200px;
      border-radius: 12px;
      cursor: pointer;
    }

    .logo-selected{
      padding: 10px;
      height: 200px;
      border-radius: 12px;
      background: #181824;
      cursor: pointer;
    }
  }

  .descrip{
    width: 80%;
    height: 150px;
    margin-top: 25px;
  }


  .hackerrank-title{
    width: 350px; 
  }

  .hr-text{
    margin-left: 20px;
    color: #666b94;
    font-size: 50px;
    
  }

  .codechef-certified{
    margin-top: 40px;
    color: #666b94;
    font-family: 'Poppins';
    font-size: 25px;

  }

  .view-cert{
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .view-prof{
    margin-top: -30px;
    color: #666b94;
    font-family: 'Poppins';
    font-size: 25px;
    cursor: pointer;
  }

  .text{
    margin-top: 20px;
  }

  .text-mobile{
    display: none;
    gap: 10px;
    font-size: 16px;
  }

@media (max-width: 900px) {
  height: 1450px;
  
  .img{
    height: 900px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .logo{
    
      max-width: 350px;
    }
  }

  .name{
    display: none;
  }

  .descrip{
    height: 350px;
  }

 
  .hackerrank-title{
    width: 150px; 
  }

  .hr-text{
    font-size: 20px;
  }

  .name-mobile{
    display: flex;
    font-size: 15px;
  }


  .text{
    display: none;
  }

  .text-mobile{
    display: flex;
    div{
      height: 30px;
    }
  }

  .view-prof{
    margin-top: 0px;
    font-size: 15px;

  }

  .view-cert{
    font-size: 15px;

  }
}

`;

const techData = [
  {
    name:"HackerRank 5 star Gold Level Language Proficiency Badge in Java",
    description:"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.--It is simple and one of the most popular technologies used to develop frontend with a large developer community.",
    image:"/cp/java.png"
  },
  {
    name:"HackerRank 5 star Gold Level Language Proficiency Badge in Python",
    description:"",
    image:"/cp/python.png"
  },
  {
    name:"HackerRank 5 star Gold Level Language Proficiency Badge in C++",
    description:"Docker is an open platform for developing, shipping, and running applications.-- Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.-- With Docker, you can manage your infrastructure in the same ways you manage your applications.",
    image:"/cp/cpp.png"
  },
  {
    name:"HackerRank 5 star Gold Level Badge in Problem Solving(DSA)",
    description:"Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.-- Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient,-- perfect for data-intensive real-time applications that run across distributed devices.",
    image:"/cp/problemSolving.png"
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
   const timer = setInterval(nextSlide,5000);

   return ()=>{
     clearInterval(timer);
   }
  },[])


  return (
    <TechUsedDiv className='fcfsc '>
      <div className="heading fs32">
        Competitive Programmer
      </div>

      <div className="codechef-certified fcfsc">

        <img src='/cp/codechef.png' className='hackerrank-title' /> 

        <div className="text">
        CodeChef Certified Foundation Level DSA Programmer
        </div>

        <div className="text-mobile fcfsc">
          <div className=''>
            CodeChef Certified Foundation 
          </div>
          <div className=''>
           Level DSA Programmer
          </div>
        </div>

        <div  onClick={()=>{window.open("https://www.codechef.com/certificates/public/4ee2c3f")}} className="view-cert">
          View Certificate
        </div>
      
      </div>

      <div className="hackerrank-badges frfsc">
        <img src='/cp/hackerank.png' className='hackerrank-title' /> 
        <div className="hr-text">Badges Earned</div> 
      </div>
      <div onClick={()=>{window.open("https://www.hackerrank.com/humaidhusain98?hr_r=1")}} className="view-prof">View Profile</div> 
      <div className="img frcc">
        <img onClick={()=>{handleChangeSlide(1)}} src={techData[0].image} alt="" className={pointer==1?"logo-selected  ":"logo "} />
        <img onClick={()=>{handleChangeSlide(2)}} src={techData[1].image} alt="" className={pointer==2?"logo-selected  ":"logo "} />
        <img onClick={()=>{handleChangeSlide(3)}} src={techData[2].image} alt="" className={pointer==3?"logo-selected ":"logo "} />
        <img onClick={()=>{handleChangeSlide(4)}} src={techData[3].image} alt="" className={pointer==4?"logo-selected  ":"logo "} />
      </div>
      <div className="name frcc">
        {techData[pointer-1].name}
      </div>

      <div className="name-mobile">

        {techData[pointer-1].name.substring(0,techData[pointer-1].name.length/2)}
          <br />
          {techData[pointer-1].name.substring(techData[pointer-1].name.length/2)}
        
      </div>
   
    </TechUsedDiv>
  )
}
