import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold mb-2">Pembayaran Berhasil!</h1>
        <p className="text-gray-600 mb-6">
          Terima kasih telah memesan kamar di KostHunt. Detail pemesanan telah dikirim ke email Anda.
        </p>

        <div className="bg-gray-50 rounded-md p-4 mb-6">
          <h2 className="font-semibold mb-2">Informasi Penting</h2>
          <ul className="text-sm text-gray-600 text-left space-y-2">
            <li>• Check-in dapat dilakukan mulai tanggal 1 bulan depan</li>
            <li>• Silakan hubungi pengelola kosan untuk informasi lebih lanjut</li>
            <li>• Tunjukkan bukti pembayaran saat check-in</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link href="/">
            <Button className="w-full">Kembali ke Beranda</Button>
          </Link>
          <Link href="/bookings">
            <Button variant="outline" className="w-full">
              Lihat Pesanan Saya
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

