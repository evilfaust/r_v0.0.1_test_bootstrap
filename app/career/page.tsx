import NavBar from "@/app/components/navbar";
import Contacts from "@/app/components/contacts";
import styles from "@/app/blog/page.module.css";
import React from "react";
// images career cards
import careerImage001 from "@/public/img/careerImage001.png";
import careerImage002 from "@/public/img/careerImage002.png";
import careerImage003 from "@/public/img/careerImage003.png";
import careerImage004 from "@/public/img/careerImage004.png";
import careerImage005 from "@/public/img/careerImage005.png";

import BaseCards3item from "@/app/components/basecards3item";
import Image from "next/image";
import Whywe from "@/app/components/whywe";
import whyweimg001 from "@/public/img/icon-017.svg";
import {Col, Row} from "react-bootstrap";
import Contactsform from "@/app/components/contactsform";


const Career = () => {


    return (
        <>
            <NavBar/>
            <section className={styles[`bg-ani-002`]}>
                <div className="px-4 py-5 my-5 text-center">
                    <Image className="d-block mx-auto mb-4" src="/img/sail.svg" alt={" "} width={250}
                           height={250} style={{width: "auto", height: "50px"}}/>
                    <h1 className="display-4 fw-bold text-light">Карьерная Консультация</h1>
                    <h6 className="display-6 text-center text-light">Ваша Карьера в Надежных Руках</h6>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4 text-light">
                            Планирование и развитие карьеры – это важные этапы профессионального пути каждого человека.
                            В кадровом агентстве RU.DA мы предлагаем профессиональные карьерные консультации, которые
                            помогут вам определить ваши цели, разработать стратегию их достижения и сделать уверенные
                            шаги к успеху.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles[`bg-ani-003`]} style={{marginTop: "-50px"}}>
                <div className="container px-4 py-5" id="custom-cards">
                    <h2 className="pb-2n text-center" style={{color: "#FFC803"}}>Наши Услуги</h2>
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        <BaseCards3item title={"Планирование Карьеры"}
                                        imgurl={`${careerImage001.src}`}
                                        title1={"Анализ текущей ситуации:"}
                                        discription1={" Оценка вашего текущего положения, навыков и достижений."}
                                        title2={"Определение целей:"}
                                        discription2={" Помощь в формулировке краткосрочных и долгосрочных карьерных целей."}
                                        title3={"Разработка стратегии:"}
                                        discription3={" Создание детального плана действий для достижения поставленных целей."}
                        />
                        <BaseCards3item title={"Профессиональная Переподготовка"}
                                        imgurl={`${careerImage002.src}`}
                                        title1={"Оценка навыков и компетенций:"}
                                        discription1={" Анализ ваших текущих навыков и выявление потребности в дополнительных знаниях или умениях."}
                                        title2={"Рекомендации по обучению:"}
                                        discription2={" Советы по выбору курсов, тренингов и других образовательных программ для повышения квалификации."}
                                        title3={""}
                                        discription3={""}
                        />
                        <BaseCards3item title={"Консультации по Рынку Труда"}
                                        imgurl={`${careerImage003.src}`}
                                        title1={"Анализ рынка:"}
                                        discription1={" Информация о текущих тенденциях и требованиях на рынке труда в вашей области."}
                                        title2={"Сравнительный анализ:"}
                                        discription2={" Помощь в выборе наиболее перспективных направлений для профессионального развития."}
                                        title3={""}
                                        discription3={""}
                        />
                        <BaseCards3item title={"Подготовка к Собеседованиям"}
                                        imgurl={`${careerImage004.src}`}
                                        title1={"Тренинги и ролевые игры:"}
                                        discription1={" Подготовка к различным типам собеседований, включая стрессовые интервью и групповые дискуссии."}
                                        title2={"Советы и рекомендации:"}
                                        discription2={" Как правильно презентовать себя и свои достижения, какие вопросы задавать работодателю."}
                                        title3={""}
                                        discription3={""}
                        />
                        <BaseCards3item title={"Адаптация к Новому Месту Работы"}
                                        imgurl={`${careerImage005.src}`}
                                        title1={"Первые шаги:"}
                                        discription1={" Помощь в адаптации к новому коллективу и рабочей культуре."}
                                        title2={"Управление ожиданиями:"}
                                        discription2={" Управление ожиданиями: Советы по успешной интеграции и достижению первых успехов на новом месте работы."}
                                        title3={""}
                                        discription3={""}
                        />

                    </div>
                </div>
            </section>
            <section>
                <div className="container px-4 py-5" id="hanging-icons">
                    <h2 className="pb-2 text-center">Почему выбирают нас?</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <Whywe iconurl={`${whyweimg001.src}`}
                               title={"Экспертность и Опыт: "}
                               discription={"Наши консультанты – профессионалы с многолетним опытом в сфере HR и карьерного консультирования."}
                        />
                        <Whywe iconurl={`${whyweimg001.src}`}
                               title={"Индивидуальный Подход:"}
                               discription={" Мы тщательно анализируем вашу ситуацию и разрабатываем персонализированные рекомендации."}
                        />
                        <Whywe iconurl={`${whyweimg001.src}`}
                               title={"Комплексное Сопровождение:"}
                               discription={"Мы поддерживаем вас на всех этапах карьерного пути – от поиска работы до адаптации в новом коллективе."}
                        />
                    </div>
                </div>
                <h2 className="pb-2 text-center">Отзывы Наших Клиентов</h2>
                <div className="container " id="icon-grid-1">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
                        <div className="col d-flex align-items-start">
                            <div className="bi text-body-secondary flex-shrink-0 me-3"
                                 style={{width: "1.75em", height: "1.75em"}}>
                                <Image src="/img/icon-016.svg" alt="agro" width={32} height={32}
                                       className=""/>
                            </div>
                            <div>
                                <figure className="text-start">
                                    <blockquote className="blockquote">
                                        <p>
                                            "Консультация в RU.DA помогла мне пересмотреть мои карьерные цели и
                                            найти работу, которая действительно приносит удовлетворение."
                                        </p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Марина Л., <cite title="Source Title">Финансовый аналитик </cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>


                        <div className="col d-flex align-items-start">
                            <div className="bi text-body-secondary flex-shrink-0 me-3"
                                 style={{width: "1.75em", height: "1.75em"}}>
                                <Image src="/img/icon-015.svg" alt="agro" width={32} height={32}
                                       className=""/>
                            </div>
                            <div>
                                <figure className="text-start">
                                    <blockquote className="blockquote">
                                        <p>
                                            "Я долго не мог найти работу по специальности.
                                            Специалисты RU.DA дали мне полезные советы и помогли
                                            улучшить резюме и подготовиться к собеседованиям. Сейчас
                                            я работаю в престижной компании."
                                        </p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Дмитрий К., <cite title="Source Title">Инженер </cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="bi text-body-secondary flex-shrink-0 me-3"
                                 style={{width: "1.75em", height: "1.75em"}}>
                                <Image src="/img/icon-015.svg" alt="agro" width={32} height={32}
                                       className=""/>
                            </div>
                            <div>
                                <figure className="text-start">
                                    <blockquote className="blockquote">
                                        <p>
                                            "Я долго не мог найти работу по специальности.
                                            Специалисты RU.DA дали мне полезные советы и помогли
                                            улучшить резюме и подготовиться к собеседованиям. Сейчас
                                            я работаю в престижной компании."
                                        </p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Дмитрий К., <cite title="Source Title">Инженер </cite>
                                    </figcaption>
                                </figure>
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
                                <h3 className="display-5 fw-bold">Начните Свой Путь к Успеху</h3>
                                <p className="col-md-8 fs-4">
                                    Не откладывайте свои карьерные цели на потом.
                                    Заполните форму ниже, и наши специалисты свяжутся с
                                    вами в ближайшее время для назначения консультации.
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
export default Career;