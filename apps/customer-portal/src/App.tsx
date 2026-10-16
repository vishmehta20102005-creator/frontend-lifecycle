import { Button } from "@repo/ui"
import { formatCurrency } from "@repo/utils";

function App() {


  return (
    <>
      <h1>Customer Portal</h1>
      <Button onClick={() => {
        alert(formatCurrency(1000));
      }} />
      <div>Something new</div>
    </>
  )
}

export default App
