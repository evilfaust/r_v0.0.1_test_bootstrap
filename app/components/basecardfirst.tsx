import styles from "@/app/blog/page.module.css";
import Image from "next/image";
import React from "react";

const BaseCardsFirst = ({title, title1, imgurl, url, urlIcon}: { title: string; imgurl: string; title1: string; url: string; urlIcon: string; } ) => {

    return (
        <>
            <div className="col">
                <div
                    className={`card ${styles[`card-cover`]} h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg`}
                    style={{backgroundImage: `url(${imgurl})`}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 ">
                        <h3 className="pt-5 mt-5 mb-4 display-8 lh-1 fw-bold text-center">{title}</h3>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <Image src={urlIcon} alt="Bootstrap" width={40}
                                       height={40} className=""/>
                            </li>
                            <li className="d-flex align-items-center me-1">
                                <Image src="/img/icon-013.svg" alt="Bootstrap" width={28}
                                       height={28} className=""/>
                            </li>
                            <li className="d-flex align-items-center me-1">
                                <Image src="/img/icon-014.svg" alt="Bootstrap" width={28}
                                       height={28} className=""/>
                            </li>
                            <li className="d-flex align-items-center me-1">
                                <Image src="/img/icon-015.svg" alt="Bootstrap" width={28}
                                       height={28} className=""/>
                            </li>
                            <li className="d-flex align-items-center me-1">
                                <Image src="/img/icon-016.svg" alt="Bootstrap" width={28}
                                       height={28} className=""/>
                            </li>
                        </ul>
                        <p>
                            <strong>{title1}</strong>
                        </p>
                        <a className={`${styles.hoverBG} btn`} href={url}>подробнее</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BaseCardsFirst;