function Main() {
    return (
      <>
        <main className="main-body">
        <nav className="navigation">
                      <a id="navele" href="/html/">HOME</a>
                      <a id="navele" href="/css/">CRICKET</a> 
                      <a id="navele" href="/js/">BADMINTON</a>
                      <select id="canteen">
                          <option value="" disabled selected>CANTEEN</option>
                          <option value="Cricket">Veg</option>
                          <option value="Transport">Non-Veg</option>
                      </select>
              
               </nav>
              <div className="quote">
                  <p className="quotetxt">Book,Play,Eat,Repeat</p>
              </div>
              <div className="sidebyside">
                  <div id="indiadiv">
                      <img className="india" src="https://www.playspots.in/wp-content/uploads/2024/11/india-map.webp"></img>
                      
                  </div>
                  <div className="quotearea">
                      Play Anywhere,Anytime in India
                  </div>
              
                  
                  
              </div>
              <h2 className="Enquiryform"> Enquiry Form</h2>
              <div id="form">
                  <form id="searchingform">
                      <select id="category">
                          <option value="" disabled selected>Select a sport</option>
                          <option value="Cricket">Cricket</option>
                          <option value="Transport">Badminton</option>
                      </select>
                      <select id="states" name="states">
                          <option value="" disabled selected>Select a state</option>
                          <option value="andhra-pradesh">Andhra Pradesh</option>
                          <option value="arunachal-pradesh">Arunachal Pradesh</option>
                          <option value="assam">Assam</option>
                          <option value="bihar">Bihar</option>
                          <option value="chhattisgarh">Chhattisgarh</option>
                          <option value="goa">Goa</option>
                          <option value="gujarat">Gujarat</option>
                          <option value="haryana">Haryana</option>
                          <option value="himachal-pradesh">Himachal Pradesh</option>
                          <option value="jharkhand">Jharkhand</option>
                          <option value="karnataka">Karnataka</option>
                          <option value="kerala">Kerala</option>
                          <option value="madhya-pradesh">Madhya Pradesh</option>
                          <option value="maharashtra">Maharashtra</option>
                          <option value="manipur">Manipur</option>
                          <option value="meghalaya">Meghalaya</option>
                          <option value="mizoram">Mizoram</option>
                          <option value="nagaland">Nagaland</option>
                          <option value="odisha">Odisha</option>
                          <option value="punjab">Punjab</option>
                          <option value="rajasthan">Rajasthan</option>
                          <option value="sikkim">Sikkim</option>
                          <option value="tamil-nadu">Tamil Nadu</option>
                          <option value="telangana">Telangana</option>
                          <option value="tripura">Tripura</option>
                          <option value="uttar-pradesh">Uttar Pradesh</option>
                          <option value="uttarakhand">Uttarakhand</option>
                          <option value="west-bengal">West Bengal</option>
                   </select>
                      <input type="date" id="date"></input>
                      
                      <button className="submit" type="submit">Search</button>
                  </form>
              </div>
              <div className="products">
                <div className="prod">
                    <img className="prodimg" src="https://media.istockphoto.com/id/493868298/photo/close-up-of-a-cricket-bat.jpg?s=1024x1024&w=is&k=20&c=q2bJOBlZOSptjYSzQ83_QYEz6obvZk-P1YLJGko1pX0=" alt="" />
                    <h1>Cricket Bat</h1>
                    <p>This is the bat which is preffered by many international cricketers to hit massive sixes.</p>
                    <div className="prodbuttons">
                        <div>
                            <p>$2.99</p>
                            <button className="buyrent">Rent</button>
                        </div>
                        <div>
                            <p>$60.99</p>
                            <button className="buyrent">Buy</button>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="prod">
                <img className="prodimg" src="https://nwscdn.com/media/catalog/product/cache/h700xw700/c/r/cricket-club-ball-family_1.jpg" alt="" />
                    <h1>Cricket Ball</h1>
                    <p>This is a ball which will be interlinked with neauralink and spins as you think.</p>
                    <div className="prodbuttons">
                        <div>
                            <p>$2.99</p>
                            <button className="buyrent">Rent</button>
                        </div>
                        <div>
                            <p>$60.99</p>
                            <button className="buyrent">Buy</button>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="prod">
                <img className="prodimg" src="https://www.livemint.com/lm-img/img/2024/11/12/600x338/best_badminton_racket_1731392114857_1731392137197.webp" alt="" />
                    <h1>Racket</h1>
                    <p>This is a Racket which will produce a boost when you want a give a smash.</p>
                    <div className="prodbuttons">
                        <div>
                            <p>$2.99</p>
                            <button className="buyrent">Rent</button>
                        </div>
                        <div>
                            <p>$60.99</p>
                            <button className="buyrent">Buy</button>
                        </div>
                        
                        
                    </div>
                </div>
              </div>
        </main>
      </>
    );
  }
  
  export default Main;