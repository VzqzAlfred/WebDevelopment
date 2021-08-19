import './App.css';
import { Modal } from './Components/Modal';
import { Modals } from './Components/Modals';

function App() {
  return (
    <div>
         <Modals />
         <button>Modal 1</button>
         <Modal>
              <h2>Modal 1</h2>
              <p>Hi, this is the content od the modal 1</p>
              <img src="https://placeimg.com/400/400/animals" alt="Animal" />
         </Modal>
         <Modal >
               <h2>Modal 2</h2>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi magnam repudiandae, impedit illum non, consequuntur numquam saepe natus accusantium quidem dolores aliquid laborum perferendis? Dolores praesentium totam id doloremque minus!</p>
               <img src="https://placeimg.com/400/400/nature" alt="Nature" />
         </Modal>
    </div>
  );
}

export default App;
