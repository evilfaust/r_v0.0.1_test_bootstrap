// import Image from "next/image";
import Servis from "@/app/components/servis";
import backgroundImages from "@/public/img/bg-002.png";


const Servises = () => {
    return (
        <>
        <section style={{ marginTop: "-50px" }}>
            <div className="container-fluid"
            style={{
                    backgroundImage: `url(${backgroundImages.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                    display: 'grid',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12" id="servises">
                        <h1 className="text-center text-light">
                            Наши услуги
                        </h1>
                    </div>
                    <div className="col-6 col-sm-3 col-lg-2">
                        <Servis
                            imgUrl="/img/Job-search-v2.png"
                            title="Поиск работы"
                            discription="Найдите идеальную должность с нашей помощью."
                            link="№"
                            more="more"
                        />
                    </div>
                    <div className="col-6 col-sm-3 col-lg-2">
                        <Servis
                            imgUrl="/img/Search-company-v2.png"
                            title="Поиск сотрудников для компании"
                            discription="Найдите лучших кандидатов для вашей команды."
                            link="№"
                            more="more"
                        />
                    </div>
                    <br/>
                    <div className="col-6 col-sm-3 col-lg-2">
                        <Servis
                            imgUrl="/img/resume-v2.png"
                            title="Подготовка резюме"
                            discription="Создайте привлекательное резюме и выделяйтесь на фоне конкурентов."
                            link="№"
                            more="more"
                        />
                    </div>

                    <div className="col-6 col-sm-3 col-lg-2">
                        <Servis
                            imgUrl="/img/Career-v2.png"
                            title="Карьерная консультация"
                            discription="Персональная стратегия для достижения карьерных целей."
                            link="№"
                            more="more"
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default Servises;