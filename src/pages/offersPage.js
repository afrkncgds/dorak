import React, {Component} from 'react';
import AsideComponent from "../components/asideComponent";
import HeaderComponent from "../components/headerComponent";
import FooterComponent from "../components/footerComponent";
import BannerComponent from '../components/bannerComponent';
import {ASSETS} from "../constants/paths";

class OffersPage extends Component {
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
                        mainTitle = "OFFERS"
                        img = "/services/body.jpg"
                        />
                    <div className="offers-root">
                        <div className="offers-content-wrapper">
                            <div className="offers-title-block">
                                <h2>Rhinoplasty</h2>
                            </div>
                            <div className="offers-content-container">
                                <div className="offers-content-container">
                                    <div className="offers-left-container">
                                        <div className="offers-image-block">
                                           
                                                <img src={`${ASSETS}/services/rhinoplasty.jpg`} alt="logo" />

                                        </div>
                                        <div className="offers-price-container">
                                            <div className="price-top-container">
                                                <div className="price-block">
                                                    <div className="price-item">
                                                        <h4>Present Price</h4>
                                                        <span>3000£</span>
                                                    </div>

                                                </div>
                                                <div className="validity-block">
                                                    <h4>valid until:</h4>
                                                    <span>31-12-2023</span>
                                                </div>
                                            </div>
                                            <div className="price-bottom-container">
                                                <div className="request-block">
                                                    <div className="request-item">
                                                    <span type="button" data-bs-toggle="modal"
                                                          data-bs-target="#exampleModal">
                                                        Request Form
                                                    </span>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="offers-content-block">
                                        <div className="offers-content-item">
                                            <h3>About Rhinoplasty;</h3>
                                            <p> A nose job, or rhinoplasty, is a surgical procedure to reshape or
                                                reconstruct the nose. It can improve the appearance by altering the
                                                nose's size, shape, length, or proportions. Rhinoplasty is also used for
                                                corrective purposes, addressing breathing issues caused by nasal
                                                deformities or injuries like a deviated septum.</p>
                                        </div>
                                        <div className="offers-content-item">
                                            <h3>Important things before rhinoplasty;</h3>
                                            <p> Before undergoing any plastic surgery, it is important to schedule a
                                                consultation with a plastic surgeon to discuss your desired outcome.
                                                Additionally, it is recommended to consult with an anesthesiologist.
                                                During these consultations, it is crucial to provide the doctors with
                                                comprehensive information about your overall health, including medical
                                                conditions, allergies, current medications, and any previous surgeries
                                                you have undergone.</p>
                                        </div>
                                        <div className="offers-content-item">
                                            <h3>Duration of the procedure;</h3>
                                            <p> Rhinoplasty lasts between one and three hours and takes under general
                                                anesthesia.</p>
                                        </div>
                                        <div className="offers-content-item">
                                            <h3>The Offer Includes;</h3>
                                            <ul>
                                                <li> Welcoming and Farewell from and to the Airport</li>
                                                <li> VIP Transpiration: Airport, hotel, and hospital</li>
                                                <li> Hospital stay for 1 day or 2 according to doctor consultation</li>
                                                <li> Blood tests needed prior to the procedure</li>
                                                <li> General anesthesia.</li>
                                                <li> Medicine kit given on the operation day including: Pain killers,
                                                    antibiotics, creams, gels, garments
                                                </li>
                                                <li> Your native language-speaking interpreter at your side in the
                                                    hospital.
                                                </li>
                                                <li> Multiple hospital visit checkups by the surgeon prior to the
                                                    departure.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="offers-content-wrapper">
                            <div className="offers-title-block">
                                <h2>Blepharoplasty (Canthopexy)</h2>
                            </div>
                            <div className="offers-content-container">
                                <div className="offers-content-container">
                                    <div className="offers-content-block">
                                        <div className="offers-content-item">
                                            <p>As eyelid skin is the thinnest skin on the face, it is often the first to
                                                show de- terioration. Over the course of ageing, the thin skin of the
                                                upper lid stretches and sags, forming skin folds which gravity pulls
                                                downwards. This produces a ‘hooded’ eyelid effect and can also impede
                                                vision. Blepharoplasty refers to a surgical procedure that improves the
                                                shape of the eyelids and reduces sagging eyelid skin. An Upper
                                                Blepharoplasty removes the excess or stretched skin of the upper
                                                eye/eyelid to reduce a puffy, ‘hooded’ eyelid appearance.

