import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Container from "./Container";
import "../styles/Layout.css";

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <div className="d-flex layout">
        <SideBar />
        <Container>
            {children}
        </Container>
      </div>
    </>
  );
}
