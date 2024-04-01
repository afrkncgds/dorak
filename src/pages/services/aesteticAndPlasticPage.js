import React, {Component} from 'react';
import AsideComponent from "../../components/asideComponent";
import HeaderComponent from "../../components/headerComponent";
import FooterComponent from "../../components/footerComponent";
import BannerComponent from '../../components/bannerComponent';
import {ASSETS} from "../../constants/paths";

class AesteticAndPlasticPage extends Component {
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
                        mainTitle = "AESTETIC & PLASTIC"
                        img = "/services/aesthetic-plastic.jpg"
                    />
                    <div className="aestetic-plastic-root ">

                        <div className="contents-wrapper">
                            <div className="contents-container text-area">
                                <div className="image-block">
                                    <img src={`${ASSETS}/services/about-image-2.jpg`} alt="logo" />

                                </div>
                                <div className="text-block">
                                    <p>
                                        Deals with plastic surgery, aesthetic and reconstructive surgery (renovation
                                        surgery). Cosmetic surgery reshapes the normal body structures and develops the
                                        appearance of the individual and his perception of himself. Reconstructive surgery
                                        is applied on abnormal body structures that were formed in connection with the birth
                                        or those that have appeared afterwards, and its initial purpose is to recover the
                                        functions of the body structures that are affected as much as possible.
                                    </p>
                                    <div className="pbmit-heading-subheading text-left">
                                        <h4 className="pbmit-subtitle">
                                            Aesthetic, Plastic And Reconstructive Surgeries That Are Performed Frequently
                                        </h4>
                                    </div>
                                    <div className="pbmit-heading-subheading text-left">
                                        <h2 className="pbmit-title">
                                            1) Application Areas Of Aesthetic – Cosmetic Interferences
                                        </h2>
                                    </div>
                                    <p>Nose deformations</p>
                                    <p>Deformations of facial bones</p>
                                    <p>Deformations of jaw bone</p>
                                    <p>Excessive lipoidosis in the abdomen, legs and arms, irregularities in fat
                                        accumulation</p>
                                    <p>Disproportions in breast (largeness-smallness) and sagging breasts</p>
                                    <p>Skin problems: wrinkles, undesired blots and tattoos, traces</p>
                                    <p>Aging of the face: sagging, wrinkling of the skin and muscles of the face-neck</p>
                                    <p>Lower-upper eyelid sagging</p>
                                </div>
                            </div>
                        </div>
                        <div className="contents-wrapper second">
                            <div className="banner-tangreal-top-item">
                                <img src="https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2020/01/bgn-footer-top.png" alt="bt_bb_section_top_section_coverage_image"/>
                            </div>
                            <div className="contents-container  text-area ">
                                <div className="text-block">
                                    <div className="pbmit-heading-subheading text-left">
                                        <h2 className="pbmit-title">
                                            2) Reconstruction Of Congenital Deficiencies And Developmental Abnormalities
                                        </h2>
                                    </div>
                                    <p> Birthmarks, nevus, hemangiomas</p>
                                    <p> Abnormal breast development</p>
                                    <p> Cleft lip and palate</p>
                                    <p> Hand, finger and arm anomalies</p>
                                    <p> Face, facial bones and skull anomalies</p>
                                    <p> Flap-ear and other ear anomalies</p>
                                    <p> Urogenital system development anomalies in males and females</p>
                                </div>
                                <div className="image-block">
                                    <img src={`${ASSETS}/services/aesthetic-plastic.jpg`} alt="logo" />

                                </div>

                            </div>
                            <div className="banner-tangreal-bottom-item">
                                <img src="https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2020/01/bottom-cover-2.png" alt="bt_bb_section_bottom_section_coverage_image"></img>
                            </div>
                        </div>
                        <div className="contents-wrapper">
                            <div className="banner-tangreal-top-item">
                                <img src="https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2020/01/bgn-footer-top.png" alt="bt_bb_section_top_section_coverage_image"/>
                            </div>

                            <div className="contents-container text-area">
                                <div className="image-block">
                                    <img src={`${ASSETS}/services/spine-image-1.jpg`} alt="logo" />

                                </div>
                                <div className="text-block">
                                    <div className="pbmit-heading-subheading text-left">
                                        <h2 className="pbmit-title">
                                            3) Reconstruction Of Anomalies That Are Developed Because of Trauma Or
                                            Diseases
                                        </h2>
                                    </div>
                                    <p>Incisions, scars</p>
                                    <p>Treatment of burns and burn sequelas</p>
                                    <p>Soft tissue injuries</p>
                                    <p>Cancer surgery and reconstruction in the head, neck, body and extremities</p>
                                    <p>Losses and deformities in the breast that is gained after cancer or injuries</p>
                                    <p>Non-healing injuries, bed compression injuries</p>
                                    <p>Emergency finger, hand and arm injuries, losses</p>
                                    <p>Jaw injuries, fractures, jaw joint disorders</p>
                                    <p>Facial bone fractures, face injuries, facial paralysis</p>
                                    <p>Eyelid injuries or disorders that prevent vision</p>
                                    <p>All types of soft tissue deficiencies that are formed after accidents</p>
                                </div>
                            </div>
                            <div className="banner-tangreal-bottom-item">
                                <img src="https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2020/01/bottom-cover-2.png" alt="bt_bb_section_bottom_section_coverage_image"></img>
                            </div>

                        </div>
                        <div className="contents-wrapper second">
                            <div className="banner-tangreal-top-item">
                                <img src="https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2020/01/bgn-footer-top.png" alt="bt_bb_section_top_section_coverage_image"/>
                            </div>
                            <div className="contents-container  text-area ">
                                <div className="text-block">
                                    <p>
                                        Deals with plastic surgery, aesthetic and reconstructive surgery (renovation
                                        surgery). Cosmetic surgery reshapes the normal body structures and develops the
                                        appearance of the individual and his perception of himself. Reconstructive surgery
                                        is applied on abnormal body structures that were formed in connection with the birth
                                        or those that have appeared afterwards, and its initial purpose is to recover the
                                        functions of the body structures that are affected as much as possible.
                                    </p>
                                    <div className="pbmit-heading-subheading text-left">
                                        <h4 className="pbmit-subtitle">
                                            Aesthetic, Plastic And Reconstructive Surgeries That Are Performed Frequently
                                        </h4>
                                    </div>
                                    <div className="pbmit-heading-subheading text-left">
                                        <h2 className="pbmit-title">
                                            1) Application Areas Of Aesthetic – Cosmetic Interferences
                                        </h2>
                                    </div>
                                    <p>Nose deformations</p>
                                    <p>Deformations of facial bones</p>
                                    <p>Deformations of jaw bone</p>
                                    <p>Excessive lipoidosis in the abdomen, legs and arms, irregularities in fat
                                        accumulation</p>
                                    <p>Disproportions in breast (largeness-smallness) and sagging breasts</p>
                                    <p>Skin problems: wrinkles, undesired blots and tattoos, traces</p>
                                    <p>Aging of the face: sagging, wrinkling of the skin and muscles of the face-neck</p>
                                    <p>Lower-upper eyelid sagging</p>
                                </div>
                                <div className="image-block">
                                    <img src={`${ASSETS}/services/aesthetic-plastic.jpg`} alt="logo" />

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

export default AesteticAndPlasticPage;