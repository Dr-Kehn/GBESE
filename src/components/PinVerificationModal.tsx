'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface PinVerificationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (pin: string) => void
  debtorName: string
  amount: number
  error?: string
  isLoading: boolean
}

export default function PinVerificationModal({
  isOpen,
  onClose,
  onSubmit,
  debtorName,
  amount,
  error,
  isLoading,
}: PinVerificationModalProps) {
  const [pin, setPin] = useState('')

  const handleConfirm = () => {
    onSubmit(pin)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enter Transaction Pin</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground mb-2">
          Confirm payment of <strong>₦{amount.toLocaleString()}</strong> to <strong>{debtorName}</strong>
        </p>
        <Input
          type="password"
          placeholder="Enter your 4-digit PIN"
          maxLength={4}
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={isLoading || pin.length !== 4} onClick={handleConfirm}>
            {isLoading ? 'Processing...' : 'Confirm'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
