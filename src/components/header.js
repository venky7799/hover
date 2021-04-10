import React, { useEffect,useState } from "react";
import gsap from "gsap";
import $ from "jquery";
const Header= ()=>{

        gsap.to(".project-preview",{width:0});
        const t1= gsap.timeline();
        

        
        function mouseIn(e){
                var el0_up = document.getElementsByClassName('project-preview');
                console.log(e.target.parentElement.attributes.class.ownerElement.classList[1]);
                t1.to(".project-preview",{width:"600px",ease:"Expo.easeInOut",duration:1, immediateRender: false});
            
            
            if ( e.target.parentElement.attributes.class.ownerElement.classList[1] === "navigation-link-1"){
                function a  () {
                $(".project-preview").css({"background":'url("static/media/img-1.c2269889.jpg")'});
                    console.log(el0_up);
                
                }
                a();
               
            }
            else if ( e.target.parentElement.attributes.class.ownerElement.classList[1] === "navigation-link-2"){
                function a  () {
                $(".project-preview").css({"background":'url("static/media/img-2.87d2cb7d.jpg")'});
                    console.log(el0_up);
                
                }
                a();
               
            }
            else if ( e.target.parentElement.attributes.class.ownerElement.classList[1] === "navigation-link-3"){
                function a  () {
                $(".project-preview").css({"background":'url("static/media/img-4.fa1a39d4.jpg")'});
                    console.log(el0_up);
                
                }
                a();
               
            }
            else if  ( e.target.parentElement.attributes.class.ownerElement.classList[1] === "navigation-link-4"){
                function a  () {
                    const image = require('../assets/' + "img-5" + '.jpg');
                    $(".project-preview").css({"background":'url("static/media/img-5.19b9ceb2.jpg")'});
                        console.log({image});
                       
    
                    }
                    a();
            }

            //to avodi if photo stays open for too log      
            const ss =()=>{
                setTimeout(function() {
                    if( $(".project-preview").css({"width":'600px'}))
                    t1.to(".project-preview",{width:"0px"});
                },5000)
               
            }
            ss();

           
        };

        function mouseOut(f) {
            const t1= gsap.timeline();
                t1.to(".project-preview",{
                    duration:0.5,
                    width:0,
                    ease:"Expo.easeInOut", immediateRender: false
                    })
        };

       
          $(Window).scroll(function() {
              var scroll =$(window).scrollTop();
              var dh= $(document).height();
                var wh =$(window).height();
              let scrollPercent =(scroll/(dh-wh)) *100;
              $(".progressbar").css("height",scrollPercent +"%");
          })

        
    return(
        <div>
            <section className="navigataion-wrapper">
                <div className="project-preview-wrapper">
                    <div className="project-preview"></div>
                </div>
                <ul className="navigation-list">
                    <li WhileHo onMouseOver={mouseIn} onMouseOut={mouseOut} className="navigation-item">
                        <a href="/" className="navigation-link navigation-link-1">
                            <span data-text="Mouthwash">Mouthwash</span>
                        </a>
                    </li>
                    <li  onMouseOver={mouseIn}  onMouseOut={mouseOut} className="navigation-item">
                        <a href="/"   className="navigation-link navigation-link-2">
                            <span data-text="Offbeat">Offbeat</span>
                        </a>
                    </li>
                    <li onMouseOver={mouseIn} onMouseOut={mouseOut} className="navigation-item">
                        <a  href="/"className="navigation-link navigation-link-3">
                            <span data-text="Expansions">Expansions</span>
                        </a>
                    </li>
                    <li onMouseOver={mouseIn} onMouseOut={mouseOut} className="navigation-item">
                        <a  href="/" className="navigation-link navigation-link-4">
                            <span data-text="canals">canals</span>
                        </a>
                    </li>
                  
                    <li className="navigation-item">
                        <a href="/" className="navigation-link navigation-link-5">
                            <span data-text="Charger">Charger</span>
                        </a>
                    </li>
                    <li className="navigation-item">
                        <a href="/" className="navigation-link navigation-link-6">
                            <span data-text="Unlocked">Unlocked</span>
                        </a>
                    </li>
                    <li className="navigation-item">
                        <a href="/" className="navigation-link navigation-link-7">
                            <span data-text="Craft">Craft</span>
                        </a>
                    </li>
                </ul>
            </section>

            <section className="big">
                <div className="tall">
                    adf asdf <br></br>adsf
a                </div>
            </section>
            <section className="big">
                <div className="tall">
                    adf asdf <br></br>adsf
a                </div>
            </section>
            <div className="progressbar"></div>
        </div>
    )
}


export default Header;