import React from 'react';

const Navigation = () => (

  
  <div className="max-w-7xl mx-auto px-4 py-16">
    <h2 className="text-4xl font-bold text-center mb-4">
      Navigating Real Estate's Digital Landscape
    </h2>
    <p className="text-xl text-center mb-12">
      Insights for Real Estate Marketing Advantage
    </p>
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-full md:w-1/2 px-4">
        <div className="border p-6 rounded-lg mb-6 shadow-md flex">
          <div className="text-3xl mr-4"><img src="star.png" alt="img" /></div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Market Trends Analysis</h3>
            <p>Predictive insights to guide real estate strategies.</p>
          </div>
        </div>
        <div className="border p-6 rounded-lg mb-6 shadow-md flex">
          <div className="text-3xl mr-4"><img src="butterfly.png" alt="img" /></div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Targeted Buyer Persona</h3>
            <p>Understand and connect with your ideal property buyers.</p>
          </div>
        </div>
        <div className="border p-6 rounded-lg mb-6 shadow-md flex">
          <div className="text-3xl mr-4"><img src="right.png" alt="img" /></div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Competitor Insights</h3>
            <p>Stand out in the property market with informed strategies.</p>
          </div>
        </div>
        <div className="border p-6 rounded-lg mb-6 shadow-md flex">
          <div className="text-3xl mr-4"><img src="searchlogo.png" alt="img" /></div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Visual Content Appeal</h3>
            <p>Captivate buyers with appealing visuals and immersive experiences.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 flex justify-center">
        <img
          src="chart.png"
          alt="Placeholder"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
);

export default Navigation;
