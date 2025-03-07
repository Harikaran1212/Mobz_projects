import React from 'react'
import './css/React.css'
import { Link } from 'react-router-dom'
function reacts() {
  return (
    <div className='full'>
    <div className='home' >
      <h1><span><img src="/logo192.png" alt="logo" height={29} width={31}/></span> Reacts Projects</h1>
     <div className='tasks'>
     <ul className='listbox'>
      <li>
        <div className='box'>
        <div className='content'>
        <h3>Task 1: Small Programming Learning Tasks</h3>
        <ul className='list'>
          <li>Display simple JSX</li>
          <li>Display an array of records on screen</li>
          <li>Show/Hide Element on Screen</li>
          <li>Enable/Disable a button</li>
          <li>2 way data binding using textbox</li>
          <li>Dynamically add child components</li>
          <li>Do Sum of Two Numbers</li>
        </ul>
        </div>
        <div className='card'>
        <Link className='boxer' to="https://react-taks1-5.netlify.app/" target='_blank'><img src="/image/React/react task 1.png" alt="logo" height={250} width={450} /><figcaption> click the image</figcaption></Link>
        
        </div>
        </div>
      </li>
      <li>
        <div className='box'>
        <div className='content'>
        <h3>Task 2: Create a counter</h3>
        <ul className='list'>
          <li>Take 2 buttons: Increase & Decrease</li>
          <li>Create a text label to show counter value</li>
          <li>When press the button, counter value should increase/decrease</li>
        </ul>
        </div>
        <div className='card'>
        <Link className='boxer' to="https://react-taks1-5.netlify.app/" target='_blank'><img src="/image/React/react task 2.png" alt="logo" height={220} width={450} /><figcaption> click the image</figcaption></Link>
        
        </div>
        </div>
      </li>
      <li>
      <div className='box'>
        <div className='content'>
          <h3>Task 3: Build Search filter</h3>
          <ul className='list'>
             <li>Take a textbox</li>
             <li>Create an array</li>
             <li>When type anything on the textbox, it will show filtered records from the array</li>
           </ul>       
        </div>
        <div className='card'>
        <Link className='boxer' to="https://react-taks1-5.netlify.app/" target='_blank'><img src="/image/React/react task 3.png" alt="logo" height={220} width={450} /><figcaption> click the image</figcaption></Link>
        
        </div>
        </div>
      </li>
      <li>
        <div className='box' >
        <div className='content'>
        <h3>Task 4: Create a Datagrid</h3>
        <ul className='list'>
          <li>Take a static JSON (string or read from a file)</li>
          <li>JSON should have the data as the screenshot bellow</li>
          <li>Data should be shown in data grid/tabular structure</li>
          <li>The datagrid should have sort/filter/search mechanism</li>
        </ul>
        </div>
        <div className='card'>
        <Link className='boxer' to="https://react-taks1-5.netlify.app/" target='_blank'><img src="/image/React/react task 4.png" alt="logo" height={220} width={450} /><figcaption> click the image</figcaption></Link>
        
        </div>
        </div>
      </li>
      <li>
        <div className='box'>
        <div className='content'>
        <h3>Task 5: Create a Drag & Drop Task List</h3>
        <ul className='list'>
          <li>There will be 5 blocks(Today, Tomorrow, This Week, Next Week, Unplanned).</li>
          <li>There will be 10 tasks in Unplanned block when page load</li>
          <li>User will be able to Drag & Drop tasks from any block to any other block</li>
          
        </ul>
        </div>
        <div className='card'>
        <Link className='boxer' to="https://react-taks1-5.netlify.app/" target='_blank'><img src="/image/React/react task 5.png" alt="logo" height={220} width={450} /><figcaption> click the image</figcaption></Link>
        
        </div>
        </div>
      </li>
      <li>
        <div className='box'>
        <div className='content'>
        <h3>Task 6: Create a To Program for user To Do List</h3>
        <ul className='list'>
          <li>User will sign up using email id & Password</li>
          <li>Signup data will be stored in Firebase</li>
          <li>User who already signed up, will be able to login with emailed/password</li>
          <li>Login details will be checked in firebase</li>
          <li>Logged in user will be able to create a To Do List with a name</li>
          <li>Under a To Do List, user can add tasks with following details (Task Title,Task Description,Task due date,Task Priority)</li>
          <li>All these data will be saved in Firebase</li>
          <li>User will be able to move tasks from one To Do List to another by Drag n Drop</li>
          <li>User will also be able to change task priority inside a To Do List by Drag n Drop</li>
        </ul>
        </div>
        <div className='card'>
        <Link className='boxer' to="https://react-task-6-harikarans-projects-17414b93.vercel.app/" target='_blank'><img src="/image/React/react task 6.png" alt="logo" height={250} width={450} /><figcaption> click the image</figcaption></Link>
        
        </div>
        </div>
      </li>
      <li>
        <div className='box'>
        <div className='content'>
        <h3>Task 7: Create a Back Office Panel</h3>
        <ul className='list'>
          <li>User will login with userid & Password (static as of now).</li>
          <li>Once Login, there will be 3 menu items(Users, Task Lists, Tasks).</li>
           <li>When click on users menu item, it will show a datagrid with following columns(Email id, Password, Signup Time, IP).</li>
           <li>When click on Task Lists menu item, it will show a data grid with following items(Task List Title, Create By (email id), No of tasks (numeric), Creation Time, Last updated (last change time)).</li>
           <li>When click on Tasks menu item, it will show a data grid with following items(Task Title, Task Description, Task List Title, Create By (email id),Creation Time).</li>
        </ul>
        </div>
        <div className='card'>
        <Link className='boxer' to="https://react-task-7-nu.vercel.app/" target='_blank'><img src="/image/React/react task 7.png" alt="logo" height={250} width={450} /><figcaption> click the image</figcaption></Link>
        
        </div>
        </div>
      </li>
     </ul>
      
    </div>
    </div>
    </div>
  )
}

export default reacts