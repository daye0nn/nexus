import GlobalStyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
