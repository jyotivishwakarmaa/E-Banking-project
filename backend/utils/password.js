

const newPassword=()=>{

    let charcters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()><?}{]['

    let len=charcters.length

    let password=''
    
    for(let i=0;i<7;i++){
       const randomIndex =Math.floor(Math.random()*len)
       password+=charcters[randomIndex]
    }
    return password
}

module.exports=newPassword