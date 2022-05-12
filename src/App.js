import React, { useEffect, useState } from "react";
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage.js";
import youtube from './youtube-api.js';




function App() {
  // var videos = [];
  const [image, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [channel, setChannel] = useState('');
  const [description, setDescription] = useState('');
  const [views, setViews] = useState('');
  const [timestamp, setTimeStamp] = useState('');
  const [channelImage, setChannelImage]= useState('');

  const [inputData, setData] = useState('');
  const childToParent = (childData) => {
    setData(childData);
    console.log(childData);
  }
  useEffect(()=>{
    const getData = async () => {
      const response = await youtube.get('/search',{
        params:{
          part: 'snippet',
          maxResult: 5,
          key: 'AIzaSyDvkdbtQUUAspz_MFEIgLRVCkYxKOaldsI',
          q: inputData
        }
      })
      console.log(response);
      setImg(response.data.items[0].snippet.thumbnails.high["url"]);
      setChannel(response.data.items[0].snippet.channelTitle);
      setTitle(response.data.items[0].snippet.title);
      setDescription(response.data.items[0].snippet.description);

    };
    getData();
  }, []);
  

  
  return (
    <div className="app">
      <Router>
        <Header childtoParent={childToParent}/>
        <Switch>
          <Route path="/search/:searchTerm">
            <div className='search__page'>
            <Sidebar />
            <SearchPage image={image} channel={channel} description={description} />
            </div>
            
          </Route>
          <Route path="/" >
            <div className='app__page'>
              <Sidebar />
              <RecommendedVideos image={image} title={title} channel={channel} views={views} timestamp={timestamp} channelImage={channelImage} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
