import React, {Component} from 'react';
import {ASSETS} from "../../constants/paths";

class BannerTourComponent extends Component {
    render() {
        return (
            <div className="banner-tour-root">
                <div className="banner-tangreal-top-item">
                    <img src="https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2020/01/bgn-footer-top.png" alt="bt_bb_section_top_section_coverage_image"/>
                </div>
                <div className="banner-services-wrapper text-area">
                    <div className="banner-wrapper text-area">
                        <div className="text-container">
                            <div className="title-block">
                                <h3>TOURS</h3>

                            </div>




                        </div>
                        <div className="image-container">
                            <img src={`${ASSETS}/services/body.jpg`} alt="logo" />


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

export default BannerTourComponent;