import React from "react";
import "./header.css";
import {BiMenuAltRight} from 'react-icons/bi'
import { useState } from "react";
const header = () => {
  const[clicked,setClicked]=useState(false);
  const getMenuStyle=(clicked)=>{
    if(document.documentElement.clientWidth <= 800){
      return(
        {
          right:!clicked && "-100%"
        }
      )
    }
  }
  
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter innerWidth paddings ">
        <img src="./logo.png" alt="logo" width={100} />
        <div className=" flexCenter h-menu " style={getMenuStyle(clicked)} >
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contacts</a>
          </button>
        </div>
        <div className="menu-icon" onClick={()=>setClicked((prev)=>!prev)}>
        <BiMenuAltRight size={30} ></BiMenuAltRight>
      </div>
      </div>
     
    </section>
  );
};

export default header;
