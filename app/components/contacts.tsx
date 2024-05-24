import Image from "next/image";
import styles from '../blog/page.module.css'


const Contacts = () => {
    
    
    
    
    return (
        <>
            <style>

            </style>

        <section id="contats"
        style={{
            backgroundColor: "#444863",
            width: "100vw",
            height: "50vh",
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'center'
        }}
                 className={styles[`bg-ani-003`]}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center text-light">
                            Как с нами связаться?
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row text-light">
                    <div className="col-lg-4">
                        <Image src="/img/logo-w.svg" alt="logo" className="d-inline-block align-text-top mx-auto d-block" width={198} height={28}/>
                        <h4 className="text-center">Центр карьеры</h4>
                        Ежедневно с 9:00 до 19:00 <br/>
                        подписаться на телеграм канал
                        <a href="#" className={`${styles.hoverBG} btn w-100`}
                        // style={{
                        //         // background: "#444863",
                        //         color: "#FFC803",
                        //         // boxShadow: "2px 0 5px 0 #444863",
                        //         boxShadow: "2px 2px 0 0 #FFC803",
                        //         borderRadius: "1px"
                        // }}
                        >
                            @RUDAstaff
                        <Image src="/img/telegram-o.svg"
                               alt="telegram"
                               className="d-inline-block align-text-top"
                               width={28}
                               height={28}
                               style={{
                                   marginLeft: "5px",
                                   height: "18px",
                                   width: "auto",
                               }}
                        />
                        </a>
                    </div>
                    <div className="col-lg-4 d-none d-sm-block">
                        <Image src="/img/first-rigth-dark-y.svg"
                               alt=""
                               width={250}
                               height={250}
                               style={{width: "80%", height: "auto", paddingTop: "10px"}}
                               className="mx-auto d-block"
                        />
                    </div>
                    <div className="col-lg-4 ">
                        <h4 className="text-center">
                            Контакты
                        </h4>
                        <a href="tel:+79000000000" type="botton" className={`${styles.hoverBG} btn w-100`}
                           style={{
                               // background: "#444863",
                               // color: "#FFFFFF",
                               // boxShadow: "2px 0 5px 0 #444863",
                               // borderRadius: "1px",
                               marginTop: "7px",

                           }}
                        >
                            тел.: +7 (900) 000 00 00
                        </a>
                        <br/>
                        <a href="mailto:RU.DAstaff@yandex.ru" type="botton" className={`${styles.hoverBG} btn w-100`}
                           style={{
                               // background: "#444863",
                               // color: "#FFFFFF",
                               // boxShadow: "2px 0 5px 0 #444863",
                               // borderRadius: "1px",
                               marginTop: "7px",
                           }}
                        >
                            RU.DAstaff@yandex.ru
                        </a>
                        <br/>
                        <a href="#" type="botton" className={`${styles.hoverBG} btn w-100`}
                           style={{
                               // background: "#444863",
                               // color: "#FFFFFF",
                               // boxShadow: "2px 0 5px 0 #444863",
                               // borderRadius: "1px",
                               marginTop: "7px",
                           }}
                        >
                            Обратная связь
                        </a>

                        {/*тел.: <a href="tel:+79000000000">+7 (900) 000 00 00</a> <br/>*/}
                        {/*<a href="mailto:RU.DAstaff@yandex.ru ">RU.DAstaff@yandex.ru </a><br/>*/}
                        {/*<a href="#" type="botton" className="btn w-100"*/}
                        {/*   style={{*/}
                        {/*       background: "#444863",*/}
                        {/*       color: "#FFFFFF",*/}
                        {/*       boxShadow: "2px 0 5px 0 #444863",*/}
                        {/*       borderRadius: "1px"*/}
                        {/*   }}*/}
                        {/*>*/}
                        {/*    Обратная связь*/}
                        {/*</a>*/}
                    </div>
                    <div className="col-12">
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contacts;