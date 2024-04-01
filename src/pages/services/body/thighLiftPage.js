import React, {Component} from 'react';
import AsideComponent from "../../../components/asideComponent";
import HeaderComponent from "../../../components/headerComponent";
import FooterComponent from "../../../components/footerComponent";
import BannerComponent from '../../../components/bannerComponent';

class ThighLiftPage extends Component {
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
                    mainTitle = "THIGH LIFT"
                    img = "/services/body.jpg"


                    />
                    <FooterComponent/>
                </main>

            </div>
        );
    }
}

export default ThighLiftPage;