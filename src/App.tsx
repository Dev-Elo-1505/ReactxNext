import { Route, Routes } from "react-router-dom"
import Props from "./pages/Props"
import Hooks from "./pages/Hooks"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Props />} />
      <Route path="/hooks" element={<Hooks />} />
    </Routes>
  )
}

export default App