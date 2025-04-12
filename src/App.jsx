import Header from "./layouts/Header.jsx";
import BooksContext from "./layouts/BooksContext.jsx";
import Footer from "./layouts/Footer.jsx";
import Context from "./hooks/Context.jsx";
import LayoutEffect from "./hooks/UserLayoutEffect.jsx";
import {Reducer} from "./hooks/Reducer.jsx";
import {ShowPrevious} from "./hooks/CustomHooks.jsx";


export default function App() {
  return (
      <Context>
        <div className="flex flex-col min-h-screen p-5">
          <Header/>
          <ShowPrevious />
          <Reducer />
          <LayoutEffect />
          <BooksContext/>
          <Footer/>
        </div>
      </Context>
  );
}