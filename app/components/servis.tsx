import Image from "next/image";

interface ServisProps {
    imgUrl: string;
    title: string;
    discription: string;
    link: string;
    more: string;
}

const Servis = (props: ServisProps) => {
     const { imgUrl, title, discription, link, more } = props;
    return (
        <>
            {/*  второй вариант   */}
            <div className="card">
                <Image src={imgUrl} className="card-img-top" alt="..." width={230}
                       height={400}
                       style={{width: "100%", height: "auto"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <div className="d-grid gap-2">
                        <a href={link} className="btn btn-primary">Подробнее {more}</a>
                    </div>
                </div>
            </div>

            {/*третий вариант*/}


            {/*// <!-- end container -->*/}
        </>
    )
}

export default Servis;