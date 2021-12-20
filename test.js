const fs = require('fs')


const re = /"AccommodationSummary:\d*":{/g;

fs.readFile('output.html', {encoding: 'utf-8'}, (err, data)=>{
    if(err) throw err

    const accList = []
    let acc
    
    do {
        acc = re.exec(data)
        if(acc) {
            console.log(acc)
            let accInfo = findValue(acc, data)
            if(accInfo?.businessCategory==='camping') {
                accList.push(accInfo)
            }
        }
    } while(acc)
  
    console.log(accommodations)
})


function findValue(key, data) {
        
    let bracketStart = null
    let bracketEnd = null
    let opened = 0
    for(let i=key.index+key[0].length-1; i<data.length && !bracketEnd; ++i) {
        if(!bracketStart) {
            if(data[i]==='{') {
                bracketStart = i     
                ++opened
            }
        } else {
            if(data[i]==='}') {
                --opened
                if(opened===0) {
                    bracketEnd = i+1
                }
            } else if(data[i]==='{') {
                ++opened
            }
        }
    }  
    if(bracketStart&&bracketEnd) {
        json = JSON.parse(data.substring(bracketStart, bracketEnd))
        return json
    }
    return null
}
