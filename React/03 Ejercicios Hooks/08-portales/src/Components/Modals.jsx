import React from 'react'
import { useModal } from '../Hooks/useModal'
import { Modal } from './Modal'
import { ModalPortal } from './ModalPortal';

export const Modals = () => {
     const [isOpenModal1, openModal1, closeModal1] = useModal(false);
     const [isOpenModal2, openModal2, closeModal2] = useModal(false);
     const [isOpenModal3, openModal3, closeModal3] = useModal(false);

     const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);


     return (
          <div>
               <h1>Modals</h1>
               <button onClick={openModal1}>Modal 1</button>
         <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
              <h2>Modal 1</h2>
              <p>Hi, this is the content of the modal 1</p>
              <img src="https://placeimg.com/400/400/animals" alt="Animal" />
         </Modal>
         <button onClick={openModal2}>Modal 2</button>
         <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
               <h2>Modal 2</h2>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi magnam repudiandae, impedit illum non, consequuntur numquam saepe natus accusantium quidem dolores aliquid laborum perferendis? Dolores praesentium totam id doloremque minus!</p>
               <img src="https://placeimg.com/400/400/nature" alt="Nature" />
         </Modal>
         <button onClick={openModal3}>Modal 3</button>
         <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
               <h2>Modal 3</h2>
               <p>Test for another modal</p>
               <img src="https://placeimg.com/400/400/arch" alt="Arch" />
         </Modal>

          <button onClick={openModalPortal}>Modal in Portal</button>
          <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
               <h2>Modal portal inside</h2>
               <p>This is the content of a modal portal that It loads in other node of DOM different where it loads our React App. Thanks to a React Portal</p>
               <img src="https://placeimg.com/400/400/tech" alt="Tech" />
          </ModalPortal>
          </div>
     )
}
