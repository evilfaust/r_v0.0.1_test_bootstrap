import Image from "next/image";
import styles from "@/app/blog/page.module.css";


const Partners = () => {


    return (
        <>
        <section id="partners"
        style={{
                width: "100vw",
                height: "50vh",
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'center'
        }}
                 className={styles[`bg-ani-002`]}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-light">Наши партнеры</h1>
                    </div>
                </div>
            </div>
            <div className="container" style={{opacity: "0.7"}}>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-6">
                        <Image src="/img/eurochem.svg" alt="eurochem" width={1000} height={314}
                        style={{ width: "100%", height: "auto" }}/>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <Image src="/img/progroup.svg" alt="progroup" width={1000} height={314}
                        style={{ width: "100%", height: "auto" }}/>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <Image src="/img/vaninotrans.svg" alt="vaninotrans" width={1000} height={314}
                        style={{ width: "100%", height: "auto" }}/>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <Image src="/img/alvari.svg" alt="alvari" width={1000} height={314}
                        style={{ width: "100%", height: "auto" }}/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Partners;