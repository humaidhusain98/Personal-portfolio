import React,{useState} from 'react'
import styled from  'styled-components';

const CertificationsDiv = styled.div`
    width: 100%;
    height: 1400px;

    @media (max-width: 1100px) {
        height: 1450px;
    }

    .heading{
        margin-top: 25px;
        width: 80%;
    }

    .cert-card-cont{
        margin-top: 30px;
        gap: 50px;

        @media (max-width: 1100px) {
            flex-direction: column;
        }
    }
`;

const CardDiv = styled.div`

  
    border-radius: 8px;
    cursor: pointer;
    transition-duration: 500ms;
    padding: 15px;

    .authority{
        width: 200px;
        height: 50px;
        border-radius: 8px;
        margin-top: 10px;
        border: 2px solid #7562E0;
    }

    .courseName{
        margin-top: 15px;
        color: #7562E0;
        font-size: 25px;

        @media (max-width: 1100px) {
            font-size: 11px;
        }

    }

    .duration{
        margin-top: 10px;
    }

    .by{
        margin-top: 25px;
    }

    .college{
        width: 100px;
        margin-top: 15px;
        height: 100px;
    }

    .view-cert{
        margin-top: 25px;
        color: white;
        border: none;
        outline: none;
        height: 30px;
        width: 200px;
        background: none;
        border-radius: 8px;
        cursor: pointer;
        transition-duration: 500ms;

        &:hover{
            transform: scale(1.05);
        }
    

    }

  
`;

function Card({course,handleViewCertificate}){
    return (
        <CardDiv className='fcfsc'>
            <img src='certifications/NPTEL.png' className='authority'/>
            <div className="courseName fccc">
                {
                    course.name.split("--").map((title,key)=>(
                      <div className='line' key={key}>{title}</div>  
                    ))
                }
            </div>
            <div className="duration">
                {course.duration}
            </div>

            <img src={course.collegeImg} alt="" className="college" />

            <div className="by">
                By {course.college}
            </div>

            <button onClick={()=>{handleViewCertificate(course.id)}} className="view-cert">
                View Certificate
            </button>
        </CardDiv>        
    )    
}

export default function Certifications() {
 
  const [certifications,setCertifications] = useState([
    
      {
        id:0,
        name:"NPTEL Problem Solving Through Programming in C",
        image:"/certifications/NPTEL.png",
        duration:"12 week course (Jan-Apr 2019)",
        college:"IIT Kharagpur",
        collegeImg:"/certifications/IITkharag.png"
      },
      {
        id:1,
        name:"NPTEL Programming,  Data Structures  and  Algorithms Using Python",
        image:"/certifications/NPTEL.png",
        duration:"8 week course (July-Sept 2019)",
        college:"IIT Madras",
        collegeImg:"/certifications/IITMadras.png"
      },
      {
        id:2,
        name:"NPTEL Joy of Computing Using Python",
        image:"/certifications/NPTEL.png",
        duration:"12 week course (Jan-Apr 2019)",
        college:"IIT Madras",
        collegeImg:"/certifications/IITMadras.png"
      }
     
    ])

    const handleViewCertificate=(id)=>{
        if(id==0){
            window.open("https://drive.google.com/file/d/109J3OhURruSxhF53dSOWu5LgOjkYicpG/view")
        }
        else if(id==1){
            window.open("https://drive.google.com/file/d/19nYrZgNKoYa_e99b0HDHawuhPd8aCmmJ/view");
        }
        else if(id==2){
            window.open("https://drive.google.com/file/d/1VUJDB0uk08ch9zNRZ86IvEyUet9L_pcJ/view");
        }
    }

  return (
    <CertificationsDiv className='fcfsc'>
        <div className="heading fs32">Certifications</div>

        <div className="cert-card-cont fcfsc">
            {
                certifications && certifications.map((course,key)=>(
                    <div className="card-div" key={key}>
                          <Card course={course} handleViewCertificate={handleViewCertificate} />
                    </div>
                  
                ))
            }
  
        </div>
    </CertificationsDiv>
  )
}
