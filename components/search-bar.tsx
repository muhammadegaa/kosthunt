"use client"

import { MapPin, Filter } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  const [priceRange, setPriceRange] = useState([2000000])

  return (
    <div className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 py-3 px-4 md:py-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPin className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary"
              placeholder="Cari kosan di lokasi Anda"
            />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-2 h-[42px] w-[42px]">
                <Filter className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Filter Pencarian</SheetTitle>
              </SheetHeader>

              <div className="py-4">
                <h3 className="font-medium mb-2">Lokasi</h3>
                <div className="space-y-2">
                  {["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Bali"].map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <Checkbox id={`location-${location}`} />
                      <label htmlFor={`location-${location}`} className="text-sm">
                        {location}
                      </label>
                    </div>
                  ))}
                </div>

                <h3 className="font-medium mt-6 mb-2">Rentang Harga</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[2000000]}
                    max={5000000}
                    step={100000}
                    onValueChange={(value) => setPriceRange(value)}
                  />
                  <div className="mt-2 text-sm">Rp {priceRange[0].toLocaleString("id-ID")} / bulan</div>
                </div>

                <h3 className="font-medium mt-6 mb-2">Fasilitas</h3>
                <div className="space-y-2">
                  {["WiFi", "AC", "Kamar Mandi Dalam", "Dapur", "Parkir Motor", "Laundry"].map((facility) => (
                    <div key={facility} className="flex items-center space-x-2">
                      <Checkbox id={`facility-${facility}`} />
                      <label htmlFor={`facility-${facility}`} className="text-sm">
                        {facility}
                      </label>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6">Terapkan Filter</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

