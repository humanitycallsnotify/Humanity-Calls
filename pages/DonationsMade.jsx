import React from "react";
import SEO from "../components/SEO";

const DonationsMade = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Donations Made | Humanity Calls NGO"
        description="View the donations made by our dedicated members at Humanity Calls NGO. Join us in making a difference."
      />

      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-none">
          DONATIONS MADE BY
          <br />
          <span className="text-blood-red">OUR MEMBERS</span>
        </h1>
      </div>

      {/* Rest of the page left blank as requested */}
    </div>
  );
};

export default DonationsMade;
