import Hello from "./Hello.js";

function App() {
  return React.createElement(
    "div",
    { style: { backgroundColor: "#46B1DE" }, className: "wrapper" },
    React.createElement(Hello, null),
    React.createElement(
      "button",
      { onClick: function onClick() {
          return console.log("Click on button");
        } },
      "Button"
    )
  );
}

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App, null));