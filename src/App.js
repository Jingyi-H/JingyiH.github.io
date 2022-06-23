import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
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
    <Router>
      <div>
        <Container fluid>
          <Header />
          <div className='content'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
          </div>
          <Footer />
        </Container>
      </div>
    </Router>
    
  );
}

export default App;
