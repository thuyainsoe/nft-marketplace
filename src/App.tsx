import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home/Home";
import WalletConnect from "./pages/WalletConnect/WalletConnect";
function App() {
  return (
    <>
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connect-wallet" element={<WalletConnect />} />
          </Routes>
        </DefaultLayout>
      </Router>
    </>
  );
}

export default App;
