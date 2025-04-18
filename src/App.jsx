import Header from "./layouts/Header.jsx";
import Main from "./layouts/Main.jsx";
import Footer from "./layouts/Footer.jsx";


export default function App() {
  return (
      <div className="flex flex-col min-h-screen">
        <Header/>
        <Main/>
        <Footer/>
      </div>
  );
}