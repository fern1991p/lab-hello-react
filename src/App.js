import './App.css';

function Header() {
  return (
    <div className="centered">
      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt=""></img>
      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt=""></img>
    </div>
  );
}
function HeaderText() {
  return (
    <div>
      <div>
        <h1 className="title"><b>Say hello to <br/>ReactJS </b> </h1>
        <p>
          You will learn how to use <br/>the most popular frontend library<br/> and
          become a super Ninja developer.
        </p>
      </div>
      <button className="btn">Awesome!</button>
    </div>
  );
}

function Declarative() {
  return (
    <div>
      <img src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png' alt=""></img>
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
  );
}
function Components() {
  return (
    <div>
      <img src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png' alt=""></img>
      <h3>Components</h3>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
  );
}
function SingleWay() {
  return (
    <div>
      <img src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png' alt=""></img>
      <h3>Single-Way</h3>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
  );
}
function JSX() {
  return (
    <div>
      <img src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png' alt=""></img>
      <h3>JSX</h3>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
  );
}


function App() {
  return (


    <div>
    <div className="backgroundclass">
    <div className="header">
      <Header />  
    </div>

    <div>
      <HeaderText />
    </div>
    </div>
    <div className="middle">
      <Declarative />
      <Components />
      <SingleWay />
      <JSX />
    </div>


    </div>
  );
}
export default App;
