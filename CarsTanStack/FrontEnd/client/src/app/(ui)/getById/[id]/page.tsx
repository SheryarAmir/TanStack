// app/getById/[id]/page.tsx
"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchCarById } from "@/services/carService" 
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

type Car = {
  _id: string
  name: string
  model: string
  year: number
  color: string
  price: number
}

export default function CarDetailsPage() {
  const { id } = useParams()
  const [car, setCar] = useState<Car | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (id) {
      fetchCarById(String(id))
        .then((data) => {
          setCar(data)
          setLoading(false)
        })
        .catch(() => {
          setError(true)
          setLoading(false)
        })
    }
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-10 h-10 animate-spin text-emerald-500" />
      </div>
    )
  }

  if (error || !car) {
    return <div className="text-center py-20 text-red-600">Error fetching car details.</div>
  }

  return (
    <>
    <div className=" bg-gray-100 p-4 flex justify-between items-center">
        <Button onClick={() => router.push("/getCars")}>back</Button>
      </div>
   
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700">{car.name} Details</h1>
      <div className="space-y-4 bg-white p-6 rounded-lg shadow-md border">
        <p><strong>Model:</strong> {car.model}</p>
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Color:</strong> <span style={{ backgroundColor: car.color }} className="inline-block w-5 h-5 rounded-full mr-2"></span> {car.color}</p>
        <p><strong>Price:</strong> ${car.price.toLocaleString()}</p>
        <p><strong>Car ID:</strong> {car._id}</p>
      </div>
    </div>
     </>
  )
}
