function Header() {
    return (
      <nav>      
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png
"></img>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png
"></img>
      </nav>
    )
}

function Introduction() {
    return (
      <div>  
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
      <button>Awesome</button>
    </div>
    )
  }

function Info(){
    return (
        <div> 

        <div> 
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png
"></img>
        <h4>Declarative</h4> 
        <p> React males it painless to create interactive UI's </p>
        </div> 

        <div>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png
"></img>
        <h4>Components</h4> 
        <p> Build enclapsualted.. </p>
        </div>  

        <div>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png
"></img>
        <h4>Single-way</h4> 
        <p> A set pf Immutable...</p>
        </div>

        <div>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png
"></img>
        <h4>JSX</h4> 
        <p> Statistically-typed.. </p>
        </div>

      </div> 
        
    )
} 
function App() {
    return (
        <div className="App"> 
        <Header/>
        <Introduction/>
        <Info/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#app"))