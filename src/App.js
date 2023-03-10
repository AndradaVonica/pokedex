import Pokemon from "./pages/Pokemon";
import Names from "./pages/Names"

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <Pokemon />
      <Names />
    </div>
  );
}

export default App;

