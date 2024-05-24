// import Image from "next/image";
// import styles from "./page.module.css";
import NavBar from "@/app/components/navbar";
import First from "@/app/components/first";
import ServisesNew from "@/app/components/servisesNew";
import Partners from "@/app/components/partners";
import Contacts from "@/app/components/contacts";

export default function Home() {
  return (
      <>
        <NavBar/>
        <First/>
        <ServisesNew/>
        <Partners/>
        <Contacts/>
      </>
  );
}
