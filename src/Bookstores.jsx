import React from "react";
import "./bookstores.css"
import Dictionary from "./dictionary";
import { Link } from "react-router-dom";

export default function Bookstores() {

  return( 
    <div>

<nav>
        <span className="icon">
          <Link to="/homepage"> <i className="fa-solid fa-ellipsis"></i></Link>
          <i className="fa-solid fa-share-nodes"> </i>
            <i className="fa-sharp fa-solid fa-bookmark"></i>
         
        </span>
        <div className="title">PROLOGUE
        <div className="sm-txt">stay updated with the latest in literature</div></div>
          <div className="card">
           <Dictionary />
        </div>
     
      </nav>

<img src="https://user-images.githubusercontent.com/114012059/236684545-d1d7b36b-320a-4d51-af5a-235bc4113017.jpg" alt="book tunnel" 
className="hero" />
        <div 
        className="title-main">
<div>around the world with books </div>
<p 
className="subtext">featuring our favorite bookstores from around world. </p>
</div>


<main className="pg-layout">
   
    <section 
    className="pg-container">
      <div 
      className ="desc"> 
       <div 
       className="name">Ler Devager </div>
          <div 
          className = "location">LISBON</div>
            <div 
            className="caption">
            <div>A former printing space gave life to a bookstore where the goal is to give those who like to read, everything they could ever ask for. But this space is not just a bookstore, here you can attend concerts, exhibitions and events.</div>
          </div>
          {/* <button>VISIT</button> */}
        </div>
          <img src="https://user-images.githubusercontent.com/114012059/236684548-93dd6080-cefa-4f00-b674-32b0094456d8.jpg" 
          className="image-container" alt="staircase" width="700px"  ></img>
</section>


<section 
className="pg-container">
      <div 
      className ="desc"> 
          <div 
          className="name"> Cafebrería El Péndulo </div>
              <div 
              className = "location">Mexico City</div>
                <div 
                className="caption">
                <div> Cafebrería El Péndulo will stir up your imagination, and there is plenty to see as you stir your coffee.</div>
                </div>
                {/* <button>VISIT</button> */}
      </div>
          <img src="https://user-images.githubusercontent.com/114012059/236684536-a38912f9-9b99-40ea-b45b-7b2fb0b764f4.jpg" alt="staircase" width="700px" />     
    </section>


<section 
className="pg-container">
  <div 
  className="desc"> 
        <div 
        className="name">
          The House of Common Sense </div>
            <div 
            className="location"> New York City </div>
        
              <div 
              className="caption">
              <div>Founded by Lewis H. Michaux in 1932, the African National Memorial Bookstore stimulated a generation of students, intellectuals, writers and artists.</div>
              </div>
              {/* <button>VISIT</button> */}
             </div>
        <img src="https://user-images.githubusercontent.com/114012059/236684542-fe711e91-4fd3-4d18-9f5a-18ff396ec9e4.jpg" width="700px"  />
 
          </section>

          <section 
          className="pg-container">
       <div 
       className="desc">
              <div 
              className="name">Zhongshuge </div>
              <div 
              className ="location">Chongqing City</div>
              <div 
              className = "caption">
              To those that are seeking both pleasures and insights, Zhongshuge goes above an beyond to create a unique experience for any booklover
              </div>
               {/* <button>VISIT</button> */}
              </div>

            <img src="https://user-images.githubusercontent.com/114012059/236684550-853342a6-0b2c-4c76-91b9-d66862cf82e5.jpg" alt="inside of bookstore"  width="700px" 
            className="image-container" />
         
          </section>

</main>

</div>
  )
}