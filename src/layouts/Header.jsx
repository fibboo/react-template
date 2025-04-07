import logo from '/logo.png';

export default function Header() {
  return (
    <nav
      className="sticky top-0 z-10
        bg-gradient-to-r from-slate-900 from-10% via-indigo-800 to-slate-900 to-90%
        border-b border-slate-600 shadow-lg"
    >
      <div className="mx-auto flex justify-between items-center py-4 px-6">
        <a href="/react-template"
          className="text-white text-2xl font-bold flex items-center flex-1 justify-start">
          <img src={logo} alt="logo" className="w-10 h-10 mr-2"/>
          React Template
        </a>

        <a href="https://github.com/fibboo" target="_blank"
          className="text-white hover:text-gray-200 transition duration-300">
          Github
        </a>
      </div>
    </nav>
  );
}