import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'
import { defineFeature, loadFeature } from 'jest-cucumber'
import path from 'path'
import AppProvider from '@/view/hooks/AppProvider'
import Navbar from '@/view/components/Navbar'

const pathMakeFeature = path.resolve(path.join(__dirname, 'navbar.feature'))

const feature = loadFeature(pathMakeFeature)

const makeComponent = () => {
  return render(
    <AppProvider>
      <Navbar />
    </AppProvider>
  )
}

defineFeature(feature, (test) => {
  test('check render component', ({ when, then }) => {
    when('mount navbar component', () => {
      makeComponent()
    })
    then('render text', () => {
      expect(screen.getByText(/Navbar/i)).toBeTruthy()
    })
  })
})