                                            </p>
                                        </div>

                                    </div>
                                    <div className="offers-left-container">
                                        <div className="offers-image-block">

                                                <img src={`${ASSETS}/services/eye-surgery.jpg`} alt="logo" />

                                        </div>
                                        <div className="offers-price-container">
                                            <div className="price-top-container">
                                                <div className="price-block">
                                                    <div className="price-item">
                                                        <h4>Present Price</h4>
                                                        <span>2000£</span>
                                                    </div>

                                                </div>
                                                <div className="validity-block">
                                                    <h4>valid until:</h4>
                                                    <span>31-12-2023</span>
                                                </div>
                                            </div>
                                            <div className="price-bottom-container">
                                                <div className="request-block">
                                                    <div className="request-item">
                                                    <span type="button" data-bs-toggle="modal"
                                                          data-bs-target="#exampleModal">
                                                        Request Form
                                                    </span>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>
                        <div className="offers-content-wrapper">
                            <div className="offers-title-block">
                                <h2>Face Lifting</h2>
                            </div>
                            <div className="offers-content-container">
                                <div className="offers-content-container">
                                    <div className="offers-left-container">
                                        <div className="offers-image-block">
                                                <img src={`${ASSETS}/services/Face-Lift.jpg`} alt="logo" />

                                        </div>
                                        <div className="offers-price-container">
                                            <div className="price-top-container">
                                                <div className="price-block">
                                                    <div className="price-item">
                                                        <h4>Present Price</h4>
                                                        <span>3000£</span>
                                                    </div>

                                                </div>
                                                <div className="validity-block">
                                                    <h4>valid until:</h4>
                                                    <span>31-12-2023</span>
                                                </div>
                                            </div>
                                            <div className="price-bottom-container">
                                                <div className="request-block">
                                                    <div className="request-item">
                                                    <span type="button" data-bs-toggle="modal"
                                                          data-bs-target="#exampleModal">
                                                        Request Form
                                                    </span>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="offers-content-block">
                                        <div className="offers-content-item">
                                            <p> Facelift Surgery can help you regain a firmer lower face or firmer
                                                jawline appearance by reducing sagging skin or jowls, helping reduce
                                                some wrinkles or deep trough lines, especially if combined with other
                                                skin treatments or a neck lift. A Facelift involves lifting the tissues
                                                of the mid and lower part of the face, as well as tightening and lifting
                                                skin and underlying muscle.</p>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="offers-content-wrapper">
                            <div className="offers-title-block">
                                <h2>Breast Augmentation with Implant</h2>
                            </div>
                            <div className="offers-content-container">
                                <div className="offers-content-container">
                                    <div className="offers-content-block">
                                        <div className="offers-content-item">
                                            <p>Breast augmentation with implants is a surgical procedure designed to
                                                enhance the size and shape of the breasts. It involves the insertion of
                                                saline or silicone implants to increase breast volume and improve
                                                symmetry. The procedure begins with an incision, usually made in the
                                                crease beneath the breast, around the areola, or in the armpit. The
                                                surgeon then creates a pocket within the breast tissue or beneath the
                                                chest muscle and carefully places the chosen implants. Once the implants
                                                are in position, the incisions are closed, and the breasts are bandaged.
                                                Breast augmentation can help achieve fuller, more proportionate breasts,
                                                boost self-confidence, and address asymmetry or volume loss. </p>

                                        </div>

                                    </div>
                                    <div className="offers-left-container">
                                        <div className="offers-image-block">
                                                <img src={`${ASSETS}/services/Breast.jpg`} alt="logo" />

