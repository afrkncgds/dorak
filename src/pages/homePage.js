import React, { Component } from 'react';
import HeaderComponent from "../components/headerComponent";
import FooterComponent from "../components/footerComponent";
import BannerComponent from '../components/bannerComponent';
import BannerToursComponent from "../components/banner/bannerToursComponent";
import AsideComponent from "../components/asideComponent";
import BannerDoctorComponent from "../components/banner/bannerDoctorComponent";
import BannerFormComponent from "../components/banner/bannerFormComponent";

class HomePage extends Component {
    state = {
        openMobileitem: false,

    }
    openMobileMenu = () => {
        document.body.classList.add("no-scroll")
        this.setState({
            openMobileitem: !this.state.openMobileitem,
        }, () => {
            if (!this.state.openMobileitem) {
                document.body.classList.remove("no-scroll")
            }
        })
    }


    render() {

        return (
            <div className={`main-root ${this.state.openMobileitem ? "main-root open" : ""}`}>
                <AsideComponent />
                <main className="main" >
                    <HeaderComponent openMobileMenu={this.openMobileMenu} />
                    <div className="home-root">
                        <BannerComponent
                            mainTitle="Time to"
                            title="Smile!"
                            text="Enjoy our new dental offers and travel destinations, they’re online immediately. Choose your service or destination and start smiling again!"
                            img="/services/body.jpg"
                            isHome={true}
                        />
                        <BannerToursComponent />
                        <BannerDoctorComponent />
                        <BannerFormComponent />


                    </div>
                    <FooterComponent />
                </main>

            </div>
        );
    }
}

export default HomePage;