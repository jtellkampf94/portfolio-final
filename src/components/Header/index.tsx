import CTA from "../CTA";
import HeaderSocials from "../HeaderSocials";
import "./index.scss";

const Header: React.FC = () => {
  return (
    <header className="header" id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jonathan Tellkampf</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <span className="header__tags top-tag">&lt;body&gt;</span>
        <span className="header__tags">&lt;/html&gt;</span>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
