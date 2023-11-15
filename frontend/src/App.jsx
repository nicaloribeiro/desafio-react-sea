import { useEffect } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import employeesService from "./services/employees";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('dispatch', dispatch)
    employeesService.getAll()
  },[dispatch])
  return (
    <div className="flex flex-col w-screen h-screen lg:flex-row lg:flex">
      <NavBar />
      <div className="w-full h-full px-8 pt-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
