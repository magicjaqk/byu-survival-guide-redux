// import React from 'react';
// import './App.css';
// import NavBar from './NavBar';
// import Home from './Home';
// import About from './About';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {CSSTransition, TransitionGroup} from 'react-transition-group';

// const App = () => {

//   return (
//     <Router>
//       <div className="App">
//         <NavBar />
//         <Route render={({location}) => (
//           <TransitionGroup>
//             <CSSTransition
//               key={location.key}
//               classNames="fade"
//               timeout={300}
//             >
//               <Switch location={location}>
//                 <Route path="/" exact children={<Home />} />
//                 <Route path="/about" children={<About />} />
//                 <Route component={() => (<h1 className="mx-auto mt-3">Error: Page Not Found</h1>)} />
//               </Switch>
//             </CSSTransition>
//           </TransitionGroup>
//         )} />
//       </div>
//     </Router>
//   );
// }

// export default App;
