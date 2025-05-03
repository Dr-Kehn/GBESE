'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import TopNavbar from '@/components/layout/TopNavbar'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function AccountProfile() {
  const [username, setUsername] = useState('@Salemonah')
  const [isEditingUsername, setIsEditingUsername] = useState(false)
  const [maritalStatus, setMaritalStatus] = useState('Not set')
  const [isEditingMarital, setIsEditingMarital] = useState(false)
  const [showDeletePrompt, setShowDeletePrompt] = useState(false)
  const [password, setPassword] = useState('')
  const [pin, setPin] = useState('')

  const handleCopy = () => {
    navigator.clipboard.writeText('123456789')
    toast.success('Copied successfully!')
  }

  const handleAccountDeletion = () => {
    if (password === 'yourPassword' && pin === '1234') {
      toast.success('Account deleted successfully')
      // Implement deletion logic here
    } else {
      toast.error('Incorrect password or pin', {
        description: 'Please check your password and transaction pin and try again.',
      })
    }
  }

  const maritalOptions = ['Not set', 'Single', 'Married', 'Divorced', 'Widowed']

  return (
    <div className="mx-auto p-4 space-y-6 w-full">
      <TopNavbar />
        <div className="">
            <div className="w-full max-w-xl mt-6 mb-4 text-sm text-gray-600">
                <Link
                    href="/account"
                    className="flex items-center gap-1 hover:text-blue-600 transition"
                >
                    <ChevronLeft size={16} />
                    Back
                </Link>
            </div>  
            <div>
                <h2 className="text-center font-bold text-lg">Profile</h2>
            </div>
        </div>

      {/* Account Details */}
      <div className="border rounded-xl p-4 space-y-2">
        <h3 className="font-bold">Account Details</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/account-image.png" alt="Profile" width={48} height={48} className="rounded-full" />
            {isEditingUsername ? (
              <Input value={username} onChange={e => setUsername(e.target.value)} />
            ) : (
              <span className="font-medium">{username}</span>
            )}
          </div>
          <Button variant="outline" onClick={() => setIsEditingUsername(!isEditingUsername)} className="rounded-full border-blue-600">
            Edit
            <Image src="/edit.svg" alt="edit" width={16} height={16} />
          </Button>
        </div>
      </div>

      {/* Account Name */}
      <div className="space-y-1">
        <h4 className="font-bold">Account Name</h4>
        <Input disabled value="Salem Onah Chidiebere" />
      </div>

      {/* Account Number */}
      <div className="space-y-1 relative">
        <h4 className="font-bold">Your Account Number</h4>
        <Input disabled value="123456789" />
        <button
          onClick={handleCopy}
          className="absolute right-2 top-[38px]"
        >
          <Image src="/copy.svg" alt="copy" width={16} height={16} />
        </button>
      </div>

      {/* Personal Information */}
      <div className="space-y-3">
        <h4 className="font-bold">Personal Information</h4>

        <Input disabled value="+2349160833235" />
        <Input disabled value="Prinzdivi@gmail.com" />
        <Input disabled value="7, Demola street. Apapa, Lagos State" />
      </div>

      {/* Marital Status */}
      <div className="flex justify-between items-center border rounded-xl p-3">
        <div>
          <p className="font-bold">Marital Status:</p>
          <p>{maritalStatus}</p>
        </div>
        <div>
          {isEditingMarital ? (
            <select
              className="border rounded p-1"
              value={maritalStatus}
              onChange={(e) => {
                setMaritalStatus(e.target.value)
                setIsEditingMarital(false)
              }}
            >
              {maritalOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          ) : (
            <Button variant="outline" onClick={() => setIsEditingMarital(true)} className="rounded-full border-blue-600">
              Edit
              <Image src="/edit.svg" alt="edit" width={16} height={16} />
            </Button>
          )}
        </div>
      </div>

      {/* Delete Account */}
      <div className="flex justify-between border rounded-xl p-3 space-y-2">
        <div>
            <p className="text-red-600 font-bold">Delete Account:</p>
            <p className="text-sm font-bold">Deactivate your gbese account</p>
        </div>
        <div>
        {showDeletePrompt ? (
          <div className="space-y-2">
            <Input
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Input
              placeholder="Enter transaction pin"
              type="password"
              value={pin}
              onChange={e => setPin(e.target.value)}
            />
            <Button
              variant="outline"
              className="border-red-600 text-red-600 rounded-full"
              onClick={handleAccountDeletion}
            >
              Confirm
            </Button>
          </div>
        ) : (
          <Button
            variant="outline"
            className="border-red-600 text-red-600 rounded-full"
            onClick={() => setShowDeletePrompt(true)}
          >
            Confirm
          </Button>
        )}
        </div>
      </div>
    </div>
  )
}
