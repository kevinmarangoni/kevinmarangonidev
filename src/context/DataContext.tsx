import React, {createContext} from 'react'
import {IChildrenProps} from '@/types/props.d'
import {ptBR as data} from "@data/data"
import { Data } from '@/types/data'

export const DataContext: React.Context<Object> = createContext<Object>({} as Data)

const Data:React.FC<IChildrenProps> = ({children}) => {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export default Data