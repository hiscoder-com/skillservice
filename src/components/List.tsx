import { ReactNode } from 'react'

interface ListProps {
  items: string[] | ReactNode[]
  additionalArray?: string[] | ReactNode[]
}

function List({ items, additionalArray }: ListProps) {
  return (
    <div className='mt-3 sm:mt-6'>
      <ul className='flex flex-col gap-3'>
        {items.map((item, index) => (
          <li key={index} className='list-disc ml-6'>
            {item}
          </li>
        ))}
      </ul>
      {additionalArray && (
        <ul className='flex flex-col gap-3'>
          {additionalArray.map((item, index) => (
            <li key={index} className='list-disc ml-16 marker:text-primary-400'>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default List
