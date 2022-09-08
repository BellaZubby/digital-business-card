import './App.css';
import Work from './Work.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Project from './Project.js';
import photo from './photo.js';

function App() {
  const photoData = photo.map(item =>{
    return <Project 
       img = {item.img}
       location = {item.location}
       description = {item.description}
    />
  })
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/">
           <Work/>
         </Route>
       </Switch>
       <Switch>
         <Route path='/project'>
           {photoData}
           
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
