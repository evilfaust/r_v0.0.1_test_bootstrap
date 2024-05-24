import styles from "@/app/blog/page.module.css";
import Image from "next/image";
import React from "react";

const BaseCards = ({title, title1, title2, discription1, discription2, imgurl}: { title: string; discription1: string; imgurl: string; title1: string; title2: string; discription2: string;} ) => {

    return (
        <>
            <div className="col">
                <div
                    className={`card ${styles[`card-cover`]} h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg`}
                    style={{backgroundImage: `url(${imgurl})`}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 className="pt-5 mt-5 mb-4 display-8 lh-1 fw-bold">{title}</h3>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <Image src="/img/icon-012.svg" alt="Bootstrap" width={32}
                                       height={32} className=""/>
                            </li>
                            <li className="d-flex align-items-center me-1">
                                <Image src="/img/icon-013.svg" alt="Bootstrap" width={32}
                                       height={32} className=""/>
                            </li>
                            <li className="d-flex align-items-center me-1">
                                <Image src="/img/icon-014.svg" alt="Bootstrap" width={32}
                                       height={32} className=""/>
                            </li>
                            <li className="d-flex align-items-center me-1">
                                <Image src="/img/icon-015.svg" alt="Bootstrap" width={32}
                                       height={32} className=""/>
                            </li>
                            <li className="d-flex align-items-center me-1">
                                <Image src="/img/icon-016.svg" alt="Bootstrap" width={32}
                                       height={32} className=""/>
                            </li>
                        </ul>
                        <p>
                            <strong><u>{title1}</u></strong>
                            {discription1}
                            <br/>
                            <strong><u>{title2}</u></strong>
                            {discription2}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BaseCards;