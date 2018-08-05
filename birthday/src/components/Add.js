import React, {Component} from 'react';

class Add extends Component {

  render() {
    return(

      <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="Name" ref="nameForm" />
                <button onClick ={(e)=>this.formSubmit(e)}> Add</button>


            </form>
    )
  }

  handleCreate(event) {
       const createInput = this.refs.createInput;
       const task = createInput.value;
      event.preventDefault();


      this.setState({ error: null });
      this.props.createTask(task);
      this.refs.createInput.value = '';
  }


    formSubmit = (e) => {
      e.preventDefault();

      let birthdays = this.state.birthdays;
      let name = this.refs.name.value;
      let date = this.refs.date.value;

      let birthday= {
          name, date
      }

      birthdays.push(birthday);

      this.setState({
        birthdays: birthdays
      });

      this.refs.nameForm.reset();



    }



}

export default Add;
