import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'

describe('<Login />', () => {
  test('error and spinner should not be rendered on start', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})
