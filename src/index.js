import ReactDOM from "react-dom";
import About from "./view/About/About";
import Contact from "./view/Contact/Contact";
import Home from "./view/Home/Home";
import Project from "./view/Project/Project";

const root = ReactDOM.createRoot(document.getElementById('root'));
const path = window.location.pathname;

if (path === "/Home") {
  root.render(<Home />);
} else if (path === "/About") {
  root.render(<About />);
} else if (path === "/Contact") {
  root.render(<Contact />);
} else if (path === "/Project") {
  root.render(<Project />);
} else {
  root.render("Not found");
}
