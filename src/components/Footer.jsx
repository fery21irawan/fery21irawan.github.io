import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <small className="text-xs">
          Copyright © {new Date().getFullYear()} - All right reserved by Fery
          Irawan
        </small>
      </aside>
    </footer>
  );
}

export default Footer;
