import './App.css';
import {Component} from 'react';
import GithubRepo from './Octocat/Octocat.png';
import Typewriter from 'typewriter-effect';
import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/SearchBox.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      InputValue : ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => {
      this.setState({
        monsters : users
      })
    })
  }

  SearchOnChange = (event) => {
    const InputValue = event.target.value.toLowerCase();
    this.setState({InputValue});
  }

  render() {
    const {SearchOnChange} = this;
    const {monsters, InputValue} = this.state;
    const FilteredMonsters = monsters.filter((monster) =>{
      return monster.name.toLowerCase().includes(InputValue);
    })

    return (
    <div className="App">
      <h1>  
        <Typewriter 
          options={{ 
            strings: [ '< Kittens Rolodex />'],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 80,
            cursor: '_',
          }}
        />
      </h1>  
      <a href='https://github.com/MahomedCissokho' target="_blank" rel='noreferrer'>
        <img src= {GithubRepo} alt='github' className='github-icon'title='github'/>
      </a>
      <SearchBox SearchOnChange={SearchOnChange} placeholder="search kittens" className="SearchBox"/>
      <CardList FilteredMonsters={FilteredMonsters} />
      <span className='author'>@Cisco</span>
    </div> 
  );
  }
  
}

export default App;
