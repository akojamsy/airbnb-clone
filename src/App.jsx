import { useState } from "react";
import Modal from "./components/modal/Modal";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <BrowserRouter>
      <Home setModal={setModal} />
      <Modal isOpen={modal} onClose={setModal} title={"Sign Up"} />
    </BrowserRouter>
  );
}

export default App;
