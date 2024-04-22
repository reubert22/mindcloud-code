import React from 'react'

import { FaListUl } from 'react-icons/fa6'
import { IStep } from '../../../utils/interfaces'

export const CardItem = ({
  item,
  active,
  onClick,
}: {
  item: IStep
  active: boolean
  onClick: () => void
}) => (
  <div
    onClick={onClick}
    style={{
      borderColor: active ? 'purple' : '#cecece',
    }}
    className="shadow-lg bg-white w-[95%] border rounded py-[16px] px-[18px] flex items-center justify-between cursor-pointer"
  >
    <div className="flex items-center">
      <div className="flex items-center mr-[15px]">{item.icon}</div>
      <div className="bg-[#F5F8F9] p-[2px] flex items-center justify-center rounded h-[20px] w-[20px] mr-[8px]">
        <span className="text-[12px] text-[#8c8b8b]">{item.stepNumber}</span>
      </div>
      <span className="text-ellipsis line-clamp-1">{item.name}</span>
    </div>
    {!!item.subActivitiesNumber && (
      <div className="rounded bg-[#F5F8F9] px-[8px] py-[5px] flex items-center justify-between">
        <FaListUl size={12} />
        <span className="ml-[10px] text-[12px]">
          {item.subActivitiesNumber}
        </span>
      </div>
    )}
  </div>
)
