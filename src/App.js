import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Footer from './pages/Footer'
import './index.css'


function App() {

    const [pageChoice, setPageChoice] = useState('About');
    return(
        <div>
            <NavTabs 
            pageChoice={pageChoice}
            setPageChoice={setPageChoice} />
            <main>
            {pageChoice == 'About' ? (<About />):('')}
            {pageChoice == 'Resume' ? (<Resume />):('')}
            {pageChoice == 'Projects' ? (<Projects />):('')}
            </main>
        </div>
  );
}

export default App;
