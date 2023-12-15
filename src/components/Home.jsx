import React, { useState } from 'react';
import './Home.css'; // Import the CSS file


const Home = () => {
  // To extract the query entered by the user.
  const [query, setQuery] = useState('');

  // Function to handle click on search button.
  const handleSearch = () => {
    if(query==""){
      // alert("Please enter something to search");
    }
    // alert(`Searching for: ${query}`);
    // }

    // My logic for search implementation.
    else{
    window.location.href = "https://www.google.com/search?q="+query+"&sca_esv=590900121&sxsrf=AM9HkKmMpPGtqrC51gJIjaePw4TsZhPjNQ%3A1702565082442&source=hp&ei=2hR7ZafYE4Le2roP88yQwAY&iflsig=AO6bgOgAAAAAZXsi6gZ7chBfxnV0BHIxSHVYE7gmVj9F&ved=0ahUKEwinrcGXlY-DAxUCr1YBHXMmBGgQ4dUDCAo&uact=5&oq=football+news&gs_lp=Egdnd3Mtd2l6Ig1mb290YmFsbCBuZXdzMgsQABiABBixAxiDATIFEAAYgAQyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIFEAAYgAQyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABEi3H1CzBFjPHnACeACQAQCYAfABoAHkE6oBBTAuOS40uAEDyAEA-AEBqAIKwgIHECMY6gIYJ8ICChAjGIAEGIoFGCfCAgQQIxgnwgIQEC4YgAQYigUYQxjHARjRA8ICChAAGIAEGIoFGEPCAhEQLhiABBixAxiDARjHARjRA8ICFhAuGIAEGIoFGEMYsQMYgwEYxwEY0QPCAg0QABiABBiKBRhDGLEDwgITEC4YgAQYigUYQxixAxjHARjRA8ICCBAAGIAEGLEDwgIFEC4YgATCAgsQABiABBiKBRiRAsICChAAGIAEGBQYhwI&sclient=gws-wiz";
    }

  };


  return (
        <>
        {/*------------------- The top area for links such as Drive, Mail ---------------- */}

        <div className="topEle">
          <span><a href="https://mail.google.com/">Gmail</a></span>
          <span><a href="https://www.google.com/imghp?hl=en&ogbl">Images</a></span>
          <a href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com/&ec=GBRAmgQ"><img src="https://lh3.googleusercontent.com/ogw/ANLem4a5e3hHQ4smA2RuUKzQfN5aTB4i1HfNfU4OgW5X6g=s32-c-mo" alt="" srcset="" /></a>
        </div>
        {/* ----------------- Top area completed ---------------- */}



        {/* ----------------- Google Logo ---------------- */}

        <div className="logo">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="" srcset="" />
        </div>
        {/* ----------------- Google Logo completed ---------------- */}



        {/* ----------------- Search Bar ---------------- */}

        <div className="search-bar">
          <input onKeyDown={(e)=>{  
            if(e.key=="Enter"){
              handleSearch();
            }
            }
            }
            
          type="text" 
          placeholder=""
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          />

        
        {/* ----------------- Search Buttons ---------------- */}

          <div className='buttons'>
          <button onClick={handleSearch}>Google Search</button>
          <button> <a className='linkStyle' target='_blank' href="https://doodles.google/">I'm Feeling Lucky</a></button>
          </div>
        {/* ----------------- Search Buttons over ---------------- */}

        </div>

        {/* ----------------- Search Bar completed ---------------- */}
          
        {/* ------------------ Languages supported ----------------- */}
          <div className="langs">
            <p>Google offered in:
               <span><a href="https://www.google.com/setprefs?sig=0_OZMz6-dJGTBuxQ4pIET0nCi-1fI%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwibxdqWuY6DAxVgZ2wGHdHMB54Q2ZgBCBU">हिन्दी</a></span>
               <span><a href="https://www.google.com/setprefs?sig=0_OZMz6-dJGTBuxQ4pIET0nCi-1fI%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwibxdqWuY6DAxVgZ2wGHdHMB54Q2ZgBCBY">বাংলা</a></span>
               <span><a href="https://www.google.com/setprefs?sig=0_OZMz6-dJGTBuxQ4pIET0nCi-1fI%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwibxdqWuY6DAxVgZ2wGHdHMB54Q2ZgBCBc">తెలుగు</a></span>
               <span><a href="https://www.google.com/setprefs?sig=0_OZMz6-dJGTBuxQ4pIET0nCi-1fI%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwibxdqWuY6DAxVgZ2wGHdHMB54Q2ZgBCBg">বাংলা</a></span>
               <span><a href="https://www.google.com/setprefs?sig=0_OZMz6-dJGTBuxQ4pIET0nCi-1fI%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwibxdqWuY6DAxVgZ2wGHdHMB54Q2ZgBCBk">தமிழ்</a></span>
               <span><a href="https://www.google.com/setprefs?sig=0_OZMz6-dJGTBuxQ4pIET0nCi-1fI%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwibxdqWuY6DAxVgZ2wGHdHMB54Q2ZgBCBo">ગુજરાતી</a></span>
               <span><a href="https://www.google.com/setprefs?sig=0_OZMz6-dJGTBuxQ4pIET0nCi-1fI%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwibxdqWuY6DAxVgZ2wGHdHMB54Q2ZgBCBs">ಕನ್ನಡ</a></span>
               <span><a href="https://www.google.com/setprefs?sig=0_OZMz6-dJGTBuxQ4pIET0nCi-1fI%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwibxdqWuY6DAxVgZ2wGHdHMB54Q2ZgBCBw">മലയാളം</a></span>
               <span><a href="https://www.google.com/setprefs?sig=0_OZMz6-dJGTBuxQ4pIET0nCi-1fI%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwibxdqWuY6DAxVgZ2wGHdHMB54Q2ZgBCB0">ਪੰਜਾਬੀ</a></span>
            </p>
          </div>
        {/* ------------------ Languages supported completed ----------------- */}

        {/* ------------------ Footers (2 divs) ----------------- */}
          <div className="footers">
          <div className="footer1">
            <p>India</p>
          </div>

          <div className="footer2">
            <div className='lFooter'>
              <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
              <a href="https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
              <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Business</a>
              <a href="https://google.com/search/howsearchworks/?fg=1">How Search works</a>
            </div>

            <div className='lFooter bFooter'>
              <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">Privacy</a>
              <a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a>
              <a href="">Settings</a>
            </div>
          </div>
          </div>
        {/* ------------------ Footers complete ----------------- */}

        </>
  );
};

export default Home;
