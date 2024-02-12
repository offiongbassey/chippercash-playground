import CardContext from "@/components/card/CardContext";
import CardImage from "@/components/card/CardImage";
import React from "react";

const SendMoney = () => {
  return (
    <>
      <section className="bg-gray-10 py-10">
        <div className="flex flex-col md:flex-row justify-between padding-container max-container">
          {/* Image section */}
          <CardImage title="sendMoney" image="/send_and_receive.png" />
          <CardContext
            title="Send Money Directly to Bank and Mobile Money Accounts in 21+ African Countries"
            desc="Sending money back home just got a whole lot easier with Chipper."
            color="purple"
            url="/"
          />
        </div>
      </section>

      <section className="bg-purple-30">
        <div className="flex items-center justify-between pl-10 lg:pl-36 max-container py-0">
          <div className="flex flex-1 flex-col py-[120px] items-start bg-mobile-ads bg-no-repeat bg-[220px] md:bg-[400px] lg:bg-[550px] bg-cover lg:bg-contain w-full h-[100%]">
            <h2 className="max-w-[450px] text-green-30 text-4xl md:text-5xl leading-[120%] mb-6 font-[600]">
              Shop, Stream, and Subscribe Online.
            </h2>
            <p className="text-white text-2xl max-w-[320px] md:max-w-[700px] font-[300]">
              Pay globally with the Chipper Card
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SendMoney;
