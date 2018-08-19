import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Layout, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Modal from 'react-bootstrap/lib/Modal'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import UpComing from './components/UpComing';
import Add from './components/Add';
import BirthdayItem from './BirthdayItem';




/*

App.js
This is the main component of the application. This files
contains the main UI of the application.

NOTE: CHANGED THE STRUCTURE OF THE APPLICATION, INITIALLY, THE IDEA WAS TO
HAVE EVERYTHING ON ITS OWN COMPONENT, HOWEVER, I FOUND AN EASIER WAY TO DO IT,
SINCE THE COMPONENTS ARE NOT GOING TO BE REUSED ON DIFFERENT PARTS OF
THE APPLICATION

*/

const birthdays = [
   {
     name: 'Felix',
     date:'August 26'

   },
   {
     name: 'Lisa',
     date: 'September 27'
    }
];

localStorage.setItem('birthdays', JSON.stringify(birthdays));
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      birthdays: []
    };
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount(){
  this.getBirthdays();

  this.setState({birthdays});
  }

  getBirthdays() {
    const birthdays = JSON.parse(localStorage.getItem('birthdays'));

  }

  onDelete (name) {
    console.log(name);

    // Finish the onDelete function

  }
render() {
    return (
  <div className="demo-big-content">
      <Layout>
          <Header title="Birthday Reminder Application" scroll>
              <Navigation>
                  <Link to="/LandingPage">Home</Link>
                      <Link to="/Delete">Delete</Link>
              </Navigation>
          </Header>

          <Content>
              <div className="page-content" />
              <h1>HELLO</h1>

              <div>
                <Panel>
                  Upcoming Birthdays:<br/>
                  // Added upcoming birthdays using the current state of the array
                  {
                    this.state.birthdays.map(birthday=> {
                       return (
                        <BirthdayItem
                        key={birthday.name}
                        {...birthday}
                        onDelete={this.onDelete}
                        />
                       );

                    })
                  }
                </Panel>
              </div>

              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }

}

export default App;
