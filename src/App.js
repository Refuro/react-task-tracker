function App() {
  const name = 'Brad'
  const x = true
  
  return (
    <div className="container">
      <h1>Hello From React </h1>
      <h2>Hello {name}, Ternary Operator {x ? 'Yes' : 'No'}</h2>
    </div>
  );
}

export default App;
