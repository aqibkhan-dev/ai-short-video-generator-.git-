import React from 'react'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'

function EmptyState() {
  return (
    <div className='p-5 py-24 flex flex-col items-center mt-10 border-2 border-dotted'>
      <h2>You don't any short video created</h2>
      <Link href={'/dashboard/create-new'}>
      <Button>Create New Short Video</Button> 
      </Link>
    </div>
  )
}

export default EmptyState
