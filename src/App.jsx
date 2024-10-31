function App() {
  return (
    <div
      style={{ boxShadow: "4px 4px 40px #000 inset" }}
      className="h-screen w-screen bg-white"
    >
      <div className="navbar flex">
        <img src="../public/Logo 1.png" alt="" className="pt-16 pl-4" />
        <nav className="pt-[80px]">
          <ul className="flex gap-10 font-medium font-mono">
            <li><a href="home">HOME</a></li>
            <li><a href="home">Website</a></li>
            <li><a href="home">Application</a></li>
            <li><a href="home">Digital Marketing</a></li>
            <li><a href="home">Logos</a></li>
            <li><a href="home">Posters</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default App;
