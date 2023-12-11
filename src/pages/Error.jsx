import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError()
  return (
    <>
    <div>OOPS! Some Error has occured</div>
    <div>{error.statusText || error.message}</div>
    </>
  )
}

export default Error