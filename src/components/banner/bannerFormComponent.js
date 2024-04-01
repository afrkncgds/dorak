import React, { Component } from 'react';
import { ASSETS } from "../../constants/paths";
import FormComponent from '../form/formComponent';

class BannerFormComponent extends Component {
    render() {
        return (
            <div className="banner-form-root">
                <div className="banner-form-wrapper ">
                    <div className="image-container">
                        <img src={`${ASSETS}/services/arm-2.jpg`} alt="logo" />
                    </div>
                    <div className="form-container">
                        <div className="text-block">
                            <div className="title-item">
                                <h3>Reward Awaits When</h3>
                                <h4>You Refer A Friend</h4>
                            </div>
                            <div className="text-item">
                                <p>If you’ve been happy with the care you’ve received and would like to share dental referrals with your friends and family, DentiCare invites you to take part in our dental referrals rewards program.</p>
                            </div>

                        </div>
                        <div className="form-block">
                            <div className="form-title-container">
                                <div className="form-title-block">
                                    <div className="form-title-item">
                                        <span>Refer a friend now</span>

                                    </div>
                                    <div className="form-title-item">

                                        <span>How it works?</span>
                                    </div>

                                </div>
                                <FormComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerFormComponent;