import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
