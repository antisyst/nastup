import './showcase.styles.scss';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { useEffect } from 'react';
import Flip from 'react-reveal/Flip';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { AiOutlineThunderbolt, AiOutlineDatabase  } from 'react-icons/ai';
import { CiMobile3 } from 'react-icons/ci';
import { CgIfDesign } from 'react-icons/cg';
import { CiLaptop } from 'react-icons/ci';
import { MdOutlineDesignServices, MdOutlinePhp } from 'react-icons/md';
import { SiTwilio, SiKfc, SiParitysubstrate, SiAmg, SiCommerzbank, SiIkea, SiBurgerking } from 'react-icons/si';
import { MdOutlineSecurity, MdJavascript } from 'react-icons/md';
import { TbWriting, TbBrandAdobe, TbBrandBlogger, TbBrandKotlin, TbBrandGolang, TbBrandGatsby, TbBrandFramerMotion, TbBrandLoom, TbBrandNexo, TbBrandPepsi, TbBrandNordVpn, TbBrandNytimes, TbBrandCSharp, TbBrandReactNative, TbBrandNextjs, TbBrandSvelte, TbBrandNuxt, TbSql, TbBrandMongodb } from 'react-icons/tb';
import { FaReact, FaVuejs, FaPython, FaJava, FaPhp, FaStripe, FaAws } from "react-icons/fa";
import { SiDocker, SiNodedotjs, SiDart, SiXamarin, SiLaravel, SiMui, SiChakraui, SiScala, SiJquery, SiPerl, SiFigma, SiPreact, SiReactquery, SiRedux, SiReduxsaga, SiMysql, SiPostgresql, SiMariadbfoundation, SiHugo } from "react-icons/si";
import { DiAngularSimple, DiCss3Full, DiSwift, DiDjango, DiMeteor, DiSymfonyBadge, DiRuby } from 'react-icons/di';
import { RiFlutterFill } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BsBootstrap } from 'react-icons/bs';
import { VscAzure } from 'react-icons/vsc';

