import { useHistory } from "react-router-dom";

const SongTableRow = ({ el, id, handleDeleteSong }) => {
     
     const {bio, search} = el;
     let avatar = bio.artists[0].strArtistThumb;
     let avatarStyles = {
          with: "auto",
          height: "40"
     }

     let history = useHistory();

     return (
          <tr>
               <td>
                    <img style={avatarStyles} src={avatar} alt={search.artist} />
               </td>
               <td>{search.artist}</td>
               <td>{search.song}</td>
               <td>
                    <button onClick={() => history.push(`/${id}`)}>See</button>
                    <button onClick={() => handleDeleteSong(id)}>Delete</button>
               </td>
          </tr>
     );
}

export default SongTableRow
