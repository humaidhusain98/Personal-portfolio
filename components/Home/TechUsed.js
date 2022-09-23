import React,{useState,useEffect} from 'react'
import styled from 'styled-components';


const TechUsedDiv = styled.div`
  width: 100%;
  height: 800px; 

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
    min-width: 10px;
    min-height: 10px;
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
    @media (max-width: 900px) {
      width: 360px;
    }

  
    margin-top: 25px;
  }

  .numbers{
    margin-top: 20px;
  }

  .lines{
    margin-top: 7px;
  }


@media (max-width: 900px) {
  height: 1000px;

  .img{
 

    .logo{
    
      max-width: 350px;
    }
  }



  .descrip{
    height: 350px;
  }

}

`;

const techData = [
  {
    name:"React.js",
    description:"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.--It is simple and one of the most popular technologies used to develop frontend with a large developer community.  --React Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. I use React Hooks with Functional Components   -- Have used various packages used with React like Redux, axios, React-Router etc.",
    image:"/techLogo/react.svg"
  },
  {
    name:"Next.js",
    description:"Next.js gives you the best developer experience with all the features you need for production -- hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed. --It is built on top of React.js and solves problem like Routing, Navigation, SSR , Search Engine Optimization. -- I prefer to build Front-End using Next over React ",
    image:"/techLogo/nextjs.png"
  },
  {
    name:"Github & git",
    description:"GitHub, Inc., is an Internet hosting service for software development and version control using Git. -- It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. -- Familiar with concepts like git pull, push, merge , commit , rebase.  ",
    image:"/techLogo/git.png"
  },
  {
    name:"Node.js & npm",
    description:"Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.-- Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient,-- perfect for data-intensive real-time applications that run across distributed devices. -- Have built a microservice using Node.js -- npm is the world’s largest software registry. -- Open-source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well. ",
    image:"/techLogo/nodejs.png"
  },
  {
    name:"Spring Boot & Spring MVC",
    description:"Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can just run'. -- A Spring MVC is a Java framework which is used to build web applications. It follows the Model-View-Controller design pattern. -- Used Both Maven and Gradle to build and install packages. -- Robust Java Support and Reliability ",
    image:"/techLogo/spring-boot.png"
  },
  {
    name:"Amazon Web Services",
    description:"Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. -- These cloud computing web services provide distributed computing processing capacity and software tools via AWS server farms -- Have used AWS services like Route53, s3 Bucket, EC2 Instance, Load Balancers, Certificate Manager,  SNS,  SES. -- Have deployed Several Apps on AWS",
    image:"/techLogo/aws.png"
  },
  {
    name:"Docker",
    description:"Docker is an open platform for developing, shipping, and running applications.-- Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.-- With Docker, you can manage your infrastructure in the same ways you manage your applications. ",
    image:"/techLogo/docker.webp"
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
   const timer = setInterval(nextSlide,13000);

   return ()=>{
     clearInterval(timer);
   }
  },[])


  return (
    <TechUsedDiv className='fcfsc'>
      <div className="heading fs32">
        Technologies Used
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
                    <div>
                    {content}
                    </div>
            
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
      </div>

    </TechUsedDiv>
  )
}
