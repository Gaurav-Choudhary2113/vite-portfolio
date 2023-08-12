import Navbar from "./Components/Navbar";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectPage, setSelectPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-deep-blue">
      <Navbar selectedPage={selectPage} setSelectedPage={setSelectPage} />
    </div>
  );
}

export default App;