                                        </div>
                                        <div className="offers-price-container">
                                            <div className="price-top-container">
                                                <div className="price-block">
                                                    <div className="price-item">
                                                        <h4>Present Price</h4>
                                                        <span>3500£</span>
                                                    </div>

                                                </div>
                                                <div className="validity-block">
                                                    <h4>valid until:</h4>
                                                    <span>31-12-2023</span>
                                                </div>
                                            </div>
                                            <div className="price-bottom-container">
                                                <div className="request-block">
                                                    <div className="request-item">
                                                    <span type="button" data-bs-toggle="modal"
                                                          data-bs-target="#exampleModal">
                                                        Request Form
                                                    </span>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>
                        <div className="offers-content-wrapper">
                            <div className="offers-title-block">
                                <h2>Otoplasty</h2>
                            </div>
                            <div className="offers-content-container">
                                <div className="offers-content-container">
                                    <div className="offers-left-container">
                                        <div className="offers-image-block">
                                                <img src={`${ASSETS}/services/otoplasty.jpg`} alt="logo" />

                                        </div>
                                        <div className="offers-price-container">
                                            <div className="price-top-container">
                                                <div className="price-block">
                                                    <div className="price-item">
                                                        <h4>Present Price</h4>
                                                        <span>1800£</span>
                                                    </div>

                                                </div>
                                                <div className="validity-block">
                                                    <h4>valid until:</h4>
                                                    <span>31-12-2023</span>
                                                </div>
                                            </div>
                                            <div className="price-bottom-container">
                                                <div className="request-block">
                                                    <div className="request-item">
                                                    <span type="button" data-bs-toggle="modal"
                                                          data-bs-target="#exampleModal">
                                                        Request Form
                                                    </span>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="offers-content-block">
                                        <div className="offers-content-item">
                                            <p>Otoplasty is a surgical procedure that aims to reshape and reposition the
                                                ears. It is commonly performed to correct protruding or misshapen ears,
                                                often referred to as "bat ears." During the procedure, the surgeon may
                                                make incisions behind the ears to access and reshape the cartilage.
                                                Otoplasty can improve the overall appearance of the ears, enhance facial
                                                symmetry, and boost self-confidence. It is typically performed under
                                                local anesthesia and may involve a short recovery period. It's important
                                                to consult with a qualified plastic surgeon to determine if otoplasty is
                                                suitable for your specific needs.
                                            </p>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="offers-content-wrapper">
                            <div className="offers-title-block">
                                <h2>No Touch Laser (for two eyes)</h2>
                            </div>
                            <div className="offers-content-container">
                                <div className="offers-content-container">
                                    <div className="offers-content-block">
                                        <div className="offers-content-item">
                                            <h4>What is no touch laser?</h4>
                                            <p> No touch laser, also known as TransPRK, is a type of laser eye surgery
                                                that corrects vision problems such as nearsightedness, farsightedness,
                                                and astigmatism. It is a newer and more advanced version of LASIK
                                                surgery.</p>
                                        </div>

                                    </div>
                                    <div className="offers-left-container">
                                        <div className="offers-image-block">
                                                <img src={`${ASSETS}/services/lazer.jpg`} alt="logo" />

                                        </div>
                                        <div className="offers-price-container">
                                            <div className="price-top-container">
                                                <div className="price-block">
                                                    <div className="price-item">
                                                        <h4>Present Price</h4>
                                                        <span>1600£</span>
                                                    </div>

                                                </div>
                                                <div className="validity-block">
                                                    <h4>valid until:</h4>
                                                    <span>31-12-2023</span>
                                                </div>
                                            </div>
                                            <div className="price-bottom-container">
                                                <div className="request-block">
                                                    <div className="request-item">
                                                    <span type="button" data-bs-toggle="modal"
                                                          data-bs-target="#exampleModal">
                                                        Request Form
                                                    </span>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>
                        <div className="offers-content-wrapper">
                            <div className="offers-title-block">
                                <h2>Cataract (Alcon Panoptix Trifocal) for Two Eyes</h2>
                            </div>
                            <div className="offers-content-container">
                                <div className="offers-content-container">
                                    <div className="offers-left-container">
                                        <div className="offers-image-block">

