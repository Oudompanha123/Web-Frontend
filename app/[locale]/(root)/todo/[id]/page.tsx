import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

type Props = {
    params : {
        id : number
    }
}
function page({params}: Props) {
    console.log("Params Id: ", params.id)
  return (
    <> 
      <h1 className='fs-3'>Todo Params {params.id}</h1>
    </>
  )
}

export default page