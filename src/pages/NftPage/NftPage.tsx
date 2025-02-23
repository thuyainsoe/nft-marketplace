import { useEffect } from "react";
import CoverSection from "./components/CoverSection";
import DetailSection from "./components/DetailSection";
import MoreFromArtist from "./components/MoreFromArtist";

const NftPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-col items-start">
      <CoverSection />
      <DetailSection />
      <MoreFromArtist />
    </div>
  );
};

export default NftPage;
