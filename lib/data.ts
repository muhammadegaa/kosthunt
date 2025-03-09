import { Wifi, Wind, Droplet, UtensilsCrossed, Sun, Coffee, Shirt } from "lucide-react"

export type RoomStatus = "available" | "unavailable"

export interface Room {
  id: string
  number: string
  floor: number
  price: number
  size: string
  status: RoomStatus
  features: {
    hasWindow: boolean
    hasAC: boolean
    hasPrivateBathroom: boolean
    hasFurniture: boolean
  }
  images: string[]
  momentoId: string // Now required for each room
  imageUrl: string
  name: string
  description: string
}

export interface Kosan {
  id: string
  name: string
  address: string
  description: string
  facilities: {
    name: string
    icon: any
  }[]
  rooms: Room[]
}

export interface AddOn {
  id: string
  name: string
  description: string
  price: number
  icon: any
  options?: {
    id: string
    name: string
    price: number
  }[]
}

// Mock data for a single kosan
export const kosanData: Kosan = {
  id: "kosan-1",
  name: "Kosan Nyaman Jakarta",
  address: "Jl. Kemang Raya No. 10, Jakarta Selatan",
  description:
    "Kosan modern dengan fasilitas lengkap, lokasi strategis dekat dengan pusat perbelanjaan, restoran, dan akses transportasi umum. Lingkungan aman dan nyaman untuk mahasiswa dan profesional muda.",
  facilities: [
    { name: "WiFi", icon: Wifi },
    { name: "AC", icon: Wind },
    { name: "Kamar Mandi Dalam", icon: Droplet },
    { name: "Dapur Bersama", icon: UtensilsCrossed },
  ],
  rooms: [
    {
      id: "room-101",
      number: "101",
      floor: 1,
      price: 2500000,
      size: "3x4 m²",
      status: "available",
      features: {
        hasWindow: true,
        hasAC: true,
        hasPrivateBathroom: true,
        hasFurniture: true,
      },      
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room1.jpg",
      name: "Room 1",
      description: "A cozy room with a nice view.",
    },
    {
      id: "room-102",
      number: "102",
      floor: 1,
      price: 2300000,
      size: "3x3 m²",
      status: "unavailable",
      features: {
        hasWindow: true,
        hasAC: true,
        hasPrivateBathroom: false,
        hasFurniture: true,
      },
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room2.jpg",
      name: "Room 2",
      description: "A cozy room with a nice view.",
    },
    {
      id: "room-103",
      number: "103",
      floor: 1,
      price: 2400000,
      size: "3x4 m²",
      status: "available",
      features: {
        hasWindow: false,
        hasAC: true,
        hasPrivateBathroom: true,
        hasFurniture: true,
      },
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room3.jpg",
      name: "Room 3",
      description: "A cozy room with a nice view.",
    },
    {
      id: "room-104",
      number: "104",
      floor: 1,
      price: 2200000,
      size: "3x3 m²",
      status: "available",
      features: {
        hasWindow: false,
        hasAC: true,
        hasPrivateBathroom: false,
        hasFurniture: true,
      },
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room4.jpg",
      name: "Room 4",
      description: "A cozy room with a nice view.",
    },
    {
      id: "room-201",
      number: "201",
      floor: 2,
      price: 2600000,
      size: "3x4 m²",
      status: "available",
      features: {
        hasWindow: true,
        hasAC: true,
        hasPrivateBathroom: true,
        hasFurniture: true,
      },
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room5.jpg",
      name: "Room 5",
      description: "A cozy room with a nice view.",
    },
    {
      id: "room-202",
      number: "202",
      floor: 2,
      price: 2400000,
      size: "3x3 m²",
      status: "unavailable",
      features: {
        hasWindow: true,
        hasAC: true,
        hasPrivateBathroom: false,
        hasFurniture: true,
      },
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room6.jpg",
      name: "Room 6",
      description: "A cozy room with a nice view.",
    },
    {
      id: "room-203",
      number: "203",
      floor: 2,
      price: 2500000,
      size: "3x4 m²",
      status: "available",
      features: {
        hasWindow: true,
        hasAC: true,
        hasPrivateBathroom: true,
        hasFurniture: false,
      },
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room7.jpg",
      name: "Room 7",
      description: "A cozy room with a nice view.",
    },
    {
      id: "room-204",
      number: "204",
      floor: 2,
      price: 2300000,
      size: "3x3 m²",
      status: "available",
      features: {
        hasWindow: true,
        hasAC: false,
        hasPrivateBathroom: false,
        hasFurniture: true,
      },
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room8.jpg",
      name: "Room 8",
      description: "A cozy room with a nice view.",
    },
    {
      id: "room-301",
      number: "301",
      floor: 3,
      price: 2700000,
      size: "3x4 m²",
      status: "available",
      features: {
        hasWindow: true,
        hasAC: true,
        hasPrivateBathroom: true,
        hasFurniture: true,
      },
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room9.jpg",
      name: "Room 9",
      description: "A cozy room with a nice view.",
    },
    {
      id: "room-302",
      number: "302",
      floor: 3,
      price: 2500000,
      size: "3x3 m²",
      status: "unavailable",
      features: {
        hasWindow: true,
        hasAC: true,
        hasPrivateBathroom: true,
        hasFurniture: true,
      },
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room10.jpg",
      name: "Room 10",
      description: "A cozy room with a nice view.",
    },
    {
      id: "room-303",
      number: "303",
      floor: 3,
      price: 2600000,
      size: "3x4 m²",
      status: "available",
      features: {
        hasWindow: true,
        hasAC: true,
        hasPrivateBathroom: true,
        hasFurniture: true,
      },
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room11.jpg",
      name: "Room 11",
      description: "A cozy room with a nice view.",
    },
    {
      id: "room-304",
      number: "304",
      floor: 3,
      price: 2400000,
      size: "3x3 m²",
      status: "available",
      features: {
        hasWindow: true,
        hasAC: true,
        hasPrivateBathroom: false,
        hasFurniture: true,
      },
      images: [
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
        "https://media.coveliving.io/34405/conversions/Cove-Prima---Deluxe-1-large.jpg",
      ],
      momentoId: "fb0d71acfc7a4aa8a8cf9493793b0769",
      imageUrl: "/images/room12.jpg",
      name: "Room 12",
      description: "A cozy room with a nice view.",
    },
  ],
}

