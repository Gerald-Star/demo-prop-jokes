import React from 'react'

export default function joke(props) {
    console.log(props)

  return (
      <div>
          

          {/* this works as normal props */}
          <h3>{props.setup}</h3>
          <p>{props.punchline}</p>
          <hr />
    </div>
  )
}
