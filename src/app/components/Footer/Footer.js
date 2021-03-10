import React from 'react';
import footerStyles from "./footer.module.css";

const Footer = () => {
    return ( 
        <div className={footerStyles.container}>
            <p className={footerStyles.text}>© 2021 Pablo Rueda</p>
        </div>
     );
}
 
export default Footer;