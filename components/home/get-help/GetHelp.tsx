import LinkSpan from "@/components/LinkSpan";
import Image from "next/image";
import Link from "next/link";

const GetHelp = () => {
  return (
    <>
      {/* Get Help Section */}
      <div className="bg-get-help bg-black-20  md:bg-[250px] bg-center bg-cover md:bg-contain text-white bg-no-repeat">
        <div className="padding-container max-container py-10 lg:py-20">
          <h2 className="text-3xl font-[600] mt-40 md:mt-0 mb-4">
            Get Help, Say Hello
          </h2>
          <p className="text-[16px] md:text-[14px] leading-6 font-[300] md:max-w-[350px] mb-6">
            Get expert help, advice and tips in-app. Connect with us on our
            social channels and join the #ChipperCash community online.
          </p>
          <div className="flex gap-8 md:gap-4 items-center">
            <Link href="/">
              <Image
                src="/social-twitter.svg"
                alt="twitter"
                width={35}
                height={25}
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Link>
            <Link href="/">
              <Image
                src="/social-instagram.svg"
                alt="twitter"
                width={35}
                height={25}
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Link>
            <Link href="/">
              <Image
                src="/social-facebook.svg"
                alt="twitter"
                width={35}
                height={25}
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Link>
            <Link href="/">
              <Image
                src="/social-youtube.svg"
                alt="twitter"
                width={35}
                height={25}
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Link>
            <Link href="/">
              <Image
                src="/social-tiktok.svg"
                alt="twitter"
                width={35}
                height={25}
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Link>
            <Link href="/">
              <Image
                src="/social-linkedin.svg"
                alt="twitter"
                width={35}
                height={25}
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured in Section */}
      <div className="padding-container max-container bg-white flex flex-col lg:flex-row py-20 justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-[600]">Featured In</h1>
          <p className="text-purple-50 font-[400] lg:font-[200] text-lg lg:text-sm md:max-w-[450px]">
            Chipper’s story is “chipping away” at hard problems and unlocking
            global opportunities.
          </p>
          <Link href="/">
            <LinkSpan text="Read more about our journey" variant="purple" />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-20 pt-20 md:pt-0 items-center justify-center">
          <div className="flex items-center justify-center">
            <Image
              src="/ft-bbc.svg"
              alt="bbc"
              width={100}
              height={33}
              className=" opacity-20 hover:opacity-100 transition-all duration-500 "
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/ft-economist.svg"
              alt="bbc"
              width={70}
              height={33}
              className=" opacity-20 hover:opacity-100 transition-all duration-500"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/ft-forbes.svg"
              alt="bbc"
              width={120}
              height={33}
              className=" opacity-20 hover:opacity-100 transition-all duration-500"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/ft-tc.svg"
              alt="bbc"
              width={80}
              height={33}
              className=" opacity-20 hover:opacity-100 transition-all duration-500"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/ft-roma.svg"
              alt="bbc"
              width={36}
              height={33}
              className=" opacity-20 hover:opacity-100 transition-all duration-500"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/ft-apple.svg"
              alt="bbc"
              width={45}
              height={33}
              className=" opacity-20 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetHelp;
