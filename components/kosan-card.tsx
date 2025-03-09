import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube } from "lucide-react"

interface KosanCardProps {
  id: string
  name: string
  price: number
  location: string
  image: string
}

export default function KosanCard({ id, name, price, location, image }: KosanCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute bottom-3 right-3">
          <Button size="sm" variant="secondary" className="flex items-center gap-1">
            <Cube className="h-4 w-4" />
            <span>Lihat 360°</span>
          </Button>
        </div>
      </div>

      <div className="p-4">
        <Link href={`/room/${id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">{name}</h3>
        </Link>
        <p className="text-gray-500 text-sm mb-2">{location}</p>
        <p className="font-bold text-primary">Rp {price.toLocaleString("id-ID")}/bulan</p>
      </div>
    </div>
  )
}

