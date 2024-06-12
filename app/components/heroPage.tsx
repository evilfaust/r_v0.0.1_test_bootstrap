import styles from "@/app/blog/page.module.css";
import Image from "next/image";
import React from "react";


const HeroPage = ({title, shortDiscription, discription, image}:{title: string; shortDiscription: string; discription: string; image: string; }) => {


    return (
        <>
            <section className={styles[`bg-ani-002`]}>
                <div className="px-4 py-5 my-5 text-center">
                    <Image className="d-block mx-auto mb-4" src={image} alt={" "} width={250}
                           height={250} style={{width: "auto", height: "50px"}}/>
                    <h1 className="display-4 fw-bold text-light">{title}</h1>
                    <h6 className="fs-3 text-center text-light">{shortDiscription}</h6>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4 text-light">
                            {discription}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}


export default HeroPage;

