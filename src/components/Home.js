import { React, useState } from 'react';
import Blocks from './Blocks';
import Education from './Education';


const Home = () => {
  const [pexp, setExp] = useState([
    {
      id: 1,
      date: 'May-Aug 2020',
      summary: 'S.F.Ddj Co. Ltd, Department of B2C, Data Engineer',
      bullets:[
        'Implemented and maintained a crawler program in Python to collect data from competing product platforms.',
        'Discussed with product operations directors and sorted out the list of sales data exported frequently.',
        'Developed a automation program with Python to monitor sales data and generate weekly reports on sales statistics.',
        'Increased the New User Rate of the platform by 33% and Gross Merchandise Volume by 22% in July 2020.'      
      ]
    },
  ])
  
  return (
    <>
      <h1>Jingyi Huang</h1>
      <p>
        <em>Hi, there! I am a current MS student at Boston University.</em>
      </p>
      <hr />
      <h3>Work Experience</h3>
      <Blocks blocks={pexp} />
      <h3>Education</h3>
      <Education />
      <h3>Skills</h3>
      <p>Python(Tensorflow, Spyder), Java, SQL, JavaScript, HTML, CSS</p>
    </>
  )
}

export default Home