import BrowseCategories from "./components/BrowseCategories";
import DiscoverSection from "./components/DiscoverSection";
import HeroSection from "./components/HeroSection";
import HowItWork from "./components/HowItWork";
import MagicMashroom from "./components/MagicMashroom";
import SubscribeSection from "./components/SubscribeSection";
import TopCreators from "./components/TopCreators";
import TradingSection from "./components/TradingSection";

const Home = () => {
  return (
    <div className="flex flex-col items-start">
      <HeroSection />
      <TradingSection />
      <TopCreators />
      <BrowseCategories />
      <DiscoverSection />
      <MagicMashroom />
      <HowItWork />
      <SubscribeSection />
    </div>
  );
};

export default Home;
