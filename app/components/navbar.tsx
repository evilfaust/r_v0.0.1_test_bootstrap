'use client'

import Image from "next/image";
// import styles from "@/app/blog/page.module.css";
// import {Modal} from "react-bootstrap";
// import {useState} from "react";
import CastingButton from "@/app/components/castingbutton";
// import {useEffect} from "react";

const NavBar = () => {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  //   // import("bootstrap/dist/js/bootstrap");
  //
  // }, []);



  return (
      <>
        <div className="container">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          {/*<div className="container-fluid">*/}
          <div className="container">

            <a className="navbar-brand" href="/">
              <Image src="/img/ruda-logo.svg" alt="logo" className="d-inline-block align-text-top" width={198} height={28} />

            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{}}>
                {/*<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height: 100px;"}}>*/}

                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">О компании</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#servises">Наши услуги</a>
                </li>
                <li>
                  <a className="nav-link" aria-current="page" href="#contats">Контакты</a>
                </li>
                {/*<li className="nav-item dropdown">*/}
                {/*  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"*/}
                {/*     aria-expanded="false">*/}
                {/*    Link*/}
                {/*  </a>*/}
                {/*  <ul className="dropdown-menu">*/}
                {/*    <li><a className="dropdown-item" href="#">About</a></li>*/}
                {/*    <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                {/*    <li>*/}
                {/*      <hr className="dropdown-divider"/>*/}
                {/*    </li>*/}
                {/*    <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                {/*  </ul>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                {/*  <a className="nav-link disabled" aria-disabled="true">Link</a>*/}
                {/*</li>*/}
              </ul>
              <div className="d-flex text-center">
                <a href={"#"}>
                  <Image src="/img/phone.svg" alt="phone" className="d-inline-block align-text-top" width={28}
                         height={28} style={{marginRight: 20}}/>
                </a>
                {/*<a href={"#"}>*/}
                {/*  <Image src="/img/vk.svg" alt="phone" className="d-inline-block align-text-top" width={28}*/}
                {/*         height={28} style={{marginRight: 20}}/>*/}
                {/*</a>*/}
                <a href={"#"}>
                  <Image src="/img/telegram.svg" alt="phone" className="d-inline-block align-text-top" width={28}
                         height={28} style={{marginRight: 20}}/>
                </a>
                {/*<a href={'#'}>*/}
                {/*  <Image src="/img/whatsapp.svg" alt="phone" className="d-inline-block align-text-top" width={28}*/}
                {/*         height={28} style={{marginRight: 20}}/>*/}
                {/*</a>*/}
                {/*role="search"*/}
                {/*<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>*/}
                {/*<button className="btn btn-outline-success" type="submit">Search</button>*/}

                  <CastingButton />

              </div>
            </div>
          </div>
        </nav>
        </div>






      </>
  );
};

export default NavBar;