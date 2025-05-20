"use client"

import { cn } from "@/lib/utils"
import { Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export type ModuleStatus = "locked" | "in-progress" | "completed"

export interface PathwayModule {
  id: string
  title: string
  description: string
  status: ModuleStatus
  progress: number
  href: string
  estimatedTime?: string
  completedActivities?: number
  totalActivities?: number
}

interface DevelopmentalPathwayProps {
  title: string
  description: string
  modules: PathwayModule[]
  className?: string
}

export function DevelopmentalPathway({ title, description, modules, className }: DevelopmentalPathwayProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <div className="relative">
        {/* Connector line */}
        <div className="absolute left-[22px] top-0 h-full w-0.5 bg-gray-200" />

        <div className="space-y-6">
          {modules.map((module, index) => (
            <div key={module.id} className="relative">
              {/* Module node */}
              <div
                className={cn(
                  "absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border-2",
                  module.status === "locked"
                    ? "border-gray-300 bg-gray-100"
                    : module.status === "completed"
                      ? "border-green-600 bg-green-100"
                      : "border-green-600 bg-green-50",
                )}
              >
                {module.status === "locked" ? (
                  <Lock className="h-5 w-5 text-gray-400" />
                ) : module.status === "completed" ? (
                  <div className="text-lg font-bold text-green-600">✓</div>
                ) : (
                  <div className="text-sm font-bold text-green-600">{index + 1}</div>
                )}
              </div>

              {/* Module card */}
              <div className="ml-16">
                <Card
                  className={cn(
                    "border",
                    module.status === "locked"
                      ? "border-gray-200"
                      : module.status === "completed"
                        ? "border-green-200 bg-green-50"
                        : "border-green-100",
                  )}
                >
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        {module.title}
                        {module.status === "locked" && <span className="ml-2 text-gray-400">🔒</span>}
                      </h3>
                      {module.estimatedTime && <span className="text-xs text-gray-500">{module.estimatedTime}</span>}
                    </div>
                    <p className="mb-3 text-sm text-gray-600">{module.description}</p>

                    {module.status !== "locked" && (
                      <div className="mb-3 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {module.completedActivities || 0}/{module.totalActivities || 0} Activities
                          </span>
                          <span className="text-xs font-medium">{module.progress}%</span>
                        </div>
                        <Progress
                          value={module.progress}
                          className={cn(
                            "h-1.5 bg-gray-100",
                            module.status === "completed" ? "[&_.bg-primary]:bg-green-600" : "[&_.bg-primary]:bg-green-500"
                          )}
                        />
                      </div>
                    )}

                    <div className="flex justify-end">
                      {module.status === "locked" ? (
                        <Button variant="outline" size="sm" className="text-gray-500" disabled>
                          Locked
                        </Button>
                      ) : (
                        <Link href={module.href}>
                          <Button
                            size="sm"
                            className={cn(
                              "rounded-full",
                              module.status === "completed"
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-green-600 hover:bg-green-700",
                            )}
                          >
                            {module.status === "completed" ? "Review" : "Continue"}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
