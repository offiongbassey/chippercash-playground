import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_transparent" | "btn_purple";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button className={`${variant}`} type={type}>
      {icon && <Image src={icon} alt="icon" width={20} height={20} />}{" "}
      <label className="cursor-pointer" htmlFor="">
        {title}
      </label>
    </button>
  );
};

export default Button;
