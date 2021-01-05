import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";


function ModalConfirm(props) {
  const { buttonLabel, message ,handleAction,item, status} = props;

  const [modal, setModal] = useState(status);

  const toggle = () => setModal(!modal);
  return (
    <>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Xác nhận</ModalHeader>
        <ModalBody>
            <h6> {message}</h6>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={()=>{
              toggle();
              handleAction(1, item.id);
          }}>
            Đồng Ý
          </Button>{" "}
          <Button color="secondary" onClick={()=>{
              handleAction(0);
              toggle();
          }}>
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

ModalConfirm.propTypes = {};
ModalConfirm.defaultProps={
  status:false
}

export default ModalConfirm;
