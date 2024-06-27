import React from 'react';
import { FaFacebookF, FaYoutube, FaPinterestP, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { ImTwitter } from 'react-icons/im';

const Footer = () => {
    return (
        <>
               <footer className="bg-blue-50 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img src="Osumarelogo.png" alt="Osumare logo" className="mb-4" style={{width:"7rem"}} />
                        <p className="text-gray-700 mb-4">
                            The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.
                        </p>


<br />

                        <div>
                            <h3 className="text-lg font-semibold mb-2">Address</h3>
                            <p className="text-gray-700">
                                Survey No. 43, Pathare<br />
                                Thube Nagar, Nagar Road, Kharadi, Pune-14,<br />
                                Maharastra, India.
                            </p>
 <br />
 
 <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                        <p className="flex items-center text-gray-700 mb-2">
                            <FiMail className="mr-2" /> hello@osumare.in
                        </p>


                        <p className="flex items-center text-gray-700">
                            <FiPhone  className="mr-2"/> +91 8459 8762 26
                        </p>

                            
                        </div>



                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Menu</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Work</li>
                            <li>Blog</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div>

                        <h3 className="text-lg font-semibold mt-6 mb-4">Social</h3>
                        <div className="flex space-x-4">


                            <div ><ImTwitter  style={{ color : 'black' , borderRadius : '100%', padding : '10px', height : '100%' , width : '100%'}}/></div>
                            <div><FaFacebookF  style={{color : 'black' , borderRadius : '100%', padding : '10px', height : '100%' , width : '100%'}}/></div>
                            <div ><FaYoutube  style={{ color : 'black' , borderRadius : '100%', padding : '10px', height : '100%' , width : '100%'}}/></div>
                            <div ><FaPinterestP  style={{ color : 'black' , borderRadius : '100%', padding : '10px', height : '100%' , width : '100%'}}/></div>
                            <div ><FaWhatsapp  style={{ color : 'black' , borderRadius : '100%', padding : '10px', height : '100%' , width : '100%'}}/></div>
                            <div ><FaInstagram  style={{ color : 'black' , borderRadius : '100%', padding : '10px', height : '100%' , width : '100%'}}/></div>
                        </div>
                    </div>
                </div>
               
            </div>

            
           
        </footer>
        <div className="text-center text-gray-700 mt-7 mb-5">
         © 2023 Osumare. All rights reserved.
     </div>
       
        </>
      
    );
};

export default Footer;
