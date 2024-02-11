import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const hero = () => {
  return (
    <section className="pt-20 bg-purple-10 text-purple-40">
      <div className="padding-container max-container flex justify-between gap-4 lg:gap-40">
        <div className="flex-1 flex flex-col gap-5 pb-20 mt-20">
          <h1 className="text-5xl lg:text-5xl font-[600] ">
            Move Your <br />
            Money Freely
          </h1>
          <p className="text-1xl font-[300] pt-5 md:max-w-[90%] md:text-sm mg:font-light">
            Your free Chipper account unlocks international transfers, payment
            cards and investing for Africans.
          </p>
          <div className="hidden lg:flex items-center justify-start gap-10 mt-5">
            <div className="rounded-full bg-white overflow-hidden">
              <Image src="/scan.svg" alt="scan" width={170} height={170} />
            </div>

            <div>
              <p className="text-white font-[200]">Scan to download</p>
              <div className="flex gap-7 pt-4">
                <Link href="" className="flex gap-2">
                  <Image src="/apple.svg" alt="apple" width={20} height={20} />{" "}
                  App Store
                </Link>
                <Link href="/" className="flex gap-2">
                  <Image
                    src="/play-store.svg"
                    alt="play-store"
                    width={20}
                    height={20}
                  />{" "}
                  Google Play
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <Button
              type="button"
              title="Download the app"
              variant="btn_purple"
            />
          </div>
        </div>

        <div className="hidden md:flex flex-1">
          <Image src="/hero-bg.png" alt="hero" width={560} height={450} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 padding-container max-container py-20 justify-between items-start">
        <div>
          <div className="bg-white p-[2px] w-8 rounded-full mb-1" />
          <p className="text-lg md:text-xs lg:text-sm">
            Chipper Cash key figures
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          <KeyFigures title="5+ million" desc="Users" />
          <KeyFigures title="600,000+" desc="Visa Cards Issued" />
          <KeyFigures title="6,000+" desc="US public companies to invest in" />
          <KeyFigures
            title="$1.5+ billion"
            desc="Total process volume per quarter"
          />
        </div>
      </div>
    </section>
  );
};
type KeyFiguresProps = {
  title: string;
  desc: string;
};

const KeyFigures = ({ title, desc }: KeyFiguresProps) => {
  return (
    <div className="items-start lg:items-center justify-center flex flex-col">
      <h2 className=" text-2xl whitespace-nowrap text-white ">{title}</h2>
      <p className="text-xs">{desc}</p>
    </div>
  );
};

export default hero;
