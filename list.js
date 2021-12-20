const https = require('https')
const fs = require('fs')

const testString = '캠핑장'
const encodedString = encodeURI(testString)

const options = {
    host: 'pcmap.place.naver.com',
    path: '/accommodation/list?query='+encodedString,
    // path: '/accommodation/list?query=%EC%BA%A0%ED%95%91%EC%9E%A5&x=126.8359499&y=37.5246218&bounds=126.8364542%3B37.5195332%3B126.8440287%3B37.5295399&ts=1639743897098&mapUrl=https%3A%2F%2Fmap.naver.com%2Fv5%2F%3Fc%3D14119313.3571491%2C4512486.7744044%2C15%2C0%2C0%2C0%2Cdh',
    method: 'GET',
    headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "iframe",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-site",
        "upgrade-insecure-requests": "1",
        "cookie": "NNB=6ET66TEJQG6GC",
        "Referer": "https://map.naver.com/",
        "Referrer-Policy": "origin"
    }
}

var req = https.get(
    options, 
    res=>{
        var result = ''
        res.on('data', function (chunk) {
            result += chunk
        })
        res.on('end', function () {
            console.log(result)
            fs.writeFile('output.html', result, err=>{
                if(err) {
                    throw err
                }
                console.error('output.html has been saved')
            })
        })
    }
)

req.on('error', function(error) {
    console.error(error)
})

req.end()