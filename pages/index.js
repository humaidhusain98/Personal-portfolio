import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {motion} from "framer-motion";
import styled from "styled-components";
import {useEffect,useState,useRef} from 'react';
import TechUsed from '../components/Home/TechUsed';
import MiniProjects from '../components/Home/FeatProj';
import Intro from '../components/Home/Intro';
import Description from '../components/Home/Description';
import Languages from '../components/Home/Languages';
import Db from '../components/Home/Db';
import Certifications from '../components/Home/Certifications';
import Competitive from '../components/Home/Competitive';
import Education from '../components/Home/Education';
import WorkExp from '../components/Home/WorkExp';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../components/Home/Contact';

const MainContainer = styled.div`
    min-height: 150vh;
    margin-top: 60px;
    color: white;
    background: #1A1A29;

    .h30{
      height: 30px;
    }

    .block{
      width: 100%;
      height: 128px;
      background: #181824;
      

      @media (max-width: 900px) {
        height: 30px;
        margin-top: 10px;
      }
 
  }

`;


export default function Home({page,setPage}) {

 
  const homeRef = useRef();
  const projectRef = useRef();
  const techRef = useRef();
  const certificationRef = useRef();
  const contactRef = useRef();

  const onScreenHome = useOnScreen(homeRef, "0px");
  const onScreenProject = useOnScreen(projectRef, "0px");
  const onScreenTech = useOnScreen(techRef, "0px");
  const onScreenCert = useOnScreen(certificationRef, "0px");
  const onScreenCont = useOnScreen(contactRef, "0px");


  if(onScreenHome){
    if(page!=0){
      setPage(0);
    }

  }

  if(onScreenProject){
    if(page!=1){
      setPage(1);
    }
 
  }

  if(onScreenTech){
    if(page!=2){
      setPage(2);
    }
  }

  if(onScreenCert){
    if(page!=3){
      setPage(3);
    }
  }

  if(onScreenCont){
    if(page!=4){
      setPage(4);
    }
  }

  const scrollToHomeDiv=() =>{
    homeRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjDiv=() =>{
    projectRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTechDiv=() =>{
    techRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToCertDiv=() =>{
    certificationRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContDiv=() =>{
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScroll = (num)=>{
    if(num==0){
      scrollToHomeDiv();
    }
    else if(num==1){
      scrollToProjDiv();
    }
    else if(num==2){
      scrollToTechDiv();
    }
    else if(num==3){
      scrollToCertDiv();
    }
    else if(num==4){
      scrollToContDiv();
    }
  }

  return (
    <>
      <Head>
        <title>Humaid's Portfolio</title>
        <meta name="Humaid's Portfolio" content="This is Md Humaid Husain's Portfolio Website" />
        <link rel="icon" href="/dp.jpg" />
      </Head>
      <Navbar 
       page={page}
       setPage={setPage}
       handleScroll={handleScroll}
    />
      <MainContainer className='fcfsc'>
            <div className='' ref={homeRef}></div>
            <div className='h30'></div>
          
            <Intro />
            <div className="block"></div>
            <WorkExp />
            <div className="block " ></div>
            <Competitive />
            <div className="block" ref={projectRef}></div>
            <MiniProjects />
            <div className="block "></div>
            <Education /> 
            <div className="block " ref={techRef}></div>
            <TechUsed />
            <div className="block" ></div>
            <Languages />
            <div className="block" ref={certificationRef}></div>
            <Certifications  />
            <div className="block " ></div>    
            <Contact /> 
            <div ref={contactRef}></div>
      </MainContainer>
    </>
  )
}

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}