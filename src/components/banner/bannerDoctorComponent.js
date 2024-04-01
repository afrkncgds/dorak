import React, {Component} from 'react';
import {ASSETS} from "../../constants/paths";

class BannerDoctorComponent extends Component {
    render() {
        return (
            <div className="banner-doctor-root">
                <div className="banner-tangreal-top-item">
                    <img src="https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2020/01/bgn-footer-top.png" alt="bt_bb_section_top_section_coverage_image"/>                </div>
                <div className="banner-doctor-wrapper text-area">
                    <div className="text-container">
                        <div className="title-item">
                            <h2>We Can Help You Have A</h2>
                            <h3>Natural Smile</h3>
                        </div>
                        <div className="mid-text-item">
                            <p>We at DentiCare are focused on helping you. Dynamically reinvent market-driven opportunities and interfaces. Efficiently innovate open-source materials.</p>
                        </div>
                        <div className="bottom-text-item">
                            <p>Everest Whiting</p>
                            <p>Clinic Director</p>
                        </div>

                    </div>
                    <div className="image-container">
                        <div className="image-block">
                            <img src={`${ASSETS}/doctor/erdem-tezel.png`} alt="logo" />


                        </div>

                    </div>

                </div>
                <div className="banner-tangreal-bottom-item">
                    <img src="https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2020/01/bottom-cover-2.png" alt="bt_bb_section_bottom_section_coverage_image"></img>
                </div>

            </div>
        );
    }
}

export default BannerDoctorComponent;