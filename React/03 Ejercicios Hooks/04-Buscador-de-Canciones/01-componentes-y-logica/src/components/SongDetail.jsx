import React from 'react'
import { SongArtist } from './SongArtist'
import { SongLyric } from './SongLyric'

export const SongDetail = ({search, lyric, bio}) => {
     return (
          <div>
               <h2>Details</h2>
               <SongArtist />
               <SongLyric />
          </div>
     )
}