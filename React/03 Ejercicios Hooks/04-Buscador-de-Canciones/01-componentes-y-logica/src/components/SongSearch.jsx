import React, { useState, useEffect } from 'react';
import { SongForm } from './SongForm';
import { SongDetail } from './SongDetail';
import { Loader } from './Loader';

export const SongSearch = () => {
     const [search, setSearch] = useState(null);
     const [lyric, setLyric] = useState(null);
     const [bio, setBio] = useState(null);
     const [loading, setLoading] = useState(false);

     const handleSearch = (data) => {
          console.log(data);
     }

     return (
          <div>
               <h2>Song Search</h2>
               {loading && <Loader />}
               <SongForm handleSearch={handleSearch} />
               <SongDetail search={search} lyric={lyric} bio={bio} />
          </div>
     )
}
