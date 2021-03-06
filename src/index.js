import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/app/';
//
// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 26
//         }
//         this.nextYear = () => {
//             this.setState(state => ({
//                 years: ++state.years
//             }))
//         }
//     }
//
//     render() {
//         const {name, surname, link} = this.props;
//         const {years} = this.state;
//         return (
//             <>
//                 <button onClick={this.nextYear}>++</button>
//                 <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//                 <a href={link}>My profile</a>
//             </>
//         )
//     }
// }
//
// const All = () => {
//     return (
//         <>
//             <WhoAmI name="Vikulya" surname="Zhivagina" link="https://www.instagram.com/viktoriyapm/"/>
//             <WhoAmI name="Egor" surname="Zhivagin" link="https://www.instagram.com/viktoriyapm/"/>
//             <WhoAmI name="John" surname="Zhivagin" link="https://www.instagram.com/viktoriyapm/"/>
//         </>
//     )
// }

ReactDOM.render(
    // <All/>,
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
