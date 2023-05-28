import AdvanceForm from "./AdvanceForm/AdvanceForm";
import TodouseReducer from "./Todo list/TodouseReducer";
import Color from "./Color-generator/Color";
import Generator from "./Lorem-Generator/Generator";
import Navbar from "./navbar/Navbar";
import Basic from "./useReducer/Basic";
import BasicRef from "./useRefHook/BasicRef";


function App() {
  return (
    <>
    <Navbar/>
    <Basic/>
    <TodouseReducer/>
    <BasicRef/>
    <Color/>
    <Generator/> 
    <AdvanceForm/> 
    
    </>
  );
}

export default App;
