import React from 'react';
// import axios from 'axios';

class UserLogin extends React.Component {
  constructor(props){
    super(props)
  //   this.state = {
  //   };


  //   this.handleSubmit = this.handleSubmit.bind(this);
  }


  // handleSubmit(event) {
  //   event.preventDefault();

    // var currentContext = this;
    // this.serverRequest = axios
    // .post("localhost:8181/organization_token", {
    //   "auth": {
    //     "email": this.state.email
    //     "password": this.state.password
    //   }
      // .then(function (response) {
      //   console.log(response);
      //   if (response.data.code == 201){
      //     console.log("Success")
      //   }
      // })
    // }
    // this.props.onSubmit(
    //   this.state.email
    // );
  // }
  render() {
    return (
      <div>
        <form>
          <button
            type = 'submit'>
              Login Here
          </button>
        </form>
      </div>
    )
  }
}

export default UserLogin