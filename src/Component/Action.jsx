const Action = () => {
    return (


        
      <div className="flex flex-col items-center justify-center py-8">



        <h1 className="text-2xl font-bold mb-4">
        Our Expertise in Action </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="flex flex-col items-center text-center p-4">
            <img src="v1.png" alt="v6 logo" className="mb-3 " />
            <h2 className="text-xl font-bold mb-2">
            Effective CTAs
            </h2>
            <p className="text-gray-600">
            See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.
            </p>
          </div>
  
          <div className="flex flex-col items-center text-center p-4 ">
            <img src="v2.png" alt="v2logo" className="mb-3  " />
            <h2 className="text-xl font-bold mb-2">Conversion-Optimized Landing Pages</h2>
            <p className="text-gray-600">
            Explore a case study where our landing page optimization increased property lead conversion rates by 30%
            </p>
          </div>
  
          <div className="flex flex-col items-center text-center p-4  ">
            <img src="v3.png" alt="logov3" className="mb-4 " />
            <h2 className="text-xl font-bold mb-2">Trust Building with Social Proof</h2>
            <p className="text-gray-600">
            Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project
            </p>
          </div>
  
          <div className="flex flex-col items-center text-center p-4 ">
            <img src="v4.png" alt="v3logo" className="mb-4" />
            <h2 className="text-xl font-bold mb-2">Mobile-First Success:</h2>
            <p className="text-gray-600">
            Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency..
            </p>
          </div>
        </div>





        <div style={{width:"25rem", justifyContent:"center", alignItems:"center"}}>
        <h1 className="text-2xl font-bold mb-4"> <br />
        Our Expertise in Action        </h1> 
        <h3>
            
        Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market
        </h3>
        </div>


        <button className="bg-blue-400 text-white px-7 py-2 rounded-lg ">
          Get started
        </button>

      </div>
    );
  };
  
  export default Action;
  