import React from "react";

import ig_icon from '../image/ig_icon.png'
import fb_icon from '../image/fb_icon.png'

const Footer = () => {
    return (
        <footer>
            <div className='footerDiv'>
                <div className='contactIcons'>
                    <a href=''><img src={fb_icon} /></a>
                    <a href=''><img src={ig_icon} /></a>
                </div>
                <p>Designed by GameTeach @ 2021</p>
            </div>
        </footer>
    );
}

export default Footer;