import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <div>Footer</div>
    </div>
  );
}
