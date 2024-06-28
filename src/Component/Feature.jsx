import React from "react";
import { services } from "../Config/db";

const Services = () => (
  <div style={{ background: "rgba(249, 249, 249, 1)" }}>
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-7">
        Our Service Offerings
      </h2>
      <p className="text-xl text-center mb-12">
        Strategies that Drive Property Market Excellence
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item, i) => (
          <div key={i} className="border p-4 rounded-lg text-center shadow-md">
            <div className="text-4xl mb-3"><img src={item.iconimg} alt="img" style={{marginLeft:"50%"}} /></div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-blue-600 colorchange text-white px-7 py-2 rounded-full w-[13vw] p-3 h-[7.5vh] shadow-lg hover:bg-blue-700 transition">
          Get started
        </button>
      </div>
    </div>
  </div>
);

export default Services;
