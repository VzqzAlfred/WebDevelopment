import React, { useState, useEffect } from 'react';
import { SongForm } from './SongForm';
import { SongDetail } from './SongDetail';
import { Loader } from './Loader';
import {helpHttp} from '../helpers/helpHttp';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import { Error404 } from '../Pages/Error404';
import SongTable from './SongTable';
import SongPage from '../Pages/SongPage';

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

export const SongSearch = () => {
     const [search, setSearch] = useState(null);
     const [lyric, setLyric] = useState(null);
     const [bio, setBio] = useState(null);
     const [loading, setLoading] = useState(false);
     const [mySongs, setMySongs] = useState(mySongsInit)

     useEffect(() => {
          if (search === null) return;

          const fetchData = async () => {
               const {artist, song} = search;

               let artistUrl = `theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
               let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

               console.log(artistUrl);
               console.log(songUrl);

               setLoading(true);
               const [artistRes, songRes] = await Promise.all([
                    helpHttp().get(artistUrl), 
                    helpHttp().get(songUrl)
               ]);

               console.log(artistRes);
               console.log(songRes);
               
               setBio(artistRes);
               setLyric(songRes);
               setLoading(false);
          }

          fetchData();

          localStorage.setItem("MySongs", JSON.stringify(mySongs));
     }, [search, mySongs]);

     const handleSearch = (data) => {
          console.log(data);
          setSearch(data);
     }

     const handleSaveSong = () => {
          alert("Saving song in favorites");
          let currentSong = {
               search,
               lyric,
               bio
          }

          setMySongs((mySongs) => [...mySongs, currentSong]);
          setSearch(null);
     }

     const handleDeleteSong = (id) => {
          let isDelete = window.confirm(`Estás seguro que quieres eliminar la canción con el id ${id}`);

          if (isDelete) {
               let songs = mySongs.filter((el, index) => index !== id);

               setMySongs(songs);
               localStorage.setItem("MySongs", JSON.stringify(songs));
          }

     }

     return (
          <>
               <HashRouter basename="songs">
                    <header>
                         <h2>Song Search</h2>
                         <Link to="/">Home</Link>
                    </header>
                    {loading && <Loader />}
                    <article className="grid-1-2">
                         <Switch>
                               <Route exact path="/">
                                   
                                   <SongForm handleSearch={handleSearch} handleSaveSong={handleSaveSong}/>

                                   <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong} />         

                                   {search && !loading && (
                                        <SongDetail search={search} lyric={lyric} bio={bio} />
                                   )}
                               </Route>
                               <Route exact path="/:id" children={<SongPage mySongs={mySongs} />} />
                               <Route path="*" children={<Error404 />}>

                               </Route>
                         </Switch>
                    </article>
               </HashRouter>
          </>
     )
}
