import Link from "next/link"
import Image from "next/image"
import { kosanData } from "@/lib/data"
import { ArrowLeft, MapPin, View } from "lucide-react"
import { Button } from "@/components/ui/button"
import RoomSelection from "@/components/room-selection"

export default function KosanDetailPage({ params }: { params: { id: string } }) {
  // Count rooms with 360° views
  const roomsWith360 = kosanData.rooms.filter((room) => room.momentoId).length

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-30 bg-white shadow-sm p-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-[#222222]">{kosanData.name}</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-6">
        <div className="relative h-48 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image src="https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg" alt={kosanData.name} fill className="object-cover" />

          {roomsWith360 > 0 && (
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <View className="h-5 w-5 text-[#FF5A5F]" />
                <span className="font-medium text-[#222222]">{roomsWith360} kamar dengan tampilan 360°</span>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#222222]">{kosanData.name}</h2>

              <div className="flex items-center text-[#717171] mb-6">
                <MapPin className="h-5 w-5 mr-2 text-[#717171]" />
                <span>{kosanData.address}</span>
              </div>

              <div className="border-t border-[#EBEBEB] pt-6">
                <h3 className="font-bold text-lg mb-3 text-[#222222]">Deskripsi</h3>
                <p className="text-[#717171] mb-6 leading-relaxed">{kosanData.description}</p>
              </div>

              <div className="border-t border-[#EBEBEB] pt-6">
                <h3 className="font-bold text-lg mb-3 text-[#222222]">Fasilitas</h3>
                <div className="grid grid-cols-2 gap-y-4">
                  {kosanData.facilities.map((facility, index) => {
                    const Icon = facility.icon
                    return (
                      <div key={index} className="flex items-center">
                        <div className="h-8 w-8 rounded-full flex items-center justify-center mr-3 bg-[#F7F7F7]">
                          <Icon className="h-4 w-4 text-[#222222]" />
                        </div>
                        <span className="font-medium text-[#222222]">{facility.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 order-1 lg:order-2">
            <RoomSelection rooms={kosanData.rooms} />
          </div>
        </div>
      </div>
    </div>
  )
}

