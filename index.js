//https://github.com/sumon7890/ProgrammingHeroAssignment4

const firstTicketInCrises = document.getElementById('inCrises').addEventListener('click',function(){
    let ticketsInput = document.getElementById('firstClassInputValue');
    let ticketsCount = parseInt(ticketsInput.value); 
    let newticketsCount = ticketsCount  
    newticketsCount = ticketsCount + 1;  
    ticketsInput.value = newticketsCount
    newticketsTotal = newticketsCount * 150;
    //  firstClass(true)
    calculator()
    })

//  function firstClass(isIncises){
// //     let ticketsInput = document.getElementById('firstClassInputValue');
// //     let ticketsCount = parseInt(ticketsInput.value); 
// //     let newticketsCount = ticketsCount  
// //     newticketsCount = ticketsCount; 
// //     if(isIncises==true){
// //         newticketsCount = ticketsCount + 1;  
// //     }
// //     else if(isIncises == false){
// //         newticketsCount = ticketsCount - 1;  
// //     }
// //     ticketsInput.value = newticketsCount
// //     newticketsTotal = newticketsCount * 150;
// //     document.getElementById('subTotal').innerText = newticketsCount;

// // }
    const firstTicketDeCrises = document.getElementById('deCrises').addEventListener('click',function(){
    let ticketsInput = document.getElementById('firstClassInputValue');
    let ticketsCount = parseInt(ticketsInput.value); 
    let newticketsCount = ticketsCount  
    newticketsCount = ticketsCount - 1;  
    ticketsInput.value = newticketsCount
    newticketsTotal = newticketsCount * 150;
    calculator()
    })
    const economyTicketInCrises = document.getElementById('economyInCrises').addEventListener('click',function(){
    let ticketsInput = document.getElementById('economyClassInputValue');
    let ticketsCount = parseInt(ticketsInput.value); 
    let newticketsCount = ticketsCount  
    newticketsCount = ticketsCount +1;  
    ticketsInput.value = newticketsCount
    newticketsTotal2 = newticketsCount * 100;
    calculator()    
    })
    const economyTicketDeCrises = document.getElementById('economyDeCrises').addEventListener('click',function(){
    let ticketsInput = document.getElementById('economyClassInputValue');
    let ticketsCount = parseInt(ticketsInput.value); 
    let newticketsCount = ticketsCount  
    newticketsCount = ticketsCount - 1;  
    ticketsInput.value = newticketsCount
    newticketsTotal2 = newticketsCount * 100;
    calculator()
    })
    function calculator(){
    let ticketsInputFirstClass = document.getElementById('firstClassInputValue');
    let ticketsCountFirstClass = parseInt(ticketsInputFirstClass.value); 
    let ticketsInputEconomy = document.getElementById('economyClassInputValue');
    let ticketsCountEconomy = parseInt(ticketsInputEconomy.value); 
    const total = ticketsCountFirstClass * 150 + ticketsCountEconomy * 100;
    document.getElementById('subTotal').innerText = total
    const tex = Math.round(total * 0.1)
    document.getElementById('tex').innerText = tex
    const allTotal = total + tex;
    document.getElementById('allTotal').innerText = allTotal;
    }       
   
    const bookNow = document.getElementById('bookNow').addEventListener('click', function(){
        const reportNow = document.getElementById('reportSection')
        reportNow.style.display = "block"
        const mainContianr = document.getElementById('mainContianr')
        mainContianr.style.display = "none"
    
    
        let ticketsInput = document.getElementById('firstClassInputValue');
        let ticketsCount = parseInt(ticketsInput.value); 
        document.getElementById('totalFirstClass').innerText =ticketsCount;
        const firstTk = ticketsCount * 150 ;
       
    
        let ticketsInput2 = document.getElementById('economyClassInputValue');
        let ticketsCount2 = parseInt(ticketsInput2.value); 
        document.getElementById('totalEconomyClass').innerText = ticketsCount2;
        const economyTk = ticketsCount2 * 100
       
        const SubTotalTk = firstTk + economyTk ;
        document.getElementById('subTotalTk').innerText = SubTotalTk
        
        const totalTex = Math.round(SubTotalTk * 0.1)
        document.getElementById('texTotal').innerText = totalTex
    
    
        const allTotalTk = SubTotalTk + totalTex ;
        document.getElementById('allTotalTk').innerText = allTotalTk;
    })
    

 const aginbooing = document.getElementById('aginbooing').addEventListener('click',function(){
            const reportSection = document.getElementById('reportSection')
            reportSection.style.display = "none";
            const mainContianr = document.getElementById('mainContianr')
            mainContianr.style.display = "block";

        });

/////////////////////////////////////////////////////////////////////////////////////////////////
// function firstClass(IsIncise){ 
//     let ticketsInput = document.getElementById('firstClassInputValue');
//     let ticketsCount = parseInt(ticketsInput.value); 
//         let newticketsCount = ticketsCount  
//         ticketsInput.value = newticketsCount
//         if(IsIncise == true){
//             newticketsCount = ticketsCount + 1; 
//         } else if(IsIncise == false){
//             newticketsCount = ticketsCount - 1; 
//         }
        
//     }