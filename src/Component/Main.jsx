import React from 'react';
import Services from './Services';
import Navigation from './Navigation';
import Property from './Property';
import Landing from './Landing';
import Info from './Info';
import Footer from './Footer'
import Action from './Action';
import Contact from './Contact';

function Main() {

  return (
    <>

    <div className='mt-10 ml-20 mr-20 '>
      <div className='flex bg-white-600 h-16 w-full items-center p-4'>
        <div className='flex items-center'>
          <img src="Osumarelogo.png" alt="Osumare logo" className='h-16 w-auto' />
        </div>
        <div className='ml-auto text-black border-2 border-black p-2 red rounded-xl'>
          Contact Us
        </div>
    </div>



    <div className='text-center mt-20' style={{ backgroundImage: "url('Ellipse.png')" }}>
      <p className='text-2xl'>Elevate  <span className='text-blue-600 font-bold'> Real Estate Success </span> with  <br /> 
      Osumare's Digital Expertise</p>


      <p className='text-sm'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
    <button className='bg-blue-600 p-1.5 rounded-2xl mt-3 text-white ' style={{width:"15rem"}}>Get Started </button>
    </div>


    <div className='flex items-center justify-center'>
        <img src="wemakem.png" alt="wemakelogo" style={{ height: "20rem", width: "25rem" }} />
      </div>
<br />


<p className='flex justify-center items-center p-12'> <b> Real Estate-Focused Digital Mastery</b></p>


<div className='flex justify-start' style={{width:"100%", height:"100%", justifyContent:"space-around"}}>
  <img src="Ldesign.png" alt="Landing Logo"  style={{width:"15rem", height:"15rem"}}/>
  


  <div className=' justify-center'>
  <p className='flex'>Unlock the Potential of Digital Real Estate Excellence</p>
  <p>At Osumare, we understand that the real estate landscape  <br />
  demands a digital presence that aligns with the intricacies of <br /> property marketing. Our range of specialized services is <br /> meticulously designed to catapult your brand's success in the <br /> ever-evolving digital property market.</p>
<button className='bg-blue-500 rounded-xl p-1 m-2 text-white'>Get Started</button>
  </div>


</div>



<Services/>

<Navigation/>

<Property/>

<Landing/>

<Action/>

<Info/>
<Contact/>
<Footer/>



      </div>
    </>
  );
}

export default Main;
