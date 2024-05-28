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
                    style={{
                        // background: "#444863",
                        // color: "#FFFFFF",
                        // boxShadow: "2px 0 5px 0 #444863",
                        // boxShadow: "2px 2px 0 0 #FFC803",
                        // borderRadius: "1px"
                        // padding: "0 10px",
                    }}
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
                <Modal.Header closeButton>
                    <Modal.Title>Заявка на подбор персонала</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CastingForm handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default CastingButton;