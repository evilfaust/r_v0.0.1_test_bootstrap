import cardStyle from "@/app/jobsearch/jobsearch.module.css";
import Image001 from "@/public/img/photo-1557177324-56c542165309.jpeg";


const CardShadow = () => {


    return(
        <>
                    {/*<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">*/}

<section className={cardStyle[`hero-section`]} id="tada" >
    <div className={cardStyle[`card-grid`]}>
        <a className={cardStyle.card} href="#">
            <div className={cardStyle[`card__background`]}
                 style={{
                     backgroundImage: `url(${Image001.src})`
                 }}></div>
            <div className={cardStyle[`card__content`]}>
                <p className={cardStyle[`card__category`]}>Category</p>
                <h3 className={cardStyle[`card__heading`]}>Example Card Heading</h3>
            </div>
        </a>
        <a className={cardStyle.card} href="#">
            <div className={cardStyle[`card__background`]}
                 style={{
                     backgroundImage: `url(${Image001.src})`
                 }}></div>
            <div className={cardStyle[`card__content`]}>
                <p className={cardStyle[`card__category`]}>Category</p>
                <h3 className={cardStyle[`card__heading`]}>Example Card Heading</h3>
            </div>
        </a>
        {/*<a className={cardStyle.card} href="#">*/}
        {/*  <div className="card__background" style={{background-image: `url(${}`}}></div>*/}
        {/*  <div class="card__content">*/}
        {/*    <p class="card__category">Category</p>*/}
        {/*    <h3 class="card__heading">Example Card Heading</h3>*/}
        {/*  </div>*/}
        {/*</a>*/}
        {/*<a class="card" href="#">*/}
        {/*  <div class="card__background" style="background-image: url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"></div>*/}
        {/*  <div class="card__content">*/}
        {/*    <p class="card__category">Category</p>*/}
        {/*    <h3 class="card__heading">Example Card Heading</h3>*/}
        {/*  </div>*/}
        {/*</a>*/}
        {/*<a class="card" href="#">*/}
        {/*  <div class="card__background" style="background-image: url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"></div>*/}
        {/*  <div class="card__content">*/}
        {/*    <p class="card__category">Category</p>*/}
        {/*    <h3 class="card__heading">Example Card Heading</h3>*/}
        {/*  </div>*/}
        {/*</a>*/}
    </div>
</section>
        </>
    )
}

export default CardShadow;