'use client'
// import {any} from "prop-types";
import "../blog/page.module.css"
// import backgroundImagesSM from '../../public/img/bg-006.png'
// import backgroundImagesLG from '../../public/img/bg-first-ok.png'
import styles from '../blog/page.module.css'
// import Round from '../components/round'
import Image from "next/image";
import CastingButton from "@/app/components/castingbutton";
// import {useEffect, useState} from "react";
// import ImageBG from "../../public/img/bg-008.png"
const First = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //
  //   window.addEventListener('resize', handleResize);
  //
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  // const buttonVariant = windowWidth < 576 ? 'btn-lg' : 'btn-lg';
    return (
        <>
            <section id="first" className={styles[`bg-ani-002`]}>
                <div className="container-fluid mb-5" style={{
                    // backgroundImage: `url(${ImageBG.src})`,
                    // backgroundPosition: "center",
                    // backgroundSize: "cover",
                    // backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                    display: 'grid',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="row"
                    style={{
                        // backgroundImage: `url(${ImageBG.src})`,
                        // padding: "10px"
                    }}
                    >
                        <div className="col-lg-8"
                        style={{
                        // backgroundImage: `url(${ImageBG.src})`,
                        // padding: "10px",
                        // backgroundPosition: "center",
                        // backgroundSize: "cover",
                        // backgroundRepeat: "no-repeat",
                        // borderRadius: "10px"
                    }}
                        >
                            <div className="p-5 mb-4 rounded-3">
                                <div className="container-fluid py-1 text-light">
                                    <h1 className="display-6 fw-bold">RU.DA - центр карьеры.</h1>
                                    <p className="col-md-8 fs-4">
                                        Ваш надёжный партнёр в поиске работы. Мы предоставляем широкий спектр услуг,
                                        помогающих нашим клиентам достичь успеха в их профессиональном росте.</p>
                                    <div className="row">
                                        <div className="col-lg-4 col-ms-12" style={{padding: "5px"}}>
                                            <CastingButton />
                                        </div>
                                        <div className="col-lg-4 col-ms-12" style={{padding: "5px"}}>
                                            <a className={`${styles.hoverBG} btn w-100`} type="button"
                                               href="https://t.me/RUDAstaff">
                                                Подписаться на
                                                <Image src="/img/telegram.svg"
                                                       alt="phone"
                                                       className="d-inline-block align-text-top"
                                                       width={20}
                                                       height={20}
                                                       style={{
                                                           marginLeft: "5px",
                                                           height: "20px",
                                                           width: "auto"
                                                       }}
                                                />
                                            </a>
                                            <div className="col-12 d-block d-sm-none w-100">
                                                <Image src="/img/first-rigth-dark-y.svg"
                                                       alt=""
                                                       width={250}
                                                       height={250}
                                                       style={{width: "80%", height: "auto", paddingTop: "10px"}}
                                                       className="mx-auto d-block"
                                                />
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <Image src="/img/first-rigth-dark-y.svg"
                                   alt=""
                                   width={250}
                                   height={250}
                                   style={{width: "100%", height: "auto"}}
                            />
                        </div>
                        <div className="col-lg-1 d-none d-lg-block"></div>


                    </div>
                    {/*<div className="row">*/}
                    {/*    <div className="col-lg-3 col-sm-6 col-6">*/}
                    {/*        <Image src="/img/production-test.png"*/}
                    {/*               alt={"production"}*/}
                    {/*               width={167}*/}
                    {/*               height={260}*/}
                    {/*               style={{ width: "100%", height: "auto" }}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-3 col-sm-6 col-6">*/}
                    {/*        <Image src="/img/production-test.png"*/}
                    {/*               alt={"production"}*/}
                    {/*               width={167}*/}
                    {/*               height={260}*/}
                    {/*               style={{ width: "100%", height: "auto" }}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-3 col-sm-6 col-6">*/}
                    {/*        <Image src="/img/production-test.png"*/}
                    {/*               alt={"production"}*/}
                    {/*               width={167}*/}
                    {/*               height={260}*/}
                    {/*               style={{ width: "100%", height: "auto" }}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-3 col-sm-6 col-6">*/}
                    {/*        <Image src="/img/production-test.png"*/}
                    {/*               alt={"production"}*/}
                    {/*               width={167}*/}
                    {/*               height={260}*/}
                    {/*               style={{ width: "100%", height: "auto" }}*/}
                    {/*        />*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </section>
        </>
    )
}


export default First;