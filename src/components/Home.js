import React from 'react'
import "./css/Home.css"
const Home = () => {
  return (
    <div className='home'>
      <div className='image'>
      <img src="/image/rk.jpg" alt="harikaran" />
      <div className='text'>
        <p>I am <span>Harikaran</span> , I am  Software Intern at <span>Mobzway Technologies!</span> This journey has been nothing short of transformative, allowing me to expand my skill set, collaborate with a brilliant team, and work on impactful projects. My experience includes Frontend Development: React.js, Redux, Phaser.js – Building dynamic, interactive, and user-friendly interfaces and Backend Development: Node.js, Express.js – Creating robust, scalable server-side solutions.
        Database Management: MongoDB, Firebase – Designing efficient data structures and ensuring seamless data flow. Real-time Communication: Socket.io – Implementing real-time functionalities like live user tracking and instant updates.</p>
        <p> Version Control & Collaboration: Git, GitHub – Managing codebases and collaborating effectively in a team environment. This internship has solidified my passion for software development and equipped me with the tools to take on new challenges in the tech industry. I’m excited to continue growing, learning, and contributing to projects that make a difference!, A massive shout-out to My HR Neha Tailor, for her constant support and guidance, and to the entire team at Mobzway Technologies for fostering such a nurturing and innovative environment.</p>
      </div>
      </div>
      <div className='about'>
      <h1>About us</h1>
        <ul>
          <li>Mobzway Technologies is an Indian game development company that specializes in building multiplayer games such as Poker, Rummy, Teen Patti, ludo, and casino games like Blackjack, Baccarat, Roulette, Slots, Dragon Tiger to mention a few.</li>
          <li>The Jaipur - headquartered game creator focuses on bringing the best of iGaming solutions for Android, iOS, and Windows platforms. The company also specializes in developing native mobile as well as HTML 5 based applications that are responsive to various browsers and platforms.</li>
          <li>With a client base spread over 15 countries across the globe, Mobzway has been able to successfully deliver numerous iGaming products to budding entrepreneurs and large-scale gaming ventures.</li>
          <li>The company optimally utilizes the technology with the help of its seasoned workforce to set world-class standards in the iGaming business. By incorporating the best of domain expertise, technology, creativity, and client-centric approach to our working culture, Mobzway is proud and happy to have helped multiple clients establish their iGaming brands.</li>
          <li>In the era of social media where buzzes are spread at a lightning-fast speed and business leap in no time, Mobzway ensures that high-quality social media compatible solutions can also be created to help our clients grow on these channels and influence the iGaming lovers as well as potential millennials.</li>
          <li>Backed by a team of visionary entrepreneurs, thought leaders, and most importantly, passionate and talented game developers, Mobzway has been able to live up to the commitments of delivering the rightful products to the clientele.</li>
        </ul>
      </div>
    </div>
  )
}

export default Home;