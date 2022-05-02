// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit", addMatch)




function addMatch(){

    var arr =  JSON.parse(localStorage.getItem("schedule")) || [];

    event.preventDefault()

       var match_Obj= { matchNo: document.querySelector("#matchNum").value,
                       teamA:   document.querySelector("#teamA").value, 
                       teamB:   document.querySelector("#teamB").value, 
                       date:     document.querySelector("#date").value,
                       venue:    document.querySelector("#venue").value, }
    
  
        arr.push(match_Obj)
    



    
    
    localStorage.setItem("schedule", JSON.stringify(arr))

   window.location.href="matches.html"




}
