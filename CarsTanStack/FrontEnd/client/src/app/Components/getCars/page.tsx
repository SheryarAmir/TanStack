"use client"

import { useQuery } from "@tanstack/react-query"
import { fetchCars } from "../API/CarRoutes"
import { Loader2, AlertCircle, Car } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FetchCars() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  })

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          🚗 Car Inventory
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mb-6"></div>
      </div>

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-12 w-12 text-emerald-500 animate-spin mb-4" />
          <p className="text-slate-600 font-medium">Loading your premium car collection...</p>
        </div>
      )}

      {isError && (
        <div className="flex flex-col items-center justify-center py-12 px-4 bg-red-50 rounded-lg border border-red-100">
          <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
          <p className="text-red-700 font-medium text-center">Unable to load cars. Please try again later.</p>
        </div>
      )}

      {data && !isLoading && !isError && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((car) => (
            <Card
              key={car.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border-slate-200"
            >
              <div
                className="h-24 w-full"
                style={{
                  background: `linear-gradient(135deg, ${car.color}40, ${car.color})`,
                }}
              >
                <div className="flex justify-end p-3">
                  <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
                    {car.year}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Car className="h-5 w-5 text-slate-500" />
                  {car.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-sm font-medium text-slate-500">Model</span>
                  <span className="font-medium">{car.model}</span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-sm font-medium text-slate-500">Price</span>
                  <span className="font-semibold text-emerald-600">${car.price.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">Color</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-5 h-5 rounded-full border border-slate-200"
                      style={{ backgroundColor: car.color }}
                    />
                    <span className="text-sm">{car.color}</span>
                  </div>
                </div>

                <button className="w-full mt-4 py-2 rounded-md bg-slate-100 text-slate-700 font-medium transition-colors hover:bg-slate-200">
                  View Details
                </button>
              </CardContent>
            </Card>
          ))}
        </ul>
      )}

      {data && data.length === 0 && !isLoading && !isError && (
        <div className="flex flex-col items-center justify-center py-12 px-4 bg-slate-50 rounded-lg border border-slate-200">
          <Car className="h-12 w-12 text-slate-400 mb-4" />
          <p className="text-slate-600 font-medium text-center">No cars found in the inventory.</p>
        </div>
      )}
    </div>
  )
}
