import React, {createContext} from 'react'
import {IChildrenProps} from '@/types/props.d'
import * as data from "@data/data"

export const DataContext: React.Context<Object> = createContext<Object>({} as Object)

const Data:React.FC<IChildrenProps> = ({children}) => {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export default Data