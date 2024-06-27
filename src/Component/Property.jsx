
import '../App.css'

const Property = () => {


  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100">
      <h1 className="text-3xl font-bold mb-2">
        Driving Property Inquiries to Conversions
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Streamlined Strategies for Real Estate Success
      </p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="  rounded-lg p-6 w-11/12 md:w-2/3 ml-16 lg:w-1/2 h-[12vh]">
          <img style={{height : '50vh'}} src="done.png"  alt="" />
        </div>

        <div className='border-2 gap-2 m-2 w-[35vw]'>
          <h2 className="text-2xl font-bold mb-2">
            Optimized Path to Property Purchase
          </h2>

          <p className="text-gray-600 ">
            In the dynamic realm of real estate, the journey from a property
            inquiry to a successful conversion demands a well-crafted approach.
            At Osumare, we specialize in guiding potential buyers through this
            journey seamlessly, maximizing inquiries-turned-conversions with
            expert strategies.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full w-[15vw] mt-16">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Property;
