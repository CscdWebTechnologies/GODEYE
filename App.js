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
 
            

            
            


                  </div>



</div>



  }


}




export default App;
