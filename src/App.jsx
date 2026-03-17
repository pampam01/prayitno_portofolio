import Navbar from "./components/Navbar";

const App = ({ children }) => {
  return (
    <main className="bg-slate-300/20  h-full">
      <Navbar />
      {children}
    </main>
  );
};

export default App;
