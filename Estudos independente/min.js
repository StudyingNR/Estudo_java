

function min(a, b, c) {
    
    if(a < b && a < c) {
        console.log(`Menor valor recebido no mês 2 do ano 2026 pela empresa de Adrino $ ${a}`)   
    }else if(b < a && b < c ){
        console.log(`Menor valor recebido no  mês 3 do ano de 2026 pela empresa de Adriano$ ${b}`)
    }else {
        console.log(`Menor valor recebido no mês 4 do ano de 2026 pela empresa de Adriano $ ${c}`)
    }
}


const  resultThreeMonth= [min(702346450000, 1876284754000000, 220013453498),
min(10004570000.99, 5000745200000.34, 262359145288.76),
min(290115640, 150280, 76000080)]



