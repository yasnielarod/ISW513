import "./Modal.css"

const Modal = ({children, isOpen, closeModal}) => {
  const handleClick = e => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-conteiner" onClick={handleClick}>
            <button className="is-close" onClick={closeModal}>X</button>
            {children}
        </div>
    </article>
  )
}

export default Modal