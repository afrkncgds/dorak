import React, {Component} from 'react';
import AsideComponent from "../../components/asideComponent";
import HeaderComponent from "../../components/headerComponent";
import FooterComponent from "../../components/footerComponent";
import BannerComponent from '../../components/bannerComponent';

class HairTransplantationPage extends Component {
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
                    <div className="hair-root">
                        <BannerComponent
                        mainTitle = "HAIR TRANSPLANTATION"
                        img = "/services/body.jpg"
                        />



                    </div>
                    <FooterComponent/>
                </main>

            </div>
        );
    }
}

export default HairTransplantationPage;