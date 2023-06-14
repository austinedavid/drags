import Member from '@/component/Member'
import React, {Suspense} from 'react'




export default async function about() {
    
  return (
    <div>
        <p>hello world</p>
        <Suspense fallback={<div>loading ....</div>}>
        <Member/>
        </Suspense>
    </div>
  )
}

