import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Title from './components/Title/Title';
// import Buttons from './components/Buttons/Buttons';
// import Section from './components/Section/Section';
import Hw1 from './components/Day3HW/Hw1';
import Hw2 from './components/Day3HW/Hw2';
import './components/Day3HW/Hw.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Buttons content="Save" />
    <Buttons content="Cancel" />
    <Buttons content="Renting" />
    <Buttons content="Buy" />
    <Buttons content="Set" />
    <Buttons content="Action" />

    <Title content="Dảk Dảk" />
    <Title content="Bủh Bủh" />
    <Title content="Lờ Mao" />
    <Title content="Dậy đi ông cháu ơi" />
    <Title content="Còn cái nịt" />

    <Section title="A Simple Component" paragraph="React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props." src="section_img/1.bmp" />
    <Section title="A Stateful Component" paragraph="In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render()." src="section_img/2.bmp" />
    <Section title="An Application" paragraph="Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation." src="section_img/3.bmp" />
    <Section title="A Component Using External Plugins" paragraph="React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time." src="section_img/4.bmp" /> */}
    <Hw1 />
    <Hw2 />
  </React.StrictMode>
);

