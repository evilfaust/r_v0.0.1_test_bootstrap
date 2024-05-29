import styles from "@/app/blog/page.module.css";
import {Modal} from "react-bootstrap";
import CastingForm from "@/app/components/castingform";
import {useState} from "react";


const CastingButton = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            <button className={`${styles.hoverBG} btn w-100`} type="button"
                    onClick={handleShow}>
                Заявка на подбор
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                {/*<div className={`${styles[`bg-ani-002`]} rounded-2`}>*/}
                    <div className="rounded-2" style={{backgroundColor: '#383c52'}}>

                        <Modal.Header closeButton>
                            <Modal.Title className="text-center text-light">Заявка на подбор персонала</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CastingForm handleClose={handleClose}/>
                        </Modal.Body>
                    </div>
            </Modal>
        </>
)
}
export default CastingButton;