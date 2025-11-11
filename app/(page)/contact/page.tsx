import React from "react";
import ContactPageP1 from "../../Components/ContactPageP1";
import FormCard from "../../Components/FormCard";
import GetInTouch from "../../Components/GetInTouch";


const page = () => {
  return (
    <>




      <div className=" w-full h-screen ">


        {/* contact page section one */}
        <ContactPageP1 />
        {/* contact page section one */}


        
        {/* contact page section tow */}
        <div className="w-full h-screen flex justify-center gap-[136px] ">


          {/* Send Us a Message */}
            <FormCard />
          {/* Send Us a Message */}




          {/* Get in Touch */}
          <GetInTouch/>          
          {/* Get in Touch */}





        </div>
        {/* contact page section tow */}


      </div>






    </>
  );
};

export default page;
