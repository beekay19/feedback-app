// eslint-disable-next-line no-unused-vars
import Header from "./components/header";

function App() {
  const body = "My App";
  
 
  return (
    <>
    <Header/>
    <div className="container">
      <h1>{body.toUpperCase()}</h1>
    </div>
    </>
  );
}

export default App;
