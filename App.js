import './App.css';
import React from "react";


class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      showMenu: false,
      showMenu2: false,
      showMenu3: false,
      showMenu4: false,
      showMenu5: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.showMenu2 = this.showMenu2.bind(this);

       this.showMenu3 = this.showMenu3.bind(this);

    this.showMenu4 = this.showMenu4.bind(this);

    this.showMenu5 = this.showMenu5.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ 
      showMenu: true
      },() => {document.addEventListener('mouseout', this.closeMenu);
    });  
  }


  showMenu2(event) {
    event.preventDefault();

     this.setState({ 
      showMenu2: true
      },() => {document.addEventListener('mouseout', this.closeMenu);
    });  

  }

  
  showMenu3(event) {
    event.preventDefault();
    this.setState({ 
      showMenu3: true
      },() => {document.addEventListener('mouseout', this.closeMenu);
    }); 
  }


  showMenu4(event) {
    event.preventDefault();

    this.setState({ 
      showMenu4: true
      },() => {document.addEventListener('mouseout', this.closeMenu);
    });  
  }


  showMenu5(event) {
    event.preventDefault();

    this.setState({ 
      showMenu5: true
      },() => {document.addEventListener('mouseout', this.closeMenu);
    });  
  }
    


closeMenu(nativeEvent) {


  if(this.submenuBody && this.submenuBody.contains(nativeEvent.target)) return
  else if(this.submenuBody1 && this.submenuBody1.contains(nativeEvent.target)) return
  else if(this.submenuBody2 && this.submenuBody2.contains(nativeEvent.target)) return
  else if(this.submenuBody3 && this.submenuBody3.contains(nativeEvent.target)) return
  else if(this.submenuBody4 && this.submenuBody4.contains(nativeEvent.target)) return
  else if(this.submenuBody5 && this.submenuBody5.contains(nativeEvent.target)) return
  else if(this.submenuBody6 && this.submenuBody6.contains(nativeEvent.target)) return
  else if(this.submenuBody7 && this.submenuBody7.contains(nativeEvent.target)) return
  else if(this.submenuBody8 && this.submenuBody8.contains(nativeEvent.target)) return
  else if(this.submenuBody9 && this.submenuBody9.contains(nativeEvent.target)) return
  else if(this.submenuBody10 && this.submenuBody10.contains(nativeEvent.target)) return


else
  this.setState({
    showMenu: false,
    showMenu2: false,
    showMenu3: false,
    showMenu4: false,
    showMenu5: false
   }, () => {
      document.removeEventListener('mouseout', this.closeMenu);
    
  });
}



























  

  
  render() {

  return <div>
    
    <div className="menu">
            <div className="title">
        coinbase </div>
              <div className="nav">
              <a href=""><div className="list">Prices</div></a>
              <a href=""><div className="list1" ref={ref => this.submenuBody = ref}
                  onMouseOver={this.showMenu}>Learn</div></a>
                  <a href=""><div className="list2" ref={ref => this.submenuBody2 = ref} 
                  onMouseOver ={this.showMenu2}>Individual</div></a>
                  <a href=""><div className="list3"ref={ref => this.submenuBody3 = ref}
                  onMouseOver ={this.showMenu3}>Businesses</div></a>
                  <a href=""><div className="list4"ref={ref => this.submenuBody4 = ref}
                  onMouseOver ={this.showMenu4}>Developers</div></a>
                  <a href=""><div className="list5"ref={ref => this.submenuBody5 = ref}
                  onMouseOver ={this.showMenu5}>Company</div></a>
  
              </div>

                <div className="signAndSearch">
                  <div className="signIn">Sign in
                  </div>
                      <button className="search">Get Started
                      </button>
                </div>

                </div>










  

                { 
                  this.state.showMenu 
                ? (
                <div className="Individuals" ref={ref => this.submenuBody6 = ref}>
                <div className="Learn1" >
                <div className="TiTu" ><a href=""><span>{">"} </span> Tips & Tutorials</a></div>
                <div className="TiTu"><a href=""><span>{">"} </span> Crypto basics</a></div>
                <div className="TiTu" ><a href=""><span>{">"} </span>  Market updates</a></div> </div>
                <div className="Learn2">
                <div className="other"> Crypto questions answered</div>
                <div className="comment" >Guides and explainers 
                for your Crypto questions</div>
                <div className="SeeMore" ><a href="">See all articles</a></div> </div>
                 </div>

                ) 
                : (
                  null
                )
                }





                               {
                  this.state.showMenu2 
                ? (
                <div className="IndividualsR"  ref={ref => this.submenuBody7 = ref}>
                <div className="Indiv1">
                <div className="Indiv1Group1">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg"/></a><div className="IndivBAS"><a href="">
                Buy and Sell</a></div><div className="IndivBAScomment"><a href="">Buy,
                sell and use crypto</a></div>
                </div>
                
                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/2FKR6IDTINoO7Nt9Bqg6W9/bddc23743128cc3033b4d2f84d4ed103/earn-icon.svg"/></a><div className="IndivBAS"><a href="">
                Earn free crypto</a></div><div className="IndivBASEcomment"><a href="">Buy,
                Learn and earn crypto</a></div>
                </div>

                <div className="secondIndivNew"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/4mo5MpvlVj04YOVoyLr7wM/4f246f6bd1ef15915397eb56d5945477/PrivateClient_-_Round.svg"/></a><div className="IndivBAS"><a href="">
                Private Client</a></div><div className="IndivBASEarncomment"><a href=""> For trusts, 
                family offices, UHNWIs</a></div>
                </div>
                </div>

                <div className="Indiv1Group2">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/1VeWI2Rpj7YCnzeKoPpsMX/419fa422554e8fa3a9ec301eaa90dcfd/round-wallet.svg"/></a><div className="IndivBAS">
                <a href="">Wallet</a></div><div className="IndivBASWalcomment"><a href="">The 
                best self-hosted crypto wallet</a></div>
                </div>
                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/3amX3womuq37keL9QF44SX/11830020dd38695de3ee3d7110eb7b38/round-card.svg"/></a><div className="IndivBAS">
                <a href="">Card</a></div><div className="IndivBASWalcomment"><a href="">Spend crypto,
               earn crypto rewards</a></div>
                </div>
                </div>
  
                <div className="IndivGroup3">
                <div className="otherIndiv"> Crypto tools for everyone</div>
                <div className="commentIndiv">Buy, sell and 
                spend cypto on the world's on trusted cyrpto exchange</div>
                <div className="SeeMore"><a href="">See all products</a></div> </div>
                 </div>
                 </div>


                ) 
                : (
                  null
                )
                }               {
                  this.state.showMenu3
                ? (

                <div className="IndividualsB"  ref={ref => this.submenuBody8 = ref}>
                <div className="Indiv1">
                <div className="Indiv1Group1">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/1B2lWSiOAFK6CitniZDOm6/a38890c20ba91c7d730fde6eb1d9bb3e/prime-icon.svg"/></a><div className="IndivBAS"><a href="">
                Prime</a></div><div className="IndivBASPCcomment"><a href="">The 
                prime brokerage platform</a></div>
                </div>
                
                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/EtdyFCX7iknLgMd8QmEFE/3b11e239601461f579b1fd6e14284b36/custody-icon.svg"/></a><div className="IndivBAS"><a href="">
                Custody</a></div><div className="IndivBASPCcomment"><a href="">Institutional-
                grade offline storage</a></div>
                </div>
                </div>

                <div className="Indiv1Group2">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/1ke3aZrKAkc57nbjxVTMtc/85533126e5dfd8d62907775d3b124cf9/commerce-icon.svg"/></a><div className="IndivBAS"><a href="">
                Commerce</a></div><div className="IndivBAScomment"><a href="">Accept crypto from 
               anyone</a></div>
                </div>

                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/1oqbWFudTFmn217o4gSrPe/8adfd4267db4cbbf5d5521038a58a0a1/asset-hub-icon.svg"/></a><div className="IndivBAS"><a href="">Asset Hub
                </a></div><div className="IndivBAScomment"><a href="">List your asset on 
              coinbase</a></div>
                </div>
                </div>
  
                <div className="IndivGroup3">
                <div className="other"> Built for businesses 
                and institutions</div>
                <div className="comment">Crypto solutions for institutional investors, 
                family offices, and businesses</div>
                <div className="SeeMore"><a href="">See all products</a></div> </div>
                 </div>
                 </div>

                ) 
                : (
                  null
                )
                }               {
                  this.state.showMenu4
                ? (
                  <div className="IndividualsD"  ref={ref => this.submenuBody9 = ref}>
                  <div className="Indiv1">
                  <div className="Indiv1Group1">
                  <div className="firstIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>
                  Connect</a></div><div className="IndivBASDcomment"><a href="">Enable users to buy,
                  l, and store crypto</a></div>
                  </div>

                  <div className="secondIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>
                  Custody</a></div><div className="IndivBASDcomment"><a href="">Institutional-
                  grade offline storage</a></div>
                  </div>
    
                  <div className="thirdIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>Pro</a>
                  </div><div className="IndivBASDcomment"><a href="">Programmatically
                 manage crypto</a></div>
                  </div>
                  </div>
  
                  <div className="Indiv1Group2">
                  <div className="firstIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>Bison Trails</a>
                  </div><div className="IndivBASDcomment"><a href="">Pioneering blockchain 
                  infrastructure</a></div>
                  </div>
  
                  <div className="secondIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>WalletLink</a>
                  </div><div className="IndivBASDcomment"><a href="">Link your DApp to
                 mobile wallets</a></div>
                  </div>

                <div className="thirdIndiv">
                <div className="IndivBAS"><a href=""><span>{">"}</span>Rosetta</a></div>
                <div className="IndivBASDcomment"><a href="">Integrate your blockchain 
                everywhere</a></div>
                  </div>
                  </div>
    
                  <div className="IndivGroup3">
                  <div className="other"> Build with Coinbase Cloud</div>
                  <div className="comment">Tools and APIs for 
                  developers building with crypto</div>
                  <div className="SeeMore"><a href="">Explore coinbase</a></div> </div>
                   </div>
                   </div>

                ) 
                : (
                  null
                )
                }               {
                  this.state.showMenu5
                ? (
                  <div className="Individuals"  ref={ref => this.submenuBody10 = ref}>
                  <div className="Company1">
                  <div className="TiTu"><a href=""><span>{">"} </span> About</a></div>
                  <div className="TiTu"><a href=""><span>{">"} </span> Careers</a></div>
                  <div className="TiTu"><a href=""><span>{">"} </span> Affiliates</a></div>
                  </div>

                  <div className="Company2">
                  <div className="TiTu"><a href=""><span>{">"} </span>   Support</a></div>
                  <div className="TiTu"><a href=""><span>{">"} </span>   Blog</a></div>
                  </div>
                  <div className="Company3">
                  <div className="other"> Learn all about Coinbase</div>
                  <div className="comment">We're building an open 
                  financial system for the world.</div>
                   </div>
                   </div>

                ) 
                : (
                  null
                )
                }




                

        <div className="wrapper">

            <div className="JumpStart">
            <a href=""><div class="bitcoinImg"><img src="data:image/png;base64,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" 
            className="bitlink"/></div><div class="bitcoinTxt">Jump start your portfolio --> </div></a>
            <div className="Jump"><h1>Jump start your crypto portfolio </h1></div>
            <div className="JumpComm">Coinbase is the easiest 
            place to buy and sell cryptocurrency. Sign up and get 
            started today.</div>
            <div >
            <form action="" method="">
            <input type="email" name="email" placeholder="Email address" 
            className="Email"
            />
            <input type="submit" value="Get started" name="submit" className="getStarted"
            />
            </form>
            </div >
            <div className="last">
            <a href="" className="last">*Terms apply</a></div>
            </div>

            <div className="circle"></div>
            <div className="mobile"><img className="mobileImg" src="https://play-lh.googleusercontent.com/2k2zVCdzp88js2i-BlNKNJpuHTqO0k2G67BmW_8R9caBO33evmywx093W1PGnY10zKF2"/></div>





            <table>
              <tr className="head">
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
                <th>Chart</th>
                <th>Trade</th>
              </tr>
              <tr>
                <td className="Numbers">1</td>
                <td><img className="bit" src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"/><span className="coin">Bitcoin </span><span className="b">BTC</span></td>
                <td className="price">GHS 324,401.28</td>
                <td className="change">+1.27%</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iY4ne7lULSq1xpbYlufYGqDZPY134kZUDQ&usqp=CAU"/></td>
                <td ><button className="buy">Buy</button></td>
              </tr>              
              <tr>
                <td className="Numbers">2</td>
                <td><img className="bit"  src="https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png"/> <span className="coin">Ethereum</span><span className="b">ETH</span></td>
                <td className="price">GHS 24,637.82</td>
                <td className="change">+8.07%</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iY4ne7lULSq1xpbYlufYGqDZPY134kZUDQ&usqp=CAU"/></td>
                <td ><button className="buy">Buy</button></td>
              </tr>                      <tr>
                <td className="Numbers">3</td>
                <td><img className="bit"  src="https://dynamic-assets.coinbase.com/93a4303d1b0410b79bb1feac01020e4e7bdf8e6ece68282d0af2c7d0b481c5f5c44c0cec1d7071ae8f84674dbd139e290d50a038a6a4c1bbc856ec0871b5f3e2/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"/> <span className="coin">Bitcoin cash</span><span className="b">BTH</span></td>
                <td className="price">GHS 8,471.21</td>
                <td className="change">+6.79%</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iY4ne7lULSq1xpbYlufYGqDZPY134kZUDQ&usqp=CAU"/></td>
                <td ><button className="buy">Buy</button></td>
              </tr>                      <tr>
                <td className="Numbers">4</td>
                <td><img className="bit"  src="https://dynamic-assets.coinbase.com/f018870b721574ef7f269b9fd91b36042dc05ebed4ae9dcdc340a1bae5b359e8760a8c224bc99466db704d10a3e23cf1f4cd1ff6f647340c4c9c899a9e6595cd/asset_icons/984a4fe2ba5b2c325c06e4c2f3ba3f1c1fef1f157edb3b8ebbfe234340a157a5.png"/><span className="coin">Litecoin </span><span className="b">LTC</span></td>
                <td className="price">GHS 2,121.98</td>
                <td className="change">+3.50%/</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iY4ne7lULSq1xpbYlufYGqDZPY134kZUDQ&usqp=CAU"/></td>
                <td ><button className="buy">Buy</button></td>
              </tr>        
            </table>


            <div>
                <div className="Earn">
              <div >Earn up to $25 worth of crypto
              <p className="discover">Discover how specific cryptocurrencies work — 
                and get a bit of each crypto to try out for yourself.</p></div>
              <div>
                <button className="startButton">Start earning</button>
                </div>
                </div>

              </div>



              <div className="Ampleforth">

              <div className="Ampdiv"><a href="" ><div class="AmpImg"><img src="https://static-assets.coinbase.com/earn/campaigns/skale/asset-logo.svg"/></div><div className="Compound"><h2>SKALE SKL</h2></div>
                <div className="forth"><h3></h3></div><div class="E">Earn $3 SKALE</div></a></div>


            
                <div className="Ampdiv"><a href="" ><div class="AmpImg"><img src="https://static-assets.coinbase.com/earn/campaigns/ampleforth-governance-token/asset-logo.svg"/></div><div className="Amp"><h2>Ampleforth</h2>
                <h2>Governance Token</h2></div>   <div className="forth"><h3>FORTH</h3></div>
                <div class="E">Earn $3 FORTH</div></a></div>
             
               <div className="Ampdiv"><a href="" ><div class="AmpImg"><img src="https://static-assets.coinbase.com/earn/campaigns/the-graph/asset-logo.svg"/></div><div className="Graph"><h2>The Graph GRT</h2></div>
                <div className="forth"><h3></h3></div> <div class="E">Earn $3 GRT</div></a></div>

                <div className="Ampdiv"><a href="" ><div class="AmpImg"><img src="https://static-assets.coinbase.com/earn/campaigns/stellar/asset-logo.svg"/></div><div className="Stellar"><h2>Stellar Lumens LXM</h2></div>            
                <div className="forth"><h3></h3></div><div class="E">Earn $10 XLM</div></a></div>

                <div className="View"><a href="">View more{" >"}</a></div>

                </div>
 







      <div className="Create">Create your cryptocurrency portfolio today</div>
          <div className="Coinbase">Coinbase has a variety of features that
             make it the best place to start trading</div>










            <div className="DocImage">

              <div >
                <div className="ManageImg"><img src="data:image/png;base64,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" /></div>
                <div className="Manage">Manage your portfolio
                <p className="Buy">Buy and sell popular digital currencies,
                   keep track of them in the one place.</p></div>
              </div>

              <div>
                <div className="ManageImg"><img src="data:image/png;base64,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"/></div>
                <div className="Manage">Recurring buys
                <p className="Buy">Invest in cryptocurrency slowly over
                   time by scheduling buys daily, weekly, or monthly.</p></div>
              </div>

              <div>
                <div className="ManageImg"><img src="data:image/jpeg;base64,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" /></div>
                <div className="Manage">Vault protection
                <p className="Buy">For added security, store your
                   funds in a vault with time delayed withdrawals.</p>
                </div>
    
              </div>

              <div>
                <div className="ManageImg"><img src="data:image/png;base64,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" /></div>
                <div className="Manage">Mobile apps
                  <p className="Buy">Stay on top of the markets
                     with the Coinbase app for Android or iOS.</p>
                </div>
              </div>
              
            </div>

           <img src="https://assets.coinbase.com/assets/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp" className="phoneImg" />

          

      <div className="customHr"></div>
           

           <div className="Create">The most trusted cryptocurrency platform</div>
             <div className="Coinbase">
             Here are a few reasons why you should choose Coinbase</div>





</div>









</div>



  }


}




export default App;
