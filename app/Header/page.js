import Logo from "./logo";
import OtherRoutes from "./OtherRoutes";
import "../Styles/header.css";

export default function Header() {
  const divStyles = {
    boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 20%)",

    marginRight: "0",
  };

  return (
    <>
      <nav
        style={divStyles}
        id={"scroll"}
        className=" flex flex-wrap items-center justify-between py-3 bg-white sticky  top-[0px] z-[12] "
      >
        <div
          className={
            "w-[100%] mycontainer mx-auto flex flex-wrap items-center justify-between"
          }
        >
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
            <Logo>
              <img
                src={"/Images/logo.png"}
                alt="analah insurance"
                className={""}
              />
              <img
                src={"/Images/bar-icon.png"}
                alt="bar-icon"
                className="object-contain w-[25px] h-[25px]"
              />
            </Logo>
          </div>
          <OtherRoutes />
        </div>
      </nav>
    </>
  );
}
