import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import { VscClose } from "react-icons/vsc";

const CertificateModal = ({ isOpen, onClose, imageUrl, title }) => {
  const modalRef = useRef(null);

  // Fungsi untuk menutup modal
  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.close(); // Menutup modal dengan method close
      onClose(); // Memastikan state di parent juga diperbarui
    }
  };

  // Fungsi untuk membuka modal
  const handleOpen = () => {
    if (modalRef.current) {
      modalRef.current.showModal(); // Menampilkan modal dengan method showModal
    }
  };

  // Memastikan modal dibuka ketika isOpen berubah menjadi true
  useEffect(() => {
    if (isOpen) {
      handleOpen();
    }
  }, [isOpen]);

  // Memastikan modal dapat dibuka kembali setelah ditutup
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.addEventListener("close", () => {
        onClose(); // Pastikan parent mengetahui ketika modal ditutup
      });
    }

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener("close", onClose);
      }
    };
  }, [onClose]);

  return (
    <dialog ref={modalRef} id="my_modal_1" className="modal">
      <div className="w-full lg:w-1/2 relative">
        {/* Tombol Close */}
        <button
          onClick={handleClose}
          className="btn btn-sm btn-circle btn-neutral border-0 absolute right-2 lg:-right-2 top-4"
        >
          <VscClose />
        </button>

        {/* Isi Modal */}
        <div className="p-5 w-full">
          <h3 className="badge badge-neutral lg:badge-lg mb-2 p-4 font-semibold lg:text-xl">
            {title}
          </h3>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Certificate"
              className="w-full rounded-lg"
            />
          )}
        </div>
      </div>
    </dialog>
  );
};

CertificateModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CertificateModal;
