'use client' // Error components must be Client Components

import { AlertOctagon } from 'lucide-react'
import { Button } from '~/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <AlertOctagon size={64} />
      <h1 className="text-xl p-3">Application Error</h1>
      <div className="text-md p-3 text-center">We have encountered a problem and cannot process this request</div>
      <Button onClick={() => reset()}>
        Try again
      </Button>
    </div>
  )
}