// Mock data for add-ons
export const addOns: AddOn[] = [
  {
    id: "laundry",
    name: "Laundry",
    description: "Layanan laundry reguler",
    price: 200000,
    icon: Shirt,
    options: [
      { id: "laundry-basic", name: "Basic (5kg/bulan)", price: 200000 },
      { id: "laundry-standard", name: "Standard (10kg/bulan)", price: 350000 },
      { id: "laundry-premium", name: "Premium (15kg/bulan)", price: 500000 },
    ],
  },
  {
    id: "cleaning",
    name: "Pembersihan Kamar",
    description: "Layanan pembersihan kamar reguler",
    price: 150000,
    icon: Sun,
    options: [
      { id: "cleaning-weekly", name: "1x Seminggu", price: 150000 },
      { id: "cleaning-biweekly", name: "2x Seminggu", price: 250000 },
      { id: "cleaning-daily", name: "Setiap Hari", price: 500000 },
    ],
  },
  {
    id: "breakfast",
    name: "Sarapan",
    description: "Layanan sarapan pagi",
    price: 300000,
    icon: Coffee,
    options: [
      { id: "breakfast-weekday", name: "Hari Kerja", price: 300000 },
      { id: "breakfast-everyday", name: "Setiap Hari", price: 450000 },
    ],
  },
]

// Mock data for payment methods
export const paymentMethods = [
  { id: "va", name: "Virtual Account" },
  { id: "ovo", name: "OVO" },
  { id: "dana", name: "Dana" },
  { id: "gopay", name: "GoPay" },
  { id: "bca", name: "Transfer BCA" },
]

// Mock data for subscription durations
export const subscriptionDurations = [
  { id: "1-month", name: "1 Bulan", discount: 0 },
  { id: "3-months", name: "3 Bulan", discount: 5 },
  { id: "6-months", name: "6 Bulan", discount: 8 },
  { id: "12-months", name: "12 Bulan", discount: 12 },
]

