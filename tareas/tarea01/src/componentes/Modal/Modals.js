import { useModal } from "../hooks/useModal"
import List2 from "../list/List";
import Modal from "./Modal"
import "./Modal.css"

const Modals = () => {
  const [isOpenModal1, openModal1,closeModal1] = useModal(false);
  const [isOpenModal2, openModal2,closeModal2] = useModal(false);
  return (
    <div>
        <h2>Modals</h2>
        <button className="btnSelect" onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>This is a Modal with image</p>
            <img src="https://placeimg.com/350/350/people" alt="People"/>
        </Modal >

        <button className="btnSelect" onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <h2>Modal Component List</h2>
          <h3>Fruits</h3>
          <List2 generalList = {["Apple","Grape", "Orange","Watermelon", "Banana"]}/>
        </Modal>
    </div>
  )
}

export default Modals