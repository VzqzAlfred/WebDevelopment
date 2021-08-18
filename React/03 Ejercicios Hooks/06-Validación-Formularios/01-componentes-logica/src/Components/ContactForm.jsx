import React from 'react';
import { useForm } from '../Hooks/useForm';

const initialForm = {};

const validationsForm = (form) => {} 

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
                         required
                    />

                    <input 
                         type="email" 
                         name="email" 
                         placeholder="Type your email" 
                         onBlur={handleBlur} 
                         onChange={handleChange} 
                         value={form.email} 
                         required
                    />

                    <input 
                         type="text" 
                         name="subject" 
                         placeholder="Subject" 
                         onBlur={handleBlur} 
                         onChange={handleChange} 
                         value={form.subject} 
                         required
                    />

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

                    <input type="submit" value="Send" />
               </form>
          </div>
     )
}
