const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors({
    origin: "*",
}))
const port = 4000


    function dateRange(startDate, endDate, steps = 1) 
    {
      var intailDate = new Date (startDate);
      console.log( intailDate.getFullYear() + 1 + "-"+ Number(intailDate.getUTCMonth()+ 2) +"-" + intailDate.getUTCDate() )
      endDate = new Date(intailDate.getFullYear() + 1 + "-"+ (intailDate.getUTCMonth()+2) +"-" + intailDate.getUTCDate() );



        const dateArray = [];
        const bonusDates = [];
        const salaryDates =[];
       
        let currentDate = new Date(startDate);
      
        while (currentDate <= new Date(endDate)) {
          dateArray.push(new Date(currentDate));
          // Use UTC date to prevent problems with time zones and DST
          currentDate.setUTCDate(currentDate.getUTCDate() + steps);
        }

      
        return (checkDate(dateArray,bonusDates,salaryDates))
    ;}
      
      
function checkDate (dateArray,bonusDates,salaryDates) { for ( i = 0; i <= dateArray.length; i++ ){
 

   //gets the bonus dates while also filtering the weekends 
    if(Number(new Date (dateArray[i]).getUTCDate()) === 15 )
    {
   
    
         if((new Date (dateArray[i])).getUTCDay()=== 0) {  bonusDates.push(dateArray[i + 3])}
        else if ((new Date (dateArray[i])).getUTCDay()===6) {bonusDates.push(dateArray[i+4])}
        else {   bonusDates.push(dateArray[i])  }        
    }

       else if ((new Date (dateArray[i])).getDate() === (new Date(new Date(dateArray[i]).getFullYear(), new Date (dateArray[i]).getMonth() )).getDate())
       {
        if ((new Date(dateArray[i]).getUTCDay()) <6 && (new Date(dateArray[i]).getUTCDay())>0 ) {salaryDates.push(dateArray[i-1])}

        if ((new Date(dateArray[i]).getUTCDay()) === 0) {salaryDates.push(dateArray[i-2])}

            else if ((new Date(dateArray[i])).getUTCDay() === 6) {salaryDates.push(dateArray[i-1])}        

        }
       }
return ([bonusDates,salaryDates]);
}


app.get('/', (req, res) => {

  res.send(dateRange(req.query.date_input))});


 app.listen(port, () => {
  console.log(`server is up on:  ${port}`)
  })

