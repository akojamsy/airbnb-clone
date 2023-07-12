import { useState } from "react";
import Modal from "./components/modal/Modal";
import Home from "./pages/Home";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Home setModal={setModal} />
      <Modal isOpen={modal} onClose={setModal} title={"Sign Up"} />
    </>
  );
}

export default App;
