import './plans.styles.scss';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


export default function Plans() {
    return(
        <div className='charts-pricing-component text-center'>
            <Slide top>
             <h1 className='text-center m-0 color-white font-g-sans font-bold custom-first-content'>Pricing</h1>
            </Slide>
            <div className="charts-pricing-component-container flex-row flex-wrap align-center justify-center">
            <Fade bottom>
                <div className='chart-price_item flex-column align-center justify-start'>
                    <div>
                        <h1 className='font-g-sans color-white font-bold custom-plan_h1'>UI/UX Design</h1>
                        <h3 className='color-white font-author font-bold custom-plan_h3'>starting <span className='font-outfit'>$120</span></h3>
                    </div>
                    <div className='flex-column align-start custom-spect-card_sub'>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Interactive and awesome UI templates.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Super clear and clean layout.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Elegant Fonts and Animation prototyping.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Fully editable web UI Template design.</p>
                    </div>
                    <h2 className='text-center color-white font-g-sans font-bold pack-id-sub'>Package Code:  456798</h2>
                </div>
                </Fade>
               <Fade bottom>
                <div className='chart-price_item flex-column align-center justify-start'>
                    <div>
                        <h1 className='font-g-sans color-white font-bold custom-plan_h1'>Frontend Development</h1>
                        <h3 className='color-white font-author font-bold custom-plan_h3'>starting <span className='font-outfit'>$170</span></h3>
                    </div>
                    <div className='flex-column align-start custom-spect-card_sub'>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>ReactJS, NextJS, TypeScript, JavaScript.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>restAPI, Context API, Redux/Redux Toolkit.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>SASS/SCSS, LESS, TailwindCSS, Bootstrap.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Server Side Rendering (SSR).</p>
                    </div>
                    <h2 className='text-center color-white font-g-sans font-bold pack-id-sub'>Package Code:  994088</h2>
                </div>
                </Fade>
               <Fade bottom>
                <div className='chart-price_item flex-column align-center justify-start'>
                    <div>
                        <h1 className='font-g-sans color-white font-bold custom-plan_h1'>Backend Development</h1>
                        <h3 className='color-white font-author font-bold custom-plan_h3'>starting <span className='font-outfit'>$210</span></h3>
                    </div>
                    <div className='flex-column align-start custom-spect-card_sub'>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Python, PHP, MySQL, MongoDB, Java.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>ASP.Net Core, Cloud, PostgreSQL.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Flask, Django, Laravel, CakePHP.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>All Payment Integration.</p>
                    </div>
                    <h2 className='text-center color-white font-g-sans font-bold pack-id-sub'>Package Code:  257957</h2>
                </div>
                </Fade>
               <Fade bottom>
                <div className='chart-price_item flex-column align-center justify-start'>
                    <div>
                        <h1 className='font-g-sans color-white font-bold custom-plan_h1'>Mobile Development</h1>
                        <h3 className='color-white font-author font-bold custom-plan_h3'>starting <span className='font-outfit'>$178</span></h3>
                    </div>
                    <div className='flex-column align-start custom-spect-card_sub'>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Flutter, Dart, SwiftUI, Python, Xamarin.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>React Native, Kotlin, Ruby, Golang. </p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>IOS and Android support system.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Perfect User Experience.</p>
                    </div>
                    <h2 className='text-center color-white font-g-sans font-bold pack-id-sub'>Package Code:  800491</h2>
                </div>
                </Fade>
               <Fade bottom>
                <div className='chart-price_item flex-column align-center justify-start'>
                    <div>
                        <h1 className='font-g-sans color-white font-bold custom-plan_h1'>Game Development</h1>
                        <h3 className='color-white font-author font-bold custom-plan_h3'>starting <span className='font-outfit'>$270</span></h3>
                    </div>
                    <div className='flex-column align-start custom-spect-card_sub'>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Python, Lua, Unity, Unreal Engine.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>C++, C#, JavaScript, Java. </p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Advanced multiplayer support.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Powerful 2D & 3D graphics.</p>
                    </div>
                    <h2 className='text-center color-white font-g-sans font-bold pack-id-sub'>Package Code:  494744</h2>
                </div>
                </Fade>
               <Fade bottom>
                <div className='chart-price_item flex-column align-center justify-start'>
                    <div>
                        <h1 className='font-g-sans color-white font-bold custom-plan_h1'>Cyber Security</h1>
                        <h3 className='color-white font-author font-bold custom-plan_h3'>starting <span className='font-outfit'>$700</span></h3>
                    </div>
                    <div className='flex-column align-start custom-spect-card_sub'>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Python, C++, Ruby, PowerShell.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>PHP, Java, Linux, CRM. </p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Data Centers, Networking, Databases.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Penetration Testing.</p>
                    </div>
                    <h2 className='text-center color-white font-g-sans font-bold pack-id-sub'>Package Code:  313229</h2>
                </div>
                </Fade>
               <Fade bottom>
                <div className='chart-price_item flex-column align-center justify-start'>
                    <div>
                        <h1 className='font-g-sans color-white font-bold custom-plan_h1'>Data Science</h1>
                        <h3 className='color-white font-author font-bold custom-plan_h3'>starting <span className='font-outfit'>$320</span></h3>
                    </div>
                    <div className='flex-column align-start custom-spect-card_sub'>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Python, R, SQL, Java.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Julia, Scala, JavaScript, Swift. </p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Go, SAS, MATLAB.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Parametric Hypothesis testing.</p>
                    </div>
                    <h2 className='text-center color-white font-g-sans font-bold pack-id-sub'>Package Code:  556426</h2>
                </div>
                </Fade>
               <Fade bottom>
                <div className='chart-price_item flex-column align-center justify-start'>
                    <div>
                        <h1 className='font-g-sans color-white font-bold custom-plan_h1'>WordPress Dev.</h1>
                        <h3 className='color-white font-author font-bold custom-plan_h3'>starting <span className='font-outfit'>$90</span></h3>
                    </div>
                    <div className='flex-column align-start custom-spect-card_sub'>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>HTML, CSS, JavaScript, PHP.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Highly secure and SEO friendly.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Unlimited revisions and future support.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>Analytics and Easy Backend Panel.</p>
                    </div>
                    <h2 className='text-center color-white font-g-sans font-bold pack-id-sub'>Package Code:  482355</h2>
                </div>
                </Fade>
               <Fade bottom>
                <div className='chart-price_item flex-column align-center justify-start'>
                    <div>
                        <h1 className='font-g-sans color-white font-bold custom-plan_h1'>React Development</h1>
                        <h3 className='color-white font-author font-bold custom-plan_h3'>starting <span className='font-outfit'>$120</span></h3>
                    </div>
                    <div className='flex-column align-start custom-spect-card_sub'>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>ReactJS, React DOM, Redux/toolkit.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/> Router, Hooks, React Bootstrap, Blueprint.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>MaterialUI, Ant Design, Chakra UI, visx.</p>
                    <p className='color-white font-outfit'><HiOutlineCheckCircle/>ContextAPI, Semantic UI, PreReact, Saga.</p>
                    </div>
                    <h2 className='text-center color-white font-g-sans font-bold pack-id-sub'>Package Code:  545259</h2>
                </div>
                </Fade>
            </div>
        </div>
    )
}