import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home/Home";
import WalletConnect from "./pages/WalletConnect/WalletConnect";
import SignUp from "./pages/SignUp/SignUp";
import ArtistDetail from "./pages/ArtistDetail/ArtistDetail";
import NftPage from "./pages/NftPage/NftPage";
function App() {
  return (
    <>
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connect-wallet" element={<WalletConnect />} />
            <Route path="/artist-detail" element={<ArtistDetail />} />
            <Route path="/nft-page" element={<NftPage />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </DefaultLayout>
      </Router>
    </>
  );
}

export default App;
