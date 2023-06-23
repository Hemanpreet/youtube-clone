import React from 'react'
import Button from './Button'

const list = ["All","Gaming","Songs","Live","Cricket","News","Cooking"];
const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Cricket"/> 
      <Button name="News"/>
      <Button name="Comedy"/>
      <Button name="Computer Programming"/>
      <Button name="Apple"/>
    </div>
  )
}

export default ButtonList