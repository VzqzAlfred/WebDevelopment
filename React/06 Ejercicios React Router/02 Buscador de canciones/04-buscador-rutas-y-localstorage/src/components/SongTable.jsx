import SongTableRow from "./SongTableRow"

const SongTable = ({mySongs, handleDeleteSong}) => {
     return (
          <div>
               <h3>My favorites songs</h3>
               <table>
                    <thead>
                         <tr>
                              <th colSpan="2">Artist</th>
                              <th>Song</th>
                              <th>Actions</th>
                         </tr>
                    </thead>
                    <tbody>
                              {
                                   mySongs.length > 0 
                                        ? mySongs.map((el , index) => <SongTableRow 
                                                                                                         key={index} 
                                                                                                         el={el} 
                                                                                                         id={index} 
                                                                                                         handleDeleteSong={handleDeleteSong} />) 
                                        : <tr>
                                             <td colSpan="4">No favorites songs</td>
                                        </tr>
                              }
                    </tbody>
               </table>
          </div>
     )
}

export default SongTable