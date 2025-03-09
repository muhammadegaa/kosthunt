"use client"

import React from 'react';
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { kosanData } from "@/lib/data"
import { MapPin, Star, Users, Bell, Calendar, CreditCard, View as View360 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PanoramaViewer from "@/components/panorama-viewer"
import { motion } from "framer-motion"

// Mock user data
const userData = {
  name: "Budi",
  roomNumber: "201",
  dueDate: "1 April 2025",
  dueAmount: 2600000,
}

// Mock notifications
const notifications = [
  {
    id: "1",
    title: "Pembayaran Berhasil",
    description: "Pembayaran sewa bulan Maret telah berhasil",
    time: "2 hari yang lalu",
  },
  {
    id: "2",
    title: "Acara Komunitas",
    description: "BBQ Night akan diadakan pada tanggal 15 Maret",
    time: "3 hari yang lalu",
  },
]

// Mock upcoming events
const upcomingEvents = [
  {
    id: "1",
    title: "BBQ Night",
    date: "15 Maret 2025",
    time: "19:00 - 22:00",
  },
  {
    id: "2",
    title: "Movie Night",
    date: "20 Maret 2025",
    time: "20:00 - 23:00",
  },
]

export default function Home() {
  // Find a room with a momentoId for the 360° demo
  const roomWith360 = kosanData.rooms.find(room => room.momentoId)
  
  // Count rooms with 360° view
  const roomsWith360 = kosanData.rooms.filter(room => room.momentoId).length
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <motion.div 
          className="mb-8 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold">Selamat Datang, {userData.name}!</h1>
          <p className="text-gray-500">Kamar #{userData.roomNumber}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="mb-6 shadow-sm border overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50 border-b px-4 py-2">
                  <CardTitle className="text-xl font-semibold">Ringkasan</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="p-5 border-r border-b sm:border-b-0">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-blue-600">Tagihan Berikutnya</p>
                          <p className="font-semibold">Rp {userData.dueAmount.toLocaleString("id-ID")}</p>
                          <p className="text-xs text-blue-600">Jatuh tempo {userData.dueDate}</p>
                        </div>
                      </div>
                      <Link href="/billing">
                        <Button variant="outline" size="sm" className="mt-3 w-full">
                          Lihat Billing
                        </Button>
                      </Link>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <Calendar className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-green-600">Acara Mendatang</p>
                          <p className="font-semibold">{upcomingEvents[0]?.title || "Tidak ada acara"}</p>
                          <p className="text-xs text-green-600">{upcomingEvents[0]?.date}</p>
                        </div>
                      </div>
                      <Link href="/chat">
                        <Button variant="outline" size="sm" className="mt-3 w-full">
                          Lihat Semua Acara
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="shadow-sm border overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50 border-b px-4 py-2">
                  <CardTitle className="text-xl font-semibold">Kosan Anda</CardTitle>
                  <CardDescription className="text-gray-600">Kosan Nyaman Jakarta</CardDescription>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-4 shadow-sm">
                    <Image src="https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg" alt={kosanData.name} fill className="object-cover" />
                    
                    {roomsWith360 > 0 && (
                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full py-1.5 px-3 shadow-md flex items-center">
                        <View360 className="h-4 w-4 text-primary mr-1.5" />
                        <span className="text-sm font-medium">{roomsWith360} kamar dengan tampilan 360°</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{kosanData.address}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {kosanData.facilities.map((facility, index) => {
                      const Icon = facility.icon
                      return (
                        <div key={index} className="flex items-center bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm">
                          <Icon className="h-4 w-4 mr-2" />
                          <span>{facility.name}</span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex justify-between items-center">
                    <Link href="/kosan/kosan-1">
                      <Button variant="outline">Lihat Detail</Button>
                    </Link>
                    
                    <Link href={`/room/${userData.roomNumber}`}>
                      <Button>Lihat Kamar Saya</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Card className="mb-6 shadow-sm border overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50 border-b px-4 py-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-semibold">Notifikasi</CardTitle>
                    <Bell className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {notifications.length > 0 ? (
                    <div>
                      {notifications.map((notification, index) => (
                        <div 
                          key={notification.id} 
                          className={`p-4 ${index !== notifications.length - 1 ? 'border-b' : ''}`}
                        >
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-gray-600">{notification.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 py-4">Tidak ada notifikasi</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Card className="shadow-sm border overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50 border-b px-4 py-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-semibold">Acara Mendatang</CardTitle>
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {upcomingEvents.length > 0 ? (
                    <div>
                      {upcomingEvents.map((event, index) => (
                        <div 
                          key={event.id} 
                          className={`p-4 ${index !== upcomingEvents.length - 1 ? 'border-b' : ''}`}
                        >
                          <p className="font-medium">{event.title}</p>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{event.date}</span>
                          </div>
                          <p className="text-sm text-gray-600">{event.time}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 py-4">Tidak ada acara mendatang</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
