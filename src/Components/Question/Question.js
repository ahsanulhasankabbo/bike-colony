import React from 'react';
import { Accordion } from 'react-bootstrap';

const Question = () => {
    return (
        <div className='m-5'>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>How react works?</Accordion.Header>
                <Accordion.Body>
                    There are 2 package React and ReactDOM. React is a JavaScript library for building User Interfaces and ReactDOM is the JavaScript library that allows React to interact with the DOM. When we write a component there exist pure JavaScript code. Browser needs to convert the js code into HTML code. Because whatever we see in webpage everything is HTML code. So we need to convert the js code into HTML code. React package automatically convert js code into HTML code. Here ReactDOM display the HTML code into browser and the hole process happened without loading the page. It means dinamecally the HTML code generate into HTML file. Thats why react works instantly and very fast.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Difference between props and state.</Accordion.Header>
                <Accordion.Body>
                    <p>
                    Props: <br />
                    Props are passed into a component as an argument. So its handle outside of a component. Props must be updated outside the component. Because props are immutable.It's actually an object which stores the value of attributes of a tag and work similar to the HTML attributes
                    </p>
                    <p>
                    State: <br />
                    State is a store where we can store some temporary data. State are handled inside a compent. So it can updated inside the component. When we change the state inside of our application its going to re-rander the section of our application. State can be modified so it is mutable. It can be store multiple properties.
                    </p>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
    );
};

export default Question;