import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Container from "./Container";
import "../../styles/Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout ">
      <Navbar />
      <div className="row w-100 mr-0 ml-0">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Container>
            {children}
          </Container>
        </div>
      </div>
    </div>
  );
}
