import React from 'react'
import { CategoriesProvider } from './categories.context'

describe('<CategoriesProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CategoriesProvider />)
  })
})