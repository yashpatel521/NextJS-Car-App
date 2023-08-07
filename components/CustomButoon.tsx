"use client";


import { customButtonProps } from "@/types";
import Image from "next/image";


const CustomButoon = ({ title, containerStyle, handleClick }: customButtonProps) => {
    return (
        <button disabled={false} type={"button"} className={`custom-btn ${containerStyle}`} onClick={handleClick}>
            <span className={"flex-1"}>
                {title}
            </span>
        </button>
    )
}

export default CustomButoon