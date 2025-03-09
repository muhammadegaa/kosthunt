"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { kosanData } from "@/lib/data"
import { ArrowLeft, Check, X } from "lucide-react"
import PanoramaViewer from "@/components/panorama-viewer"
import ImageGallery from "@/components/image-gallery"
import { useToast } from "@/hooks/use-toast"

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()

  // Find the selected room
  const room = kosanData.rooms.find((r) => r.id === params.id)

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kamar tidak ditemukan</h1>
          <Link href="/kosan/kosan-1">
            <Button className="bg-[#FF5A5F] hover:bg-[#FF5A5F]/90">Kembali ke Pilihan Kamar</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleContinue = () => {
    router.push(`/payment/${params.id}`)
  }

  return (
    <div className="min-h-screen pb-20 bg-white">
      <div className="sticky top-0 z-30 bg-white shadow-sm p-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center">
            <Link href="/kosan/kosan-1" className="mr-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-[#222222]">Kamar {room.number}</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="rounded-xl overflow-hidden mb-6">
              <ImageGallery images={room.images} />
            </div>

            {room.momentoId && (
              <div className="mb-6">
                <PanoramaViewer momentoId={room.momentoId} roomNumber={room.number} />
              </div>
            )}
          </div>

          <div>
            <div className="p-6 mb-6 border-b border-[#EBEBEB]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#222222]">Kamar {room.number}</h2>
                  <p className="text-[#717171]">
                    Lantai {room.floor} • {room.size}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#717171]">Harga per bulan</p>
                  <p className="text-3xl font-bold text-[#FF5A5F]">Rp {room.price.toLocaleString("id-ID")}</p>
                </div>
              </div>
            </div>

            <div className="p-6 mb-6 border-b border-[#EBEBEB]">
              <h3 className="font-bold text-lg mb-3 text-[#222222]">Fitur Kamar</h3>
              <div className="grid grid-cols-2 gap-y-3">
                <div className="flex items-center">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${room.features.hasWindow ? "bg-[#00A699]/10" : "bg-[#FF5A5F]/10"}`}
                  >
                    {room.features.hasWindow ? (
                      <Check className="h-5 w-5 text-[#00A699]" />
                    ) : (
                      <X className="h-5 w-5 text-[#FF5A5F]" />
                    )}
                  </div>
                  <span className="font-medium">Jendela</span>
                </div>
                <div className="flex items-center">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${room.features.hasAC ? "bg-[#00A699]/10" : "bg-[#FF5A5F]/10"}`}
                  >
                    {room.features.hasAC ? (
                      <Check className="h-5 w-5 text-[#00A699]" />
                    ) : (
                      <X className="h-5 w-5 text-[#FF5A5F]" />
                    )}
                  </div>
                  <span className="font-medium">AC</span>
                </div>
                <div className="flex items-center">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${room.features.hasPrivateBathroom ? "bg-[#00A699]/10" : "bg-[#FF5A5F]/10"}`}
                  >
                    {room.features.hasPrivateBathroom ? (
                      <Check className="h-5 w-5 text-[#00A699]" />
                    ) : (
                      <X className="h-5 w-5 text-[#FF5A5F]" />
                    )}
                  </div>
                  <span className="font-medium">Kamar Mandi Dalam</span>
                </div>
                <div className="flex items-center">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${room.features.hasFurniture ? "bg-[#00A699]/10" : "bg-[#FF5A5F]/10"}`}
                  >
                    {room.features.hasFurniture ? (
                      <Check className="h-5 w-5 text-[#00A699]" />
                    ) : (
                      <X className="h-5 w-5 text-[#FF5A5F]" />
                    )}
                  </div>
                  <span className="font-medium">Furnitur</span>
                </div>
              </div>
            </div>

            <div className="p-6 mb-6 border-b border-[#EBEBEB]">
              <h3 className="font-bold text-lg mb-3 text-[#222222]">Fasilitas Kosan</h3>
              <div className="grid grid-cols-2 gap-3">
                {kosanData.facilities.map((facility, index) => {
                  const Icon = facility.icon
                  return (
                    <div key={index} className="flex items-center">
                      <div className="h-8 w-8 rounded-full flex items-center justify-center mr-3 bg-[#F7F7F7]">
                        <Icon className="h-4 w-4 text-[#222222]" />
                      </div>
                      <span className="font-medium">{facility.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="p-6">
              <Button
                className="w-full py-6 text-base font-medium rounded-xl transition-all duration-300 bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white"
                onClick={handleContinue}
              >
                Lanjut ke Pembayaran
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

