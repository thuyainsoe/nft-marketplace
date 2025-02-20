import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <DefaultLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </DefaultLayout>
    </>
  );
}

export default App;
