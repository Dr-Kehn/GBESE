'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const sampleData = [
  { month: 'Jan', excellent: 520, poor: 480 },
  { month: 'Feb', excellent: 650, poor: 250 },
  { month: 'Mar', excellent: 450, poor: 550 },
  { month: 'Apr', excellent: 920, poor: 80 },
  { month: 'May', excellent: 720, poor: 280 },
  { month: 'Jun', excellent: 870, poor: 130 },
  { month: 'Jul', excellent: 390, poor: 610 },
  { month: 'Aug', excellent: 620, poor: 380 },
  { month: 'Sept', excellent: 450, poor: 550 },
  { month: 'Oct', excellent: 870, poor: 130 },
  { month: 'Nov', excellent: 450, poor: 550 },
  { month: 'Dec', excellent: 940, poor: 60 },
]

export default function CreditScorePage() {
  const [chartData, setChartData] = useState(sampleData)

  // Simulate dynamic data updates from user usage
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev =>
        prev.map(item => ({
          ...item,
          excellent: Math.max(0, item.excellent + (Math.random() * 100 - 50)),
          poor: Math.max(0, item.poor + (Math.random() * 100 - 50)),
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="p-4 md:p-10 max-w-5xl mx-auto">
      <Link href="/lenders/account" className="flex items-center space-x-2 text-blue-600 hover:underline mb-4">
        <Image src="/arrow-left.svg" alt="Back" width={16} height={16} />
        <span>Back</span>
      </Link>

      <Card className="shadow-md rounded-2xl p-4">
        <CardContent>
          <div className="flex justify-between items-center flex-wrap mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Credit Score Analysis</h2>
              <p className="text-gray-600">Current Score</p>
              <p className="text-3xl font-bold mt-1">515</p>
            </div>

            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <div className="flex items-center space-x-1">
                <span className="w-3 h-3 bg-blue-600 rounded-full" />
                <span className="text-sm text-gray-700">Excellent</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-sm text-gray-700">Poor</span>
              </div>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="excellent" stackId="a" fill="#2563eb" />
                <Bar dataKey="poor" stackId="a" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center mt-6">
            <Button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700">
              Your credit score has surged by 100 points
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
