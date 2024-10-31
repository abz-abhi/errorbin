import './App.css'

function App() {
  return (
    <div
      style={{ boxShadow: "4px 4px 40px #000 inset" }}
      className="h-screen w-screen bg-white"
    >
      <div className="navbar flex justify-between items-center">
        <img src="../public/Logo 1.png" alt="" className="pt-16 pl-10" />
        <nav className=" pr-[38rem] ">
          <div className="before-after-div bg-green-500 h-20 w-20 absolute "></div>
          <ul className="flex gap-12 font-medium bg-pink-500">
            <li>
              <a href="home">HOME</a>
            </li>
            <li>
              <a href="home">Website</a>
            </li>
            <li>
              <a href="home">Application</a>
            </li>
            <li>
              <a href="home">Digital Marketing</a>
            </li>
            <li>
              <a href="home">Logos</a>
            </li>
            <li>
              <a href="home">Posters</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default App;
