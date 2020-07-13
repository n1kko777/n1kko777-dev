import React from "react";
import Telegram from "../assets/icons/telegram.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Github from "../assets/icons/github.svg";
import Vk from "../assets/icons/vk.svg";
import Mail from "../assets/icons/mail.svg";

export const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://t.me/n1kk0777"
        className="socials__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Telegram} alt="Telegram" />
      </a>
      <a
        href="https://wa.me/79655091360"
        className="socials__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Whatsapp} alt="Whatsapp" />
      </a>
      <a
        href="https://github.com/n1kko777"
        className="socials__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Github} alt="Github" />
      </a>
      <a
        href="https://vk.com/nikko777"
        className="socials__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Vk} alt="Vk" />
      </a>
      <a
        href="mailto:3734489@gmail.com"
        className="socials__item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Mail} alt="Mail" />
      </a>
    </div>
  );
};
