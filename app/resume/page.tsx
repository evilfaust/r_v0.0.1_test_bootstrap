import NavBar from "@/app/components/navbar";
import Contacts from "@/app/components/contacts";
import styles from "@/app/blog/page.module.css";
import React from "react";
import BaseCards from "@/app/components/basecards";
import resume001 from "@/public/img/resume001.png";
// import resume002 from "@/public/img/resume002.png";
import resume003 from "@/public/img/resume003.png";
// import resume004 from "@/public/img/resume004.png";
import resume005 from "@/public/img/resume005.png";
import resume006 from "@/public/img/resume006.png";
import Image from "next/image";


import Whywe from "@/app/components/whywe";
import whyweimg001 from "@/public/img/icon-017.svg";
import {Col, Row} from "react-bootstrap";
import Contactsform from "@/app/components/contactsform";



const Resume = () => {


    return (
        <>
            <NavBar/>
            <section className={styles[`bg-ani-002`]}>
                <div className="px-4 py-5 my-5 text-center text-light">
                    <Image className="d-block mx-auto mb-4" src="/img/mayak.svg" alt={" "} width={250}
                         height={250} style={{width: "auto", height: "50px"}}/>
                    {/*{resume002.src}*/}
                    <h1 className="display-5 fw-bold">Помощь в Подготовке Резюме</h1>
                    <h6 className="display-6 text-center text-light">Ваш успешный старт начинается с идеального резюме</h6>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4 text-left text-light">
                            В современном мире профессиональный успех во многом зависит от того, как вы презентуете свои
                            навыки и
                            опыт. Мы в кадровом агентстве RU.DA знаем, что качественно составленное резюме - это ключ к
                            вашей
                            карьере. Наши эксперты помогут вам создать резюме, которое выделит вас среди сотен
                            кандидатов и
                            привлечет внимание работодателей.
                        </p>
                        {/*<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">*/}
                        {/*    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>*/}
                        {/*    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
            <section className={styles[`bg-ani-003`]} style={{marginTop: "-50px"}}>
                <div className="container px-4 py-5" id="custom-cards">
                    {/*<h2 className="pb-2n text-center" style={{color: "#FFC803"}}>Наши Услуги</h2>*/}

                    <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5">
                        <BaseCards
                            title={"Анализ и Корректировка"}
                            imgurl={`${resume005.src}`}
                            title1={"Оценка текущего резюме:"}
                            discription1={"  Детальный анализ вашего существующего резюме, выявление слабых мест и рекомендаций по улучшению."}
                            title2={"Правки и оптимизация:"}
                            discription2={"  Внесение изменений, которые повысят привлекательность вашего резюме для рекрутеров."}
                        />
                        <BaseCards
                            title={"Создание Резюме с Нуля"}
                            imgurl={`${resume006.src}`}
                            title1={"Сбор информации:"}
                            discription1={" Интервью с вами для полного понимания вашего опыта, навыков и карьерных целей."}
                            title2={"Составление резюме:"}
                            discription2={" Cоздание профессионального и структурированного резюме, подчеркивающего ваши сильные стороны."}
                        />
                        <BaseCards
                            title={"Адаптация для Разных Позиции"}
                            imgurl={`${resume001.src}`}
                            title1={"Настройка под вакансии:"}
                            discription1={" Корректировка резюме под конкретные вакансии, чтобы максимально соответствовать требованиям работодателей."}
                            title2={"Многоязычные резюме:"}
                            discription2={" Подготовка резюме на нескольких языках, если вы планируете работать за границей."}
                        />
                        <BaseCards
                            title={"Консультации и Поддержка"}
                            imgurl={`${resume003.src}`}
                            title1={"Индивидуальные консультации:"}
                            discription1={" Советы по улучшению вашего резюме и карьерные рекомендации от наших экспертов."}
                            title2={"Подготовка к собеседованию:"}
                            discription2={" Тренинг и советы по успешному прохождению собеседований."}
                        />

                    </div>
                </div>
            </section>
            <section>
                <div className="container px-4 py-5" id="hanging-icons">
                    <h2 className="pb-2 text-center">Почему выбирают нас?</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <Whywe iconurl={`${whyweimg001.src}`}
                               title={"Опыт и Профессионализм: "}
                               discription={"Наши специалисты имеют многолетний опыт работы в сфере HR и знают, что именно  ищут работодатели."}
                        />
                        <Whywe iconurl={`${whyweimg001.src}`}
                               title={"Индивидуальный Подход:"}
                               discription={"Каждое резюме уникально, и мы тщательно работаем над каждым из них, учитывая все ваши особенности и предпочтения."}
                        />
                        <Whywe iconurl={`${whyweimg001.src}`}
                               title={"Конфиденциальность:"}
                               discription={"Мы гарантируем полную конфиденциальность всех предоставленных данных."}
                        />
                    </div>
                </div>
            </section>
            <section className="container px-4 py-5" id="">
                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="container-fluid py-5">
                        <Row>
                            <Col lg="8">
                                <h3 className="display-5 fw-bold">Начните Свой Путь к Успеху</h3>
                                <h4 className="display-6 fw-bold">
                                    - доверьте это профессионалам!
                                </h4>
                                <p className="col-md-8 fs-4">
                                    Не упустите возможность улучшить свое резюме и увеличить шансы на успешное
                                    трудоустройство. Заполните форму ниже, и наши специалисты свяжутся с вами в ближайшее время.
                                </p>
                            </Col>
                            <Col lg="4">
                                <Contactsform/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            <Contacts/>
        </>
    )
}
export default Resume;