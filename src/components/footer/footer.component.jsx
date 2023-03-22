import './footer.styles.scss';
import ImportIcon from '../../icons/import-icon';
import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Footer() {
    return(
        <div className='bottom-tag-element-footer-component'>
              <Fade bottom>
            <div className='footer-bottom-container'>
                <div>
                    <ImportIcon/>
                    <h3 className='m-0 footer-caption-bottom color-white font-outfit'>we build everything,<br />we build things,<br />we build quality,<br /> we build your dream.</h3>
                    <h2 className='color-white font-outfit font-bold'>Developed by <a href="" className='text-d-no color-white font-g-sans'>Ramazan Azimli</a></h2>
                    <p className='color-white font-poppins font-bold'>Copyright 2023© <span className='color-white font-poppins font-bold'>All Rights Reserved</span></p>
                </div>
                <div className='flex-column align-start justify-center'>
                    <h2 className='color-white font-author font-bold custom-footer-contact-content'>Contact</h2>
                    <p className='contact-subcontent color-white font-author font-bold'>hello@nastup.com</p>
                    <p className='contact-subcontent color-white font-author font-bold'>service@nastup.com</p>
                    <br /><br /><br />
                    <h4 className='location-footer-content color-white font-g-sans font-bold'>Location: Remote Worldwide</h4>
                </div>
            </div>
            </Fade>
        </div>
    )
}