"use client";

import ReviewModal from "@/components/modal/ReviewModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type CountryReviewProps = {
    review: string;
    review_date: string;
    country_image: string;
    country: string
}
const CountryReview = ({ review, review_date, country_image, country }: CountryReviewProps) => {
    return (
        <div className="p-4 border md:max-w-[340px] border-purple-100 shadow-xl rounded-3xl">
        <div className="flex gap-4 justify-between mb-5">
                <Image
                src="/star.svg"
                alt="star"
                width={129}
                height={16}
                />
                <Image
                src={country_image}
                alt={country}
                width={40}
                height={15}
                className=" rounded-md"
                />
        </div>
        <p className="font-[300] text-sm">{review}</p>
        <span className=" text-[12px] font-[200] text-[#496283]">{review_date}</span>
    </div>
    )
}

const Review = () => {
    const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="bg-white pb-10 md:pb-20">
        <div className="padding-container max-container items-center text-center flex flex-col gap-4 py-10 mt-0 md:mt-20">
            <h2 className="text-xl md:text-[28px] font-[600]">It’s the connections between us that power Chipper Cash</h2>
            <p className="font-[300] max-w-[630px]">As millions of customers on Chipper grow to even more, the possibilities of what we can achieve together are endless.</p>
        </div>

       <div className="px-4 md:px-20 lg:px-36 py-0 md:py-10">
            <div className="bg-review-bg bg-no-repeat py-10 items-center justify-center flex group cursor-pointer" onClick={() => setPlayVideo(true)}>
                    <Image
                        src="/review-img.png"
                        alt="review"
                        width={630}
                        height={400}
                        className="rounded-3xl"
                    />
                    <Image
                        src="/video-play-icon.svg"
                        alt="play"
                        width={120}
                        height={70}
                        className="absolute group-hover:p-[10px] group-hover:transition-all group-hover:duration-700 transition-all duration-700 p-[20px]"
                    />
                </div>
                {playVideo && <ReviewModal open={playVideo} setOpen={setPlayVideo} />}
       </div>

       <div className="flex flex-col md:flex-row gap-10 md:items-center lg:justify-between padding-container max-container">
        {/* Left side */}
            <div className="flex gap-4 md:gap-16 flex-col text-purple-10">
                <div>
                    <div className="bg-purple-20 p-[2px] w-8 rounded-full mb-1" />
                    <p className="text-sm md:text-sm font-[500] md:max-w-[380px]">Community powered by over 5 million users, and we are just getting started.</p>
                </div>
               <div className="flex gap-6 md:gap-16">
                    <div>
                        <h2 className="text-3xl md:text-[68px] font-[500] mb-4">4.5<span className="text-sm">out of 5</span></h2>
                        <Link href="/" className="flex gap-2 text-black-20 text-xs md:text-sm font-[500]">
                            <Image
                            src="/play-store-dark.svg"
                            alt="play-store"
                            width={20}
                            height={20}
                            />{" "}
                            Google Play
                    </Link>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-[68px] font-[500] mb-4">4.5<span className="text-sm">out of 5</span></h2>
                        <Link href="/" className="flex gap-2 text-black-20 text-xs md:text-sm font-[500]">
                            <Image
                            src="/apple-dark.svg"
                            alt="apple-store"
                            width={20}
                            height={20}
                            />{" "}
                            Apple Store
                    </Link>
                    </div>
               </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-center gap-4 md:gap-10">
                <div>
                    <CountryReview review='“The best virtual bank ever…I have been using since 2020 and gosh it’s so good… it’s fast and reliable…”' 
                    review_date="App store review, 10 February 2023" country="usa" country_image="usa.svg"
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <CountryReview review={`"The best virtual bank ever…I have been using since 2020 and gosh it’s so good… it’s fast and reliable…"`} 
                   review_date="App store review, 10 February 2023" country="ghana" country_image="ghana.svg" />
                   <CountryReview review='“Where the 10 stars at? I really wish I could rate this app more! I had a very amazing experience using this platform to get a virtual dollar card for international transactions.”' 
                   review_date="Play Store review, 14 April 2023" country="nigeria" country_image="nigeria.svg" />
                </div>
            </div>
       </div>
    </section>
  )
}

export default Review
