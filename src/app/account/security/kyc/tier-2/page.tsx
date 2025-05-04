'use client'

import TopNavbar from '@/components/layout/TopNavbar'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function Tier2Page() {
  const [nin, setNin] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const validateAndUpgrade = () => {
    if (!/^\d{11}$/.test(nin)) {
      setError('NIN must be 11 digits')
      return
    }

    // Simulate backend validation
    const profile = { firstName: 'John', lastName: 'Doe' }
    const ninData = { firstName: 'John', lastName: 'Doe' } // Normally from backend fetch

    const isValid = profile.firstName === ninData.firstName && profile.lastName === ninData.lastName

    if (isValid) {
      setIsDialogOpen(true)
      setTimeout(() => {
        router.push('/account/security/kyc')
      }, 2000)
    } else {
      setError('NIN does not match account profile')
    }
  }

  return (
    <>
      <TopNavbar />
      <main className="flex flex-col items-center px-4 py-6 md:py-12">
        <div className="w-full max-w-xl bg-white shadow rounded-xl p-6 md:p-10 mt-6 md:mt-12">
          <Link href="/account/security/kyc" className="flex items-center text-sm text-muted-foreground mb-6">
            <Image src="/arrow-left.svg" alt="Back" width={20} height={20} className="mr-2" />
            Back
          </Link>

          <h1 className="text-2xl font-semibold text-center mb-4">Tier 2</h1>
          <p className="text-center text-muted-foreground mb-6">You have a general limit increase from tier 1</p>

          <div className="space-y-4">
            <label className="text-sm font-medium text-muted-foreground block">NIN</label>
            <Input
              type="text"
              placeholder="Enter NIN"
              value={nin}
              maxLength={11}
              onChange={(e) => {
                setError('')
                setNin(e.target.value)
              }}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button onClick={validateAndUpgrade} className="w-full mt-4 bg-[#0D60D8] cursor-pointer hover:bg-blue-600">
              Upgrade Account
            </Button>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">Account upgraded successfully</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </main>
    </>
  )
}
