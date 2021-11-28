import React from "react";
import "../Style/formInput.css";

const landing = ()=>{
    return(
        <section>
        {/* <input type="checkbox" id="check"> */}
        <header>
      
          <h2><a href="index.html" class="logo">DAILY EXPENSE TRACKER</a></h2>
          <div class="navigation">
            <a href="index.html">Home</a>
             {/* <a href="servicesnew.html">Services</a> */}
            <a href="why.html">Why Daily expenses Tracker</a>
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
          </div>
          <label for="check" >
          <i class="fas fa-bars menu-btn"></i>
          <i class="fas fa-times close-btn"></i>
          </label>
        </header>
        <div class="content">
          <div class="info">
            <h2>Daily Expense <span>Tracker System</span></h2>
            <p>Welcome to DAILY EXPENSE TRACKER SYSTEM, With the help of our expense tracker you can manage your expenses on a daily,weekly and monthly basis. And have a record where u spend your earnings</p>
            <div class="btn">
            <a href="login.html" class="info-btn">Sign in</a>
            <a href="register.html" class="info-btn">Sign up</a>
          </div>
          </div>
        </div>
       
      </section>
    )
}

export default landing;


    
    {/* <link rel="stylesheet" href="style.css"> */}
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"> */}
  

   

  

