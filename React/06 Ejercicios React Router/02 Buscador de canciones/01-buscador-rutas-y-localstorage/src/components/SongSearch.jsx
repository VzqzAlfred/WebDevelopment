import React, { useState, useEffect } from 'react';
import { SongForm } from './SongForm';
import { SongDetail } from './SongDetail';
import { Loader } from './Loader';
import {helpHttp} from '../helpers/helpHttp';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import { Error404 } from '../Pages/Error404';

export const SongSearch = () => {
     const [search, setSearch] = useState(null);
     const [lyric, setLyric] = useState(null);
     const [bio, setBio] = useState(null);
     const [loading, setLoading] = useState(false);

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
     }, [search]);

     const handleSearch = (data) => {
          console.log(data);
          setSearch(data);
     }

     return (
          <>
               <HashRouter basename="songs">
                    <header>
                         <h2>Song Search</h2>
                         <Link to="/">Home</Link>
                    </header>
                    {loading && <Loader />}
                    <article className="grid-1-3">
                         <Switch>
                               <Route exact path="/">
                                   
                                   <SongForm handleSearch={handleSearch} />

                                   <h2>Song's Table</h2>           

                                   {search && !loading && (
                                        <SongDetail search={search} lyric={lyric} bio={bio} />
                                   )}
                               </Route>
                               <Route exact path="/songs/:id">
                                        <h2>Song's page</h2>
                               </Route>
                               <Route path="*" children={<Error404 />}>

                               </Route>
                         </Switch>
                    </article>
               </HashRouter>
          </>
     )
}
