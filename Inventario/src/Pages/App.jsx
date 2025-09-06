import React from 'react'
import Scanner from '../Components/Scanner.jsx'
import Header from '../Components/Header.jsx'
import AddProductForm from '../Components/AddProductForm.jsx'


function App() {
  return (
    <div className='m-[1rem] h-auto flex flex-col gap-4 items-center justify-center '>
      <Header />
      <h1 className='text-2xl font-bold'>Scanner</h1>
      <AddProductForm></AddProductForm>
      
    </div>
  )
}

export default App
