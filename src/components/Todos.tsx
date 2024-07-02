'use client'

import { useGetTodosData } from "@/app/action/client/hooks/useGetTodos"

const Todos = () => {
  const { data, isLoading } = useGetTodosData()

  if (!data) return <>gak ada data</>

  if (isLoading) return <>isLoading...</>
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.id}-{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos