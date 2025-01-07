import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import Image from 'next/image'

function CustomLoding ({loading}) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <div className='flex flex-col items-center'>
            <Image src={'/progress.gif'} width={100} height={100} />
            <h2>Generating your video... Do not Refresh</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CustomLoding
