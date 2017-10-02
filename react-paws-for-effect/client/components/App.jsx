import React from 'react'

import Dog from './Dog'

const dogs = [
  {
    name: 'Desdemona',
    breed: 'Bulldog',
    superpower: 'Heat vision',
    image: 'bulldog.png'
  }, {
    name: 'Othello',
    breed: 'Greyhound',
    superpower: 'Sense of impending tragedy',
    image: 'greyhound.png'
  }, {
    name: 'Lady MacBeth',
    breed: 'Scottie',
    superpower: 'Stealth. Also, guilt and remorse.',
    image: 'scottie.png'
  }
]

const App = () => {
  return (
    <div className='container'>
      <img className='spinner' src='images/paw.png' />
      {dogs.map(dog => {
        return (
          <Dog key={dog.name} name={dog.name} breed={dog.breed}
            superpower={dog.superpower} image={dog.image} />
        )
      })}
    </div>
  )
}

export default App
