import Image from "next/image";
import Link from "next/link";
import LinkSpan from "../LinkSpan";

const Footer = () => {
  return (
    <>
      {/* App Store */}
      <div className="padding-container max-container">
        <div className="border border-[#c1c4e5] bg-white text-center overflow-hidden rounded-3xl py-20 w-full relative -mb-40 px-10">
          {/* Bg Dots */}
          <div className="w-4 h-4 rounded-md bg-orange-500 -mt-12 left-[500px] absolute" />
          <div className="w-4 h-4 rounded-md bg-green-30 -mt-6 left-16 absolute" />
          <div className="w-4 h-4 rounded-md bg-orange-500 mt-52 right-72 absolute" />
          <div className="w-4 h-4 rounded-md bg-purple-30 mt-40 right-20 absolute" />
          <div className="w-56 h-56 lg:w-80 lg:h-80 -right-6 -mt-24 lg:right-40 lg:-mt-36 rounded-full bg-green-30 absolute" />
          <div className="w-80  h-80 -ml-44 mt-20 lg:-ml-5 lg:-mb-40 rounded-full bg-purple-30 absolute" />
          {/* Top Bg Dots ends here */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[30px] leading-[130%] font-[600] max-w-[650px] z-20">
              In an instant send support, feed a passion, or strengthen a bond
            </h2>
            <div className="flex flex-col md:flex-row items-start gap-4 justify-between mt-8 z-20">
              <Link
                href="/"
                className="px-4 py-3 bg-purple-50 rounded-2xl hover:bg-[#353684] text-purple-40"
              >
                <div className="flex gap-2">
                  <Image
                    src="/apple.svg"
                    alt="apple"
                    width={30}
                    height={10}
                    className="fill-white"
                  />
                  <div className="flex items-start justify-start flex-col">
                    <p className="text-xs font-[200]">Download on the</p>
                    <p>App Store</p>
                  </div>
                </div>
              </Link>
              <Link
                href="/"
                className="px-4 py-3 bg-purple-50 hover:bg-[#353684] rounded-2xl text-purple-40"
              >
                <div className="flex gap-2">
                  <Image
                    src="/play-store.svg"
                    alt="apple"
                    width={36}
                    height={10}
                    className="fill-white"
                  />
                  <div className="flex items-start justify-start flex-col">
                    <p className="text-xs font-[200]">Get it on</p>
                    <p>Google Play</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-purple-10">
        <div className="padding-container max-container text-purple-40 text-lg md:text-xs font-[200] pt-52">
          {/* Footer Top */}
          <div className="flex justify-between flex-col gap-10 md:flex-row mb-10">
            <div>
              <Image
                src="/chipper-logo.png"
                alt="logo"
                width={120}
                height={20}
              />
              <div className="flex gap-5 pt-5">
                <Link href="/">Products</Link>
                <Link href="/">Support</Link>
                <Link href="/">Career</Link>
                <Link href="/">Terms</Link>
              </div>
            </div>

            <div className="flex flex-col md:items-end md:justify-end">
              <h3 className="text-xl text-white font-[600]">
                How Can We help?
              </h3>
              <div className="flex gap-4 pt-5 ">
                <Link href="/">
                  <LinkSpan text="Help Docs & FAQs" variant="green" />
                </Link>
                <span>|</span>
                <p>Support via In-app Chat</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-10 border-t-[0.3px] gap-5 border-[#648078]">
            <div>
              <p className="pb-2">© 2021-2023 Critical Ideas, Inc.</p>
              <p>Voyse Technologies US, Inc. NMLS ID: 2266748</p>
            </div>
            <p>Product availability may vary by market.</p>
            <div className="flex items-center md:justify-end gap-2">
              <label>Follow us:</label>
              <Link href="/">
                <Image
                  src="/footer-fb.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                  className="hover:opacity-90 transition-all duration-500"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/footer-tw.svg"
                  alt="twitter"
                  width={20}
                  height={20}
                  className="hover:opacity-90 transition-all duration-500"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/footer-ig.png"
                  alt="instagram"
                  width={20}
                  height={20}
                  className="hover:opacity-90 transition-all duration-500"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/footer.yt.png"
                  alt="youtube"
                  width={30}
                  height={20}
                  className="hover:opacity-90 transition-all duration-500"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/footer-tk.svg"
                  alt="tiktok"
                  width={20}
                  height={20}
                  className="hover:opacity-90 transition-all duration-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
