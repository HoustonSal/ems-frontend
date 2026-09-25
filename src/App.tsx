import "./App.css";
import { CustomFooter } from "./components/Footer/CustomFooter";
import { CustomHeader } from "./components/Header/CustomHeader";
import { ListEmployees } from "./components/ListEmployees/ListEmployees";

function App() {
  return (
    <div>
      <CustomHeader />
      <ListEmployees />
      <CustomFooter />
    </div>
  );
}

export default App;
