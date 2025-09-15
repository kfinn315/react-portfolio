import logo from '../assets/logo.svg';
import "../styles/footer.css";

export const Footer = () => <div className="side">
    <img src={logo} alt="Kevin Finn logo" width="45" height="43" />
    <p className="footer-text text--sm">
        &copy; 2025 Kevin Finn All rights reserved.
    </p>
</div>;