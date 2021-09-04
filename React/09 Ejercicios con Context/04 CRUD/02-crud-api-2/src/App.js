import React from 'react'
import { CRUDAPI } from './components/CRUDAPI'
import { CrudProvider } from './Context/CRUDContext';


function App() {
  return (
    <>
     <h1>API con JSON Server y Context</h1>
     <CrudProvider>
          <CRUDAPI />
     </CrudProvider>
     <hr />
    </>
  );
}

export default App;