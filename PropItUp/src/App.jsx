import PersonalCard from './components/PersonalCard'
import Button from './components/Button'
import './App.css'

function App() {

  return (
    <>
    <div className="container"> 
    <PersonalCard 
    Firstname= "Jane" 
    LastName = "Doe" 
    age = {12} 
    hairColor = "Black">
    </PersonalCard>

    <PersonalCard 
    Firstname= "Jacob" 
    LastName = "Dilly" 
    age = {21} 
    hairColor = "Blonde" >
    </PersonalCard>


    <PersonalCard 
    Firstname= "Ashley" 
    LastName = "Doe" 
    age = {25} 
    hairColor = "Black" >
    </PersonalCard>
  
    </div>
    </>
  )
}

export default App
