"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Download, Receipt, Clock, CheckCircle, AlertCircle } from "lucide-react"

// Mock subscription data
const subscriptionData = {
  roomNumber: "201",
  plan: "12 Bulan",
  startDate: "1 Januari 2025",
  endDate: "31 Desember 2025",
  monthlyPrice: 2600000,
  status: "Aktif",
  nextBillingDate: "1 April 2025",
  nextBillingAmount: 2600000,
  paymentMethod: "Virtual Account BCA",
}

// Mock payment history
const paymentHistory = [
  {
    id: "INV-001",
    date: "1 Januari 2025",
    amount: 26000000,
    status: "paid",
    description: "Pembayaran sewa 12 bulan",
  },
  {
    id: "INV-002",
    date: "15 Januari 2025",
    amount: 200000,
    status: "paid",
    description: "Layanan tambahan - Laundry",
  },
  {
    id: "INV-003",
    date: "1 Februari 2025",
    amount: 150000,
    status: "paid",
    description: "Layanan tambahan - Pembersihan",
  },
  {
    id: "INV-004",
    date: "1 Maret 2025",
    amount: 150000,
    status: "pending",
    description: "Layanan tambahan - Pembersihan",
  },
]

export default function BillingPage() {
  const [activeTab, setActiveTab] = useState("subscription")

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 p-4">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-lg font-semibold">Billing</h1>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-6">
        <Tabs defaultValue="subscription" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="subscription">Langganan</TabsTrigger>
            <TabsTrigger value="history">Riwayat Pembayaran</TabsTrigger>
          </TabsList>

          <TabsContent value="subscription" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Detail Langganan</CardTitle>
                <CardDescription>Informasi tentang langganan sewa Anda saat ini</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-lg">Kamar #{subscriptionData.roomNumber}</h3>
                      <p className="text-sm text-gray-500">Paket {subscriptionData.plan}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{subscriptionData.status}</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Tanggal Mulai</p>
                      <p className="font-medium">{subscriptionData.startDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tanggal Berakhir</p>
                      <p className="font-medium">{subscriptionData.endDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Harga Bulanan</p>
                      <p className="font-medium">Rp {subscriptionData.monthlyPrice.toLocaleString("id-ID")}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Metode Pembayaran</p>
                      <p className="font-medium">{subscriptionData.paymentMethod}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg flex items-start">
                    <Clock className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-800">Tagihan Berikutnya</p>
                      <p className="text-sm text-blue-600">
                        Rp {subscriptionData.nextBillingAmount.toLocaleString("id-ID")} pada{" "}
                        {subscriptionData.nextBillingDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Button className="w-full flex items-center justify-center">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Ubah Metode Pembayaran
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Riwayat Pembayaran</CardTitle>
                <CardDescription>Semua transaksi pembayaran Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentHistory.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            payment.status === "paid"
                              ? "bg-green-100"
                              : payment.status === "pending"
                                ? "bg-yellow-100"
                                : "bg-red-100"
                          }`}
                        >
                          {payment.status === "paid" ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : payment.status === "pending" ? (
                            <Clock className="h-5 w-5 text-yellow-600" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{payment.description}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Receipt className="h-3 w-3 mr-1" />
                            <span>{payment.id}</span>
                            <span className="mx-1">•</span>
                            <span>{payment.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">Rp {payment.amount.toLocaleString("id-ID")}</p>
                        <Button variant="ghost" size="sm" className="h-7 text-xs">
                          <Download className="h-3 w-3 mr-1" />
                          Invoice
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

