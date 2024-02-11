import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMoneyBill, CiShare2 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { PiUserCirclePlus } from "react-icons/pi";
import { LuFiles } from "react-icons/lu";
import LinkSpan from "../LinkSpan";

type Hero3DItemsProps = {
  title: string;
  children: React.ReactNode;
  variant: string;
};

const Hero3DItems = ({ title, children, variant }: Hero3DItemsProps) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex">
        <span className={`p-6 bg-${variant} rounded-full`}>{children}</span>
      </div>
      <p className="max-w-[100px] text-xl md:text-sm text-center">{title}</p>
    </div>
  );
};

const Hero3D = () => {
  return (
    <div className="bg-purple-10">
      <div className="flex flex-col items-center justify-center padding-container max-container py-20 text-white gap-5">
        <h2 className="text-4xl font-[600] lg:max-w-[867px] leading-[140%] text-center">
          With Chipper ID, we are supercharging user verification on the
          continent.
        </h2>
        <Link href="/">
          <LinkSpan text="Discover Chipper ID" variant="green-30" />
        </Link>

        <div className="bg-hero-bg bg-contain bg-no-repeat p-6 lg:p-12">
          <Image src="/hero3d.png" alt="3d" width={850} height={850} />
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-5 gap-14 lg:gap-32">
          <Hero3DItems title="Competitive Pricing" variant="green-20">
            <CiMoneyBill
              color="white"
              className="absolute -mt-5 -ml-10"
              size={70}
            />
          </Hero3DItems>
          <Hero3DItems title="Network Effects" variant="purple-700">
            <CiShare2
              color="white"
              className="absolute -mt-5 -ml-10"
              size={70}
            />
          </Hero3DItems>
          <Hero3DItems title="Easy SDK Integration" variant="pink-600">
            <LuFiles
              color="white"
              className="absolute -mt-5 -ml-10"
              size={50}
            />
          </Hero3DItems>
          <Hero3DItems title="Easy for End Users" variant="purple-700">
            <GoPeople
              color="white"
              className="absolute -mt-5 -ml-10"
              size={50}
            />
          </Hero3DItems>
          <Hero3DItems title="End-to-End KYC" variant="blue-500">
            <PiUserCirclePlus
              color="white"
              className="absolute -mt-5 -ml-10"
              size={60}
            />
          </Hero3DItems>
        </div>
      </div>
    </div>
  );
};

export default Hero3D;
