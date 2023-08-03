import React from 'react'
import * as S from './style'
import {IChildrenProps} from '@/types/props.d'

const Layout:React.FC<IChildrenProps> = ({children}) => {
  return (
    <S.Container>
        <S.Content>
            {children}
        </S.Content>
    </S.Container>
  )
}

export default Layout