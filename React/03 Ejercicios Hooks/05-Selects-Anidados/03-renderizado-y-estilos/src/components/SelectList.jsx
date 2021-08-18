import React from 'react';
import {useFetch} from '../Hooks/useFetch';
import { Loader } from './Loader';
import {Message} from './Message'

export const SelectList = ({title, url, handleChange}) => {
     const {data, error, loading} = useFetch(url);
     // console.log(data, error, loading);

     if (!data) return null;
     if (error) {
          return <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />
     }
     let label = title.charAt(0).toUpperCase() + title.slice(1);
     let options = data.response[title];
     // console.log(options);

     let id = `select-${title}`
     
     return (
          < >
               <label htmlFor={id}>{label}</label>
               {loading && <Loader />}
               <select name={id} id={id} onChange={handleChange}>
                    <option value="">Elige un {title}</option>
                    {data && options.map(el => <option value={el} key={el}>{el}</option>)}
               </select>
          </>
     )
}
