import Container from "./components/Container";
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";
function Plazas() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <SideBar />
        <Container />
      </div>
    </>
  );
}

export default Plazas;
