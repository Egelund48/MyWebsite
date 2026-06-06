// src/components/SocialLinks.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaGitlab, FaFilePdf, FaEnvelope } from "react-icons/fa";
import "../style/Homepage.css"; 

function SocialLinks() {
  const links = [
    {
        href: "https://www.linkedin.com/in/christian-egelund-hansen-94586a298/",
        icon: <FaLinkedin className="social-icon" />,
    },
    {
        href: "https://github.com/Egelund48",
        icon: <FaGithub className="social-icon" />,
    },
    {
        href: "https://gitlab.sdu.dk/chhan24",
        icon: <FaGitlab className="social-icon" />,
    },
    {
        href: `/CV_main.pdf?v=${new Date().getTime()}`,
        icon: <FaFilePdf className="social-icon" />,
        label: "CV",
    },
        {
        href: "mailto:christianegelundhansen@hotmail.com",
        icon: <FaEnvelope className="social-icon" />,
    },
  ];

  return (
    <div className="social-links">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          {link.icon}
          {link.label && <span>{link.label}</span>}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;