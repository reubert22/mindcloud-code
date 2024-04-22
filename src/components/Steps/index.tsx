'use client'

import React, { useState } from 'react'

import { LuTestTube2 } from 'react-icons/lu'
import { FaCodeMerge } from 'react-icons/fa6'
import { RxUpdate } from 'react-icons/rx'
import { CardItem } from '../CardItem'
import { Divisor } from '../Divisor'
import { Error } from '../Error'
import { IStep } from '../../../utils/interfaces'

const pipelineData: IStep[] = [
  {
    id: 1,
    name: 'Merge Employees with Demographics',
    stepNumber: 11,
    icon: <FaCodeMerge />,
    hasError: false,
    subActivitiesNumber: 100,
  },
  {
    id: 2,
    name: 'Update user',
    stepNumber: 12,
    icon: <RxUpdate />,
    hasError: true,
    subActivitiesNumber: 0,
  },
  {
    id: 3,
    name: 'Run tests',
    stepNumber: 13,
    icon: <LuTestTube2 />,
    hasError: false,
    subActivitiesNumber: 4,
  },
]

export const Steps = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <div className="w-full">
      {!!pipelineData.length &&
        pipelineData.map((item, index) => (
          <div
            key={`step-${item.stepNumber}-pipeline`}
            className="w-full flex flex-col"
          >
            <div className="w-full flex items-center">
              <CardItem
                item={item}
                active={activeStep === item.id}
                onClick={() => setActiveStep(item.id)}
              />
              {item.hasError && <Error />}
            </div>
            {index !== pipelineData.length - 1 && <Divisor />}
          </div>
        ))}
      {!pipelineData.length && (
        <div className="w-full flex items-center justify-center">
          <span>Empty steps</span>
        </div>
      )}
    </div>
  )
}
