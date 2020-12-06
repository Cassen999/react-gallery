import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    myGallery: []
  }

  componentDidMount() {
    this.getAllItems();
  }

  getAllItems = () => {
    Axios.get('/gallery') // Request info from gallery
    .then((response) => {
      console.log('in client GET', response.data)
      // Set myGallery array = to response.data receiver from server
      this.setState({
        myGallery: response.data
      })
    })
    .catch((error) => {
      alert('Something bad happened in client GET...');
      console.log('error', error);
    })
  }

  addLike = (id) => {
    // Add /like/${} in order to connect to router.put
    // Use template literal ${id} to pass in the id to the function
    Axios.put(`/gallery/like/${id}`)
    .then((response) => {
    console.log('PUT response', response)
    this.getAllItems()
    })
    .catch( (error)=> {
    alert('Something bad happened in addLike PUT');
    console.log('Error', error)
    })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my honeymoon</h1>
        </header>
        <br/>
        {/* Call GalleryList to render to DOM and set up prop */}
        <GalleryList gallery={this.state.myGallery} addLike={this.addLike} />
      </div>
    );
  }
}

export default App;
