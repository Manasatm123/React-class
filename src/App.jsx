// import './App.css'
// import img from './assets/logo.jpg'

// function App() {


//   return (
//     <>


//       <nav className='nav'>
//         <div className='react'>REACT</div>
//         <div className='span'>
//           <sapn><a href="">Home</a></sapn>
//           <sapn><a href="">About</a></sapn>
//           <sapn><a href="">Contact</a></sapn>

//         </div>
//       </nav>
//       <div className="container">
//       <div className='image'>
//         <img className='img' src={img} alt="" />
//       </div>
//       <div className='para'>
//         <h1>React</h1>
//         <h2>The Library For Web and native user interface</h2>
//         <p>React is a javascript library to built frontend or ui component in a webpage.React helps to create easy and maintainable webpage.React is a library not a framework</p>
//       </div>
//       </div>

//     </>
//   )
// }

// export default App


// import React from "react"

// class App extends React.Component{
//   list=["one","two","three","four","five"]

//   render(){
//     return(
//       <>
//       {
//         this.list.map((item,index)=>{
//           return <h3 key={index}>{item}</h3>
//         })
//       }
//       </>
//     )
//   }
// }

// export default App



// import React from "react"
// import ListComp from "./Components/ListComp"
// class App extends React.Component{

//   render(){
//     return(
//       <>
//       <h1>Hello</h1>
//       <ListComp data={"Hey There I am Manasa"}/>
//       </>
//     )
//   }
// }

// export default App


// import React from "react"
// import ListComp from "./Components/ListComp"
// class App extends React.Component {
//   state={
//   count: 0
// }
//   increment = () => {
//   this.setState({ count: this.state.count += 1 })
// }
// decrement = () => {
//   if(this.state.count>0)
//   this.setState({ count: this.state.count -= 1 })
// }
//   render(){
//     return (
//     <>
// <button onClick={this.increment}>Increment</button>
// <br/>
// <br/>
// <button onClick={this.decrement}>Decrement</button>
// <ListComp count={this.state.count} />
//       </>
//     )
//   }
// }

// export default App






import React from "react"
// import ListComp from "./Components/ListComp"
class App extends React.Component {
  state = {
    task: "",
    todo: [] 
  };
  changeData = (e) => {
    this.setState
      ({ task: e.target.value })
  }
  addTask = () => {
    this.setState({ todo: [...this.state.todo, this.state.task] })
  }
  delTask= ()=>{
    this.setState({todo: this.state.todo.filter(td => td !== this.state.task) })
  }

  render() {
    console.log(this.state);

    return (
      <>
        <input type="text" onChange={this.changeData} />
        <button onClick={this.addTask}>Add</button>
        <button onClick={this.delTask}>Delete</button>


        <ul>
          {
            this.state.todo.map((td, index) => <li key={index}>{td}</li>)
          }
        </ul>
      </>
    )
  }
}

export default App










