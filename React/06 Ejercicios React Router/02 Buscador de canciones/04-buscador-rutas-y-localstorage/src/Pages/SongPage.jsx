import { useParams } from "react-router-dom"
import { SongDetail } from "../components/SongDetail"

const SongPage = ({mySongs}) => {
     let {id} = useParams();
     console.log(id, mySongs, mySongs[id]);
     
     let currentSong = mySongs[id];
     let {search, lyric, bio } = currentSong

     return (
          <SongDetail search={search} lyric={lyric} bio={bio} />
     )
}

export default SongPage
