import React, {Component} from 'react';
import { Routes, Route } from "react-router-dom";
import * as ROUTES from "../constants/routePaths";

import HomePage from "../pages/homePage";
import AboutPage from "../pages/aboutPage";

import ServicesPage from "../pages/servicesPage";
import ToursPage from "../pages/toursPage";
import ContactUsPage from "../pages/contactUsPage";
import OffersPage from "../pages/offersPage";
import AesteticAndPlasticPage from "../pages/services/aesteticAndPlasticPage";

import WellnessPage from "../pages/services/wellnessPage";
import DentistryPage from "../pages/services/dentistryPage";
import EyeSurgeryPage from "../pages/services/eyeSurgeryPage";
import DentalOralHealthPage from "../pages/services/dentalOralHealthPage";
import InVitroFertilizationPage from "../pages/services/inVitroFertilizationPage";
import ObesitySurgeryPage from "../pages/services/obesitySurgeryPage";
import CapadociaPage from "../pages/tours/capadociaPage";
import IstanbulPage from "../pages/tours/istanbulPage";
import SevenDayPage from "../pages/tours/sevenDayPage";
import FourStepPage from "../pages/about/fourStepPage";
import OurResponsbilitiesPage from "../pages/about/ourResponsbilitiesPage";
import BodyPage from "../pages/services/bodyPage";
import FacePage from "../pages/services/facePage";
import BreastPage from "../pages/services/breastPage";
import HairTransplantationPage from "../pages/services/hairTransplantationPage";
import NoTouchLazerPage from "../pages/services/noTouchLazerPage";
import NoBladeSurgery from "../pages/services/noBladeSurgery";
import RegenerativePage from "../pages/services/regenerativePage";
import CheckUpPage from "../pages/services/checkUpPage";
import RehabilitationHotelPage from "../pages/services/rehabilitationHotelPage";
import ThermalHotelPage from "../pages/services/thermalHotelPage";
import ArmLiftPage from "../pages/services/body/armLiftPage";
import BblPage from "../pages/services/body/bbl_Page";
import CalfSurgeryPage from "../pages/services/body/calfSurgeryPage";
import CellulitePage from "../pages/services/body/cellulitePage";
import GynecomastiaPage from "../pages/services/body/gynecomastiaPage";
import MiniTummyTuckPage from "../pages/services/body/miniTummyTuckPage";
import MommyMakeoverPage from "../pages/services/body/mommyMakeoverPage";
import PostbariatricSurgeryPage from "../pages/services/body/postbariatricSurgeryPage";
import ThighLiftPage from "../pages/services/body/thighLiftPage";
import TummyTuckPage from "../pages/services/body/tummyTuckPage";
import VaserLipoPage from "../pages/services/body/vaserLipoPage";
import BreastAugmentationPage from "../pages/services/breast/breastAugmentationPage";
import BreastReductionPage from "../pages/services/breast/breastReductionPage";
import BreastUpliftPage from "../pages/services/breast/breastUpliftPage";
import RhinoplastyPage from "../pages/services/face/rhinoplastyPage";
import TipRhinoplastyPage from "../pages/services/face/tipRhinoplastyPage";
import RevisionRiphoplastyPage from "../pages/services/face/revisionRiphoplastyPage";
import LipLiftPage from "../pages/services/face/lipLiftPage";
import EarLiftPage from "../pages/services/face/earLiftPage";
import FaceLiftPage from "../pages/services/face/faceLiftPage";
import NeckLiftPage from "../pages/services/face/neckLiftPage";
import {BROW_LIFT_PAGE, EYELID_SURGERY_PAGE} from "../constants/routePaths";
import BrowLiftPage from "../pages/services/face/browLiftPage";
import EyelidSurgeryPage from "../pages/services/face/eyelidSurgeryPage";
import CappadociaIstanbulPage from "../pages/tours/cappadociaIstanbulPage";






