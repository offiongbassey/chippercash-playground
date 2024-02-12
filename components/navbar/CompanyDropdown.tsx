import { COMPANY } from "@/utilities/navUtils/NavDropdownContents";
import Image from "next/image";
import Link from "next/link";

const CompanyDropdown = () => {
  return (
    <div className="max-h-96 overflow-scroll lg:overflow-hidden lg:max-h-[550px] relative lg:absolute lg:bg-white lg:top-[76px] lg:right-96 lg:shadow-2xl lg:rounded-3xl lg:p-5 lg:min-w-[24%]">
      <div className="flex flex-col gap-8 lg:gap-4 py-10 lg:py-2">
        {COMPANY.map((item) => (
          <Link href={item.link} key={item.subtitle}>
            <div className="flex gap-2 lg:p-4 lg:hover:bg-[#f7f2fe] lg:rounded-lg cursor-pointer">
              <div
                className={`${
                  item.icon_bg === "green" ? "bg-green-20" : "bg-purple-30"
                } p-2 rounded-full w-8 h-8`}
              >
                <Image src={item.icon} alt="bitcoin" width={18} height={18} />
              </div>

              <div>
                <h2 className="text-gray-300 lg:text-[#202654] text-[16px]">
                  {item.subtitle}
                </h2>
                <p className="text-xs text-[#657c98]">{item.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompanyDropdown;
