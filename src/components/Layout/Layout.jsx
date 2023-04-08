import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Container from "./Container";
import "../../styles/Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout ">
      <Navbar />
      <div className="row w-100 layoutSC">
        <div className="col-lg-2 p-0">
          <SideBar />
        </div>
        <div className="col-10 p-0 ">
          <Container>
            {children}
          </Container>
        </div>
      </div>
    </div>
  );
}
