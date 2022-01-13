import React from 'react'
import classNames from 'helpers/classNames'

export default function Container({ children, className }) {
  const classes = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  return (
    <div className={classNames(classes, className)}>{children}</div>
  )
}
