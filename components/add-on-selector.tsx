"use client"

import { useState } from "react"
import type { AddOn } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface AddOnSelectorProps {
  addOns: AddOn[]
  onSelectionChange: (selections: Record<string, { selected: boolean; optionId?: string }>) => void
}

export default function AddOnSelector({ addOns, onSelectionChange }: AddOnSelectorProps) {
  const [selections, setSelections] = useState<Record<string, { selected: boolean; optionId?: string }>>({})

  const handleAddOnToggle = (addOnId: string, checked: boolean) => {
    const newSelections = {
      ...selections,
      [addOnId]: {
        ...selections[addOnId],
        selected: checked,
      },
    }

    setSelections(newSelections)
    onSelectionChange(newSelections)
  }

  const handleOptionChange = (addOnId: string, optionId: string) => {
    const newSelections = {
      ...selections,
      [addOnId]: {
        ...selections[addOnId],
        optionId,
      },
    }

    setSelections(newSelections)
    onSelectionChange(newSelections)
  }

  return (
    <div className="space-y-4">
      {addOns.map((addOn) => {
        const isSelected = selections[addOn.id]?.selected || false

        return (
          <Card key={addOn.id} className={isSelected ? "border-primary" : ""}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`addon-${addOn.id}`}
                    checked={isSelected}
                    onCheckedChange={(checked) => handleAddOnToggle(addOn.id, checked as boolean)}
                  />
                  <div>
                    <CardTitle className="text-base">{addOn.name}</CardTitle>
                    <CardDescription>{addOn.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center">
                  {addOn.icon && <addOn.icon className="h-5 w-5 text-primary mr-2" />}
                </div>
              </div>
            </CardHeader>

            {isSelected && addOn.options && (
              <CardContent>
                <RadioGroup
                  defaultValue={selections[addOn.id]?.optionId || addOn.options[0].id}
                  onValueChange={(value) => handleOptionChange(addOn.id, value)}
                >
                  {addOn.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 py-1">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id} className="flex-1">
                        {option.name}
                      </Label>
                      <span className="text-sm font-medium">Rp {option.price.toLocaleString("id-ID")}</span>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            )}
          </Card>
        )
      })}
    </div>
  )
}

