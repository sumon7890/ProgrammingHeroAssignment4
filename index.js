const firstTicketInCrises = document.getElementById('inCrises').addEventListener('click',function(){

    let ticketsInput = document.getElementById('firstClassInputValue');
    let ticketsCount = parseInt(ticketsInput.value); 
    let newticketsCount = ticketsCount  
    newticketsCount = ticketsCount + 1;  
    ticketsInput.value = newticketsCount
    newticketsTotal = newticketsCount * 150;
    //document.getElementById('subTotal').innerText = newticketsTotal
    calculator()
     
    })
    const firstTicketDeCrises = document.getElementById('deCrises').addEventListener('click',function(){
    
    let ticketsInput = document.getElementById('firstClassInputValue');
    let ticketsCount = parseInt(ticketsInput.value); 
    let newticketsCount = ticketsCount  
    newticketsCount = ticketsCount - 1;  
    ticketsInput.value = newticketsCount
    newticketsTotal = newticketsCount * 150;
    //document.getElementById('subTotal').innerText = newticketsTotal  
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
    //document.getElementById('subTotal').innerText = newticketsTotal2
    
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
        const firstClassVatTk = Math.round(firstTk * 0.1)
    
        let ticketsInput2 = document.getElementById('economyClassInputValue');
        let ticketsCount2 = parseInt(ticketsInput2.value); 
        document.getElementById('totalEconomyClass').innerText = ticketsCount2;
        const economyTk = ticketsCount2 *100
        const economyClassVatTk = Math.round(firstTk * 0.1)
    
        const totalTex = firstClassVatTk + economyClassVatTk;
        document.getElementById('texTotal').innerText = totalTex
    
        const SubTotalTk = firstTk + economyTk ;
        document.getElementById('subTotalTk').innerText = SubTotalTk
    
        const allTotalTk = SubTotalTk + totalTex ;
        document.getElementById('allTotalTk').innerText = allTotalTk;
    })
    