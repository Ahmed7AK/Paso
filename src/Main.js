import './Main.css';
import Navbar from "./components/Navbar.js"
import Intro from './components/Intro.js';

let deviceType = () => {
  if (window.innerWidth <= 900) {
    return "mobile";
  } else {
    return "desktop";
  } 
}


function Main() {
  return (
   <div>
      <Navbar device={deviceType()} />
      
      <Intro device={deviceType()} />
   </div>
  );
}

export default Main;
