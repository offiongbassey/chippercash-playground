'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMoneyBill, CiShare2 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { PiUserCirclePlus } from "react-icons/pi";
import { LuFiles } from "react-icons/lu";
import LinkSpan from "../../LinkSpan";
import { useMotionValue, useTransform, motion} from "framer-motion";

type Hero3DItemsProps = {
  title: string;
  children: React.ReactNode;
  variant: string;
};

const Hero3DItems = ({ title, children, variant }: Hero3DItemsProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 items-center">
      <div className="flex">
        <span className={`p-6 ${variant === "purple" ? "bg-purple-30" : variant === "blue" ? "bg-blue-500" : variant === "pink" ? "bg-pink-600" : "bg-green-20"} rounded-full`}>{children}</span>
      </div>
      <p className="max-w-[100px] text-xs md:text-sm text-center">{title}</p>
    </div>
  );
};

const Hero3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div className="bg-purple-10">
      <div className="flex flex-col items-center justify-center padding-container max-container py-10 md:py-20 text-white gap-5">
        <h2 className="text-xl md:text-4xl font-[600] lg:max-w-[867px] leading-[140%] text-center">
          With Chipper ID, we are supercharging user verification on the
          continent.
        </h2>
        <Link href="/">
          <LinkSpan text="Discover Chipper ID" variant="green" />
        </Link>

        {/* 3D Chipper Id */}
        <motion.div 
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        className="bg-hero-bg bg-contain bg-no-repeat p-6 lg:p-12">
          <Image src="/hero3d.png" alt="3d" width={850} height={850} />
        </motion.div>
        {/* 3D Chipper ID ends here */}

        <div className="grid grid-cols-3 md:grid-cols-5 gap-14 lg:gap-32">
          <Hero3DItems title="Competitive Pricing" variant="green">
            <CiMoneyBill
              color="white"
              className="absolute -mt-5 -ml-10"
              size={70}
            />
          </Hero3DItems>
          <Hero3DItems title="Network Effects" variant="purple">
            <CiShare2
              color="white"
              className="absolute -mt-5 -ml-10"
              size={70}
            />
          </Hero3DItems>
          <Hero3DItems title="Easy SDK Integration" variant="pink">
            <LuFiles
              color="white"
              className="absolute -mt-5 -ml-10"
              size={50}
            />
          </Hero3DItems>
          <Hero3DItems title="Easy for End Users" variant="purple">
            <GoPeople
              color="white"
              className="absolute -mt-5 -ml-10"
              size={50}
            />
          </Hero3DItems>
          <Hero3DItems title="End-to-End KYC" variant="blue">
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
