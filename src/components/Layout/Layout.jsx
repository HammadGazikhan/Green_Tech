import Footer from "../Footer";
import Header from "../Navbar/NewNav";
// import Header from "../Navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="" style={{ minHeight: "50vh" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
