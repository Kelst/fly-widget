const tableBody=document.getElementById("table-body")

const getFlights=()=>{
    fetch("http://localhost:8000/flights").then(response=>response.json())
    .then(flights=>{
        console.log(flights);
        populateTable(flights)
    })
    .catch(err=>console.log(err))
}
getFlights();

const populateTable=(flights)=>{
    for(const flight of flights){
     const tableRow=document.createElement("tr");
    const tableIcon=document.createElement("td");
    tableIcon.textContent="✈" ;
    tableRow.append(tableIcon);
    tableBody.append(tableRow)
    const flightDetails={
        time:flight.departing,
        destination:flight.destination.toUpperCase(),
        flight:flight.flightNumber.shift(),
        gate:flight.gate,
        remarks:flight.status.toUpperCase()

    };

    for(const flightDetail in flightDetails){
     const tableCell=  document.createElement("td") 
     const word=Array.from(flightDetails[flightDetail])
     for(const[index,letter]of word.entries()){
        const letterEllement=document.createElement("div");
        setTimeout(()=>{
            letterEllement.classList.add("flip")
            letterEllement.textContent=letter
            tableCell.append(letterEllement)
        },100*index)
       
     
     }
     tableRow.append(tableCell)
    }

    }
   

}