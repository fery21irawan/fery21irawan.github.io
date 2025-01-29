import React, { useEffect, useState } from "react";
import { fetchCertificates } from "../data/certificates";
import CertificateModal from "./CertificateModal"; // Import CertificateModal

function Certificate() {
  const [certificates, setCertificates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengelola status modal
  const [selectedImageUrl, setSelectedImageUrl] = useState(""); // State untuk menyimpan URL gambar yang dipilih
  const [title, setTitle] = useState("");

  useEffect(() => {
    const certs = async () => {
      const req = await fetchCertificates();
      setCertificates(req);
    };
    certs();
  }, []);

  // Fungsi untuk membuka modal dengan gambar yang dipilih
  const handleImageClick = (imageUrl, title) => {
    setSelectedImageUrl(imageUrl);
    setTitle(title);
    setIsModalOpen(true);
  };

  return (
    <>
      {certificates.map((certificate, i) => (
        <div key={i} className="flex flex-col w-full">
          <div className="divider divider-start">
            <h2 className="text-xl font-semibold" data-aos="fade-left">
              {certificate.title}
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {certificate.datalist &&
              certificate.datalist.map((datalist, i) => (
                <li key={i}>
                  <a
                    className="hover:cursor-pointer link-certificates"
                    onClick={() =>
                      handleImageClick(datalist.url, certificate.title)
                    } // Klik gambar untuk membuka modal
                  >
                    <img
                      src={datalist.url}
                      alt=""
                      loading="lazy"
                      className="rounded hover:opacity-90 hover:scale-95 transition-all duration-300"
                      data-aos="fade-up"
                      data-aos-delay={i * 150}
                    />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ))}

      {/* Modal untuk menampilkan gambar besar */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Menutup modal
        imageUrl={selectedImageUrl} // Kirim URL gambar ke modal
        title={title}
      />
    </>
  );
}

export default Certificate;
