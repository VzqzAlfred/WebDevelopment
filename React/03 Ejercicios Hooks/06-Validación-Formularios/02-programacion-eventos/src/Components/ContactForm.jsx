import React from 'react';
import { useForm } from '../Hooks/useForm';

const initialForm = {
      name: "",
      email: "",
      subject: "",
      comments: ""
};

const validationsForm = (form) => {
     let errors = {

     }

     if (!form.name.trim()) {
          errors.name = "The field 'Name' is required";
     }

     return errors
}

let styles = {
     fontWeight: "bold",
     color: "#dc3545"
}

export const ContactForm = () => {
     const { 
          form, 
          errors, 
          loading, 
          response, 
          handleChange, 
          handleBlur, 
          handleSubmit
     } = useForm(initialForm, validationsForm);
     return (
          <div>
               <h1>Contact's Form</h1>
               <form onSubmit={handleSubmit}>
                    <input 
                         type="text" 
                         name="name" 
                         placeholder="Type your name" 
                         onBlur={handleBlur} 
                         onChange={handleChange} 
                         value={form.name} 
                         autoComplete="off"
                         required
                    />

                    {errors.name && <p style={styles}>{errors.name}</p>}

                    <input 
                         type="email" 
                         name="email" 
                         placeholder="Type your email" 
                         onBlur={handleBlur} 
                         onChange={handleChange} 
                         value={form.email} autoComplete="off"
                         required
                    />

                    {errors.email && <p style={styles}>{errors.email}</p>}

                    <input 
                         type="text" 
                         name="subject" 
                         placeholder="Subject" 
                         onBlur={handleBlur} 
                         onChange={handleChange} 
                         value={form.subject} 
                         autoComplete="off"
                         required
                    />

                    {errors.subject && <p style={styles}>{errors.subject}</p>}

                    <textarea 
                         name="comments" 
                         cols="50" 
                         rows="5" 
                         placeholder="Type yours comments"
                         onBlur={handleBlur} 
                         onChange={handleChange} 
                         value={form.comments} 
                         required
                    ></textarea>

                    {errors.comments && <p style={styles}>{errors.comments}</p>}

                    <input type="submit" value="Send" />
               </form>
          </div>
     )
}
