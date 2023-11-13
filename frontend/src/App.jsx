import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/NavBar";
import { Layout, Space } from "antd";
import { Outlet } from "react-router-dom";
import EmptyMessage from "./components/EmptyMessage";
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="lg:flex w-screen h-screen">
      <NavBar />
      <div className="h-full w-full px-8 pt-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
