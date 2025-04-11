import { Link } from "react-router-dom"
import Banner from "../../components/ui/Banner";
import MeetFyndo from "../../components/ui/MeetFyndo";
import Quotation from "../../components/ui/Quotation";
import CommonVideoSection from "../../components/common/CommonVideoSection";
import videoSections from "../../data/VideoSections.json"
import HighLevelSecurity from "../../components/ui/HighLevelSecurity";
import SpeedyService from "../../components/ui/SpeedyService";
import FAQ from "../../components/ui/FAQ";
import InNumbers from "../../components/ui/InNumbers";
import Support from "../../components/ui/Support";
import NextSteps from "../../components/ui/NextSteps";
import CTA from "../../components/ui/CTA";
const Home = () => {
  return (
    <div className="">
      <Banner />
      <MeetFyndo smallHeading="Meet Fyndo" text="Fyndo helps non-technical businesses and investors prevent budget overruns, screening issues, and unrealistic estimates with clear, fixed-price packages." bigHeadingOne="49% Savings" subHeadingOne="Save 49% more money with Fyndo— avoid costly IT failures"  bigHeadingTwo="3x Faster" subHeadingTwo="Triple the speed, lower costs—Fyndo outperforms traditional IT services." bigHeadingthree="90% Reduction" subHeadingThree="Fyndo cuts IT failures 90% by eliminating jargon and paperwork."  videoSrc="/videos/v7.mp4"/>
      <Quotation />
      {videoSections.map((section, index) => (
        <CommonVideoSection key={index} {...section} />
      ))}
      <HighLevelSecurity />
      <SpeedyService />
      <MeetFyndo smallHeading="Fyndo" text="Fyndo’s 80+ member team is on a mission to help non-tech founders and investors decode the IT black box with transparency." bigHeadingOne="No bots, No AI—" subHeadingOne="80+ Fyndo Pros— Real Tech-Minds Working on Your Project"  bigHeadingTwo="Made in Europe" subHeadingTwo="Operating in Europe with hubs in Germany and Poland" bigHeadingthree="100+ Stacks" subHeadingThree="Many industries, many stacks—SaaS to e-commerce, we’ve got it." videoSrc="/videos/v7-video4.mp4" />
      <FAQ />
      <InNumbers />
      <Support />
      <NextSteps />
      <CTA />
    </div>
  );
};

export default Home;