"use client";


import { customButtonProps } from "@/types";
import Image from "next/image";


const CustomButoon = ({ title, containerStyle, handleClick, btnType }: customButtonProps) => {
    return (
        <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyle}`} onClick={handleClick}>
            <span className={"flex-1"}>
                {title}
            </span>
        </button>
    )
}

export default CustomButoon