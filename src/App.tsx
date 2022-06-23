import React, { useEffect } from 'react'
import {gql, useQuery} from '@apollo/client'
import { Event } from './pages/Event'
export function App() {

  return (
    <div>
      <Event />
    </div>
  )
}
