import React from 'react';
import { useRouter } from 'next/router';
import { kosanData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const RoomDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const room = kosanData.rooms.find(room => room.id === id);

  if (!room) {
    return <p>Room not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <Card className="shadow-sm border overflow-hidden">
          <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <CardTitle className="">Room Details</CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-4 shadow-sm">
              <Image src={room.imageUrl} alt={room.name} fill className="object-cover" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{room.name}</h2>
            <p className="text-gray-500 mb-4">{room.description}</p>
            <p className="text-gray-500">Price: Rp {room.price.toLocaleString("id-ID")}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoomDetails;
