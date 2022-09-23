import React,{useState,useEffect} from 'react'
import styled from  'styled-components';

const LanguageDiv =  styled.div`
    width: 100%;
    height: 800px;

    @media (max-width: 900px) {
       height: 950px;
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

    .description{
        width: 900px;
        margin-top: 40px;

        @media (max-width: 900px) {
            width: 360px;
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

export default function Languages() {

  const [description,setDescription] = useState([
      {
       name:"Java",
       description:"Java is my first programming language and have been coding in Java since High School. -- Well Versed with Java OOPs concepts like Abstraction, Encapsulation , Inheritance and Polymorphism  -- Have Done Competitive Programming in Java using inbuilt Stack, Queue , LinkedList, ArrayList, Heap, HashMap, TreeMap etc.-- Have built multiple Rest API's using Spring MVC and Spring Boot with MySQL or PostGreSQL as DB -- Well Versed with developing microservice in Spring Boot and concepts like Service , Controller , Entity , Repository and Util classes. -- Used both Maven and Gradle for installing and building packages --HackerRank 5 star Gold Level Language Proficiency Badge in Java"
    },
    {
        name:"JavaScript",
        description:"JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. -- Almost all FrontEnds require Javascript to run -- Have made several projects using Vanilla Javascript -- Mainly use JavaScript to develop React, Next, React-Native and Node.js Applications -- Concepts like Asynchronous, synchronous functions and Promises make JavaScript a unique language with few alternatives. --npm is the world's largest Software Registry.It is a package manager for Javascript. The registry contains over 800,000 code packages. Open-source developers use npm to share software."
     },
     {
        name:"TypeScript",
        description:"TypeScript is a free and open source programming language developed and maintained by Microsoft. -- It is a strict syntactical superset of JavaScript and adds optional static typing to the language. --It is designed for the development of large applications and transpiles to JavaScript. -- This language is easier to learn than JavaScript for Developers who worked in a OOPs Environment"
     },
     {
        name:"CSS",
        description:"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.-- CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. --CSS is used in React and Next Apps to style the components --Usually CSS styles takes a lot of code space and if not properly planned and managed, these can drastically slow down the App"
     },
     {
        name:"HTML",
        description:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.-- It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
     },
     {
        name:"C & C++",
        description:"C is a general-purpose programming language, developed in 1972, and still quite popular. C is very powerful; it has been used to develop operating systems, databases, applications,etc --Learned C in First year of college. Well versed with concept of pointers and memory in C.-- Have Completed NPTEL Problem Solving Through Programming in C 12 week course -- C++ is an extension of the C programming language , or 'C with Classes'. -- C++ is one of the fastest languages for Competitive Coding --Have used the C++ Standard Template Library (STL) to do competitive coding and use pre-defined data structures -- HackerRank 5 star Gold Level Language Proficiency Badge in C++ "
     },
     {
        name:"Python",
        description:"Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.-- Python is dynamically-typed and garbage-collected. -- Popular for Big Data and Machine Learning.  --  Used Python to detect Objects in Images and videos using openCV. -- Developed Rest API in Python based Framework Django and Flask. --  HackerRank 5 star Gold Level Language Proficiency Badge in Python "
     }
  ])
  const [pointer,setPointer] = useState(1);

  const nextSlide = ()=>{
    setPointer((pointer)=>((pointer)%description.length)+1);

  }

  useEffect(()=>{
   const timer = setInterval(nextSlide,11000);

   return ()=>{
     clearInterval(timer);
   }
  },[])



  return (
    <LanguageDiv className='fcfsc'>
        <div className="heading fs32">
            Languages
        </div>

        <div className="logo-cont frfsc">
            <img onClick={()=>{setPointer(1)}} src="/languages/java.png" alt="" className={pointer==1?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(2)}} src="/languages/js.webp" alt="" className={pointer==2?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(3)}} src="/languages/ts.png" alt="" className={pointer==3?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(4)}} src="/languages/css.webp" alt="" className={pointer==4?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(5)}} src="/languages/html.png" alt="" className={pointer==5?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(6)}} src="/languages/c++.png" alt="" className={pointer==6?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(7)}} src="/languages/python.png" alt="" className={pointer==7?'lang-img-sel':'lang-img'} />
        </div>

        <div className="logo-cont-mobile frfsc">
            <img onClick={()=>{setPointer(1)}} src="/languages/java.png" alt="" className={pointer==1?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(2)}} src="/languages/js.webp" alt="" className={pointer==2?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(3)}} src="/languages/ts.png" alt="" className={pointer==3?'lang-img-sel':'lang-img'} />
        </div>

        <div className="logo-cont-mobile frfsc">
            <img onClick={()=>{setPointer(4)}} src="/languages/css.webp" alt="" className={pointer==4?'lang-img-sel':'lang-img'}  />
        </div>

        <div className="logo-cont-mobile frfsc">
            <img onClick={()=>{setPointer(5)}} src="/languages/html.png" alt="" className={pointer==5?'lang-img-sel':'lang-img'} />   
            <img onClick={()=>{setPointer(6)}} src="/languages/c++.png" alt="" className={pointer==6?'lang-img-sel':'lang-img'} />
            <img onClick={()=>{setPointer(7)}} src="/languages/python.png" alt="" className={pointer==7?'lang-img-sel':'lang-img'} />
        </div>
 
        <div className="name">
            {description[pointer-1].name}
        </div>

        <div className="description fcfsfs">
        {
            description[pointer-1].description.split("--").map((content,key)=>(
              <div key={key} className="lines frfsc">
                <div className="dot"></div>
                <div className='fs12'>{content}</div>
              </div>
            ))
          }
        </div>


    </LanguageDiv>
  )
}
