import Navbar from "../Components/global/Navbar";
import Hero from "../Components/Hero";
import Discover from "../Components/Discover";
import CardSection from "../Components/CardSection";
import NewsSection from "../Components/NewsSection";
import FundraiserSection from "../Components/FundraiserSection";
import InvolvementSection from "../Components/InvolvementSection";
import OurClientsFeedbackSection from "../Components/OurClientsFeedbackSection";
import OurTeams from "../Components/OurTeams";



export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Discover />
      <CardSection/>
      <NewsSection />
      <FundraiserSection/>
      <InvolvementSection />
      <OurClientsFeedbackSection />
      <OurTeams/>
    </>
  );
}
