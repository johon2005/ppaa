import ".//App.css";
import App1, { Btn1 } from "./App1";
import App2, { Footer } from "./App2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <App1 />
      <App2 />
      <Btn1 />
      <Footer />
    </div>
  );
}
export default App;
