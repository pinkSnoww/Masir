
import * as React from "react";
import {Button} from "@nextui-org/button";
import Image from "next/image";
const FilterTag = ({ label, icon, isActive, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all
        ${ isActive ? 'text-black bg-lime-400' : 'bg-gray-100'
        } rounded-2xl min-h-[48px] max-md:px-5`}
    >
      {icon && <Image src={icon} alt="" width={24} height={24} className="w-6 h-6" />}
      <span>{label}</span>
    </Button>
  );
};

export default FilterTag;