import React from "react";

export default function Footer({ productName }) {
  let footerStyle = {
    width: "100%",
    border: "2px solid grey",
    marginTop: "2rem",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; {productName}</p>
    </footer>
  );
}
