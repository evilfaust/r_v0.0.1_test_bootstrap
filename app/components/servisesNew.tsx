import card from "@/app/blog/page.module.css";
// import backgroundImages from "@/public/img/bg-004.png";
import Image from "next/image";
import styles from "@/app/blog/page.module.css";
// import Baner from "../../public/img/servises_banner.png";

const servisesNew = () => {


    return (
        <>
            <section
                style={{
                marginTop: "-50px",
                // // backgroundImage: `url(${backgroundImages.src})`,
                // // backgroundPosition: "center",
                // // backgroundSize: "cover",
                // // backgroundRepeat: "no-repeat",
                // width: "100vw",
                // height: "100vh",
                // // display: 'grid',
                // alignItems: 'center',
                // justifyContent: 'center'
            }}
                     id="servises"
                     className={styles[`bg-ani-003`]}
            >
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light text-light">
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
                                <p className="lead text-light">
                                    В этом разделе вы сможете найти помощь в поиске работы, подборе сотрудников,
                                    подготовке резюме и карьерной консультации. Мы предлагаем профессиональные
                                    решения для вашего карьерного роста и успеха вашей компании.
                                    Something short and leading about the collection
                                    </p>
                                <p>
                                    <a className={`${styles.hoverBG} btn my-2`} href="" style={{marginRight: "10px"}}>
                                        Заявка на подбор
                                    </a>
                                    <a className={`${styles.hoverBG} btn my-2`} href="" style={{marginRight: "10px"}}>
                                        Заявка на подбор
                                    </a>
                                </p>
                            </div>
                        </div>
                        {/*</section>*/}

                        {/*<section style={{*/}
                        {/*    marginTop: "-50px",*/}
                        {/*    // backgroundImage: `url(${backgroundImages.src})`,*/}
                        {/*    // backgroundPosition: "center",*/}
                        {/*    // backgroundSize: "cover",*/}
                        {/*    // backgroundRepeat: "no-repeat",*/}
                        {/*    width: "100vw",*/}
                        {/*    height: "100vh",*/}
                        {/*    // display: 'grid',*/}
                        {/*    alignItems: 'center',*/}
                        {/*    justifyContent: 'center'*/}
                        {/*}}*/}
                        {/*         id="servises"*/}
                        {/*         className={styles[`bg-ani-003`]}*/}
                        {/*>*/}

                        {/*<div className="container" style={{paddingTop: "50px"}}>*/}
                        {/*    <div className="row">*/}
                        {/*        <div*/}
                        {/*            style={{*/}
                        {/*                // display: "flex",*/}
                        {/*                // alignItems: "center",*/}
                        {/*                display: "flex",*/}
                        {/*                alignItems: "center",*/}
                        {/*                justifyContent: "center",*/}
                        {/*                height: "100%"*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            <Image src="/img/icon-008.svg"*/}
                        {/*                   className="img-fluid"*/}
                        {/*                   alt="Logo"*/}
                        {/*                   width={250}*/}
                        {/*                   height={250}*/}
                        {/*                   style={{*/}
                        {/*                       marginRight: "20px",*/}
                        {/*                       width: "auto",*/}
                        {/*                       height: "50px"*/}
                        {/*                   }}/>*/}
                        {/*            <h1 className="text-center text-light">*/}
                        {/*                Наши услуги*/}
                        {/*            </h1>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                        {/*<div*/}
                        {/*style={{*/}
                        {/*    width: "100%",*/}
                        {/*    height: "1rem",*/}
                        {/*    backgroundColor: "rgba(0, 0, 0, .1)",*/}
                        {/*    border: "solid rgba(0, 0, 0, .15)",*/}
                        {/*    borderWidth: "1px 0",*/}
                        {/*    boxShadow: "inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15)"*/}
                        {/*}}*/}
                        {/*>*/}
                        {/*</div>  */}

                        <div className="container"
                            // style={{marginTop: "50px"}}
                        >
                            <div className={card['page-content']}>
                                <div className={card['card']}>
                                    <div className={card.content}>
                                        <h2 className={card.title}>Поиск работы</h2>
                                        <p className={"card.[`copy`] d-none d-sm-block"}>
                                            Найдите идеальную должность с нашей помощью.
                                        </p>
                                        <a className={`${styles.hoverBG} btn`} href="/jobsearch">подробнее</a>
                                    </div>
                                </div>
                                <div className={card.card}>
                                    <div className={card.content}>
                                        <h2 className={card.title}>Поиск сотрудников для компании</h2>
                                        <p className={"card.[`copy`] d-none d-sm-block"}>
                                            Найдите лучших кандидатов для вашей команды.
                                        </p>
                                        <a className={`${styles.hoverBG} btn`} href="/searchcompany">подробнее</a>
                                    </div>
                                </div>
                                <div className={card.card}>
                                    <div className={card.content}>
                                        <h2 className={card.title}>Подготовка резюме</h2>
                                        <p className={"card.[`copy`] d-none d-sm-block"}>
                                            Создайте привлекательное резюме и выделяйтесь на фоне конкурентов.
                                        </p>
                                        <a className={`${styles.hoverBG} btn`} href="/resume">подробнее</a>
                                    </div>
                                </div>
                                <div className={card.card}>
                                    <div className={card.content}>
                                        <h2 className={card.title}>Карьерная консультация</h2>
                                        <p className={"card.[`copy`] d-none d-sm-block"}>
                                            Персональная стратегия для достижения карьерных целей.
                                        </p>
                                        <a className={`${styles.hoverBG} btn`} href="/career">подробнее</a>
                                    </div>
                                </div>
                                {/*<div className={card.card}>*/}
                                {/*    <div className={card.content}>*/}
                                {/*        <h2 className={card.title}>Explore The Galaxy</h2>*/}
                                {/*        <p className={card.copy}>Seriously, straight up, just blast off into outer space today</p>*/}
                                {/*        <button className={card.btn}>Book Now</button>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default servisesNew;