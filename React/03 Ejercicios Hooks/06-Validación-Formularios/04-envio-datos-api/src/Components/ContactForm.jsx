import React from 'react';
import { useForm } from '../Hooks/useForm';
import { Loader } from './Loader';
import { Message } from './Message';

const initialForm = {
      name: "",
      email: "",
      subject: "",
      comments: ""
};

const validationsForm = (form) => {
     let errors = {};
     let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
     let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
     let regexComments = /^.{1,255}$/;

     if (!form.name.trim()) {
          errors.name = "The field 'Name' is required";
     } else if (!regexName.test(form.name.trim())) {
          errors.name = "The field 'Name' just accept lyrics and spaces in white";
     }

     if (!form.email.trim()) {
          errors.email = "The field 'Email' is required";
     } else if (!regexEmail.test(form.email.trim())) {
          errors.email = "The field 'email' is incorrect";
     }

     if (!form.subject.trim()) {
          errors.subject = "The field 'Subject' is required";
     } 

     if (!form.comments.trim()) {
          errors.comments = "The field 'Comments' is required";
     }else if (!regexComments.test(form.comments.trim())) {
          errors.comments = "The field 'comments' hasn't been more of 255 characters";
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

               {loading && <Loader />}
               {response && <Message msg="The datas has been sent" bgColor="#198754" />}
          </div>
     )
}
