import React from 'react'

const Loader = ({loading}) => {

  //const loading = true
  
  //return loading ? (<h2>Loading...</h2>) : null

  /* return(
    <h2>{loading && 'Loading...'}</h2>
  ) */
  

  return loading && (
    <div class="spinner-border" role="status"></div>
  )
  
}

export default Loader