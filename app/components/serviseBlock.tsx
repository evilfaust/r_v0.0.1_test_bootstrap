import styles from "@/app/blog/page.module.css";
import React from "react";
import Image from "next/image";

import searJ from "@/public/img/Job-search-v2.png";
import searC  from "@/public/img/Search-company-v2.png";
import searCJ from "@/public/img/resume-v2.png";
import resume from "@/public/img/Career-v2.png";

// import jobsearchImages from "@/public/img/icon-012.svg";
import jobsearchImages from "@/public/img/poisk.svg"
import jobsearchIcon from "@/public/img/jobsearchIcon.svg"
import resumeIcon from "@/public/img/resumeIcon.svg"
import careerIcon from "@/public/img/careerIcon.svg";

import BaseCardsFirst from "@/app/components/basecardfirst";

const ServiseBlock = () => {


    return (
        <>
            <section style={{
                marginTop: "-50px",
            }}
                     id="servises"
                     className={styles[`bg-ani-003`]}
            >
                <div className="container px-4 py-5" id="custom-cards">
                    <h1 className="fw-light text-light text-center">
                        <Image src="/img/icon-009.svg"
                               className="img-fluid"
                               alt="Logo"
                               width={250}
                               height={250}
                               style={{
                                   marginRight: "20px",
                                   width: "auto",
                                   height: "50px"
                               }}/>
                        Наши услуги</h1>
                    <p className="lead text-light col text-center">
                        В этом разделе вы сможете найти помощь в поиске работы, подборе сотрудников,
                        подготовке резюме и карьерной консультации. Мы предлагаем профессиональные
                        решения для вашего карьерного роста и успеха вашей компании.
                    </p>
                    {/*<h2 className="pb-2n text-center" style={{color: "#FFC803"}}>Наши Услуги</h2>*/}

                    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
                        <BaseCardsFirst
                            title={"Поиск работы"}
                            imgurl={`${searJ.src}`}
                            title1={"Найдите идеальную должность с нашей помощью."}
                            url={"/jobsearch"}
                            urlIcon={`${jobsearchImages.src}`}
                        />
                        <BaseCardsFirst
                            title={"Поиск сотрудников для компании"}
                            imgurl={`${searC.src}`}
                            title1={"Найдите лучших кандидатов для вашей команды."}
                            url={"/searchcompany"}
                            urlIcon={`${jobsearchIcon.src}`}

                        />
                        <BaseCardsFirst
                            title={"Подготовка резюме"}
                            imgurl={`${searCJ.src}`}
                            title1={"Создайте привлекательное резюме и выделяйтесь на фоне конкурентов."}
                            url={"/resume"}
                            urlIcon={`${resumeIcon.src}`}

                        />
                        <BaseCardsFirst
                            title={"Карьерная консультация"}
                            imgurl={`${resume.src}`}
                            title1={"Персональная стратегия для достижения карьерных целей."}
                            url={"/career"}
                            urlIcon={`${careerIcon.src}`}

                        />

                    </div>
                </div>
            </section>

        </>
    )
}


export default ServiseBlock;