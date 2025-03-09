"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { Room } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, View } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import PanoramaViewer from "@/components/panorama-viewer"

interface RoomSelectionProps {
  rooms: Room[]
}

export default function RoomSelection({ rooms }: RoomSelectionProps) {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)
  const [activeFloor, setActiveFloor] = useState<string>("1")
  const router = useRouter()
  const { toast } = useToast()

  // Group rooms by floor
  const roomsByFloor = rooms.reduce(
    (acc, room) => {
      const floor = room.floor
      if (!acc[floor]) {
        acc[floor] = []
      }
      acc[floor].push(room)
      return acc
    },
    {} as Record<number, Room[]>,
  )

  const floors = Object.keys(roomsByFloor).sort()

  const handleRoomClick = (room: Room) => {
    if (room.status === "unavailable") {
      toast({
        title: "Kamar Tidak Tersedia",
        description: "Maaf, kamar ini sudah terisi. Silakan pilih kamar lain.",
        variant: "destructive",
      })
      return
    }

    setSelectedRoom(room.id === selectedRoom ? null : room.id)
  }

  const handleContinue = () => {
    if (!selectedRoom) {
      toast({
        title: "Pilih Kamar",
        description: "Silakan pilih kamar terlebih dahulu untuk melanjutkan.",
        variant: "destructive",
      })
      return
    }

    router.push(`/room/${selectedRoom}`)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-6 text-[#222222]">Pilih Kamar</h2>

        {/* Airbnb-style centered tabs */}
        <div className="airbnb-tabs">
          {floors.map((floor) => (
            <div
              key={floor}
              className={`airbnb-tab ${activeFloor === floor ? "active" : ""}`}
              onClick={() => setActiveFloor(floor)}
            >
              Lantai {floor}
            </div>
          ))}
        </div>

        <div className="room-grid">
          {roomsByFloor[Number.parseInt(activeFloor)].map((room) => (
            <div
              key={room.id}
              className={`room-item ${room.status} ${selectedRoom === room.id ? "selected" : ""}`}
              onClick={() => handleRoomClick(room)}
            >
              <div className="flex flex-col items-center justify-center h-full p-3">
                <span className="text-lg font-bold text-[#222222]">{room.number}</span>
                <span className="text-xs text-[#717171]">{room.size}</span>
                {room.status === "available" ? (
                  <Badge className="mt-1 text-xs bg-[#00A699]/10 text-[#00A699] border-[#00A699]/20 hover:bg-[#00A699]/20">
                    Tersedia
                  </Badge>
                ) : (
                  <Badge variant="outline" className="mt-1 text-xs bg-gray-100 text-gray-500 border-gray-200">
                    Terisi
                  </Badge>
                )}

                {room.momentoId && room.status === "available" && (
                  <div className="absolute top-2 right-2">
                    <PanoramaViewer momentoId={room.momentoId} roomNumber={room.number} buttonStyle="icon" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#717171]">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-white border border-[#DDDDDD] rounded-full mr-1.5"></div>
            <span>Tersedia</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#F7F7F7] border border-[#DDDDDD] opacity-70 rounded-full mr-1.5"></div>
            <span>Terisi</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-white border-2 border-[#FF5A5F] rounded-full mr-1.5"></div>
            <span>Dipilih</span>
          </div>
          <div className="flex items-center">
            <div className="h-5 w-5 bg-white rounded-full flex items-center justify-center shadow-sm mr-1.5">
              <View className="h-3 w-3 text-[#FF5A5F]" />
            </div>
            <span>360° tersedia</span>
          </div>
        </div>
      </div>

      {selectedRoom && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-bold text-lg mb-4 text-[#222222]">Kamar Terpilih</h3>
          {rooms
            .filter((room) => room.id === selectedRoom)
            .map((room) => (
              <div key={room.id} className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-xl text-[#222222]">Kamar {room.number}</p>
                    {room.momentoId && (
                      <div className="inline-block">
                        <PanoramaViewer momentoId={room.momentoId} roomNumber={room.number} buttonStyle="inline" />
                      </div>
                    )}
                  </div>
                  <p className="text-[#717171] mb-1">
                    Lantai {room.floor} • {room.size}
                  </p>
                  <p className="font-bold text-xl text-[#FF5A5F]">Rp {room.price.toLocaleString("id-ID")}/bulan</p>
                </div>
                <div className="grid grid-cols-2 gap-y-1 gap-x-4">
                  <div className="flex items-center text-sm">
                    {room.features.hasWindow ? (
                      <Check className="h-4 w-4 text-[#00A699] mr-1.5" />
                    ) : (
                      <X className="h-4 w-4 text-[#FF5A5F] mr-1.5" />
                    )}
                    <span>Jendela</span>
                  </div>
                  <div className="flex items-center text-sm">
                    {room.features.hasAC ? (
                      <Check className="h-4 w-4 text-[#00A699] mr-1.5" />
                    ) : (
                      <X className="h-4 w-4 text-[#FF5A5F] mr-1.5" />
                    )}
                    <span>AC</span>
                  </div>
                  <div className="flex items-center text-sm">
                    {room.features.hasPrivateBathroom ? (
                      <Check className="h-4 w-4 text-[#00A699] mr-1.5" />
                    ) : (
                      <X className="h-4 w-4 text-[#FF5A5F] mr-1.5" />
                    )}
                    <span>Kamar Mandi Dalam</span>
                  </div>
                  <div className="flex items-center text-sm">
                    {room.features.hasFurniture ? (
                      <Check className="h-4 w-4 text-[#00A699] mr-1.5" />
                    ) : (
                      <X className="h-4 w-4 text-[#FF5A5F] mr-1.5" />
                    )}
                    <span>Furnitur</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      <Button
        className="w-full py-6 text-base font-medium rounded-xl transition-all duration-300 bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white"
        onClick={handleContinue}
        disabled={!selectedRoom}
      >
        Lihat Detail Kamar
      </Button>
    </div>
  )
}

