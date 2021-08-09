import React, { useState } from 'react';

// export default function Forms(){

//      const [name, setName]  = useState("");
//      const [favlor, setFlavor]  = useState("");
//      const [language, setLanguage] = useState("");
//      const [terms, setTerms] = useState(false);


//      const handleSubmit = e => {
//           alert("The form has been sent");
//      }

//      return(
//           <>
//                <h2>Forms</h2>
//                <form onSubmit={() => handleSubmit()}>
//                     <label htmlFor="name">Name: </label>
//                     <input type="text" name="name" id="name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />


//                     <p>Choose your JS favorite</p>
//                      <input 
//                          type="radio" 
//                          id="vanilla" 
//                          name="flavor" 
//                          value="vanilla" 
//                          onChange={(e) => setFlavor(e.target.value)}
//                     />
//                     <label htmlFor="vanilla">Vanilla</label>

//                      <input 
//                          type="radio" 
//                          id="react" 
//                          name="flavor" 
//                          value="react" 
//                          onChange={(e) => setFlavor(e.target.value)}
//                          defaultChecked
//                     />
//                     <label htmlFor="react">React</label>

//                      <input 
//                          type="radio" 
//                          id="angular" 
//                          name="flavor" 
//                          value="angular" 
//                          onChange={(e) => setFlavor(e.target.value)}
//                     />
//                     <label htmlFor="angular">Angular</label>

//                     <input 
//                          type="radio" 
//                          id="vue" 
//                          name="flavor" 
//                          value="vue" 
//                          onChange={(e) => setFlavor(e.target.value)}
//                     />
//                     <label htmlFor="vue">Vue.js</label>

//                     <input 
//                          type="radio" 
//                          id="svelte" 
//                          name="flavor" 
//                          value="svelte" 
//                          onChange={(e) => setFlavor(e.target.value)}
//                     />
//                     <label htmlFor="svelte">Svelte</label>

//                     <p>Choose your flavor language prgramming</p>

//                     <select name="language" onChange={e => setLanguage(e.target.value)} defaultValue="">
//                          <option value="">- - -</option>
//                          <option value="js">JavaScript</option>
//                          <option value="php">PHP</option>
//                          <option value="py">Python</option>
//                          <option value="go">Go</option>
//                          <option value="ruby">Ruby</option>
//                     </select>
//                     <br />
//                     <label htmlFor="terms">Accept terms and Conditions</label>
//                     <input 
//                          type="checkbox" 
//                          name="terms" 
//                          id="terms" 
//                          onChange={(e) => setTerms(e.target.checked)}
//                     />

//                     <br />
//                     <input type="submit" value="Send" />
//                </form>
//           </>
//      );
// }

export default function Forms(){

     const [form, setForm]  = useState({});
     
     const handleChange = e => {
          setForm({
               ...form, [e.target.name]: e.target.value
          });
     } ;

     const handleChecked = e => {
          setForm({
               ...form, [e.target.name]: e.target.checked
          });
     } ;

     const handleSubmit = e => {
          alert("The form has been sent");
     }

     return(
          <>
               <h2>Forms</h2>
               <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input 
                         type="text" 
                         name="name" 
                         id="name" 
                         autoComplete="off" 
                         value={form.name} 
                         onChange={handleChange} 
                    />

                    <p>Choose your JS favorite</p>
                     <input 
                         type="radio" 
                         id="vanilla" 
                         name="flavor" 
                         value="vanilla" 
                         onChange={handleChange}
                    />
                    <label htmlFor="vanilla">Vanilla</label>

                     <input 
                         type="radio" 
                         id="react" 
                         name="flavor" 
                         value="react" 
                         onChange={handleChange}
                         defaultChecked
                    />
                    <label htmlFor="react">React</label>

                     <input 
                         type="radio" 
                         id="angular" 
                         name="flavor" 
                         value="angular" 
                         onChange={handleChange}
                    />
                    <label htmlFor="angular">Angular</label>

                    <input 
                         type="radio" 
                         id="vue" 
                         name="flavor" 
                         value="vue" 
                         onChange={handleChange}
                    />
                    <label htmlFor="vue">Vue.js</label>

                    <input 
                         type="radio" 
                         id="svelte" 
                         name="flavor" 
                         value="svelte" 
                         onChange={handleChange}
                    />
                    <label htmlFor="svelte">Svelte</label>

                    <p>Choose your flavor language prgramming</p>

                    <select name="language" onChange={handleChange} defaultValue="">
                         <option value="">- - -</option>
                         <option value="js">JavaScript</option>
                         <option value="php">PHP</option>
                         <option value="py">Python</option>
                         <option value="go">Go</option>
                         <option value="ruby">Ruby</option>
                    </select>

                    <br />
                    <label htmlFor="terms">Accept terms and Conditions</label>
                    <input 
                         type="checkbox" 
                         name="terms" 
                         id="terms" 
                         onChange={handleChecked}
                    />

                    <br />
                    <input type="submit" value="Send" />
                    <br /><br />
               </form>
          </>
     );
}