                                                <img src={`${ASSETS}/services/blepharoplasty-2.jpg`} alt="logo" />


                                        </div>
                                        <div className="offers-price-container">
                                            <div className="price-top-container">
                                                <div className="price-block">
                                                    <div className="price-item">
                                                        <h4>Present Price</h4>
                                                        <span>3600£</span>
                                                    </div>

                                                </div>
                                                <div className="validity-block">
                                                    <h4>valid until:</h4>
                                                    <span>31-12-2023</span>
                                                </div>
                                            </div>
                                            <div className="price-bottom-container">
                                                <div className="request-block">
                                                    <div className="request-item">
                                                    <span type="button" data-bs-toggle="modal"
                                                          data-bs-target="#exampleModal">
                                                        Request Form
                                                    </span>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="offers-content-block">
                                        <div className="offers-content-item">
                                            <h4>What is Cataract surgery:</h4>
                                            <p> Cataract surgery is a common and safe procedure to remove the cloudy
                                                lens in your eye and replace it with an artificial lens. </p>
                                            <h4>Performed by ZEPTO method:</h4>
                                            <p> Zepto method is a type of cataract surgery that uses a femtosecond
                                                laser to create a precise, circular incision in the cornea. The cataract
                                                is then removed with a micro-instrument called a phacoemulsifier. The
                                                surgeon then inserts a new intraocular lens (IOL) into the eye.</p>
                                            <h4>ZEPTO method benefits:</h4>
                                            <p> Sutureless incision</p>
                                            <p> Quicker vision healing</p>
                                            <p> Better vision result</p>


                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="offers-content-wrapper">
                            <div className="offers-title-block">
                                <h2>Hair Transplantation</h2>
                            </div>
                            <div className="offers-content-container">
                                <div className="offers-content-container">
                                    <div className="offers-content-block">
                                        <div className="offers-content-item">
                                        </div>

                                    </div>
                                    <div className="offers-left-container">
                                        <div className="offers-image-block">
                                            <img src={`${ASSETS}/services/hair-4.jpg`} alt="logo" />

                                        </div>
                                        <div className="offers-price-container">
                                            <div className="price-top-container">
                                                <div className="price-block">
                                                    <div className="price-item">
                                                        <h4>Present Price</h4>
                                                        <span>1500£</span>
                                                    </div>

                                                </div>
                                                <div className="validity-block">
                                                    <h4>valid until:</h4>
                                                    <span>31-12-2023</span>
                                                </div>
                                            </div>
                                            <div className="price-bottom-container">
                                                <div className="request-block">
                                                    <div className="request-item">
                                                    <span type="button" data-bs-toggle="modal"
                                                          data-bs-target="#exampleModal">
                                                        Request Form
                                                    </span>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>
                        <div className="offers-content-wrapper">
                            <div className="offers-title-block">
                                <h2>Mini Tummy Tuck</h2>
                            </div>
                            <div className="offers-content-container">
                                <div className="offers-content-container">
                                    <div className="offers-left-container">
                                        <div className="offers-image-block">
                                            <img src={`${ASSETS}/services/mini-tummy.jpg`} alt="logo" />


                                        </div>
                                        <div className="offers-price-container">
                                            <div className="price-top-container">
                                                <div className="price-block">
                                                    <div className="price-item">
                                                        <h4>Present Price</h4>
                                                        <span>1950£</span>
                                                    </div>

