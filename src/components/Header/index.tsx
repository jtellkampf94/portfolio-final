import CTA from "../CTA";
import HeaderSocials from "../HeaderSocials";
import "./index.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jonathan Tellkampf</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="header__hero">Some image</div>

        <a href="" className="header__scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
