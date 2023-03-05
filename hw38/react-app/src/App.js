import Hello from "./Hello.js";

function App() {
  return (
    <div style={{ backgroundColor: "#46B1DE" }} className="wrapper">
      <Hello></Hello>
      <button onClick={() => console.log("Click on button")}>Button</button>
    </div>
  );
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