                                                </div>
                                                <div className="validity-block">
                                                    <h4>valid until:</h4>
                                                    <span>31-12-2023</span>
                                                </div>
                                            </div>
                                            <div className="price-bottom-container">
                                                <div className="request-block">
                                                    <div className="request-item">
                                                    <span type="button" data-bs-toggle="modal"
                                                          data-bs-target="#exampleModal">
                                                        Request Form
                                                    </span>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="offers-content-block">
                                        <div className="offers-content-item">
                                            <p>A mini tummy tuck, also known as a partial abdominoplasty, is a surgical
                                                procedure that focuses on improving the appearance of the lower abdomen.
                                                It is ideal for individuals who have excess skin and a small amount of
                                                abdominal wall laxity below the belly button. During the procedure, a
                                                small incision is made above the pubic area, allowing the surgeon to
                                                remove excess skin and fat. The abdominal muscles may also be tightened
                                                if needed. Unlike a full tummy tuck, a mini tummy tuck does not involve
                                                repositioning the belly button. This procedure is often associated with
                                                a shorter recovery time and less scarring compared to a full tummy
                                                tuck.</p>


                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="offers-content-wrapper">
                            <div className="offers-title-block">
                                <h2>Gastric Sleeve</h2>
                            </div>
                            <div className="offers-content-container">
                                <div className="offers-content-container">
                                    <div className="offers-content-block">
                                        <div className="offers-content-item">
                                            <p>Gastric sleeve surgery, also known as sleeve gastrectomy, is a weight
                                                loss procedure that involves reducing the size of the stomach. It is
                                                performed laparoscopically, meaning through small incisions in the
                                                abdomen. During the surgery, approximately 75-80% of the stomach is
                                                removed, leaving behind a sleeve-shaped portion. This smaller stomach
                                                restricts the amount of food that can be consumed, leading to reduced
                                                calorie intake and weight loss. The procedure also removes the part of
                                                the stomach responsible for producing hunger hormones, resulting in
                                                decreased appetite. Gastric sleeve surgery is considered a permanent
                                                procedure and can help individuals achieve significant and sustainable
                                                weight loss. It is typically recommended for individuals with a body
                                                mass index (BMI) above 40 or a BMI above 35 with obesity-related health
                                                conditions. It's crucial to consult with a qualified bariatric surgeon
                                                to determine if gastric sleeve surgery is suitable for your specific
                                                situation.</p>

                                        </div>

                                    </div>
                                    <div className="offers-left-container">
                                        <div className="offers-image-block">
                                            <img src={`${ASSETS}/services/tummy-tuck.jpg`} alt="logo" />


                                        </div>
                                        <div className="offers-price-container">
                                            <div className="price-top-container">
                                                <div className="price-block">
                                                    <div className="price-item">
                                                        <h4>Present Price</h4>
                                                        <span>1700£</span>
                                                    </div>

                                                </div>
                                                <div className="validity-block">
                                                    <h4>valid until:</h4>
                                                    <span>31-12-2023</span>
                                                </div>
                                            </div>
                                            <div className="price-bottom-container">
                                                <div className="request-block">
                                                    <div className="request-item">
                                                    <span type="button" data-bs-toggle="modal"
                                                          data-bs-target="#exampleModal">
                                                        Request Form
                                                    </span>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>
                        <div className="offers-content-wrapper">
                            <div className="offers-title-block">
                                <h2>Check up package</h2>
                            </div>
                            <div className="offers-content-container">
                                <div className="offers-content-container">
                                    <div className="offers-left-container">
                                        <div className="offers-image-block">
                                            <img src={`${ASSETS}/services/wellness-2.jpg`} alt="logo" />


                                        </div>
                                        <div className="offers-price-container">
                                            <div className="price-top-container">
                                                <div className="price-block">
                                                    <div className="price-item">
                                                        <h4>Present Price</h4>
                                                        <span>490£</span>
                                                    </div>

                                                </div>
                                                <div className="validity-block">
                                                    <h4>valid until:</h4>
                                                    <span>31-12-2023</span>
                                                </div>
                                            </div>
                                            <div className="price-bottom-container">
                                                <div className="request-block">
                                                    <div className="request-item">
                                                    <span type="button" data-bs-toggle="modal"
                                                          data-bs-target="#exampleModal">
                                                        Request Form
                                                    </span>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="offers-content-block">
                                        <div className="offers-content-item">
                                            <p>**VIP Check Up Package for Over 40 Years Old Female €490</p>
                                            <p>**VIP Check Up Package for Over 40 Years Old Male €450</p>

                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>



                   
                    <FooterComponent/>
                </main>

            </div>
        );
    }
}

export default OffersPage;