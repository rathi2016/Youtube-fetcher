import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import config from './config.js';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = config.MY_KEY;


  class Youtube extends Component {
    constructor(props){
      super(props);
      this.state = {
        videos: [],
        selectedVideo: null
      }
       this.videoSearch('GOT');
    }

videoSearch(value) {
  YTSearch({key: API_KEY, term: value}, (data) => {
    this.setState({
        videos: data,
        selectedVideo: data[0]
      });
  });

}
    render(){
      const videoSearch = _.debounce((term) => {this.videoSearch(term)},400)
      return (
        <div>
               <SearchBar onSearchTermChange ={videoSearch}/>
               <VideoDetails video={this.state.selectedVideo}/>
               <VideoList
                 onVideoSelect = {videoSlected => this.setState({selectedVideo: videoSlected})}
                 videos={this.state.videos}/>
        </div>
      );
    }
  }
export default Youtube;
