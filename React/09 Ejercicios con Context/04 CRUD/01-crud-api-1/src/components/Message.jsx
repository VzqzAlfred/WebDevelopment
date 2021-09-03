import React from 'react'

export const Message = ({msg, bgColor}) => {
     let styles = {
          padding: "1rem",
          marginBottom: "1rem",
          textAlign: "center",
          color: "#DDD",
          backgroundColor: bgColor,
          fontWeight: "bold"
     }
     return (
          <div style={styles}>
               <p>{msg}</p>
          </div>
     )
}
