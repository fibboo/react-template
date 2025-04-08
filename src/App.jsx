import Header from "./layouts/Header.jsx";
import {Main} from "./layouts/Main.jsx";
import Footer from "./layouts/Footer.jsx";
import Context from "./hooks/Context.jsx";


export default function App() {
  return (
      <Context>
        <div className="flex flex-col min-h-screen p-5">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </Context>
  );
}