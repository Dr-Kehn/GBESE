'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

// Country-State-Zip data
const geoData = {
  Nigeria: {
    Lagos: '100001',
    Abuja: '900001',
    Kano: '700001',
    Rivers: '500001',
  },
  Ghana: {
    Accra: '00233',
    Kumasi: '00234',
  },
  Kenya: {
    Nairobi: '00100',
    Mombasa: '80100',
  }
} as const

type Country = keyof typeof geoData
type State = keyof (typeof geoData)[Country]

export default function Tier3Upgrade() {
  const router = useRouter()

  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState<State | ''>('')
  const [country, setCountry] = useState<Country>('Nigeria')
  const [zip, setZip] = useState('')
  const [error, setError] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)

  const validateZip = () => {
    if (state && country) {
      return zip === geoData[country][state]
    }
    return true
  }

  const handleUpgrade = () => {
    if (!street || !city || !state || !country || !zip) {
      setError('All fields are required')
      return
    }

    if (!validateZip()) {
      setError('Invalid Zip code for selected state')
      return
    }

    setError('')
    setDialogOpen(true)

    setTimeout(() => {
      setDialogOpen(false)
      router.push('/lenders/account/security/kyc')
    }, 2500)
  }

  return (
    <>
      <main className="flex flex-col items-center px-4 py-6 md:py-12">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow p-6 md:p-10 mt-6 md:mt-12">
          <Link
            href="/lenders/account/security/kyc"
            className="flex items-center text-sm text-muted-foreground mb-6"
          >
            <Image
              src="/arrow-left.svg"
              alt="Back"
              width={20}
              height={20}
              className="mr-2"
            />
            Back
          </Link>

          <h1 className="text-2xl font-semibold text-center mb-4">Tier 3</h1>
          <p className="text-center text-muted-foreground mb-6">
            Confirm your house address
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-sm block mb-1 text-muted-foreground">Street Name</label>
              <Input
                placeholder="Street Name"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm block mb-1 text-muted-foreground">City</label>
              <Input
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border-blue-600"
              />
            </div>

            <div>
              <label className="text-sm block mb-1 text-muted-foreground">State</label>
              <div className="w-full">
              <Select onValueChange={(value) => setState(value as State)}>
                <SelectTrigger className="w-full border-blue-600">
                  <SelectValue placeholder="Enter State" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(geoData[country]).map((stateName) => (
                    <SelectItem key={stateName} value={stateName}>
                      {stateName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              </div>
            </div>

            <div>
              <label className="text-sm block mb-1 text-muted-foreground">Country</label>
              <div className="w-full">
              <Select value={country} onValueChange={(val: Country) => {
                setCountry(val)
                setState('') // reset state when country changes
              }}>
                <SelectTrigger className="w-full border-blue-600">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(geoData).map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              </div>
            </div>

            <div>
              <label className="text-sm block mb-1 text-muted-foreground">Zip code</label>
              <Input
                placeholder="Enter Zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="border-blue-600"
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button onClick={handleUpgrade} className="w-full mt-4 bg-[#0D60D8] cursor-pointer hover:bg-blue-600">
              Upgrade Account
            </Button>
          </div>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">
                Account verification in progress,<br />
                you will receive a feedback within 24hrs
              </DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </main>
    </>
  )
}
