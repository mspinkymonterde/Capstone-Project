"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, FileCheck, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface ResourceActivity {
  id: string
  title: string
  type: "completed" | "suggested" | "in-progress"
  date?: string
  href: string
  areaName?: string
  moduleName?: string
}

interface ResourcesSectionProps {
  enrolledModules: {
    id: string
    title: string
    area: string
    progress: number
    href: string
    status: "in-progress" | "completed"
  }[]
  recentActivity: ResourceActivity[]
  className?: string
}

export function ResourcesSection({ enrolledModules, recentActivity, className }: ResourcesSectionProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div>
        <h2 className="text-xl font-bold text-gray-900">Your Resources</h2>
        <p className="text-sm text-gray-600">Access your enrolled modules and recent activities</p>
      </div>

      {enrolledModules.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enrolledModules.map((module) => (
            <Link key={module.id} href={module.href}>
              <Card className="h-full border-green-100 transition-all hover:border-green-200 hover:shadow-sm">
                <CardContent className="p-4">
                  <div className="mb-1 text-xs font-medium text-green-600">{module.area}</div>
                  <h3 className="mb-2 font-medium">{module.title}</h3>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {module.status === "completed" ? "Completed" : "In Progress"}
                    </span>
                    <span className="text-xs font-medium">{module.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-gray-100">
                    <div
                      className={cn(
                        "h-1.5 rounded-full",
                        module.status === "completed" ? "bg-green-600" : "bg-green-500",
                      )}
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <Card className="border-gray-200">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <FileText className="mb-2 h-8 w-8 text-gray-400" />
            <h3 className="mb-1 font-medium">No Enrolled Modules</h3>
            <p className="mb-4 text-sm text-gray-500">
              You haven't enrolled in any modules yet. Start exploring developmental pathways.
            </p>
            <Link href="/parent/modules">
              <Button className="rounded-full bg-green-600 hover:bg-green-700">Explore Modules</Button>
            </Link>
          </CardContent>
        </Card>
      )}

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Recent Activity</h3>
          <Link href="/parent/progress" className="text-sm text-green-600 hover:underline">
            View All
          </Link>
        </div>

        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <Link key={activity.id} href={activity.href}>
              <div className="flex items-start gap-3 rounded-lg border border-gray-100 p-3 transition-colors hover:bg-gray-50">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full",
                    activity.type === "completed"
                      ? "bg-green-100 text-green-600"
                      : activity.type === "suggested"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-amber-100 text-amber-600",
                  )}
                >
                  {activity.type === "completed" ? (
                    <FileCheck className="h-4 w-4" />
                  ) : activity.type === "suggested" ? (
                    <ArrowRight className="h-4 w-4" />
                  ) : (
                    <Clock className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="mb-0.5 flex items-center justify-between">
                    <span
                      className={cn(
                        "text-xs font-medium",
                        activity.type === "completed"
                          ? "text-green-600"
                          : activity.type === "suggested"
                            ? "text-blue-600"
                            : "text-amber-600",
                      )}
                    >
                      {activity.type === "completed"
                        ? "Completed"
                        : activity.type === "suggested"
                          ? "Suggested"
                          : "In Progress"}
                    </span>
                    {activity.date && <span className="text-xs text-gray-500">{activity.date}</span>}
                  </div>
                  <p className="font-medium text-gray-900">{activity.title}</p>
                  {(activity.areaName || activity.moduleName) && (
                    <p className="text-xs text-gray-500">
                      {activity.areaName && <span>{activity.areaName}</span>}
                      {activity.areaName && activity.moduleName && <span> • </span>}
                      {activity.moduleName && <span>{activity.moduleName}</span>}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
