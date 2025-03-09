"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, LogOut } from "lucide-react"

// Mock user data
const userData = {
  name: "Budi Santoso",
  email: "budi@example.com",
  phone: "081234567890",
  location: "Jakarta",
}

// Mock rental data
const rentalData = {
  roomNumber: "201",
  startDate: "1 Januari 2025",
  endDate: "31 Desember 2025",
  monthlyPrice: 2600000,
  status: "Aktif",
}

export default function ProfilePage() {
  const [user, setUser] = useState(userData)

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 p-4">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-lg font-semibold">Profil Saya</h1>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <User className="h-12 w-12 text-gray-500" />
              </div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input id="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
              </div>

              <Button className="w-full">Simpan Perubahan</Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Sewa Aktif</h2>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Kamar</span>
                <span className="font-medium">#{rentalData.roomNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Periode</span>
                <span className="font-medium">
                  {rentalData.startDate} - {rentalData.endDate}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Harga Bulanan</span>
                <span className="font-medium">Rp {rentalData.monthlyPrice.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="font-medium text-green-600">{rentalData.status}</span>
              </div>
            </div>
          </div>

          <Button variant="destructive" className="w-full flex items-center justify-center">
            <LogOut className="h-4 w-4 mr-2" />
            Keluar
          </Button>
        </div>
      </div>
    </div>
  )
}

