import React from 'react'
import FeaturingItems from './FeaturingItems'
import { categories,  } from '@/data'

const Featuring = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 p-2 sm:p-8 md:p-10 lg:p-12 ">
    {categories.map((item, index) => (
      <FeaturingItems item={item} key={index} />
    ))}
  </div>
  )
}

export default Featuring