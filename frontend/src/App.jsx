import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  return (
    <div>
      <Text text="Hello"/>
      <Text text="World!"/>
      <MovieCard movie={{title: "Logan's Film", release_date: "2025"}}></MovieCard>
    </div>
  )
}

function Text({text}) {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default App
