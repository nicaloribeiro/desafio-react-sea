import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="lg:flex w-screen lg:h-screen">
      <NavBar />
      <div className="h-full w-full px-8 pt-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
