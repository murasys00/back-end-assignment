import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <Card 
          title="Card Title"
          description= "This is a description of card."
          imageurl="https://bkacontent.com/wp-content/uploads/2016/06/Depositphotos_31146757_l-2015.webp"
      />
      <Card 
          title="Card Title"
          description= "This is a description of card."
          imageurl="https://via.placeholder.com/150"
      />
      <Card 
          title="Card Title"
          description= "This is a description of card."
          imageurl="https://via.placeholder.com/150"
      />
    </>
  )
}

export default App
