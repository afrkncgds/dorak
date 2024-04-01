import React, {Component} from 'react';
import {ASSETS} from "../../constants/paths";

class BannerToursComponent extends Component {
    render() {
        return (
            <div className="banner-tours-root ">
                <div className="banner-tours-wrapper">
                    <div className="banner-tours-container">
                        <div className="text-container">
                            <div className="text-content-container">
                                <div className="title-block">
                                    <h3>Your Dental</h3>

                                </div>
                                <div className="mid-text-block">
                                    <h4>Holiday</h4>

                                </div>
                                <div className="bottom-text-block">
                                    <p>It is well known that Hungary has become a main tourism destination. Americans have chosen Budapest the second most beautiful city in the world. Hungary has also developed to a top level in dental care and a remarkable dental tourism location for foreign amd domestic patients.</p>
                                </div>
                            </div>
                            <div className="text-icon-container">
                                <div className="text-icon-block">
                                    <div className="content-item">
                                        <div className="icon-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 576 512"><path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z"/></svg>
                                        </div>
                                        <div className="text-item">
                                            <span>Travel</span>

                                        </div>

                                    </div>
                                    <div className="content-item">
                                        <div className="icon-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"/></svg>
                                        </div>
                                        <div className="text-item">
                                            <span>Car Parking</span>
                                        </div>
                                    </div>
                                    <div className="content-item">
                                        <div className="icon-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
                                        </div>
                                        <div className="text-item">
                                            <span>Accommodation</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="text-icon-block">
                                    <div className="content-item">
                                        <div className="icon-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                                        </div>
                                        <div className="text-item">
                                            <span>Sightseeing</span>

                                        </div>
                                    </div>
                                    <div className="content-item">
                                        <div className="icon-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 640 512"><path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"/></svg>
                                        </div>
                                        <div className="text-item">
                                            <span>Translator</span>

                                        </div>
                                    </div>
                                    <div className="content-item">
                                        <div className="icon-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
                                        </div>
                                        <div className="text-item">
                                            <span>Free Tickets</span>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="image-container">
                            <img src={`${ASSETS}/services/body.jpg`} alt="logo" />
                        </div>
                    </div>
                    <div className="content-container ">
                        <div className="content-block">
                            <div className="image-block">
                                <div className="lazyload-item">

                                </div>
                                <div className="image-item">

                                </div>
                                <div className="button-block">

                                </div>

                            </div>
                            <div className="text-item">
                                <a href="/">Accomodations</a>

                            </div>

                        </div>
                        <div className="content-block">
                            <div className="image-block">
                                <div className="lazyload-item">

                                </div>
                                <div className="image-item">

                                </div>
                                <div className="button-block">

                                </div>

                            </div>
                            <div className="text-item">
                                <a href="/">Sightseeing</a>

                            </div>
                        </div>
                        <div className="content-block">
                            <div className="image-block">
                                <div className="lazyload-item">

                                </div>
                                <div className="image-item">

                                </div>
                                <div className="button-block">

                                </div>

                            </div>
                            <div className="text-item">
                                <a href="/">Bars & Pubs</a>
                            </div>
                        </div>
                        <div className="content-block">
                            <div className="image-block">
                                <div className="lazyload-item">

                                </div>
                                <div className="image-item">

                                </div>
                                <div className="button-block">

                                </div>

                            </div>
                            <div className="text-item">
                                <a href="/">Transport</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default BannerToursComponent;