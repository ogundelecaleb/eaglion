import "./App.css";
import Empower from "./component/empower";
import Herobanner from "./component/herobanner";
import Navbar from "./component/navbar";
import Partner from "./component/partners";
import Service from "./component/service";

function App() {
  return (
    <div className="">
      <Navbar />
      <Herobanner/>
      <Partner/>
      <Service/>
      <Empower/>
    </div>
  );
}

export default App;
