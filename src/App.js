import Navbar from "./Navbar";
import Upload from "./Upload";
// import About from './About';
import { useMediaQuery } from 'react-responsive';
function App() {
  return (
    <div>
      <Navbar />
      <Upload />
      {/* <About/> */}
    </div>
  );
}

export default App;
