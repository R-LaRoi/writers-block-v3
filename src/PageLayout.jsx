import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css"
import Dictionary from "./dictionary"

export default function PageLayout() {

  return (
<section className="layout">
<nav>
        <span className="icon">
          {/* <Link to="/homepage"> <i className="fa-solid fa-ellipsis"></i></Link> */}
          <i className="fa-solid fa-share-nodes"> </i>
            <i className="fa-sharp fa-solid fa-bookmark"></i>
         
        </span>
        <div className="title">PROLOGUE
        <div className="sm-txt">stay updated with the latest in literature</div></div>
          <div className="card">
           <Dictionary />
        </div>
     
      </nav>

     <div className="line"></div>
    
    <div className="container">
    

      <div className="img-one">
        <img
          src="https://user-images.githubusercontent.com/114012059/236660295-24cb8935-579f-49b0-a9bd-af50ecb58246.jpg"
       className="bookstore"/>

      </div>
       <div className="desc">
        <div style={{fontSize: "2rem", fontFamily:'Archivo Black'}}> Around The World With Books <br/>
      <span className="location">Ler Devager |
LISBON</span>  </div>
<div className="bk-desc">
Reading is still a state of mind, and this place reflects that state perfectly – it seems like imagination truly came through here. This space has a history of change and has always had a hard life: from its origin in Bairro Alto, it moved from place to place, until it was finally accepted in one of the city’s coolest places, LX Factory.

A former printing space gave life to a bookstore where the goal is to give those who like to read, everything they could ever ask for. But this space is not just a bookstore, here you can attend concerts, exhibitions and events. 
<br/>
{/* <Link to="/bookstores"><button>see more</button></Link> */}
</div>
</div>  



      <div className="content-1">
        <div className="article-title">
          <div className="sm-txt">prologue picks</div>
          books our readers loved
        </div>
      </div>
      <div className="content-2">
        What would you like to read? <br />
        explore our recommendations from our favorite writers and reders.
      </div>

      <div className="col-3 bk-img">
        <img
          src="https://user-images.githubusercontent.com/114012059/236661927-45a067c0-a6eb-49d3-a9c1-a275f25c6ec9.jpg"
        />
      </div>

      <div className="col-4 bk-img">
        <img
          src="https://user-images.githubusercontent.com/114012059/236661928-e340e9a5-3d37-4bda-84f1-8236b9f42cc5.jpg"
        />
      </div>
      <div className="col-5 bk-img">
        <img
          src="https://user-images.githubusercontent.com/114012059/236662197-79ab07cb-df4c-4676-8bb0-4b34193e7f86.jpg"
          alt=""
       
        />
      </div>

      <div className="col-6 bk-img">
        <img
          src="https://user-images.githubusercontent.com/114012059/236661932-aabe590d-03d7-4e2b-af2d-7c0aafe84b0e.jpg"
        />
     
      </div>

      <div className="wide-img">.</div>

      <div className="part-3">
      <div className="sm-txt">she said</div>
      <blockquote>
        "Cultural criticism is the way we contextualize the media that we
        consume. We tend to do it based on who we are, and what we prefer and
        our identity.""
      </blockquote>
    </div>
    <div className="img-part-3">
      <img
        src="https://user-images.githubusercontent.com/114012059/236663959-8d35fcdc-c88c-4b71-ae83-0dfc30ffb631.jpg"
        width="700px"
        className="rg-img"
      />
      <div className="desc">
        Roxane Gay is the New York Times Bestselling author of The Bad Feminist
        and other books and publications, a professor, editor, and social
        commentator.
      </div>
</div>
     
    </div>
 <Outlet/>
</section>


)}