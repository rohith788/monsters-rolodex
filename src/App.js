import React from 'react';
import { CardList } from'./components/card-list/card-list.component'
import { SearchBox } from'./components/search-box/search-box.component'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      monsters : [],
      searchtext : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({monsters : users}))
  }

  handleChange = (e) => {
    this.setState({searchtext : e.target.value})
  }

  render(){
    const { monsters, searchtext } = this.state
    const filteredmonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchtext.toLowerCase()))
    return(
      
      <div className = 'App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
         placeholder = 'search'
         handleChange={this.handleChange}
        />
        <CardList monsters = {filteredmonsters} />
      </div>
    )
  }
}

export default App;
