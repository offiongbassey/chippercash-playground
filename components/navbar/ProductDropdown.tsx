import { PRODUCTS } from "@/utilities/navUtils/NavDropdownContents";
import Image from "next/image";
import Link from "next/link";

const ProductDropdown = () => {
  return (
    <div className="max-h-96 overflow-scroll lg:overflow-hidden lg:max-h-[550px] relative lg:absolute lg:bg-white lg:right-10 lg:top-[76px] lg:shadow-2xl lg:rounded-2xl lg:p-5">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
        {PRODUCTS.map((product) => (
          <div key={product.title}>
            <h2 className="text-[#637e9e] pb-6 lg:pb-0 text-xs">
              {product.title}
            </h2>
            <div className="flex flex-col gap-7 lg:gap-4 py-2">
              {product.items.map((item) => (
                <Link href={item.link} key={item.subtitle}>
                  <div className="flex gap-2 lg:p-4 lg:hover:bg-[#f7f2fe] rounded-lg cursor-pointer">
                    <div
                      className={`${
                        item.icon_bg === "green"
                          ? "bg-green-20"
                          : "bg-purple-30"
                      } p-2 rounded-full w-8 h-8`}
                    >
                      <Image
                        src={item.icon}
                        alt="bitcoin"
                        width={18}
                        height={18}
                      />
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
        ))}
      </div>
    </div>
  );
};

export default ProductDropdown;