class RoutesComponent extends Component {
    render() {
        return (
            <Routes>
                <Route path={ROUTES.HOME_PAGE} element={<HomePage />}/>
                <Route path={ROUTES.ABOUT_PAGE} element={<AboutPage />}/>
                <Route path={ROUTES.SERVICES_PAGE} element={<ServicesPage />}/>
                <Route path={ROUTES.TOURS_PAGE} element={<ToursPage />}/>
                <Route path={ROUTES.CONTACT_US_PAGE} element={<ContactUsPage />}/>
                <Route path={ROUTES.OFFERS} element={<OffersPage />}/>
                <Route path={ROUTES.AESTHETIC_AND_PLASTIC} element={<AesteticAndPlasticPage />}/>
                <Route path={ROUTES.WELLNESS_PAGE} element={<WellnessPage />}/>
                <Route path={ROUTES.REGENERATIVE_PAGE} element={<RegenerativePage />}/>
                <Route path={ROUTES.CHECK_UP_PAGE} element={<CheckUpPage />}/>
                <Route path={ROUTES.REHABILITATION_PAGE} element={<RehabilitationHotelPage />}/>

                <Route path={ROUTES.THERMAL_OTEL_PAGE} element={<ThermalHotelPage />}/>
                <Route path={ROUTES.DENTISTRY_PAGE} element={<DentistryPage />}/>
                <Route path={ROUTES.EYE_SURGERY_PAGE} element={<EyeSurgeryPage />}/>
                <Route path={ROUTES.NO_TOUCH_LAZER} element={<NoTouchLazerPage />}/>
                <Route path={ROUTES.NON_BLADE_CATARACT} element={<NoBladeSurgery />}/>
                <Route path={ROUTES.DENTAL_ORAL_PAGE} element={<DentalOralHealthPage />}/>
                <Route path={ROUTES.IN_VITRO_PAGE} element={<InVitroFertilizationPage />}/>
                <Route path={ROUTES.OBESITY_PAGE} element={<ObesitySurgeryPage />}/>
                <Route path={ROUTES.BODY_PAGE} element={<BodyPage />}/>
                <Route path={ROUTES.ARM_LIFT_PAGE} element={<ArmLiftPage />}/>
                <Route path={ROUTES.BBL_PAGE} element={<BblPage />}/>
                <Route path={ROUTES.CALF_SURGERY} element={<CalfSurgeryPage />}/>
                <Route path={ROUTES.CELLILUTE_PAGE} element={<CellulitePage />}/>
                <Route path={ROUTES.GYNECOMASTIAL_PAGE} element={<GynecomastiaPage />}/>
                <Route path={ROUTES.MINI_TUMMY_PAGE} element={<MiniTummyTuckPage />}/>
                <Route path={ROUTES.MOMMY_MAKEOVER_PAGE} element={<MommyMakeoverPage />}/>
                <Route path={ROUTES.POST_BARIATRIC_PAGE} element={<PostbariatricSurgeryPage />}/>
                <Route path={ROUTES.THIGH_LIFT_PAGE} element={<ThighLiftPage />}/>
                <Route path={ROUTES.TUMMY_TUCK_PAGE} element={<TummyTuckPage />}/>
                <Route path={ROUTES.VASER_LIPO_PAGE} element={<VaserLipoPage />}/>
                <Route path={ROUTES.BREAST_AUGMENTATION_PAGE} element={<BreastAugmentationPage />}/>
                <Route path={ROUTES.BREAST_REDUCTION_PAGE} element={<BreastReductionPage />}/>
                <Route path={ROUTES.BREAST_UPLIFT_PAGE} element={<BreastUpliftPage />}/>
                <Route path={ROUTES.FACE_PAGE} element={<FacePage />}/>
                <Route path={ROUTES.RHINOPLASTY_PAGE} element={<RhinoplastyPage />}/>
                <Route path={ROUTES.TIP_RHINOPLASTY_PAGE} element={<TipRhinoplastyPage />}/>
                <Route path={ROUTES.REVISION_RHINOPLASTY_PAGE} element={<RevisionRiphoplastyPage />}/>
                <Route path={ROUTES.LIP_LIFT_PAGE} element={<LipLiftPage />}/>
                <Route path={ROUTES.EAR_SURGERY_PAGE} element={<EarLiftPage />}/>
                <Route path={ROUTES.FACE_LIFT_PAGE} element={<FaceLiftPage />}/>
                <Route path={ROUTES.NECK_LIFT_PAGE} element={<NeckLiftPage />}/>
                <Route path={ROUTES.BROW_LIFT_PAGE} element={<BrowLiftPage />}/>
                <Route path={ROUTES.EYELID_SURGERY_PAGE} element={<EyelidSurgeryPage />}/>
                <Route path={ROUTES.FACE_PAGE} element={<FacePage />}/>
                <Route path={ROUTES.BREAST_PAGE} element={<BreastPage />}/>
                <Route path={ROUTES.HAIR_TRANSPLANTATION_PAGE} element={<HairTransplantationPage />}/>

                <Route path={ROUTES.CAPADOCIA_PAGE} element={<CapadociaPage />}/>
                <Route path={ROUTES.ISTANBUL_PAGE} element={<IstanbulPage />}/>
                <Route path={ROUTES.SEVEN_DAY_PAGE} element={<SevenDayPage />}/>
                <Route path={ROUTES.CAPADOCIA_ISTANBUL_PAGE} element={<CappadociaIstanbulPage />}/>

                <Route path={ROUTES.FOUR_STEP_PAGE} element={<FourStepPage />}/>
                <Route path={ROUTES.OUR_RESPONSBILITIES} element={<OurResponsbilitiesPage />}/>





            </Routes>

        );
    }
}

export default RoutesComponent;