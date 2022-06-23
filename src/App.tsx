import React, { useEffect } from 'react'
import {gql, useQuery} from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
      description
      teacher{
        name
      }
    }
  }
`

interface Lesson {
  id: string
  title: string
  description: string
  teacher: {
    name: string
  }
}

export function App() {

  const {data} = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  console.log(data)
  return (
    <ul>
      {data?.lessons.map(lesson => {
        return (
          <li key={lesson.id}>
            {lesson.title}
          </li>
        ) 
      })}
    </ul>  
  )
}
