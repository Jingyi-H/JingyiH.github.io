import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from 'react';
import { Container } from 'react-bootstrap';
import Blocks from './components/Blocks';
import Header from './components/Header';
import Footer from './components/Footer';
import Education from './components/Education.js';
import './App.css';


function App() {
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

  const [projects, setProjects] = useState([
    {
      id: 1,
      date: '',
      summary: '',
      bullets: [
        '',
        '',
        '',
        ''
      ]
    }
  ])

  return (
    <div>
      <Container fluid>
        <Header />
        <div className='content'>
          <h1>Jingyi Huang</h1>
          <p>
            <em>Current MS student in Boston University</em>
          </p>
          <hr />
          <h3>Work Experience</h3>
          <Blocks blocks={pexp} />
          <h3>Education</h3>
          <Education />
          <h3>Skills</h3>
          <p>Python(Tensorflow, Spyder), Java (Spring Boot), SQL, JavaScript, HTML, CSS(Bootstrap)</p>
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
