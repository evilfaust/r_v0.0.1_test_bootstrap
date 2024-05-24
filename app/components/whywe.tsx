import Image from "next/image";
import React from "react";

export default function Whywe({iconurl, title, discription}:{ iconurl: string; title: string; discription: string; }) {

    return(
        <>
        <div className="col d-flex align-items-start">
            <div
                className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <Image src={iconurl} width={100} height={100} alt=""/>
            </div>
            <div>
                <h3 className="fs-4 text-body-emphasis">{title}</h3>
                <p>
                    {discription}
                </p>
            </div>
        </div>
        </>
    )
}
