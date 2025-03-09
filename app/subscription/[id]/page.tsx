import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for subscription options
const subscriptionOptions = [
  {
    id: "3-months",
    duration: "3 Bulan",
    price: 7200000,
    discount: 5,
    features: ["Semua fasilitas kosan", "Pembersihan kamar 1x seminggu", "Akses ke ruang komunal"],
  },
  {
    id: "6-months",
    duration: "6 Bulan",
    price: 13800000,
    discount: 8,
    features: [
      "Semua fasilitas kosan",
      "Pembersihan kamar 2x seminggu",
      "Akses ke ruang komunal",
      "Laundry 5kg per bulan",
    ],
  },
  {
    id: "12-months",
    duration: "1 Tahun",
    price: 26000000,
    discount: 12,
    features: [
      "Semua fasilitas kosan",
      "Pembersihan kamar 2x seminggu",
      "Akses ke ruang komunal",
      "Laundry 10kg per bulan",
      "Voucher makan Rp 500.000",
    ],
  },
]

// Mock data for payment methods
const paymentMethods = [
  { id: "va", name: "Virtual Account" },
  { id: "ovo", name: "OVO" },
  { id: "dana", name: "Dana" },
  { id: "gopay", name: "GoPay" },
  { id: "bca", name: "Transfer BCA" },
]

export default function SubscriptionPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen pb-20">
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 p-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center">
            <Link href={`/room/${params.id}`} className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-semibold">Pilih Paket Langganan</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {subscriptionOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-lg shadow-md p-6 border-2 border-transparent hover:border-primary transition-colors"
            >
              <h2 className="text-xl font-bold mb-2">{option.duration}</h2>
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-bold text-primary">Rp {option.price.toLocaleString("id-ID")}</span>
                <span className="ml-2 text-sm text-green-600">(Diskon {option.discount}%)</span>
              </div>

              <ul className="mb-6 space-y-2">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full">
                Pilih Paket
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Metode Pembayaran</h2>

          <div className="mb-6">
            <label htmlFor="payment-method" className="block text-sm font-medium mb-2">
              Pilih Pembayaran
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih metode pembayaran" />
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

          <Button className="w-full">Bayar Sekarang</Button>
        </div>
      </div>
    </div>
  )
}

