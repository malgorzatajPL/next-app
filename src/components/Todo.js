import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backkdrop';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  console.log(modalIsOpen);
  return (
    <div>
      <h1>My Todos</h1>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen && <Modal onClick={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
