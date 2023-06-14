import { CatBox } from "./components/CatBox";
import { CatBox2 } from "./components/CatBox2";

function App() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <CatBox />
        <CatBox2 />
      </div>
    </div>
  );
}

export default App;