export default function Showcase() {


    React.useEffect(() => {
        document.getElementById("subsFunction").addEventListener("click", subsFunction);

        function subsFunction() {
            document.getElementById("subsFunction").innerHTML = "Subscribed";
        }

    })

    return(
        <div className='custom-showcase-element'>
            <div className='custom-first-content-show_mvc flex-column align-center text-center justify-center'>
            <Fade>
                <h1 className='font-g-sans color-white font-bold text-center custom-showcase-h1-element'>If you want to take your project global, you are in the right place.</h1>
                </Fade>
                <Fade>
                <p className='font-satoshi color-white font-bold custom-showcase-p-element'>It is now very easy to take your idea or idea online. Growing your project will be fully supported by our professional team <AiOutlineThunderbolt/></p>
                </Fade>
                <Fade>
                <div className='flex-row justify-center align-center' id='subs-tabs'>
                    <input type="text" name="email" id="email" className='showcase-input-element font-g-sans color-white font-bold' placeholder='Enter Your Email' />
                    <button type='button' className='showcase-button-element color-black font-author bg-white' id='subsFunction'>Subscribe</button>
                </div>
                </Fade>
                <p className='color-white font-author custom-info-title'><IoInformationCircleOutline/>Create Subscribtion. You can be aware of the news of our company.</p>
                <div className='bottom-showcase-element'>
                    <a href="#HYxAJfwDVtTj" className='text-d-no color-black font-satoshi font-bold'>Explore Now</a>
                </div>
                <p className='scroll-content-showcase color-white font-satoshi font-bold'>Scroll Down</p>
            </div>
            <div className="custom-service-component text-center">
            <Fade>
             <h1 className='custom-first-content m-0 color-white font-g-sans font-bold' id='HYxAJfwDVtTj'>Services</h1>
            </Fade>
            <div className='custom-services-container flex-row align-center justify-center flex-wrap'>
                <Fade>
                    <div className='custom-services-container_item flex-column align-center justify-center color-white'>
                        <CiMobile3/>
                        <h1 className='font-author font-bold text-center'>Mobile Development</h1>
                    </div>
                </Fade>
                <Fade>
                <div className='custom-services-container_item flex-column align-center justify-center color-white'>
                    <CiLaptop/>
                    <h1 className='font-author font-bold text-center'>Web Development</h1>
                </div>
                </Fade>
                <Fade>
                <div className='custom-services-container_item flex-column align-center justify-center color-white'>
                    <CgIfDesign/>
                    <h1 className='font-author font-bold text-center'>UI/UX Design</h1>
                </div>
                </Fade>
                <Fade>
                <div className='custom-services-container_item flex-column align-center justify-center color-white'>
                    <MdOutlineDesignServices/>
                    <h1 className='font-author font-bold text-center'>Product Design</h1>
                </div>
                </Fade>
                <Fade>
                <div className='custom-services-container_item flex-column align-center justify-center color-white'>
                    <MdOutlineSecurity/>
                    <h1 className='font-author font-bold text-center'>Cyber Security</h1>
                </div>
                </Fade>
                <Fade>
                <div className='custom-services-container_item flex-column align-center justify-center color-white'>
                    <AiOutlineDatabase/>
                    <h1 className='font-author font-bold text-center'>Data Science</h1>
                </div>
                </Fade>
                <Fade>
                <div className='custom-services-container_item flex-column align-center justify-center color-white'>
                    <TbWriting/>
                    <h1 className='font-author font-bold text-center'>Content Writing</h1>
                </div>
                </Fade>
                <Fade>
                <div className='custom-services-container_item flex-column align-center justify-center color-white'>
                    <SiParitysubstrate/>
                    <h1 className='font-author font-bold text-center'>Digital Strategy</h1>
                </div>
                </Fade>
            </div>
          </div>
          <div className='brands-corp-component text-center'>
            <h1 className='custom-first-content m-0 color-white font-g-sans font-bold'>They chose us</h1>
            <div className="brands-corp-component-container flex-row align-center flex-wrap justify-center">
                <Slide bottom>
                    <div className="brands-corp-item">
                    <SiKfc/>
                    </div>
                </Slide>
                <Slide bottom>
                <div className="brands-corp-item">
                 <SiBurgerking/>
                </div>
                </Slide>
                <Slide bottom>
                <div className="brands-corp-item">
                 <SiAmg/>
                </div>
                </Slide>
                <Slide bottom>
                <div className="brands-corp-item">
                 <TbBrandAdobe/>
                </div>
                </Slide>
                <Slide bottom>
                <div className="brands-corp-item">
                 <TbBrandFramerMotion/>
                </div>
                </Slide>
                <Slide bottom>
                <div className="brands-corp-item">
                 <TbBrandNexo/>
                </div>
                </Slide>
                <Slide bottom>
                <div className="brands-corp-item">
                 <TbBrandPepsi/>
                </div>
                </Slide>
                <Slide bottom>
                <div className="brands-corp-item">
                 <SiIkea/>
                </div>
                </Slide>
                <Slide bottom>
                <div className="brands-corp-item">
                 <TbBrandBlogger/>
                </div>
                </Slide>
                <Slide bottom>
                <div className="brands-corp-item">
                 <TbBrandNytimes/>
                </div>
                </Slide>
                <Slide bottom>
                <div className="brands-corp-item">
                 <TbBrandNordVpn/>
                </div>
                </Slide>
                <Slide bottom>
                <div className="brands-corp-item">
                 <SiCommerzbank/>
                </div>
                </Slide>
            </div>
          </div>
          <div className='custom-tech-stack-section-component text-center'>
            <Flip top>
             <h1 className='color-white font-g-sans custom-first-content'>Using Technologies</h1>
            </Flip>
            <div className='custom-tech-stack-section-component-container flex-wrap flex-row align-center justify-center'>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <FaReact/>
                    <h2 className='font-author font-bold'>ReactJS</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiDocker/>
                    <h2 className='font-author font-bold'>Docker</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <FaPython/>
                    <h2 className='font-author font-bold'>Python</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <FaVuejs/>
                    <h2 className='font-author font-bold'>VueJS</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <DiAngularSimple/>
                    <h2 className='font-author font-bold'>Angular</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <DiCss3Full/>
                    <h2 className='font-author font-bold'>CSS</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiPostgresql/>
                    <h2 className='font-author font-bold'>PostgreSQL</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <RiFlutterFill/>
                    <h2 className='font-author font-bold'>Flutter</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiNodedotjs/>
                    <h2 className='font-author font-bold'>NodeJS</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <MdJavascript/>
                    <h2 className='font-author font-bold'>JavaScript</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <TbBrandKotlin/>
                    <h2 className='font-author font-bold'>Kotlin</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <TbBrandGolang/>
                    <h2 className='font-author font-bold'>Golang</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <TbBrandGatsby/>
                    <h2 className='font-author font-bold'>Gatsby</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <FaJava/>
                    <h2 className='font-author font-bold'>Java</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <AiOutlineHtml5/>
                    <h2 className='font-author font-bold'>HTML5</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <TbBrandCSharp/>
                    <h2 className='font-author font-bold'>C#</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <BsBootstrap/>
                    <h2 className='font-author font-bold'>Bootstrap</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <TbBrandReactNative/>
                    <h2 className='font-author font-bold'>React Native</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiDart/>
                    <h2 className='font-author font-bold'>Dart</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <FaPhp/>
                    <h2 className='font-author font-bold'>PHP</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiXamarin/>
                    <h2 className='font-author font-bold'>Xamarin</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiMysql/>
                    <h2 className='font-author font-bold'>MySQL</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiLaravel/>
                    <h2 className='font-author font-bold'>Laravel</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiMui/>
                    <h2 className='font-author font-bold'>MaterialUI</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiChakraui/>
                    <h2 className='font-author font-bold'>ChakraUI</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <DiSwift/>
                    <h2 className='font-author font-bold'>SwiftUI</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiScala/>
                    <h2 className='font-author font-bold'>Scala</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiJquery/>
                    <h2 className='font-author font-bold'>jQuery</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <DiDjango/>
                    <h2 className='font-author font-bold'>Django</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiPerl/>
                    <h2 className='font-author font-bold'>Perl</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiFigma/>
                    <h2 className='font-author font-bold'>Figma</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <TbBrandNextjs/>
                    <h2 className='font-author font-bold'>NextJS</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiReduxsaga/>
                    <h2 className='font-author font-bold'>Redux Saga</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <TbBrandNuxt/>
                    <h2 className='font-author font-bold'>NuxtJS</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <TbBrandSvelte/>
                    <h2 className='font-author font-bold'>Stelve</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <DiMeteor/>
                    <h2 className='font-author font-bold'>MeteorJS</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <DiSymfonyBadge/>
                    <h2 className='font-author font-bold'>Symfony</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <FaStripe/>
                    <h2 className='font-author font-bold'>Stripe</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiPreact/>
                    <h2 className='font-author font-bold'>PreReact</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <DiRuby/>
                    <h2 className='font-author font-bold'>Ruby</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiReactquery/>
                    <h2 className='font-author font-bold'>ReactQuery</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <TbBrandMongodb/>
                    <h2 className='font-author font-bold'>MongoDB</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiRedux/>
                    <h2 className='font-author font-bold'>Redux</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <TbSql/>
                    <h2 className='font-author font-bold'>SQL</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <FaAws/>
                    <h2 className='font-author font-bold'>AWS</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <VscAzure/>
                    <h2 className='font-author font-bold'>Azure</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiMariadbfoundation/>
                    <h2 className='font-author font-bold'>MariaDB</h2>
                </div>
            </Flip>
            <Flip top>
                <div className="tech-stack_item flex-column align-center color-white justify-center">
                    <SiHugo/>
                    <h2 className='font-author font-bold'>Hugo</h2>
                </div>
            </Flip>
            </div>
          </div>
          <div className='person-reviews-component text-center'>
            <Slide bottom>
              <h1 className='custom-first-content m-0 color-white font-g-sans font-bold'>Popular Clients</h1>
            </Slide>
          <div className="person-reviews-component-container flex-row align-center justify-center flex-wrap">
          <Slide bottom>
            <div className="per-reviews_item flex-column justify-center align-start">
                <SiKfc/>
                <p className='text-left font-outfit color-white'>Our story with KFC goes way back. We’ve redesigned their website, mobile app, kiosks and more. And now, as strategic digital partner, we manage their omnichannel experience and analytics.</p>
            </div>
            </Slide>
          <Slide bottom>
            <div className="per-reviews_item flex-column justify-center align-start">
                <SiAmg/>
                <p className='text-left font-outfit color-white'>AMG is the performance arm of Mercedes-Benz. Partnering with the team at their Stuttgart HQ, we developed a number of innovative product concepts for Mercedes-AMG car-sharing services.</p>
            </div>
            </Slide>
          <Slide bottom>
            <div className="per-reviews_item flex-column justify-center align-start">
                <TbBrandAdobe/>
                <p className='text-left font-outfit color-white'>If there’s one relationship that defines us as a company, it’s our long-term partnership with Adobe. As their digital partner, we consulted on numerous international projects of massive scale.</p>
            </div>
            </Slide>
           <Slide bottom>
            <div className="per-reviews_item flex-column justify-center align-start">
                <TbBrandBlogger/>
                <p className='text-left font-outfit color-white'>We’re strategic partners to Blogger – a national platform for HR and social development services in Global. Together, we create world-class customer experiences for public services.</p>
            </div>
            </Slide>
           <Slide bottom>
            <div className="per-reviews_item flex-column justify-center align-start">
                <TbBrandPepsi/>
                <p className='text-left font-outfit color-white'>We partnered with Pepsi’s – one of the world’s most recognisable drink brands – to reimagine the e-commerce experience for their customers.</p>
            </div>
            </Slide>
           <Slide bottom>
            <div className="per-reviews_item flex-column justify-center align-start">
                <SiCommerzbank/>
                <p className='text-left font-outfit color-white'>Commerz is the second-largest bank in Germany. Working in close partnership, we created a new design for their mobile transaction system, as well as PeoPay – their award-winning flagship app.</p>
            </div>
            </Slide>
           <Slide bottom>
            <div className="per-reviews_item flex-column justify-center align-start">
                <SiIkea/>
                <p className='text-left font-outfit color-white'>Our long-term partnership with IKEA, the Swedish furniture giant, focuses on strategic digital transformation projects. We help shift their core business services from offline to online.</p>
            </div>
            </Slide>
           <Slide bottom>
            <div className="per-reviews_item flex-column justify-center align-start">
                <SiBurgerking/>
                <p className='text-left font-outfit color-white'>We led the design of Burger King’s in-store kiosks, having partnered successfully with other AmRest brands. Since then, we’ve also taken charge of optimising their omnichannel experience.</p>
            </div>
            </Slide>
           <Slide bottom>
            <div className="per-reviews_item flex-column justify-center align-start">
                <TbBrandNordVpn/>
                <p className='text-left font-outfit color-white'>We created state-of-the-art software for the Nord – a premium co-working space in Europe, in the heart of Earth.</p>
            </div>
            </Slide>
          </div>
          </div>
        </div>
    )
}