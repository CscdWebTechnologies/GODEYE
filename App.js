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


</div>



  }


}




export default App;
