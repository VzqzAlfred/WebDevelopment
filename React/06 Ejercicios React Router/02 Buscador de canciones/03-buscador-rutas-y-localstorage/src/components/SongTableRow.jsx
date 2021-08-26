import { useHistory } from "react-router-dom";

const SongTableRow = ({ el, id, handleDeleteSong }) => {
     console.log(el);

     let history = useHistory();

     return (
          <tr>
               <td><img src="https://placeimg.com/40/40/animals" alt="Animal" /></td>
               <td>Name of the artist</td>
               <td>
                    <button onClick={() => history.push(`/songs/${id}`)}>See</button>
                    <button onClick={() => handleDeleteSong(id)}>Delete</button>
               </td>
          </tr>
     );
}

export default SongTableRow
