import React, { useState } from 'react';
import './Home.css'; // Import the CSS file


const Home = () => {
  // To extract the query entered by the user.
  const [query, setQuery] = useState('');

  // Function to handle click on search button.
  const handleSearch = () => {
    if(query==""){
      alert("Please enter something to search");
    }else{
    alert(`Searching for: ${query}`);
    }
    // Will implement API here later on.
  };

  return (
        <>
        {/*------------------- The top area for links such as Drive, Mail ---------------- */}

        <div className="topEle">
          <span><a href="http://">Gmail</a></span>
          <span><a href="http://">Images</a></span>
          <a href="http://https://drive.google.com/drive/"><img src="https://lh3.googleusercontent.com/ogw/ANLem4a5e3hHQ4smA2RuUKzQfN5aTB4i1HfNfU4OgW5X6g=s32-c-mo" alt="" srcset="" /></a>
        </div>
        {/* ----------------- Top area completed ---------------- */}



        {/* ----------------- Google Logo ---------------- */}

        <div className="logo">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="" srcset="" />
        </div>
        {/* ----------------- Google Logo completed ---------------- */}



        {/* ----------------- Search Bar ---------------- */}

        <div className="search-bar">
          <input 
          type="text" 
          placeholder="What are you looking for?"
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          />
          <div className='buttons'>
          <button onClick={handleSearch}>Google Search</button>
          <button> <a className='linkStyle' target='_blank' href="https://doodles.google/">I'm feeling lucky</a></button>
          </div>
        </div>
        {/* ----------------- Search Bar completed ---------------- */}


        </>
  );
};

export default Home;
