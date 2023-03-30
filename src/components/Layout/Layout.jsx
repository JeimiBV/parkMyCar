import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Container from "./Container";

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <SideBar />
        <Container>
            {children}
        </Container>
      </div>
    </>
  );
}
