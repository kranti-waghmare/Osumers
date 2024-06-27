import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Info = () => {
    const [qdata, setQdata] = useState({});

    const Handeldrop = (idx) => {
        setQdata(data => ({
            ...data,
            [idx]: !prevState[idx]
        }));
    };

    const faqs = [
        {
            question: "How does Osumare measure campaign success?",
            answer: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand."
        },
        {
            question: "3. How does Osumare measure campaign success?",
            answer: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand."
        },
        {
            question: " 3. How does Osumare measure campaign success? ",
            answer: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand."
        }
    ];

    return (
        <div className="p-8 bg-gradient-to-b from-blue-50 to-white">
            <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-r from-blue-50 to-red-50">
                <h2 className="text-xl font-bold mb-2">What Our Pharma Partners Say</h2>
                <p className="text-gray-600 mb-8">Driving Transformations, One Brand at a Time</p>

                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center" style={{width:"50%"}}>
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                        <div className="relative w-48 h-48 md:w-64 md:h-64">


                            <img 
                                src="formal.png" 
                                alt="faceimage" 
                                className="rounded-lg object-cover w-full h-full"
                            />


                            <button className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white rounded-full p-2 shadow-md">
                                    <svg 
                                        xmlns="http://www.w3.org/for/svgf" 
                                        className="h-8 w-8 text-blue-600" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M14.752 11.168l-4.192 2.41A1 1 0 0110 12.67V8.33a1 1 0 011.56-.826l4.192 2.41a1 1 0 010 1.652z" 
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="md:ml-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center mb-2">
                            <img 
                                src="formal.png" 
                                alt="Tabish Khan" 
                                className="rounded-full w-10 h-10 object-cover mr-2"
                            />
                            <div className="text-lg font-bold">Tabish Khan</div>
                        </div>
                        <blockquote className="text-gray-600">
                            Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.
                        </blockquote>
                    </div>
                </div>

                <div className="flex space-x-4 mt-8">
                    <button className="p-2 bg-white rounded-full shadow-md ">
                    <FaArrowLeft style={{backgroundColor : 'white' , color : 'blue'}} />
                     
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md">
                    
                    <FaArrowRight style={{backgroundColor : 'white' , color : 'blue'}}  />
                  
                        
                    </button>
                </div>
            </div>

            <section className="text-center">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Pinpoint your audience with precision, ensuring your marketing efforts reach <br /> those most likely to
                    engage with your brand.
                </p>
                <div className="max-w-2xl mx-auto">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-lg mb-4">
                            <div className="border-b border-gray-200 pb-4 mb-4">
                                <button
                                    className="w-full text-left text-lg font-semibold text-blue-700 flex justify-between items-center"
                                    onClick={() => Handeldrop(idx)}
                                >
                                    <span>{item.question}</span>
                                    <span>{qdata[idx] ? '-' : '^'}</span>
                                </button>
                            </div>
                            {qdata[idx] && (
                                <div className="text-left text-gray-700">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Info;
