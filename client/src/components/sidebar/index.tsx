/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import routes from "routes";
import { useAppSelector } from "app/store";
import logo from '../../assets/img/logo/logo.png';

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;
  const member = useAppSelector((state) => state.member.data);
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div
        className={`mx-[46px]  flex flex-col items-center justify-center`}
      >
        <div className=" text-center my-3 h-2.5 font-poppins text-[20px] font-bold uppercase text-navy-700 dark:text-white">
          <div className="mx-auto"><img src={logo} className="inline-block"/></div>
          Rotaract Strides
        </div>
      </div>
      <div className="mb-7 mt-[130px] h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
