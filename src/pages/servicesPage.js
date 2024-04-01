import React, {Component} from 'react';
import AsideComponent from "../components/asideComponent";
import HeaderComponent from "../components/headerComponent";
import FooterComponent from "../components/footerComponent";
import BannerComponent from '../components/bannerComponent';
import {ASSETS} from "../constants/paths";

class ServicesPage extends Component {
    state={
        openMobileitem:false,

    }
    openMobileMenu=()=>{

        this.setState({
            openMobileitem:!this.state.openMobileitem,


        })



    }
    render() {

        return (
            <div className={`main-root ${this.state.openMobileitem ? "main-root open" : ""}`}>
                <AsideComponent />
                <main className="main" >
                    <HeaderComponent  openMobileMenu={this.openMobileMenu}/>
                    <div className="services-root">
                        <BannerComponent
                        mainTitle = "SERVICES"
            
                        img = "/services/brazilian-2.jpg"
                        
                        />
                        <div className="services-wrapper text-area">
                            <div className="services-container">
                                <a href="/aestheticAndPlactic" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/aesthetic-plastic.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Aesthetic, Plastic and Reconstructive Surgery</span>

                                    </div>
                                </a>
                                <a href="/" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/hair.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Hair Transplantation</span>

                                    </div>
                                </a>
                                <a href="/body" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/body.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>BODY</span>

                                    </div>
                                </a>

                            </div>
                            <div className="services-container">
                                <a href="/bbl" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/brazilian.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Brazilian Butt Lift (BBL)</span>

                                    </div>
                                </a>
                                <a href="/vaserLipo" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/Vaser-Liposuction.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Vaser Liposuction</span>

                                    </div>
                                </a>
                                <a href="/" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/tummy-tuck.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Tummy Tuck</span>

                                    </div>
                                </a>

                            </div>
                            <div className="services-container">
                                <a href="/" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/mini-tummy.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Mini Tummy Tuck</span>

                                    </div>
                                </a>
                                <a href="/cellilute" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/Cellulite.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Cellulite Treatment with Mesotherapy</span>

                                    </div>
                                </a>
                                <a href="/gynecomastial" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/gynecomastia.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Gynecomastia</span>

                                    </div>
                                </a>

                            </div>
                            <div className="services-container">
                                <a href="/mommyMakeOver" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/mommy.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Mommy Makeover Surgery</span>

                                    </div>
                                </a>
                                <a href="/postbariatric" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/Post-Bariatric-Surgery.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Postbariatric Surgery</span>

                                    </div>
                                </a>
                                <a href="/calfSurgery" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/calf.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span> Calf Augmentation Surgery</span>

                                    </div>
                                </a>

                            </div>
                            <div className="services-container">
                                <a href="/thighLift" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/thigh-thinning.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Thigh Lift Surgery</span>

                                    </div>
                                </a>
                                <a href="/armLift" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/Arm-Lift-Surgery.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Arm Lift Surgery</span>

                                    </div>
                                </a>
                                <a href="/breast" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/Breast.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Breast</span>

                                    </div>
                                </a>

                            </div>
                            <div className="services-container">
                                <a href="/breastAugmentation" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/breast_augmentation.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Breast Augmentation</span>

                                    </div>
                                </a>
                                <a href="/breastUplift" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/Breast-Uplift-Surgery.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Breast Uplift Surgery</span>

                                    </div>
                                </a>
                                <a href="/breastReduroction" className="services-block">
                                    <div className="image-item">
                                        <img src={`${ASSETS}/services/Breast-reduction-surgery.jpg`} alt="logo" />

                                    </div>
                                    <div className="text-item">
                                        <span>Breast Reduction Surgery</span>

                                    </div>
                                </a>

                            </div>



                        </div>



                    </div>
                    <FooterComponent/>
                </main>

            </div>
        );
    }
}

export default ServicesPage;