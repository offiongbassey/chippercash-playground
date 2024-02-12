import { IoClose } from "react-icons/io5";
import { Dispatch, SetStateAction } from "react";

type ReviewModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ReviewModal = ({ open, setOpen }: ReviewModalProps) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`fixed inset-0 transition-colors ${
        open ? "visible bg-black-20/90 z-30" : "invisible"
      } `}
    >
      <div className="absolute right-10 top-8 text-white cursor-pointer">
        <button onClick={() => setOpen(false)}>
          <IoClose size={25} />
        </button>
      </div>

      <div
        className={`fixed inset-0 flex rounded-sm justify-center items-center transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <iframe
          className="w-[90%] h-[40%]  md:w-[90%] md:h-[65%]  lg:w-[900px] lg:h-[500px]"
          src="https://www.youtube.com/embed/TtPLe82LxnA?si=n9bJwUy94eibLVpR&autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ReviewModal;
