import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModalButton = ({ disabled }) => {
  const [, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = window.location.pathname;
  // const to = url === "/edit" ? "/" : "/";

  return (
    <>
      <button
        onClick={handleShow}
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        disabled={disabled}
      >
        {url === "/create" ? <span>Создать</span> : <span>Редактировать</span>}
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <p>Обновлено!</p>
            </div>
            <div className="modal-footer">
              <button
                onClick={handleClose}
                data-bs-dismiss="modal"
                className="btn"
              >
                <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
                  Close
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { ModalButton };
