import React from 'react'
import Calculator from '../Calculator'


const numbers = [
    { a: 5, b: 11 },
    { a: 7, b: 21 },
    { a: 2220, b: 221 }
  ]

const Calculators = (props) => (
    <div>
        {
            numbers.map(
                element => (
                    <Calculator
                        a={element.a}
                        b={element.b}
                    />
                )
            )
        }
    </div>
)

export default Calculators