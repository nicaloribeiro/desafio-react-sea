import { menuIcons } from "./helper";
import { useLocation, Link } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  return (
    <div className="flex w-full h-[57px] bg-primary-blue rounded-b-[20px] items-center justify-center lg:space-y-3 lg:flex-col lg:h-full lg:w-[57px] lg:rounded-r-[20px] lg:rounded-l-none lg:relative">
      <div className="lg:top-[50px] lg:h-[40px] lg:w-full lg:bg-white lg:absolute" />
      {menuIcons.map((menuEl, index) => (
        <Link
          to={menuEl.path}
          key={`${menuEl.path}-${index}`}
          className="relative flex items-center justify-center w-full h-full lg:h-auto"
        >
          <div
            className={`${
              location.pathname === menuEl.path &&
              "bg-white h-[5px] w-full lg:h-full lg:w-[5px] absolute top-0 lg:left-0"
            }`}
          />
          <div className="h-8 w-8 bg-white rounded-[10px] flex items-center justify-center relative">
            <img src={menuEl.icon} className="w-5 h-5" />
            {menuEl.subIcon && (
              <div className="h-3 w-3 bg-white rounded-[10px] flex items-center justify-center absolute -right-1 -bottom-1">
                <img src={menuEl.subIcon} className="w-5 h-5" />
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
