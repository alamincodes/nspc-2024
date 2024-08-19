/* eslint-disable react/prop-types */
import { MdOutlineMenu } from "react-icons/md";

const Header = ({ setOpenModal }) => {
  return (
    <div
      onClick={() => setOpenModal(true)}
      className="w-full px-4 py-2 bg-white "
    >
      <div className="flex items-center space-x-3 ">
        <div>
          <MdOutlineMenu />
        </div>
        <h3 className="">Logo</h3>
      </div>
    </div>
  );
};

export default Header;
