import { useEffect } from "react";
import CollectionSection from "./components/CollectionSection";
import CoverSection from "./components/CoverSection";
import DetailSection from "./components/DetailSection";
import FilterTabSection from "./components/FilterTabSection";

const ArtistDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-col items-start w-full">
      <CoverSection />
      <DetailSection />
      <FilterTabSection />
      <CollectionSection />
    </div>
  );
};

export default ArtistDetail;
