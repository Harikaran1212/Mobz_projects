import React from 'react'
import { Link } from 'react-router-dom'
import './css/Phaser.css'
function Phaser() {
  return (
    <div className='full'>
    <div className='home' >
      <h1><span><img src="/image/phaser.svg" alt="logo" height={29} width={40} /></span>Phaser Projects</h1>
      <div className='tasks'>
     <ul className='listbox'>
      <li>
        <div className='box'>
        <div className='content'>
        <h3>Task 1: Session-Based Countdown and Ball Animation</h3>
        <ul className='list'>
          <li>Click on start session button, it will create a new session with random session id and random counter value b/w 30-120
          seconds.</li>
          <li>It will start count down with clock like sound.</li>
          <li>Once the counter reach 0, it will store session id, start time and end time in array and will store in right panel.</li>
          <li>Continue the same process and it will keep generating and storing new session and will show complete list on right panel.</li>
          <li>There will be one ball moving randomly once we start the session and stops when session ends. Animation should be
          smooth.</li>
        </ul>
        </div>
        <div className='card'>
        <Link className='boxer' to="https://phaser-task-1-harikarans-projects-17414b93.vercel.app/" target='_blank'><img src="/image/Phaser/Phaser task 1.png" alt="logo" height={250} width={450} /><figcaption> click the image</figcaption></Link>
        
        </div>
        </div>
      </li>
      <li>
      <div className='box'>
      <div className='content'>
        <h3>Task 2: Ball Bouncing Control with Buttons</h3>
        <ul className='list'>
          <li>Create a ReactJS page with 8 buttons on it.</li>
          <li>On the centre part, there will be a phaser component.</li>
          <li>On the phaser component, there will be a ball which will be keep bouncing in walls.</li>
          <li>Pressing on each button will lead the ball to bounce at the wall near to the button.</li>
        </ul>
        </div>
         <div className='card'>
                <Link className='boxer' to="https://phaser-task-2-gray.vercel.app/" target='_blank'><img src="/image/Phaser/Phaser task 2.png" alt="logo" height={220} width={450} /><figcaption> click the image</figcaption></Link>
                
                </div>
        </div>
      </li>
      <li>
      <div className='box'>
      <div className='content'>
          <h3>Task 3: Build a Real-Time Admin and Viewer Control</h3>
          <ul className='list'>
             <li>When 1st user click on link then it will be become admin or you
can use a button for going to admin page but at a time only one
can be admin.</li>
             <li>When admin already has already opened the link then other
             clicked users will be viewers.</li>
             <li>When admin click on any button to move the ball then the users
             can see which button was clicked and ball movement too.</li>
             <li>Viewers cannot click on any buttons.</li>
             <li>Viewers and admin will see the buttons clicks on top like- Button clicked( 5-2-6 ..... ) Use socket.io for connectivity give the code with 8 buttons</li>
           </ul>       
        </div>
         <div className='card'>
                <Link className='boxer' to="https://silver-cassata-1c58c6.netlify.app/" target='_blank'><img src="/image/Phaser/Phaser task 3.png" alt="logo" height={220} width={450} /><figcaption> click the image</figcaption></Link>
                
                </div>
        </div>
      </li>
      <li>
      <div className='box'>
      <div className='content'>
        <h3>Task 4: Implementing Asset Loading, Scene Management, and Image Visibility Toggling</h3>
        <ul className='list' style={{marginleft: '20px'}}>
          <li>Loading assets(images,sound and JSON file) in phaser.</li>
          <li>Creating scenes in phaser</li>
          <li>Loading an image and adding it to a container and destroying it.</li>
          <li>Load an image and do alternate hide and show with a delay of 2
          seconds.(use update function) give the react code without error</li>
        </ul>
        </div>
         <div className='card'>
                <Link className='boxer' to="https://phasertask-4.vercel.app/" target='_blank'><img src="/image/Phaser/Phaser task 4.png" alt="logo" height={220} width={450} /><figcaption> click the image</figcaption></Link>
                
                </div>
        </div>
      </li>
      <li>
      <div className='box'>
      <div className='content'>
        <h3>Task 5: Image Layering, Text Overlay, and Container Management</h3>
        <ul className='list'>
          <li>Load an image and add text over that image.</li>
          <li>Now load
another image and keep this image below the text and 1st image.
(Use setdepth()).</li>
          <li>Then, add the above image and text into a
          container.</li>
          <li>Destroy the above container over mouse click. give
          the code for react.js in phaser</li>
          
        </ul>
        </div>
         <div className='card'>
                <Link className='boxer' to="https://phasertask-5.vercel.app/" target='_blank'><img src="/image/Phaser/Phaser task 5.png" alt="logo" height={220} width={450} /><figcaption> click the image</figcaption></Link>
                
                </div>
        </div>
      </li>
      <li>
      <div className='box'>
      <div className='content'>
        <h3>Task 6: Tween Animation, Image Replacement, and Destruction</h3>
        <ul className='list'>
          <li>Define tween and move an image from one position to another.</li>
          <li>After completion destroy that image .</li>
          <li>Add another image on same position and show that image after
          destroying previous image.</li>
        </ul>
        </div>
         <div className='card'>
                <Link className='boxer' to="https://phasertask-6.vercel.app/" target='_blank'><img src="/image/Phaser/Phaser task 6.png" alt="logo" height={220} width={450} /><figcaption> click the image</figcaption></Link>
                
                </div>
        </div>
      </li>
      <li>
      <div className='box'>
      <div className='content'>
        <h3>Task 7: Canva Game</h3>
        <ul className='list'>
          <li>Create a ReactJS page with a color picture on it.</li>
          <li>On the centre part, there will be a phaser component.</li>
           <li>On the phaser component, there will be a ball which will be keep bouncing in walls.</li>
           <li>Pressing on each button will lead the ball to change color at the pause  and play to the button.</li>
           <li>On the phaser component, there will be a change the color in play and pause is not change the color which will be play.</li>
        </ul>
        </div>
         <div className='card'>
                <Link className='boxer' to="https://react-canva-game.vercel.app/" target='_blank'><img src="/image/Phaser/Phaser task 7.png" alt="logo" height={220} width={450} /><figcaption> click the image</figcaption></Link>
                
                </div>
        </div>
      </li>
     </ul>
      
    </div>
    </div>
    </div>
  )
}

export default Phaser