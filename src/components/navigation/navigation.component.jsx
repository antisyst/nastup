import './navigation.styles.scss';
import { Link } from 'react-router-dom';
import ImportIcon from '../../icons/import-icon';
import React from 'react';
import Slide from 'react-reveal/Slide';

export default function Navigation() {
        return(
            <div className='custom-navigation-component flex-row align-center justify-between'>
                <div>
                <Link to='/'>
                <Slide top>
                 <ImportIcon/>
                </Slide>
                </Link>
                </div>
                <div>
                <Slide top>
                    <Link to='/pricing' className='font-g-sans text-d-no custom-router-element font-bold color-white'>Pricing</Link>
                </Slide>
                    {/* <Link to='/pricing' className='font-g-sans text-d-no custom-router-element font-bold color-white'>Technologies</Link> */}
                </div>
            </div>
        )
}