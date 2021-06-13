import React from 'react';
import { CardList } from '../card-list/card-list';
import Header from '../header/header';

//import './home.css';

class Home extends React.Component {
    //state = {  }
  constructor() {
    super();

    this.state = {
      title: "HOME PAGE",
      users: [],
    }

  }

  //Lifecycle Method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }

  render() { 
    const { users, title } = this.state; 
    
    return ( 
      <React.Fragment>
        <Header className='bg-primary' title={title}/>
        <CardList users={users} />
      </React.Fragment>
    )
}
}
 
export default Home;