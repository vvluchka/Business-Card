import React from "react";


export default function Info(){

  return(
  
    <section class = "info">

      <img src="/img/avatar/photo_2022-03-15_20-26-41.jpg" class="userAvatar"/>

      <h1 class="username">Vasyl Luchka</h1>

      <h3 class = "vacation">Student</h3>

      <a class = "link" href="https://www.youtube.com/watch?v=c_IcRU-svMo" target="_blank">click me</a>

      <ul class = "buttons">
        <li  id = "emailBtn">
          
          <a href = "https://mail.google.com/mail/u/0/#inbox" class = "infoButtons" target="_blank"> 
            <img src = "/img/icons/mailbox-logo.svg"/>Email
          </a>
        </li>        
        <li  id = "linkedInBtn">
          
          <a href = "https://www.linkedin.com/in/vasyl-luchka-7141081bb/" class = "infoButtons" target="_blank"> 
            <img src = "/img/icons/linked-in-logo.svg"/> LinkedIn
          </a>
        </li>        
      </ul>

    </section>
  )
}