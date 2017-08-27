import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDwo9dVAybSilX2rap1EaMS9dVl0ehCdzc';

// Create a new component. Produce some HTML

// const = ES6 syntax, declares a 'variable', final value of the variable, will not change

// function = assigned to App
// jsx is not interpreted by browser (JSX = what produces html)
// vanilla JS = safely rendered by browser

// ES5 syntax:
// const App = function()

// ES6 syntax (functionnal component, without data handling)
// const App = () => {
//   return (
//     <div>
//       <VideoList />
//     </div>
//   );
// }

// refactored as Class component in order to hanlde data
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      // pass selected video with callback
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'aphex twin'}, (videos) => {
      this.setState({
        videos,
        // or
        // this.setState({ videos: videos })
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this comp. generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
