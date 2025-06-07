import React from 'react'
import { NavLink } from './NavLink'

export const MainNav = () => {
  return (
    <div>MainNav
        <NavLink name="Семинария"/>
        <NavLink name="Ресурсы"/>
        <NavLink name="Курсы"/>
        <NavLink name="Программы"/>
        <NavLink name="Студентам"/>
    </div>
  )
}