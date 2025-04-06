export default function CountButton({onClick, children}) {
  return (
      <button
          className="bg-white hover:bg-green-200 text-indigo-600 px-6 py-3 rounded-2xl font-bold shadow-lg transition-all duration-500"
          onClick={onClick}
      >
        {children}
      </button>
  );

}