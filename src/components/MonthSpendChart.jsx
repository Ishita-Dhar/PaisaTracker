"use client"


import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
  { month: "January", spent: 1860 },
  { month: "February", spent: 3050 },
  { month: "March", spent: 2370 },
  { month: "April", spent: 730 },
  { month: "May", spent: 2090 },
  { month: "June", spent: 2140 },
]

const chartConfig = {
  spent: {
    label: "Spent",
    color: "var(--chart-3)",
    // previousmonth: "var(--chart-2)"
  },
}

export function MonthSpendChart() {
  return (
    <Card >
      
      <CardContent className='' >
        
        <ChartContainer config={chartConfig} className='h-[300px] w-full'>
          <BarChart  accessibilityLayer data={chartData} >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, )}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="spent" fill="var(--color-spent)" radius={8} barSize={60} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
