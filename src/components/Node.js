import React from 'react'
import { Link } from 'react-router-dom'
function Node() {
  return (
    <div className='full'>
    <div className='home' >
      <h1><span><img src="/image/node.svg" alt="logo" height={32} width={36}/></span> Node Projects</h1>
      <div className='tasks'>
     <ul className='listbox'>
      <li>
      <div className='box'>
      <div className='content'>
        <h3>Task 1: Web Service/API using Node JS</h3>
        <ul className='list'>
          <li>Create a JSON based webservice to store data in mongoDB. Following will be the
          parameters in JSON: First name, Last name, Mobile no (10 digits validation), Email id (email validation), Address(Street, City, State, Country), Login id, Password, Creation Time, Last updated on .</li>
          <li>Create an HTML page with a form containing above field (except Creation Time and
Last Updated Time) and a Save button. Clicking on Save button call the
Webservice/API using jQuery/AJAX to store the data on Mongo DB.</li>
          <li>Create another JSON based web service to read the data stored in MongoDB and
create a HTML page from which the webservice will be called using jQuery/AJAX to
display the data which webservice/API will return.</li>
        </ul>
        </div>
        <div className='card'>
        <Link className='boxer' to="https://node-task-1-sigma.vercel.app/" target='_blank'><img src="/image/Node/Node task 1.png" alt="logo" height={250} width={450} /><figcaption> click the image</figcaption></Link>
        
        </div>
        </div>
      </li>
      <li>
      <div className='box'>
      <div className='content'>
        <h3>Task 2: Socket.io Op</h3>
        <ul className='list'>
          <li>From assignment 1, when a user's data is inserted in mongo DB, join that user into a
          room name "live users" of socket.io.</li>
          <li>On that room, for each user, maintain their email id, name and socket id in local
          variable.</li>
          <li>Once the user is joined into the room, on a HTML page show list of all joined users in
          that room who are connect now. Show user email id and socket id in the html.</li>
          <li>On clicking on the user email id/socket id call the webservice which previously created
          and show all the information on a popup.</li>
        </ul>
        </div>
        <div className='card'>
        <Link className='boxer' to="https://node-task-2-90yk.onrender.com/" target='_blank'><img src="/image/Node/Node task 1.png" alt="logo" height={250} width={450} /><figcaption> click the image</figcaption></Link>
        
        </div>
        </div>
      </li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default Node