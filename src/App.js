import HomePage from "./components/homePage";

function App() {
  return (
    <div style={{ height: '100%', width:'100%' }}>
      <HomePage />

      <div style={{ bottom: 0, height: 30, width:'100%', backgroundColor: 'black', color:'white', textAlign: 'center', marginTop:30, marginBottom: 0 }}>
        <small>Diagonal Software C - 2022</small>
      </div>
    </div>
  );
}

export default App;
