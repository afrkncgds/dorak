import React, { Component } from 'react';
import { ASSETS } from '../constants/paths';


class BannerComponent extends Component {
    render() {
        let { mainTitle, title, text, isHome, img } = this.props;
        return (
            <div className="banner-root">
                <div className="banner-tangreal-item">
                    <img src="https://denticare.bold-themes.com/everest/wp-content/uploads/sites/14/2020/01/bottom-cover-2.png" alt="bt_bb_section_bottom_section_coverage_image"></img>
                </div>
                <div className="banner-wrapper text-area">
                    <div className="text-container">
                        <div className="title-block">
                            {/* <h3>Time to</h3> */}
                            <h3>{mainTitle}</h3>
                        </div>
                        {
                            title &&
                            <div className="mid-text-block">
                                {/* <h4>Smile!</h4> */}
                                <h4>{title}</h4>
                            </div>
                        }
                        {
                            text &&
                            <div className="bottom-text-block">
                                <p>{text}</p>
                            </div>
                        }
                        {/* <div className="bottom-text-block">
                            <p>Enjoy our new dental offers and travel destinations, they’re online immediately. Choose your service or destination and start smiling again!</p>
                        </div> */}
                        {
                            isHome &&
                            <div className="button-block">
                                <div className="btn-item">
                                    <a href="/">GO TO PAGE</a>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="image-container">
                        <img src={`${ASSETS}${img}`} alt="logo" />
                        {/* /services/body.jpg */}
                    </div>
                </div>

            </div>
        );
    }
}

export default BannerComponent;