import { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { BiMessageSquareDetail } from "react-icons/bi";

import "./index.scss";

const Nav: React.FC = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
        onClick={() => setActiveNav("#home")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        className={activeNav === "#skills" ? "active" : ""}
        onClick={() => setActiveNav("#skills")}
      >
        <VscTools />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
