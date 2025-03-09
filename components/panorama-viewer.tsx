"use client"

import React from 'react';
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Loader2, X, View } from "lucide-react"

interface PanoramaViewerProps {
  momentoId: string
  roomNumber: string
  buttonStyle?: "full" | "icon" | "inline"
  className?: string
}

export default function PanoramaViewer({
  momentoId,
  roomNumber,
  buttonStyle = "full",
  className = "",
}: PanoramaViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {buttonStyle === "full" ? (
          <Button
            variant="outline"
            className={`group relative overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5A5F]/10 to-[#FF5A5F]/5 group-hover:opacity-70 transition-opacity" />
            <div className="flex items-center justify-center gap-2 py-2.5 px-4">
              <View className="h-4 w-4 text-[#FF5A5F]" />
              <span className="font-medium text-[#222222]">Lihat 360°{roomNumber ? ` Kamar ${roomNumber}` : ""}</span>
            </div>
          </Button>
        ) : buttonStyle === "icon" ? (
          <button
            className={`h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
            aria-label={`Lihat 360° Kamar ${roomNumber}`}
          >
            <View className="h-4 w-4 text-[#FF5A5F]" />
          </button>
        ) : (
          <button
            className={`flex items-center gap-1.5 text-[#FF5A5F] font-medium hover:underline ${className}`}
            aria-label={`Lihat 360° Kamar ${roomNumber}`}
          >
            <View className="h-4 w-4" />
            <span>Lihat 360°</span>
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 border-0 rounded-xl overflow-hidden shadow-2xl">
        <div className="relative w-full h-full bg-black">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black">
              <Loader2 className="h-10 w-10 text-[#FF5A5F] animate-spin mb-3" />
              <span className="text-white text-sm font-medium">Loading 360° view...</span>
            </div>
          )}

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

          <div className="absolute top-4 left-4 z-20 bg-black/30 text-white px-3 py-1.5 rounded-full text-sm font-medium">
            Kamar {roomNumber}
          </div>

          <div className="w-full h-full relative">
            <iframe
              src={`https://momento360.com/e/uc/${momentoId}?utm_campaign=marketingsite&utm_source=www&size=large&display-plan=true`}
              frameBorder="0"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              onLoad={handleIframeLoad}
              title={`360° view of room ${roomNumber}`}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

