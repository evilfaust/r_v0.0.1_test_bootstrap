import NavBar from '../components/navbar';
import First from '../components/first';
// import card from "./page.module.css"
// import Servises from "@/app/components/servises";
// import Image from "next/image";
import ServisesNew from "@/app/components/servisesNew";
import Contacts from "@/app/components/contacts";
import Partners from "@/app/components/partners";
export default function Blog() {

    return (
        <div>
            <NavBar/>
            <First/>
            <ServisesNew/>
            <Partners/>
            <Contacts/>


            {/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>*/}
            {/*<div className={card['page-content']}>*/}
            {/*    <div className={card['card']}>*/}
            {/*        <div className={card.content}>*/}
            {/*            <h2 className={card.title}>Поиск работы</h2>*/}
            {/*            <p className={card.copy}>*/}
            {/*                Найдите идеальную должность с нашей помощью.*/}
            {/*            </p>*/}
            {/*            <button className={card.btn}>подробнее</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={card.card}>*/}
            {/*        <div className={card.content}>*/}
            {/*            <h2 className={card.title}>Поиск сотрудников для компании</h2>*/}
            {/*            <p className={card.copy}>*/}
            {/*                Найдите лучших кандидатов для вашей команды.*/}
            {/*            </p>*/}
            {/*            <button className={card.btn}>подробнее</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={card.card}>*/}
            {/*        <div className={card.content}>*/}
            {/*            <h2 className={card.title}>Подготовка резюме</h2>*/}
            {/*            <p className={card.copy}>*/}
            {/*                Создайте привлекательное резюме и выделяйтесь на фоне конкурентов.*/}
            {/*            </p>*/}
            {/*            <button className={card.btn}>подробнее</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={card.card}>*/}
            {/*        <div className={card.content}>*/}
            {/*            <h2 className={card.title}>Карьерная консультация</h2>*/}
            {/*            <p className={card.copy}>*/}
            {/*                Персональная стратегия для достижения карьерных целей.*/}
            {/*            </p>*/}
            {/*            <button className={card.btn}>подробнее</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*<div className={card.card}>*!/*/}
            {/*    /!*    <div className={card.content}>*!/*/}
            {/*    /!*        <h2 className={card.title}>Explore The Galaxy</h2>*!/*/}
            {/*    /!*        <p className={card.copy}>Seriously, straight up, just blast off into outer space today</p>*!/*/}
            {/*    /!*        <button className={card.btn}>Book Now</button>*!/*/}
            {/*    /!*    </div>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
        </div>
    )
}