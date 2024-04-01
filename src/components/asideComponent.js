import React, {Component} from 'react';
import {ASSETS} from "../constants/paths";

class AsideComponent extends Component {
    state={
        isOpenServiceItem:false,
        isOpenAboutItem:false,
        isOpenToursItem:false,
        isOpenMidItem:false,
        isOpenBottomItem:false
    }
    openServiceMenu=()=>{
        this.setState({
            isOpenServiceItem: !this.state.isOpenServiceItem,
        })
    }
    openToursMenu=()=>{
        this.setState({
            isOpenToursItem: !this.state.isOpenToursItem,
        })
    }
    openAboutMenu=()=>{
        this.setState({
            isOpenAboutItem: !this.state.isOpenAboutItem,
        })
    }



    render() {


        return (
            <div className="mobile-header-aside-menu " >
                <div className="logo-container">
                    <a href="/" className="logo-item">
                        <picture>
                            <source srcSet={`${ASSETS}/logo/dorak-health-logo.webp 1x, ${ASSETS}/logo/dorak-health-logo_2x.webp 2x`}
                                    type="image/webp" />
                            <source srcSet={`${ASSETS}/logo/dorak-health-logo.png 1x, ${ASSETS}/logo/dorak-health-logo.png 2x`}
                                    type="image/png" />
                            <img src={`${ASSETS}/logo/dorak-health-logo.png`} alt="logo" />
                        </picture>
                    </a>
                </div>
                <div className="mobile-header-contact-block">
                    <a href="info@dorakhealth.com" className="email-item">
                        <div className="icon item">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                                <g fillOpacity="0.41176" fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M14,4c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM14,6h22c4.43067,0 8,3.56933 8,8v22c0,4.43067 -3.56933,8 -8,8h-22c-4.43067,0 -8,-3.56933 -8,-8v-22c0,-4.43067 3.56933,-8 8,-8zM13,15c-1.64497,0 -3,1.35503 -3,3v14c0,1.64497 1.35503,3 3,3h24c1.64497,0 3,-1.35503 3,-3v-14c0,-1.64497 -1.35503,-3 -3,-3zM13.41406,17h23.16992l-8.90625,8.89258c-1.49279,1.49041 -3.8809,1.49024 -5.37305,-0.00195zM38,18.41211v13.17578l-6.59766,-6.58789zM12,18.41406l6.58594,6.58594l-6.58594,6.58594zM29.98828,26.41211l6.59766,6.58789h-23.17188l6.58594,-6.58594l0.89063,0.89063c2.25585,2.25585 5.94201,2.25751 8.19922,0.00391z"></path></g></g>
                            </svg>

                        </div>
                        <div className="text-item">
                            <span>info@dorakhealth.com</span>


                        </div>


                    </a>
                    <a href="+905398836144" className="phone-item">
                        <div className="icon-item">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                                <g fillOpacity="0.18824" fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M14,3.99023c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM14,5.99023h22c4.43067,0 8,3.56933 8,8v22c0,4.43067 -3.56933,8 -8,8h-22c-4.43067,0 -8,-3.56933 -8,-8v-22c0,-4.43067 3.56933,-8 8,-8zM18.04883,11.03516c-2.04532,-0.08838 -3.5977,0.68877 -4.57422,1.62305c-0.48826,0.46714 -0.84078,0.96698 -1.08203,1.43359c-0.24125,0.46662 -0.39453,0.85131 -0.39453,1.35156c0,-0.04456 -0.01099,0.18933 -0.01758,0.46094c-0.0066,0.27161 -0.0054,0.63775 0.01953,1.08008c0.04996,0.88466 0.1999,2.0813 0.59766,3.5c0.79552,2.8374 2.58679,6.55945 6.47266,10.44531c3.88587,3.88587 7.6077,5.67689 10.44531,6.47266c1.4188,0.39788 2.61526,0.54759 3.5,0.59766c0.44237,0.02503 0.80648,0.02609 1.07813,0.01953c0.27164,-0.0066 0.5073,-0.01758 0.46289,-0.01758c0.50025,0 0.88494,-0.15328 1.35156,-0.39453c0.46662,-0.24125 0.96645,-0.59377 1.43359,-1.08203c0.93428,-0.97652 1.71142,-2.52889 1.62305,-4.57422c-0.04194,-0.97548 -0.58353,-1.83931 -1.38281,-2.35156c-0.61768,-0.39579 -1.57657,-1.01019 -2.82812,-1.81055c-1.45209,-0.92776 -3.3094,-0.99403 -4.82422,-0.16406l0.08594,-0.04297l-1.17773,0.50586l-0.08594,0.06055c-0.28626,0.20099 -0.6408,0.23823 -0.96289,0.10352c-0.90225,-0.3773 -2.30808,-1.11862 -3.61523,-2.42578c-1.30716,-1.30716 -2.04848,-2.71299 -2.42578,-3.61523c-0.13471,-0.32209 -0.09748,-0.67663 0.10352,-0.96289l0.06055,-0.08594l0.50586,-1.17773l-0.04297,0.08594c0.82976,-1.51444 0.76525,-3.37169 -0.16406,-4.82422c-0.80035,-1.25155 -1.41475,-2.21044 -1.81055,-2.82812c-0.51225,-0.79928 -1.37608,-1.34087 -2.35156,-1.38281zM17.96289,13.0332c0.28052,0.01206 0.57015,0.17617 0.75391,0.46289c0.3962,0.61832 1.0109,1.57768 1.81055,2.82813c0.53069,0.82948 0.56799,1.9196 0.09375,2.78516l-0.02344,0.04297l-0.48242,1.12695l0.09961,-0.18164c-0.59101,0.84174 -0.70979,1.93486 -0.3125,2.88477c0.4507,1.07775 1.31258,2.71297 2.85742,4.25781c1.54484,1.54484 3.18006,2.40673 4.25781,2.85742c0.94991,0.39729 2.04303,0.27851 2.88477,-0.3125l-0.18164,0.09961l1.12695,-0.48242l0.04297,-0.02344c0.86518,-0.47403 1.95525,-0.43453 2.78516,0.0957v-0.00195c1.25045,0.79965 2.20981,1.41434 2.82813,1.81055c0.28672,0.18375 0.45083,0.47339 0.46289,0.75391c0.06562,1.51868 -0.46184,2.46949 -1.07031,3.10547c-0.30423,0.31799 -0.63415,0.54877 -0.90625,0.68945c-0.2721,0.14068 -0.53234,0.16992 -0.43359,0.16992c-0.18341,0 -0.28001,0.01203 -0.50977,0.01758c-0.22976,0.0056 -0.53773,0.0059 -0.91797,-0.01562c-0.76047,-0.04303 -1.81015,-0.17285 -3.07422,-0.52734c-2.52814,-0.70898 -5.91718,-2.3078 -9.57031,-5.96094c-3.65313,-3.65313 -5.25221,-7.04246 -5.96094,-9.57031c-0.35437,-1.26393 -0.4844,-2.31385 -0.52734,-3.07422c-0.02147,-0.38019 -0.02119,-0.68823 -0.01562,-0.91797c0.0056,-0.22973 0.01758,-0.32621 0.01758,-0.50977c0,0.09875 0.02924,-0.16149 0.16992,-0.43359c0.14068,-0.2721 0.37146,-0.60202 0.68945,-0.90625c0.63598,-0.60847 1.58679,-1.13594 3.10547,-1.07031z"></path></g></g>
                            </svg>
                        </div>
                        <div className="text-item">
                            <span>+90 539 883 61 44</span>

                        </div>


                    </a>
                </div>
                <div className="mobile-header-acordion-container">
                    <div className="mobile-acordion-block">
                        <ul className="dropdown-menu-container">

                            <li className={`dropdown ${this.state.isOpenServiceItem ?"opened" : ""}`}>
                                <div className="dropdown-top-item">
                                    <a href="/services">Services </a>
                                    <i className="gg-chevron"onClick={(e) => {e.stopPropagation();this.openServiceMenu()}} />
                                </div>
                                <ul className="top-menu">
                                    <li className="dropdown">
                                        <div className="dropdown-mid-item">
                                            <a href="/aestheticAndPlactic">Aesthetic, Plastic And Reconstructive Surgery </a>
                                            <i className="gg-chevron" />
                                        </div>


                                        <ul className="mid-menu">
                                            <li>
                                                <div className="dropdown-mid-item">
                                                    <a href="/hair">Hair Transplantation</a>

                                                </div>
                                            </li>
                                            <li className="dropdown">
                                                <div className="dropdown-mid-item">
                                                    <a href="/body">Body </a>
                                                    <i className="gg-chevron" />
                                                </div>
                                                <ul className="mid-menu">
                                                    <li><a href="/bbl">Brazilian Butt Lift (BBL)</a></li>
                                                    <li><a href="/vaserLipo">Vaser Liposuction</a></li>
                                                    <li><a href="/tummyTuck">Tummy Tuck</a></li>
                                                    <li><a href="/miniTummy">Mini Tummy Tuck</a></li>
                                                    <li><a href="/cellilute">Cellulite Treatment With Mesotherapy</a></li>
                                                    <li><a href="/gynecomastial">Gynecomastia</a></li>
                                                    <li><a href="/mommyMakeOver">Mommy Makeover Surgery</a></li>
                                                    <li><a href="/postbariatric">Postbariatric Surgery</a></li>
                                                    <li><a href="/calfSurgery">Calf Augmentation Surgery</a></li>
                                                    <li><a href="/thighLift">Thigh Lift Surgery</a></li>
                                                    <li><a href="/armLift">Arm Lift Surgery</a></li>
                                                </ul>

                                            </li>
                                            <li className="dropdown">
                                                <div className="dropdown-mid-item">
                                                    <a href="/breast">Breast </a>
                                                    <i className="gg-chevron" />
                                                </div>
                                                <ul>
                                                    <li><a href="/breastAugmentation">Breast Augmentation</a></li>
                                                    <li><a href="/breastUplift">Breast Uplift Surgery</a></li>
                                                    <li><a href="/breastReduroction">Breast Reduction Surgery</a></li>

                                                </ul>

                                            </li>
                                            <li className="dropdown">
                                                <div className="dropdown-mid-item">
                                                    <a href="/face">Face </a>
                                                    <i className="gg-chevron" />
                                                </div>
                                                <ul>
                                                    <li><a href="/rhinoplasty">Rhinoplasty</a></li>
                                                    <li><a href="/tipRhinoplasty">Tip Rhinoplasty</a></li>
                                                    <li><a href="/revisionRhinoplasty">Revision Rhinoplasty</a></li>
                                                    <li><a href="/liftLipSurgery">Lip Lift Surgery</a></li>
                                                    <li><a href="/earSurgery">Ear Surgery – Otoplasty</a></li>
                                                    <li><a href="/faceLift">Face Lift Surgery</a></li>
                                                    <li><a href="/neckLift">Neck Lift Surgery</a></li>
                                                    <li><a href="/browLıft">Brow Lift Surgery</a></li>
                                                    <li><a href="/eyelidSurgery">Eyelid Surgery – Blepharoplasty</a></li>

                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <div className="dropdown-mid-item">
                                            <a href="/inVitro">In Vitro Fertilization (IVF) Andrology And Genetics Center</a>
                                            <i className="gg-chevron" />
                                        </div>
                                        </li>
                                    <li className="dropdown">
                                        <div className="dropdown-mid-item">
                                            <a href="/dentistry">Dentistry</a>

                                        </div>
                                    </li>
                                    <li className="dropdown">
                                        <div className="dropdown-mid-item">
                                            <a href="/eyeSurgery">Eye Surgey</a>

                                        </div>
                                        <ul>
                                            <li><a href="/noTouchLazer">No Touch Laser (Eye Laser Surgery)</a></li>
                                            <li><a href="/nonBladeCataract">Non-Blade Cataract Surgery With Laser Technology</a></li>

                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <div className="dropdown-mid-item">
                                            <a href="/dentalOralHealth">Dental & Oral Health</a>

                                        </div>
                                    </li>
                                    <li className="dropdown">
                                        <div className="dropdown-mid-item">
                                            <a href="/obesity">Obesity Surgery</a>

                                        </div>

                                    </li>
                                    <li className="dropdown">
                                        <div className="dropdown-mid-item">
                                            <a href="/wellness">Wellness </a>
                                            <i className="gg-chevron" />
                                        </div>
                                        <ul>
                                            <li><a href="/regenerative">Regenerative Treatments</a></li>
                                            <li><a href="/checkUp">Check Up Packages</a></li>
                                            <li><a href="/rehabilitationHotel">Rehabilitation Hotels</a></li>
                                            <li><a href="/thermalOtel">Thermal Hotels</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>
                            <li className={`dropdown ${this.state.isOpenAboutItem ?"opened" : ""}`}>
                                <div className="dropdown-top-item">
                                    <a href="/aboutPage">About </a>
                                    <i className="gg-chevron"onClick={(e) => {e.stopPropagation();this.openAboutMenu()}} />
                                </div>
                                <ul className="top-menu">
                                    <li >
                                        <div className="dropdown-mid-item">
                                            <a href="/ourStep">Our Responsibilities</a>

                                        </div>

                                    </li>
                                    <li>
                                        <div className="dropdown-mid-item">
                                            <a href="/fourStep">Four Steps To Discover Turkey</a>

                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className={`dropdown ${this.state.isOpenToursItem ?"opened" : ""}`}>
                                <div className="dropdown-top-item">
                                    <a href="/tours">Tours </a>
                                    <i className="gg-chevron"onClick={this.openToursMenu} />
                                </div>
                                <ul className="top-menu">
                                    <li>
                                        <div className="dropdown-top-item">
                                            <a href="/sevenDay">7-Day Tour</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-top-item">
                                            <a href="/capadociaIstanbul">Cappadocia – Istanbul Tour</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-top-item">
                                            <a href="/capadocia">Cappadocia Tour</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-top-item">
                                            <a href="/istanbul">Istanbul Tour</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <div className="dropdown-top-item">
                                    <a href="/contactus">Contact Us </a>
                                </div>
                            </li>
                            <li className="dropdown">
                                <div className="dropdown-top-item">
                                    <a href="/offers">Offers </a>

                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className="mobile-social-media-container">
                    <a href="/" target={"_blank"}  rel="noreferrer" className="social-media-icon">
                        <svg width={22} height={18} viewBox="0 0 22 18" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.46 2.4279C20.775 2.72259 20.055 2.92825 19.3177 3.03983C19.6629 2.9819 20.1716 2.35696 20.3749 2.1043C20.6929 1.72034 20.935 1.27951 21.0884 0.80523C21.1069 0.768163 21.121 0.72163 21.0839 0.69363C21.0657 0.685807 21.0458 0.682585 21.026 0.684247C21.0062 0.685909 20.9871 0.692405 20.9704 0.703163C20.1661 1.1324 19.3113 1.45949 18.4259 1.67683C18.3953 1.68646 18.3625 1.68719 18.3314 1.67896C18.3004 1.67072 18.2723 1.65385 18.2504 1.6303C18.1822 1.54888 18.1079 1.47285 18.028 1.4029C17.6605 1.0864 17.2442 0.831339 16.7953 0.647563C16.1961 0.404959 15.5498 0.300901 14.9047 0.343163C14.2782 0.385549 13.6673 0.558085 13.1111 0.849763C12.5534 1.14113 12.061 1.54332 11.6641 2.0317C11.2525 2.53811 10.9574 3.129 10.8 3.76236C10.6649 4.36256 10.6494 4.98348 10.7542 5.5897C10.7679 5.69176 10.7589 5.70556 10.6664 5.69176C7.17134 5.1717 4.27421 3.92096 1.92241 1.24103C1.82034 1.1247 1.76487 1.1247 1.68127 1.25003C0.652141 2.79256 1.15147 5.27096 2.43707 6.4889C2.60841 6.65123 2.78461 6.81363 2.97447 6.96176C2.38631 6.91733 1.8128 6.7566 1.28721 6.4889C1.18514 6.42436 1.13387 6.46136 1.12487 6.57723C1.11828 6.74466 1.12753 6.91234 1.15247 7.07803C1.25549 7.8651 1.56559 8.61071 2.0511 9.2387C2.5366 9.86669 3.18011 10.3545 3.91587 10.6524C4.09576 10.7304 4.28386 10.7879 4.47661 10.8238C3.93162 10.9328 3.37229 10.9501 2.82161 10.8751C2.70101 10.8518 2.65494 10.9122 2.70101 11.028C2.98426 11.7695 3.45243 12.4263 4.06102 12.9359C4.66961 13.4455 5.3984 13.791 6.17814 13.9396C6.33574 13.9672 6.49341 13.9672 6.65141 14.0042C6.64194 14.0184 6.63241 14.0184 6.62341 14.0322C6.23294 14.6274 4.87927 15.0704 4.24887 15.2907C3.09407 15.7027 1.86382 15.8602 0.642475 15.7522C0.448541 15.7238 0.407875 15.7258 0.355275 15.7522C0.302075 15.7851 0.348541 15.8314 0.410808 15.8818C0.656741 16.0442 0.906941 16.188 1.16194 16.3272C1.92796 16.7354 2.73632 17.0588 3.57261 17.2914C7.90501 18.4878 12.7851 17.6086 16.0381 14.3766C18.5925 11.8386 19.4879 8.33843 19.4879 4.8339C19.4879 4.6967 19.6499 4.62096 19.7463 4.54863C20.3921 4.04597 20.961 3.4516 21.4349 2.78436C21.5087 2.68768 21.5457 2.56791 21.5394 2.44643V2.4279C21.5394 2.3719 21.5463 2.3887 21.46 2.4279Z"  />
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.63067 17.7266C6.60287 17.7287 6.28067 17.7266 6.63067 17.7266V17.7266Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.34375 17.7464C7.34375 17.7106 7.71955 17.7464 7.34375 17.7464C7.34375 17.7278 7.38982 17.7464 7.34375 17.7464Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.8455 0.359375C14.8327 0.368435 14.8174 0.373299 14.8017 0.373299C14.786 0.373299 14.7706 0.368435 14.7578 0.359375H14.8455Z" fill="white" />
                        </svg>
                    </a>
                    <a href="/" target={"_blank"}  rel="noreferrer"  className="social-media-icon">
                        <svg width={11} height={23} viewBox="0 0 11 23" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.9007 11.3259V21.8714C2.90072 21.9443 2.92967 22.0141 2.98117 22.0656C3.03268 22.1171 3.10253 22.1461 3.17537 22.1461H7.0915C7.12757 22.1461 7.16328 22.139 7.19661 22.1252C7.22993 22.1114 7.26021 22.0911 7.28572 22.0656C7.31122 22.0401 7.33146 22.0099 7.34526 21.9766C7.35906 21.9432 7.36617 21.9075 7.36617 21.8714V11.1541H10.2052C10.2741 11.1541 10.3404 11.1283 10.3911 11.0817C10.4418 11.0352 10.4732 10.9712 10.479 10.9026L10.752 7.67352C10.7552 7.63562 10.7505 7.59748 10.7382 7.56149C10.7259 7.52551 10.7063 7.49247 10.6805 7.46446C10.6548 7.43646 10.6235 7.41411 10.5887 7.39882C10.5539 7.38353 10.5163 7.37564 10.4782 7.37565H7.36617V5.08465C7.36617 4.82681 7.4686 4.57952 7.65092 4.3972C7.83324 4.21488 8.08053 4.11245 8.33837 4.11245H10.5265C10.5993 4.11244 10.6692 4.0835 10.7207 4.03199C10.7722 3.98048 10.8012 3.91063 10.8012 3.83778V0.608651C10.8012 0.535808 10.7722 0.46595 10.7207 0.414442C10.6692 0.362934 10.5993 0.333993 10.5265 0.333984L6.82924 0.333984C5.78732 0.333984 4.78809 0.747882 4.05134 1.48463C3.3146 2.22137 2.9007 3.22061 2.9007 4.26252V7.37565H0.942635C0.869782 7.37566 0.799916 7.40461 0.748407 7.45614C0.696898 7.50766 0.667963 7.57753 0.667969 7.65038V10.8795C0.667986 10.9524 0.696932 11.0222 0.74844 11.0737C0.799948 11.1252 0.869801 11.1541 0.942635 11.1541H2.9007V11.3259Z"  />
                        </svg>
                    </a>
                    <a href="/" target={"_blank"}  rel="noreferrer"  className="social-media-icon">
                        <svg width={22} height={16} viewBox="0 0 22 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7965 5.33862C21.7965 4.725 21.6756 4.11739 21.4408 3.55048C21.206 2.98357 20.8618 2.46846 20.4279 2.03457C19.994 1.60068 19.4789 1.2565 18.912 1.02168C18.3451 0.786865 17.7375 0.666009 17.1238 0.666016L5.00463 0.666016C3.76538 0.666017 2.57689 1.15831 1.70061 2.03459C0.824324 2.91087 0.332033 4.09937 0.332031 5.33862L0.332031 11.0185C0.332025 11.6321 0.452881 12.2397 0.687698 12.8066C0.922515 13.3735 1.26669 13.8886 1.70059 14.3225C2.13448 14.7564 2.64958 15.1006 3.21649 15.3355C3.7834 15.5703 4.39101 15.6911 5.00463 15.6911H17.1238C18.3631 15.6911 19.5516 15.1989 20.4279 14.3226C21.3042 13.4463 21.7965 12.2578 21.7965 11.0185V5.33862ZM14.1502 8.46475L9.3169 11.1156C9.10676 11.2293 8.91783 11.0771 8.91783 10.8383V5.39695C8.91783 5.15502 9.11263 5.00322 9.3229 5.12295L14.1894 7.91335C14.2365 7.94426 14.2745 7.98716 14.2994 8.03764C14.3244 8.08813 14.3355 8.14436 14.3315 8.20055C14.3275 8.25673 14.3086 8.31083 14.2767 8.35727C14.2448 8.40372 14.2012 8.44082 14.1502 8.46475Z"  />
                        </svg>
                    </a>
                    <a href="/" target={"_blank"}  rel="noreferrer"  className="social-media-icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.0294 4.85488C17.7649 4.85489 17.5063 4.93334 17.2863 5.08032C17.0664 5.22729 16.8949 5.43619 16.7937 5.6806C16.6925 5.92501 16.666 6.19394 16.7176 6.4534C16.7692 6.71286 16.8966 6.95119 17.0837 7.13825C17.2707 7.32531 17.5091 7.4527 17.7685 7.50431C18.028 7.55592 18.2969 7.52944 18.5413 7.42821C18.7857 7.32697 18.9946 7.15554 19.1416 6.93558C19.2886 6.71563 19.367 6.45703 19.367 6.19248C19.367 5.83773 19.2261 5.49751 18.9753 5.24666C18.7244 4.99581 18.3842 4.85488 18.0294 4.85488ZM12.0828 6.57022C10.9715 6.5702 9.88519 6.89973 8.96118 7.51712C8.03716 8.13452 7.31698 9.01205 6.89169 10.0387C6.46641 11.0654 6.35513 12.1952 6.57192 13.2851C6.78872 14.3751 7.32385 15.3763 8.10965 16.1621C8.89545 16.9479 9.89663 17.483 10.9866 17.6998C12.0765 17.9167 13.2063 17.8054 14.233 17.3801C15.2597 16.9548 16.1372 16.2347 16.7546 15.3107C17.372 14.3867 17.7016 13.3003 17.7016 12.189C17.6999 10.6994 17.1073 9.27119 16.054 8.21783C15.0007 7.16447 13.5725 6.57194 12.0828 6.57022ZM12.0828 15.7883C11.371 15.7883 10.6751 15.5772 10.0832 15.1818C9.49128 14.7863 9.02994 14.2242 8.75751 13.5665C8.48508 12.9088 8.41378 12.1851 8.55265 11.4869C8.69151 10.7888 9.03429 10.1474 9.53765 9.64405C10.041 9.14068 10.6823 8.79787 11.3805 8.65899C12.0787 8.5201 12.8024 8.59136 13.4601 8.86377C14.1177 9.13618 14.6799 9.5975 15.0754 10.1894C15.4709 10.7813 15.682 11.4772 15.682 12.189C15.6809 13.1432 15.3013 14.0581 14.6266 14.7328C13.9519 15.4076 13.0371 15.7872 12.0828 15.7883ZM23.4204 7.51915C23.4203 6.61916 23.243 5.72798 22.8986 4.89651C22.5542 4.06503 22.0493 3.30954 21.4129 2.67317C20.7765 2.0368 20.021 1.53201 19.1895 1.18762C18.358 0.84323 17.4668 0.665989 16.5668 0.666016L7.5215 0.666016C6.62151 0.665989 5.73032 0.84323 4.89883 1.18762C4.06734 1.53201 3.31181 2.0368 2.67541 2.67317C2.039 3.30954 1.53416 4.06503 1.18972 4.89651C0.845288 5.72798 0.667995 6.61916 0.667969 7.51915L0.667969 16.5652C0.667995 17.4652 0.845288 18.3564 1.18972 19.1879C1.53416 20.0193 2.039 20.7748 2.67541 21.4112C3.31181 22.0476 4.06734 22.5524 4.89883 22.8967C5.73032 23.2411 6.62151 23.4184 7.5215 23.4184H16.5668C17.4668 23.4184 18.358 23.2411 19.1895 22.8967C20.021 22.5524 20.7765 22.0476 21.4129 21.4112C22.0493 20.7748 22.5542 20.0193 22.8986 19.1879C23.243 18.3564 23.4203 17.4652 23.4204 16.5652V7.51915ZM21.2739 16.5652C21.2739 17.8136 20.7779 19.0108 19.8952 19.8934C19.0124 20.7761 17.8152 21.272 16.5668 21.2719H7.5215C6.90338 21.272 6.29131 21.1502 5.72023 20.9137C5.14916 20.6772 4.63026 20.3305 4.19317 19.8935C3.75607 19.4564 3.40935 18.9375 3.17279 18.3665C2.93622 17.7954 2.81445 17.1833 2.81444 16.5652V7.51915C2.81445 6.90103 2.93622 6.28897 3.17279 5.71791C3.40935 5.14685 3.75607 4.62797 4.19317 4.19091C4.63026 3.75385 5.14916 3.40716 5.72023 3.17064C6.29131 2.93412 6.90338 2.81239 7.5215 2.81242H16.5668C17.8152 2.81238 19.0124 3.30824 19.8952 4.19092C20.7779 5.07361 21.2739 6.2708 21.2739 7.51915V16.5652Z"  />
                        </svg>
                    </a>
                    <a href="/" target={"_blank"}  rel="noreferrer" className="social-media-icon">
                        <svg width={17} height={21} viewBox="0 0 17 21" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.68964 15.4808C8.39037 15.3803 7.84437 14.736 6.82537 14.1174C6.37137 16.4996 5.83557 18.8018 4.56884 20.3722C4.48811 20.4737 4.37851 20.5484 4.25448 20.5864C4.13046 20.6244 3.99783 20.6239 3.87409 20.5849C3.75036 20.546 3.64132 20.4705 3.56137 20.3684C3.48142 20.2662 3.4343 20.1422 3.42624 20.0128C3.2349 16.2174 4.54564 13.2045 5.18964 10.0264C3.96664 7.96765 5.3367 3.82365 7.91637 4.84478C11.0913 6.10025 5.16757 12.5001 9.1443 13.2994C13.296 14.134 14.9908 6.09571 12.4161 3.48111C8.69611 -0.293754 1.5879 3.39531 2.46204 8.79911C2.62757 9.82611 3.48944 10.2971 3.37977 11.3124C3.3656 11.4573 3.31662 11.5966 3.23701 11.7185C3.1574 11.8404 3.04951 11.9412 2.92254 12.0124C2.79556 12.0836 2.65325 12.1231 2.50774 12.1275C2.36222 12.1319 2.2178 12.101 2.08677 12.0376C0.43997 11.2676 -0.0705631 9.58151 0.00763694 7.43578C0.155037 3.33805 3.68964 0.468846 7.23497 0.0717796C11.7188 -0.430087 15.9271 1.71825 16.508 5.93578C17.1615 10.6958 14.4838 15.8509 9.68964 15.4808Z"  />
                        </svg>
                    </a>

                </div>

            </div>
        );
    }
}

export default AsideComponent;