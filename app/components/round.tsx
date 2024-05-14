import "../blog/page.module.css"
import Image from "next/image";
// import {auto} from "@popperjs/core";

const Round = () => {

    return (
        <>
            <section>
                <div className="container">
                    <div className="row"
                     style={{ alignItems: "center", justifyContent: "center", position: "relative" }}>
                        <div className="col-lg-3 ">
                            <Image
                                src="/img/roud_maning.png"
                                alt="roud maning"
                                width={251}
                                height={427}
                                style={{ width: "100%", height: "auto" }}
                            />
                                {/*className="position-relative top-50 start-50 translate-middle"*/}

                        </div>
                        <div className="col-lg-4">
                            <Image
                                src="/img/roud_poduction.png"
                                alt="roud poduction"
                                width={446}
                                height={611}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className="col-lg-3">
                             <Image
                                 src="/img/roud_industy.png"
                                 alt="roud industy"
                                 width={279}
                                 height={475}
                             style={{ width: "100%", height: "auto" }}
                             />
                        </div>
                        <div className="col-lg-2">
                             <Image
                                 src="/img/roud_agro.png"
                                 alt="roud agro"
                                 width={210}
                                 height={376}
                                 style={{ width: "100%", height: "auto" }}
                             />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Round
