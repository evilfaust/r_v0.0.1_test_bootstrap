'use client'
import NavBar from '../components/navbar';
import Image from "next/image";
import styles from "@/app/blog/page.module.css";
import {Col, Row} from "react-bootstrap";
import React from "react";
import Contacts from "@/app/components/contacts";
import Contactsform from "@/app/components/contactsform";
export default function SearchCompanyPage() {

    return (
        <div>
            <NavBar/>
            <section className={styles[`bg-ani-002`]}>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <Image src="/img/test-hero-img-001.png" className="img-fluid mb-4"
                                   alt="Example image" width="700" height="500" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-5 fw-bold text-light lh-1 mb-3">Поиск сотрудников для компании</h2>
                            <h5 className="text-light">Найдите идеальных кандидатов для вашей компании</h5>
                            <p className="lead text-light">
                                Вы ищете талантливых и подходящих сотрудников для вашей компании?
                                Мы в RU.DA здесь, чтобы помочь вам! Наша цель - обеспечить вас квалифицированными
                                специалистами, которые будут соответствовать вашим требованиям и способствовать
                                успеху вашего бизнеса.
                            </p>
                            {/*<div className="d-grid gap-2 d-md-flex justify-content-md-start">*/}
                            {/*    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>*/}
                            {/*    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </section>
            <section>
                <div className="container px-4 py-5" id="hanging-icons">
                    <h2 className="pb-2 text-center">Почему выбирают нас?</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="col d-flex align-items-start">
                            <div
                                className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <Image src="/img/icon-017.svg" width={100} height={100} alt=""/>
                            </div>
                            <div>
                                <h3 className="fs-4 text-body-emphasis">Профессиональный подход:</h3>
                                <p>Мы обладаем многолетним опытом в области подбора персонала и знаем,
                                    как найти лучших кандидатов для вашей компании.
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div
                                className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <Image src="/img/icon-019.svg" width={100} height={100} alt=""/>
                            </div>
                            <div>
                                <h3 className="fs-4 text-body-emphasis">Индивидуальный подход:</h3>
                                <p>Мы понимаем, что каждая компания уникальна, поэтому мы разрабатываем
                                    персонализированные стратегии подбора, учитывая ваши особенности и потребности.
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div
                                className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <Image src="/img/icon-018.svg" width={100} height={100} alt=""/>
                            </div>
                            <div>
                                <h3 className="fs-4 text-body-emphasis">Широкая база данных:</h3>
                                <p>Наша база данных насчитывает тысячи квалифицированных специалистов в
                                    различных отраслях, готовых присоединиться к вашей команде.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${styles[`bg-ani-002`]} text-light`}>
                <div className="container px-4 py-5">
                    <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                        <div className="col d-flex flex-column align-items-start gap-2">
                            <h2 className="fw-bold text-light">
                                Наши услуги
                            </h2>
                                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 g-4 py-5">
                                    <div className="col d-flex align-items-start">
                                        <Image src="/img/icon-023.svg" width={50} height={50} alt=""/>
                                        <div>
                                            <h4 className="fw-bold mb-0 fs-5" style={{color: "#FFC803"}}>
                                                Подбор персонала различных уровней и специализаций
                                            </h4>
                                            {/*<p>Paragraph of text beneath the heading to explain the heading.</p>*/}
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-start">
                                        <Image src="/img/icon-022.svg" width={50} height={50} alt=""/>
                                        <div>
                                            <h4 className="fw-bold mb-0 fs-5" style={{color: "#FFC803"}}>
                                                Оценка потребностей компании и разработка стратегии поиска кандидатов.
                                            </h4>
                                            {/*<p>Paragraph of text beneath the heading to explain the heading.</p>*/}
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-start">
                                        <Image src="/img/icon-023.svg" width={50} height={50} alt=""/>
                                        <div>
                                            <h4 className="fw-bold mb-0 fs-5" style={{color: "#FFC803"}}>
                                                Проведение собеседований и тестирование кандидатов
                                            </h4>
                                            {/*<p>Paragraph of text beneath the heading to explain the heading.</p>*/}
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-start">
                                        <Image src="/img/icon-022.svg" width={50} height={50} alt=""/>
                                        <div>
                                            <h4 className="fw-bold mb-0 fs-5" style={{color: "#FFC803"}}>
                                                Помощь в проведении адаптации новых сотрудников
                                            </h4>
                                            {/*<p>Paragraph of text beneath the heading to explain the heading.</p>*/}
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className="col">
                            <h2 className="pb-2 text-center">Как это работает?</h2>

                            <div className="row row-cols-1 row-cols-sm-2 g-4">
                                <div className="col d-flex flex-column gap-2">
                                    <div
                                        className={`${styles[`feature-icon-small`]} d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-4 rounded-3`}>
                                        <Image src="/img/icon-014.svg" alt="Bootstrap" width={32}
                                               height={32} className=""/>
                                    </div>
                                    <h4 className="fw-semibold mb-0" style={{color: "#FFC803"}}>Свяжитесь с нами: </h4>
                                    <p className="">
                                        Оставьте заявку на нашем сайте или позвоните нам для начала сотрудничества.
                                    </p>
                                </div>

                                <div className="col d-flex flex-column gap-2">
                                    <div
                                        className={`${styles[`feature-icon-small`]} d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-4 rounded-3`}>
                                        <Image src="/img/icon-014.svg" alt="Bootstrap" width={32}
                                               height={32} className=""/>
                                    </div>
                                    <h4 className="fw-semibold mb-0 " style={{color: "#FFC803"}}>Обсуждение
                                        потребностей:</h4>
                                    <p className="">
                                        Мы обсудим ваши требования и ожидания от новых сотрудников, чтобы разработать
                                        наилучшую стратегию подбора.
                                    </p>
                                </div>

                                <div className="col d-flex flex-column gap-2">
                                    <div
                                        className={`${styles[`feature-icon-small`]} d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-4 rounded-3`}>
                                        <Image src="/img/icon-014.svg" alt="Bootstrap" width={32}
                                               height={32} className=""/>
                                    </div>
                                    <h4 className="fw-semibold mb-0 " style={{color: "#FFC803"}}>Подбор
                                        кандидатов: </h4>
                                    <p className="">
                                        Мы начнем поиск и предложим вам наиболее подходящих кандидатов для вашей
                                        компании.
                                    </p>
                                </div>

                                <div className="col d-flex flex-column gap-2">
                                    <div
                                        className={`${styles[`feature-icon-small`]} d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-4 rounded-3`}>
                                        <Image src="/img/icon-014.svg" alt="Bootstrap" width={32}
                                               height={32} className=""/>
                                    </div>
                                    <h4 className="fw-semibold mb-0 " style={{color: "#FFC803"}}>Оценка и прием: </h4>
                                    <p className="">
                                        Мы поможем вам с оценкой кандидатов и проведением интервью,
                                        чтобы вы могли принять правильное решение.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container px-4 py-5" id="">
                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="container-fluid py-5">
                        <Row>
                            <Col lg="8">
                                <h3 className="display-5 fw-bold">Не теряйте время и ресурсы на поиск сотрудников</h3>
                                <h4 className="display-6 fw-bold">
                                    - доверьте это профессионалам!
                                </h4>
                                <p className="col-md-8 fs-4">
                                    Обратитесь к нам сегодня и начните поиск идеальных кандидатов для вашей компании.
                                </p>
                            </Col>
                            <Col lg="4">
                                <Contactsform />
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

            <Contacts/>
        </div>
    )
}