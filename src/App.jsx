import './App.css'
// import { Card } from '@mui/material'
import RecipeReviewCard from './Components/Card'
import CardGrid from './Components/CardGrid'
import Hero from './Components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero/>
      <h1 className="text-center text-2xl font-bold py-4">Responsive Card Grid</h1>
      
      <CardGrid/>
    </div>
  )
}

export default App