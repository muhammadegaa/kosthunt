"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Send, Users, Info } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Mock data for chat messages
const chatMessages = [
  {
    id: "1",
    user: "Budi Santoso",
    avatar: "/placeholder.svg?height=50&width=50",
    message: "Ada acara BBQ minggu ini!",
    time: "10:30",
    isCurrentUser: false,
  },
  {
    id: "2",
    user: "Siti Rahayu",
    avatar: "/placeholder.svg?height=50&width=50",
    message: "Wah, asyik! Jam berapa ya?",
    time: "10:35",
    isCurrentUser: false,
  },
  {
    id: "3",
    user: "Anda",
    avatar: "/placeholder.svg?height=50&width=50",
    message: "Saya bisa bawa minuman kalau perlu",
    time: "10:40",
    isCurrentUser: true,
  },
  {
    id: "4",
    user: "Ahmad Rizki",
    avatar: "/placeholder.svg?height=50&width=50",
    message: "Acara mulai jam 7 malam di taman belakang. Semua penghuni diundang!",
    time: "10:45",
    isCurrentUser: false,
  },
]

// Mock data for community events
const communityEvents = [
  {
    id: "1",
    title: "BBQ Night",
    date: "15 Maret 2025",
    time: "19:00 - 22:00",
    location: "Taman Belakang",
    description:
      "Acara BBQ bersama untuk semua penghuni kosan. Silakan bawa makanan atau minuman untuk dibagi bersama.",
  },
  {
    id: "2",
    title: "Movie Night",
    date: "20 Maret 2025",
    time: "20:00 - 23:00",
    location: "Ruang Komunal",
    description: "Nonton film bersama di ruang komunal. Film akan dipilih melalui voting.",
  },
  {
    id: "3",
    title: "Yoga Pagi",
    date: "22 Maret 2025",
    time: "07:00 - 08:00",
    location: "Rooftop",
    description: "Sesi yoga pagi untuk semua level. Bawa matras yoga Anda sendiri.",
  },
]

// Mock data for support chats
const supportChats = [
  {
    id: "1",
    user: "Admin KostHunt",
    avatar: "/placeholder.svg?height=50&width=50",
    message: "Halo, ada yang bisa kami bantu?",
    time: "09:30",
    isCurrentUser: false,
  },
  {
    id: "2",
    user: "Anda",
    avatar: "/placeholder.svg?height=50&width=50",
    message: "AC di kamar saya sepertinya rusak, bisa tolong diperbaiki?",
    time: "09:35",
    isCurrentUser: true,
  },
  {
    id: "3",
    user: "Admin KostHunt",
    avatar: "/placeholder.svg?height=50&width=50",
    message: "Baik, kami akan mengirim teknisi hari ini pukul 14:00. Apakah Anda akan ada di kamar?",
    time: "09:40",
    isCurrentUser: false,
  },
  {
    id: "4",
    user: "Anda",
    avatar: "/placeholder.svg?height=50&width=50",
    message: "Ya, saya akan ada di kamar. Terima kasih!",
    time: "09:45",
    isCurrentUser: true,
  },
]

export default function ChatPage() {
  const [activeTab, setActiveTab] = useState("community")
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim() === "") return
    // In a real app, you would send the message to the server
    setMessage("")
  }

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 p-4">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-lg font-semibold">Chat</h1>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-6">
        <Tabs defaultValue="community" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="community" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Komunitas
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center">
              <Info className="h-4 w-4 mr-2" />
              Bantuan
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2">
              <TabsContent value="community" className="m-0">
                <div className="bg-white rounded-lg shadow-md p-4 h-[500px] flex flex-col">
                  <div className="space-y-4 mb-4 flex-1 overflow-y-auto p-2">
                    {chatMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isCurrentUser ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.isCurrentUser
                              ? "bg-primary text-white rounded-tr-none"
                              : "bg-gray-100 rounded-tl-none"
                          }`}
                        >
                          {!message.isCurrentUser && <p className="font-semibold text-sm">{message.user}</p>}
                          <p>{message.message}</p>
                          <p
                            className={`text-xs ${message.isCurrentUser ? "text-primary-foreground/70" : "text-gray-500"} text-right`}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mt-auto">
                    <Input
                      placeholder="Ketik pesan..."
                      className="flex-1"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button size="icon" onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="support" className="m-0">
                <div className="bg-white rounded-lg shadow-md p-4 h-[500px] flex flex-col">
                  <div className="space-y-4 mb-4 flex-1 overflow-y-auto p-2">
                    {supportChats.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isCurrentUser ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.isCurrentUser
                              ? "bg-primary text-white rounded-tr-none"
                              : "bg-gray-100 rounded-tl-none"
                          }`}
                        >
                          {!message.isCurrentUser && <p className="font-semibold text-sm">{message.user}</p>}
                          <p>{message.message}</p>
                          <p
                            className={`text-xs ${message.isCurrentUser ? "text-primary-foreground/70" : "text-gray-500"} text-right`}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mt-auto">
                    <Input
                      placeholder="Ketik pesan..."
                      className="flex-1"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button size="icon" onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="font-semibold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Jadwal Acara
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  {communityEvents.map((event) => (
                    <AccordionItem key={event.id} value={event.id}>
                      <AccordionTrigger>
                        <div className="text-left">
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-gray-500">{event.date}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 text-sm">
                          <p>
                            <span className="font-medium">Waktu:</span> {event.time}
                          </p>
                          <p>
                            <span className="font-medium">Lokasi:</span> {event.location}
                          </p>
                          <p>{event.description}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

