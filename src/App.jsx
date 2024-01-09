import './styles/style.css'
import Header from './components/header'
import Card from './components/Card'
import Card2 from './components/Card2'


function App() {

  return (
    <div>
        <Header></Header>  
        <hr style={{"margin-bottom":"6px"}}></hr>
        <Card></Card>  
        <Card2></Card2>  
    </div>
  )
}

export default App
