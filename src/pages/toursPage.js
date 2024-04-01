import React, {Component} from 'react';
import AsideComponent from "../components/asideComponent";
import HeaderComponent from "../components/headerComponent";
import FooterComponent from "../components/footerComponent";
import BannerComponent from '../components/bannerComponent';
import {ASSETS} from "../constants/paths";

class ToursPage extends Component {
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
                    <BannerComponent
                        mainTitle = "Tours"

                        img = "/tour/7-day-tour-detay.jpg"

                    />
                    <div className="tours-root text-area">
                        <div className="services-container">
                            <a href="/breastAugmentation" className="services-block">
                                <div className="image-item">
                                    <img src={`${ASSETS}/tour/7-day-tour-detay.jpg`} alt="logo" />

                                </div>
                                <div className="text-item">
                                    <span>7-Day Tour</span>

                                </div>
                            </a>
                            <a href="/capadociaIstanbul" className="services-block">
                                <div className="image-item">
                                    <img src={`${ASSETS}/tour/Cappadocia-tour-list-detay.jpg`} alt="logo" />

                                </div>
                                <div className="text-item">
                                    <span>Cappadocia – Istanbul Tour</span>

                                </div>
                            </a>
                            <a href="/capadocia" className="services-block">
                                <div className="image-item">
                                    <img src={`${ASSETS}/tour/Cappadocia–Istanbul-Tour-list.jpg`} alt="logo" />

                                </div>
                                <div className="text-item">
                                    <span>Cappadocia Tour</span>

                                </div>
                            </a>

                        </div>
                        <div className="services-container">
                            <a href="/istanbul" className="services-block">
                                <div className="image-item">
                                    <img src={`${ASSETS}/tour/istanbul-tur.jpg`} alt="logo" />

                                </div>
                                <div className="text-item">
                                    <span>Istanbul Tour</span>

                                </div>
                            </a>


                        </div>




                    </div>
                    <FooterComponent/>
                </main>

            </div>
        );
    }
}

export default ToursPage;