import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Container from "./Container";
import Gestionar from "../pages/Gestionar";
import Parqueo from "../pages/Parqueo";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <SideBar />
        <Container>
          <Parqueo></Parqueo>
        </Container>
      </div>
    </>
  );
}
