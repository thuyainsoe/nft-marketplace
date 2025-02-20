// import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const DefaultLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
