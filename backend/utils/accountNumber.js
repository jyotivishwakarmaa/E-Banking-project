

const accNumber=()=>{
     
    let numbers='1234567890'
    let len=numbers.length
    let acc=''
    for(let i=0;i<=12;i++){

        let accNum=Math.floor(Math.random()*len)
          acc+=numbers[accNum]
    }
    return acc
}

module.exports=accNumber