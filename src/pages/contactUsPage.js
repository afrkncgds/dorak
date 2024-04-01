import React, {Component} from 'react';
import AsideComponent from "../components/asideComponent";
import HeaderComponent from "../components/headerComponent";
import FooterComponent from "../components/footerComponent";
import BannerComponent from '../components/bannerComponent';

class ContactUsPage extends Component {
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
                        mainTitle = "CONTACT US"
                        img = "/services/body.jpg"

                    />
                    <div className="contact-us-root text-area">
                        

                        <section className="contact-section ">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.4115255280618!2d28.990398846760517!3d41.06302171769089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab76e0d3b0657%3A0xa8755d57e836b842!2sDorak%20Turizm%20ve%20Gayrimenkul%20Yat%C4%B1r%C4%B1mlar%C4%B1%20Holding%20A.%C5%9E.!5e0!3m2!1str!2str!4v1677836011728!5m2!1str!2str; t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
                                    title="Dorak Turizm ve Gayrimenkul Yatırımları Holding A.Ş."
                                    aria-label="Dorak Turizm ve Gayrimenkul Yatırımları Holding A.Ş.">

                                </iframe>


                        </section>





                    </div>
                    <FooterComponent/>
                </main>

            </div>
        );
    }
}

export default ContactUsPage;