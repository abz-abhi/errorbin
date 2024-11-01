import "./App.css";

function App() {
  return (
    <div
      style={{ boxShadow: "4px 4px 40px #000 inset" }}
      className="h-screen w-screen bg-white"
    >
      <div className="navbar flex justify-between ">
        <div>
          <img src="../public/Logo 1.png" alt="" className="ml-4 mt-16" />
        </div>
        <div className=" mr-[40rem] ">
          <div className="before-after-select h-16 w-20 absolute "></div>
          <nav>
            <ul className="flex gap-12 font-medium pt-4  w-full  ">
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
    </div>
  );
}
export default App;
