"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageGalleryProps {
  images: string[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-2">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden cursor-pointer group">
            <Image
              src={images[0] || "/placeholder.svg"}
              alt="Room preview"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
              <span className="text-white font-medium">Lihat Semua Foto</span>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 border-0 rounded-xl overflow-hidden shadow-2xl">
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 text-white hover:bg-black/20 h-10 w-10 rounded-full"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="w-full h-full relative">
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`Room image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 text-white hover:bg-black/20 h-10 w-10 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute top-4 right-4 z-20">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/30 hover:bg-black/50 text-white h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-3 gap-2">
        {images.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className="relative h-20 md:h-24 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => {
              setCurrentImageIndex(index)
              setIsOpen(true)
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Room thumbnail ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

