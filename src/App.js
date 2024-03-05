import logo from './logo.svg';
import './App.css';

const ReactLink = ({children="Learn React", a, b}) =>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        {children}<br/>
        a + b = {a} + {b} = {a + b}<br/>
        {Math.random()}
    </a>

// React.createElement('header', {className: 'App-header'})

const Header = () => 
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactLink a={1} b={2} />
        <ReactLink a={3} b={20}>
            Вчить React!!11111
        </ReactLink>
    </header>

console.log(<h1>Заголовок</h1>)
function App() {
    return (
        <div className="App">
            <myComponent>Винахід нового тега HTML :-D</myComponent>
            <div />
            <input></input>
            <br></br>
            <Header />
        </div>
    );
}

export default App;
