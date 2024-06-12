'use client'
import NavBar from '../components/navbar';
import Image from "next/image";
import styles from "@/app/blog/page.module.css";
// import customStyle from "@/app/jobsearch/jobsearch.module.css";

// images
import cardBG01 from "../../public/img/1234.jpg";
import cardBG02 from "../../public/img/12345.jpg";
import cardBG03 from "../../public/img/123456.jpg";
// import cardBG03 from "../../public/img/unsplash-photo-3.jpg";
import rudaTelescope from "@/public/img/telescope.svg";

import Contacts from "@/app/components/contacts";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import Contactsform from "@/app/components/contactsform";
import HeroPage from "@/app/components/heroPage";
// import {useState} from "react";
// import {Button, Modal, Form, InputGroup} from "react-bootstrap";
// import ModalDialog from "@/app/components/modal";

export default function JobSearchPage() {

// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

    return (
        <>
            <NavBar/>
            <HeroPage title={"Поиск работы"}
                      shortDiscription={"Центр карьеры RUDA предоставляет доступ к самым актуальным и разнообразным вакансиям на рынке труда."}
                      discription={"Центр карьеры RUDA предоставляет доступ к самым актуальным и разнообразным вакансиям на рынке труда. Наша цель - помочь вам найти работу, которая соответствует вашим навыкам, желаниям и карьерным целям."}
                      image={`${rudaTelescope.src}`} />

            {/*<section className={styles[`bg-ani-002`]}>*/}
            {/*    <div className="px-4 pt-5 my-5  border-bottom text-light">*/}
            {/*        <h1 className="display-4 fw-bold text-center text-light">Поиск работы</h1>*/}
            {/*        <div className="col-lg-6 mx-auto">*/}
            {/*            /!*<p className="lead mb-2">*!/*/}
            {/*            /!*    Найдите идеальную работу для себя с центром карьеры RUDA.*!/*/}
            {/*            /!*</p>*!/*/}
            {/*            <p className="lead mb-4">Центр карьеры RUDA предоставляет доступ к самым актуальным и разнообразным*/}
            {/*                вакансиям на рынке труда. Наша цель - помочь вам найти работу, которая соответствует вашим навыкам,*/}
            {/*                желаниям и карьерным целям.*/}
            {/*            </p>*/}
            {/*            /!*<div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">*!/*/}
            {/*            /!*    <button type="button" className={`${styles.hoverBG} btn btn-lg px-4 me-sm-3`}>*!/*/}
            {/*            /!*        Кнопка 1*!/*/}
            {/*            /!*    </button>*!/*/}
            {/*            /!*    <button type="button" className={`${styles.hoverBG} btn btn-lg px-4`}>*!/*/}
            {/*            /!*        Кнопка 2*!/*/}
            {/*            /!*    </button>*!/*/}
            {/*            /!*</div>*!/*/}
            {/*        </div>*/}
            {/*        <div className="overflow-hidden" style={{maxHeight: "30vh"}}>*/}
            {/*            <div className="container px-5 text-center">*/}
            {/*                <Image src="/img/test-hero-img-002.png" className="img-fluid mb-4"*/}
            {/*                       alt="Example image" width="700" height="500" loading="lazy"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className="" style={{backgroundColor: '#383c52', marginTop: '-3rem'}}>
                <div className="container px-4 py-5" id="custom-cards">
                    <h2 className="pb-2n text-center text-light">Найдите идеальную работу для себя с центром карьеры RUDA.</h2>

                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        <div className="col">
                            <div className={`card ${styles[`card-cover`]} h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg`}
                                 style={{backgroundImage: `url(${cardBG01.src})`}}>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-8 lh-1 fw-bold">Широкий выбор вакансий</h3>
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
                                        Мы сотрудничаем с различными компаниями и рекрутинговыми агентствами, чтобы
                                        предоставить вам доступ к разнообразным вакансиям в различных отраслях.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className={`card ${styles[`card-cover`]} h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg`}
                                 style={{backgroundImage: `url(${cardBG02.src})`}}>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-8 lh-1 fw-bold">Персональный подход</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <Image src="/img/icon-010.svg" alt="Bootstrap" width={32}
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
                                        Наши консультанты готовы помочь вам определить ваши предпочтения и потребности, чтобы предложить вам вакансии, наилучшим образом соответствующие вашим ожиданиям.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className={`card ${styles[`card-cover`]} h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg`}
                                style={{backgroundImage: `url(${cardBG03.src})`}}>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-8 lh-1 fw-bold">Актуальная информация</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <Image src="/img/icon-011.svg" alt="Bootstrap" width={32}
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
                                        Мы регулярно обновляем нашу базу данных вакансий, чтобы вы всегда могли быть в курсе последних предложений о работе.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="h-100 p-5 rounded-3 text-light" style={{backgroundColor: "#383c52"}}>
                            <h2 className="text-center">Начните поиск работы уже сегодня!</h2>
                            <p className="text-center">
                              Просто просмотрите наши последние вакансии ниже и свяжитесь с нами,
                                чтобы начать свой путь к новой карьере.
                            </p>
                                <div className="container " id="icon-grid">
                                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                                        <div className="col d-flex align-items-start">
                                            <div className="bi text-body-secondary flex-shrink-0 me-3"
                                                 style={{width: "1.75em", height: "1.75em"}}>
                                                <Image src="/img/icon-016.svg" alt="agro" width={32} height={32}
                                                       className=""/>
                                            </div>
                                            <div>
                                                <h3 className="fw-bold mb-0 fs-4">Вакансия №1</h3>
                                                <p>Короткое описание вакансии</p>
                                            </div>
                                        </div>
                                        <div className="col d-flex align-items-start">
                                            <div className="bi text-body-secondary flex-shrink-0 me-3"
                                                 style={{width: "1.75em", height: "1.75em"}}>
                                                <Image src="/img/icon-015.svg" alt="agro" width={32} height={32}
                                                       className=""/>
                                            </div>
                                            <div>
                                                <h3 className="fw-bold mb-0 fs-4">Вакансия №2</h3>
                                                <p>Короткое описание вакансии</p>
                                            </div>
                                        </div>
                                        <div className="col d-flex align-items-start">
                                            <div className="bi text-body-secondary flex-shrink-0 me-3"
                                                 style={{width: "1.75em", height: "1.75em"}}>
                                                <Image src="/img/icon-015.svg" alt="agro" width={32} height={32}
                                                       className=""/>
                                            </div>
                                            <div>
                                                <h3 className="fw-bold mb-0 fs-4">Вакансия №3</h3>
                                                <p>Короткое описание вакансии</p>
                                            </div>
                                        </div>
                                        <div className="col d-flex align-items-start">
                                            <div className="bi text-body-secondary flex-shrink-0 me-3"
                                                 style={{width: "1.75em", height: "1.75em"}}>
                                                <Image src="/img/icon-013.svg" alt="agro" width={32} height={32}
                                                       className=""/>
                                            </div>
                                            <div>
                                                <h3 className="fw-bold mb-0 fs-4">Вакансия №4</h3>
                                                <p>Короткое описание вакансии</p>
                                            </div>
                                        </div>
                                        <div className="col d-flex align-items-start">
                                            <div className="bi text-body-secondary flex-shrink-0 me-3"
                                                 style={{width: "1.75em", height: "1.75em"}}>
                                                <Image src="/img/icon-016.svg" alt="agro" width={32} height={32}
                                                       className=""/>
                                            </div>
                                            <div>
                                                <h3 className="fw-bold mb-0 fs-4">Вакансия №5</h3>
                                                <p>Короткое описание вакансии</p>
                                            </div>
                                        </div>
                                        <div className="col d-flex align-items-start">
                                            <div className="bi text-body-secondary flex-shrink-0 me-3"
                                                 style={{width: "1.75em", height: "1.75em"}}>
                                                <Image src="/img/icon-013.svg" alt="agro" width={32} height={32}
                                                       className=""/>
                                            </div>
                                            <div>
                                                <h3 className="fw-bold mb-0 fs-4">Вакансия №6</h3>
                                                <p>Короткое описание вакансии</p>
                                            </div>
                                        </div>
                                        <div className="col d-flex align-items-start">
                                            <div className="bi text-body-secondary flex-shrink-0 me-3"
                                                 style={{width: "1.75em", height: "1.75em"}}>
                                                <Image src="/img/icon-013.svg" alt="agro" width={32} height={32}
                                                       className=""/>
                                            </div>
                                            <div>
                                                <h3 className="fw-bold mb-0 fs-4">Вакансия №7</h3>
                                                <p>Короткое описание вакансии</p>
                                            </div>
                                        </div>
                                        <div className="col d-flex align-items-start">
                                            <div className="bi text-body-secondary flex-shrink-0 me-3"
                                                 style={{width: "1.75em", height: "1.75em"}}>
                                                <Image src="/img/icon-012.svg" alt="agro" width={32} height={32}
                                                       className=""/>
                                            </div>
                                            <div>
                                                <h3 className="fw-bold mb-0 fs-4">Вакансия №8</h3>
                                                <p>Короткое описание вакансии</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            <Container>
                                <Row className="align-items-center">

                                    <Col lg="6">
                                        <h4 className="text-light text-center">Не нашли подходящей вакансии?</h4>
                                        <p className="text-light">Если вы не нашли подходящей вакансии в нашем списке,
                                не беспокойтесь! Оставьте свои контактные данные, и наши консультанты свяжутся с вами,
                                чтобы обсудить ваш профиль и возможные варианты для вашего трудоустройства.
                                        </p>
                                    </Col>
                                    <Col lg="4" className="">
                                        <Contactsform />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </section>

        <Contacts/>


            {/*<section id="first" className={styles[`bg-ani-002`]}>*/}
            {/*    <div className="container mb-5" style={{*/}
            {/*        // backgroundImage: `url(${backgroundImagesSM.src})`,*/}
            {/*        // backgroundPosition: "center",*/}
            {/*        // backgroundSize: "cover",*/}
            {/*        // backgroundRepeat: "no-repeat",*/}
            {/*        width: "100vw",*/}
            {/*        height: "100vh",*/}
            {/*        display: 'grid',*/}
            {/*        alignItems: 'center',*/}
            {/*        justifyContent: 'center'*/}
            {/*    }}>*/}
            {/*        <div className="row text-light">*/}
            {/*            <div className="col-lg-8">*/}
            {/*                <h1 className="">Поиск работы</h1>*/}
            {/*                <p className="">*/}
            {/*                    Найдите идеальную работу для себя с центром карьеры RUDA.*/}
            {/*                </p>*/}
            {/*                <div className={`${customStyle.block} ${customStyle.color001} text-black`}>*/}
            {/*                    Центр карьеры RUDA предоставляет доступ к самым актуальным и разнообразным вакансиям на*/}
            {/*                    рынке труда. Наша цель - помочь вам найти работу, которая соответствует вашим навыкам,*/}
            {/*                    желаниям и карьерным целям.*/}
            {/*                    Как мы поможем вам найти работу:*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*            <div className="col-lg-4">*/}
            {/*                <Image src="/img/job-search-v3.png" alt="job-search" width={400} height={400}*/}
            {/*                       style={{*/}
            {/*                           width: "400px",*/}
            {/*                           height: "auto",*/}
            {/*                           boxShadow: "3px 3px 0 0 #FFC803",*/}
            {/*                           borderRadius: "2px",*/}
            {/*                       }}*/}
            {/*                       className="w-50"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row d-flex align-items-stretch">*/}
            {/*            <div className="col-lg-4">*/}
            {/*                <div className={`${customStyle.block} ${customStyle.color001} text-black`}>*/}
            {/*                    <h5>*/}
            {/*                        Широкий выбор вакансий:*/}
            {/*                    </h5>*/}
            {/*                    Мы сотрудничаем с различными компаниями и рекрутинговыми агентствами,*/}
            {/*                    чтобы предоставить вам доступ к разнообразным вакансиям в различных отраслях.*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*            <div className="col-lg-4">*/}
            {/*                <div className={`${customStyle.block} ${customStyle.color001} text-black`}>*/}
            {/*                    <h5>*/}
            {/*                        Персонализированный подход:*/}
            {/*                    </h5>*/}
            {/*                    Наши консультанты готовы помочь вам определить ваши предпочтения и*/}
            {/*                    потребности, чтобы предложить вам вакансии, наилучшим образом соответствующие вашим*/}
            {/*                    ожиданиям.*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*            <div className="col-lg-4">*/}
            {/*                <div className={`${customStyle.block} ${customStyle.color001} text-black`}>*/}
            {/*                <h5>*/}
            {/*                        Актуальная информация:*/}
            {/*                    </h5>*/}
            {/*                    Мы регулярно обновляем нашу базу данных вакансий, чтобы вы всегда могли*/}
            {/*                    быть в курсе последних предложений о работе.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-lg-12">*/}
            {/*                Начните поиск работы уже сегодня!*/}

            {/*                Просто просмотрите наши последние вакансии ниже и свяжитесь с нами, чтобы начать свой путь к*/}
            {/*                новой карьере.*/}

            {/*                [Список последних вакансий]*/}
            {/*                Не нашли подходящей вакансии?*/}

            {/*                Если вы не нашли подходящей вакансии в нашем списке, не беспокойтесь! Оставьте свои*/}
            {/*                контактные*/}
            {/*                данные, и наши консультанты свяжутся с вами, чтобы обсудить ваш профиль и возможные варианты*/}
            {/*                для*/}
            {/*                вашего трудоустройства.*/}

            {/*                [Форма обратной связи]*/}
            {/*                Доверьте свой поиск работы профессионалам центра карьеры RUDA и найдите идеальную работу для*/}
            {/*                себя!*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>

    )
}