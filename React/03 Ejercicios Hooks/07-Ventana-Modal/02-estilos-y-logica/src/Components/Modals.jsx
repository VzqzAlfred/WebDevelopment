import React from 'react'
import { useModal } from '../Hooks/useModal'
import { Modal } from './Modal'

export const Modals = () => {
     const [isOpenModal1, openModal1, closeModal1] = useModal(false);
     const [isOpenModal2, openModal2, closeModal2] = useModal(false);

     return (
          <div>
               <h1>Modals</h1>
               <button>Modal 1</button>
         <Modal >
              <h2>Modal 1</h2>
              <p>Hi, this is the content od the modal 1</p>
              <img src="https://placeimg.com/400/400/animals" alt="Animal" />
         </Modal>
         {/* <Modal >
               <h2>Modal 2</h2>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi magnam repudiandae, impedit illum non, consequuntur numquam saepe natus accusantium quidem dolores aliquid laborum perferendis? Dolores praesentium totam id doloremque minus!</p>
               <img src="https://placeimg.com/400/400/nature" alt="Nature" />
         </Modal> */}
          </div>
     )
}
