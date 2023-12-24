import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const handleNameChange = () => {
    const names = ['Manoel', 'MP', 'Lucy', 'Rod', 'Kay']
    const int = Math.floor(Math.random() * 5)
    return names[int]
  return (
    <>
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
    
    </>
  );
}

export default App;
