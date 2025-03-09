"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { kosanData, addOns, paymentMethods, subscriptionDurations } from "@/lib/data"
import { ArrowLeft, CreditCard } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AddOnSelector from "@/components/add-on-selector"
import { useToast } from "@/hooks/use-toast"

export default function PaymentPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()

  // Find the selected room
  const room = kosanData.rooms.find((r) => r.id === params.id)

  const [duration, setDuration] = useState(subscriptionDurations[0].id)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [addOnSelections, setAddOnSelections] = useState<Record<string, { selected: boolean; optionId?: string }>>({})
  const [isProcessing, setIsProcessing] = useState(false)

  // Calculate total price
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (!room) return

    // Get the selected duration
    const selectedDuration = subscriptionDurations.find((d) => d.id === duration)
    if (!selectedDuration) return

    // Calculate base price with duration discount
    const basePrice = room.price
    let durationMultiplier = 1

    if (duration === "3-months") durationMultiplier = 3
    else if (duration === "6-months") durationMultiplier = 6
    else if (duration === "12-months") durationMultiplier = 12

    let price = basePrice * durationMultiplier

    // Apply discount
    price = price * (1 - selectedDuration.discount / 100)

    // Add add-ons
    Object.entries(addOnSelections).forEach(([addOnId, selection]) => {
      if (selection.selected) {
        const addOn = addOns.find((a) => a.id === addOnId)
        if (addOn) {
          if (addOn.options && selection.optionId) {
            const option = addOn.options.find((o) => o.id === selection.optionId)
            if (option) {
              price += option.price
            }
          } else {
            price += addOn.price
          }
        }
      }
    })

    setTotalPrice(price)
  }, [room, duration, addOnSelections])

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kamar tidak ditemukan</h1>
          <Link href="/kosan/kosan-1">
            <Button>Kembali ke Pilihan Kamar</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handlePayment = () => {
    if (!paymentMethod) {
      toast({
        title: "Metode Pembayaran",
        description: "Silakan pilih metode pembayaran terlebih dahulu.",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)

      toast({
        title: "Pembayaran Berhasil",
        description: "Selamat! Pembayaran Anda telah berhasil diproses.",
        variant: "default",
      })

      // Redirect to success page
      router.push("/payment/success")
    }, 2000)
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 p-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center">
            <Link href={`/room/${params.id}`} className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-semibold">Pembayaran</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h2 className="text-lg font-semibold mb-4">Durasi Sewa</h2>

              <RadioGroup defaultValue={duration} onValueChange={setDuration} className="space-y-3">
                {subscriptionDurations.map((option) => (
                  <div key={option.id} className="flex items-center justify-between space-x-2 p-3 border rounded-md">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id} className="font-medium">
                        {option.name}
                      </Label>
                    </div>
                    {option.discount > 0 && <span className="text-sm text-green-600">Diskon {option.discount}%</span>}
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h2 className="text-lg font-semibold mb-4">Layanan Tambahan</h2>
              <AddOnSelector addOns={addOns} onSelectionChange={setAddOnSelections} />
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h2 className="text-lg font-semibold mb-4">Metode Pembayaran</h2>

              <Select onValueChange={setPaymentMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Pembayaran" />
                </SelectTrigger>
                <SelectContent>
                  {paymentMethods.map((method) => (
                    <SelectItem key={method.id} value={method.id}>
                      {method.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Ringkasan Pembayaran</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Kamar {room.number}</span>
                  <span>Rp {room.price.toLocaleString("id-ID")}/bulan</span>
                </div>

                <div className="flex justify-between">
                  <span>Durasi</span>
                  <span>{subscriptionDurations.find((d) => d.id === duration)?.name}</span>
                </div>

                {Object.entries(addOnSelections).map(([addOnId, selection]) => {
                  if (!selection.selected) return null

                  const addOn = addOns.find((a) => a.id === addOnId)
                  if (!addOn) return null

                  let price = addOn.price
                  let name = addOn.name

                  if (addOn.options && selection.optionId) {
                    const option = addOn.options.find((o) => o.id === selection.optionId)
                    if (option) {
                      price = option.price
                      name = `${addOn.name} (${option.name})`
                    }
                  }

                  return (
                    <div key={addOnId} className="flex justify-between">
                      <span>{name}</span>
                      <span>Rp {price.toLocaleString("id-ID")}</span>
                    </div>
                  )
                })}

                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-primary">Rp {totalPrice.toLocaleString("id-ID")}</span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full flex items-center justify-center"
                onClick={handlePayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>Memproses...</>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Bayar Sekarang
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

