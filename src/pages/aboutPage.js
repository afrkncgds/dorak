import React, {Component} from 'react';
import HeaderComponent from "../components/headerComponent";
import AsideComponent from "../components/asideComponent";

import FooterComponent from "../components/footerComponent";
import BannerComponent from "../components/bannerComponent";
import {ASSETS} from "../constants/paths";

class AboutPage extends Component {

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
                        mainTitle = "ABOUT"
                        img = "/services/body.jpg"
                    />
                    <div className="about-root">

                        <div className="contents-wrapper">
                            <div className="title-block">
                                <h3>About Us Dorak Health is a subsidiary of Dorak Holding with headquarters in Istanbul.</h3>
                            </div>
                            <div className="contents-container text-area">
                                <div className="image-block">
                                    <img src={`${ASSETS}/services/about.jpg`} alt="logo" />

                                </div>
                                <div className="text-block">
                                    <div className="benefits-right-section">

                                        <div className="pbmit-heading-subheading text-left">
                                            <h4 className="pbmit-subtitle">About Us</h4>
                                        </div>
                                        <p className="mb-5">
                                            Dorak Health is a subsidiary of Dorak Holding with headquarters in Istanbul.
                                            Since its founding in 1971 the holding is among the most successful
                                            companies
                                            in the tourism sector of Turkey. Dorak Holding was originated in 1971 with
                                            the
                                            stablishment of Dorak Tour which has been actively furnishing services in
                                            tourism
                                            industry by putting signature to remarkable and significant projects
                                            throughout
                                            Turkey & beyond. The company grew into a establishment of group of companies
                                            by
                                            2002 which turned into a holding company by 2011. With a passion on
                                            excellence,
                                            the group invested in complimentary activities to provide a seamless service
                                            quality.
                                            Today, Dorak Holding embodies several subsidiaries including travel
                                            agencies, overseas
                                            sales offices, hotels, restaurants as well as a transportation fleet, hot
                                            air balloon
                                            and outdoor activities. With the principle of investing back in Anatolia
                                            which has been
                                            a great inspiration, throughout the years of experience in the field. Dorak
                                            Holding became
                                            prominent brand in Turkish tourism sector with a dynamic team of over 3000
                                            professionals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contents-wrapper second fullText">
                            <div className="banner-tangreal-top-item">
                                <img src="https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2020/01/bgn-footer-top.png" alt="bt_bb_section_top_section_coverage_image"/>
                            </div>
                            <div className="contents-container text-area">

                                <div className="text-block">
                                    <div className="benefits-right-section">
                                        <div className="pbmit-heading-subheading text-left">
                                            <h2 className="pbmit-title">Private & Tailor-made travel</h2>
                                        </div>
                                        <p className="col-md-12">
                                            Dorak Health has unrivalled experience at creating superb private travel
                                            arrangements, whether you would like to take oneof our set itineraries on
                                            a private basis or have a trip tailored for you from scratch. From expert
                                            planning to the delivery of reliable, seamless services on the ground, we
                                            take even the most complex requirements and craft them into well-structured
                                            itineraries, brought to life by the most experienced, knowledgeable and
                                            thoughtful
                                            representatives in each destination.
                                        </p>
                                        <p className="col-md-12">
                                            Exceptional experience: One of the keys to enjoying private travel
                                            in an unfamiliar country is peace of mind. Dorak Health has been organising
                                            travel to destinations worldwide longer than many other tour operator and
                                            the
                                            culture of attention to detail and personal service has been passed on to
                                            successive generations of staff.
                                        </p>
                                        <p className="col-md-12">
                                            Expert planning: The planning of your personalised holiday
                                            will be in the hands of one of our well-travelled, highlytrained
                                            tour consultants, who are all destination experts. Your tour consultant
                                            will be your contact from start to nish of the planning process, to help
                                            continuity and also to ensure that all your specific interests and
                                            requirements are taken into account
                                        </p>
                                        <p className="col-md-12">
                                            Reliable support on the ground: On arrival in each new destination on your
                                            journey, you will normally be met at the airport, station or quay by a Dorak
                                            Health representative who will then accompany you to your hotel, help you
                                            check in and confirm the itinerary for your stay.
                                        </p>
                                        <p className="col-md-12">
                                            Private guides: Your own private English speaking (or any language
                                            requested) local guide accompanies most sightseeing excursions. This means
                                            that you can ask as many or as few questions as you like, with the emphasis
                                            on your own particular interests. With the aim of fulfilling every demand
                                            and expectations of the patients and their loved ones Dorak Health has been
                                            active with the colloboration of expert doctors and tourism professionals.
                                        </p>
                                        <p className="col-md-12">
                                            We as Dorak Health bring together patients from many countries over the
                                            world, primarily from the Middle East, with specialists of the health
                                            industry. In addition, our experienced staff provides prior to and after
                                            treatment accommodation, guidance and translation service to patients and
                                            institutions
                                        </p>
                                        <div className="pbmit-heading-subheading text-left">
                                            <h4 className="pbmit-subtitle"> Why Turkey ?</h4>
                                        </div>
                                        <p className="col-md-12">
                                            With modern hospitals, educated human force, professional doctors, enhanced
                                            technological infrastructure, geographical position and experience Turkey
                                            provides medical services with European standarts. Each year, more than
                                            500.000 people visit Turkey from abroad to receive medical treatment. The
                                            health of guests visiting Turkey for health tourism is under the protection
                                            of the Turkish state. Dorak Health has been licensed by Turkish Ministry of
                                            Healthcare’s and we collaborate with the best specialists, the most famous
                                            hospitals, and experienced team of doctors in Turkey for international
                                            patients to Turkey for health tourism.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-tangreal-bottom-item">
                                <img src="https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2020/01/bottom-cover-2.png" alt="bt_bb_section_bottom_section_coverage_image"></img>
                            </div>
                        </div>

                    </div>
                    <FooterComponent/>
                </main>

            </div>
        );
    }
}

export default AboutPage;