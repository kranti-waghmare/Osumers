const Action = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-2xl font-bold mb-4">Our Expertise in Action </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="flex flex-col items-center text-center p-4">
          <img
            src="finger.png"
            alt="finger logo"
            className="mb-3 border-2 rounded-full p-6  bgchange"
          />
          <h2 className="text-xl font-bold mb-2">Effective CTAs</h2>
          <p className="text-gray-600">
            See how our strategic CTAs drove a significant increase in property
            inquiries and accelerated sales for a real estate agency.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 ">
          <img src="logo.png" alt="logo" className="mb-3  " />
          <h2 className="text-xl font-bold mb-2">
            Conversion-Optimized Landing Pages
          </h2>
          <p className="text-gray-600">
            Explore a case study where our landing page optimization increased
            property lead conversion rates by 30%
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4  ">
          <img src="hand.png" alt="hand3" className="mb-4 " />
          <h2 className="text-xl font-bold mb-2">
            Trust Building with Social Proof
          </h2>
          <p className="text-gray-600">
            Discover how leveraging client testimonials boosted buyer
            confidence, leading to higher conversion rates for a property
            development project
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 ">
          <img
            src="circleboy.png"
            alt="logo"
            className="mb-3 border-2 rounded-full p-6  bgchange"
          />
          <h2 className="text-xl font-bold mb-2">Mobile-First Success:</h2>
          <p className="text-gray-600">
            Learn how our mobile-responsive design approach resulted <br /> in a
            25% increase in inquiries <br />
            from mobile users for a real estate agency..
          </p>
        </div>
      </div>

      <div
        style={{
          width: "25rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-2xl ml-[30%] font-bold mb-4">
          {" "}
          <br />
          Your peace of mind{" "}
        </h1>
        <h3 className="text-center w-[37vw]">
          Through our conversion-focused strategies, we ensure that property
          seekers are not just visitors, but engaged prospects ready to make
          their next move in the real estate market
        </h3>
      </div>

      <button className="bg-blue-500 text-white py-2 px-4 ml-12 rounded-full w-[13vw] h-[7.5vh] mt-7">
        Get started
      </button>
    </div>
  );
};

export default Action;
