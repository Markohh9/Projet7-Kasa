import logo from '../assets/img/logo-footer.svg'

function Footer () {

    return (

        <div className="footerContainer">
            <img className="footerLogo" src={logo} alt='Logo Footer Kasa'></img>
            <p className="footerTxt">© 2020 Kasa. All rights reserved</p>
        </div>
    );
}


export default Footer;