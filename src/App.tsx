import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
