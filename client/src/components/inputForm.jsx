import React, { Component } from 'react'
import axios from "axios"
import Container from './dataContainer'
export class PostForm extends Component {

constructor(props) {
  super(props)

  this.state = {
     date:"",
     salary:[],
     bonus:[],
     bDates: "",
     sDates: "",
     waitingForDate: "Please select a date...."
  }
}
changeHandler = (e) => { 
    this.setState({[e.target.name]: e.target.value})
}
submitHandler = e => {
    e.preventDefault()
    axios.get ("http://localhost:4000?date_input=".concat(this.state.date))
    .then(res => {

this.setState({
    salary: res.data[0],
    bonus: res.data[1], 
    bDates: "Bonus Dates:", 
    sDates: "Salary Dates", 
    waitingForDate: false
})

    }).catch(err =>
        console.log(err))
}
  render() {
  
    const {date, salary, bonus, bDates, sDates, waitingForDate} = this.state
    return (
      <div className='Form'>
        <form onSubmit={this.submitHandler}> 
        <h1>Enter a date to calculate the salary and bonus dates for the next 12 months:</h1>

        <input type="date" name = "date" value={date} onChange = {this.changeHandler}/>
        <button type ="submit"> submit </button>        </form>

        <span>
    
        <h1>{bDates}</h1>
        <div className='container'>
        {salary.map((e) => <Container  key = {Math.random()}  dateValue = {e}/> )}
        </div>

        <h1>{sDates}</h1>
        <div className='container'>
        {bonus.map((e) => <Container key = {Math.random()} dateValue = {e}/> )}
        </div>
        <h1>{waitingForDate}</h1>

        </span>
    </div>
 
    ) 
  }
}

export default PostForm;

