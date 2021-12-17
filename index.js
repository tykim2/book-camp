const https = require('https')

// const body = "[{\"operationName\":\"bookingDetails\",\"variables\":{\"id\":\"1741794426\",\"isNx\":false,\"checkin\":\"20211218\",\"checkout\":\"20211219\",\"entry\":\"pll\"},\"query\":\"query bookingDetails($id: String, $isNx: Boolean, $checkin: String, $checkout: String, $entry: String, $guest: String, $roomIds: String, $size: Int) {\\n  accommodation(id: $id, isNx: $isNx, deviceType: \\\"mobile\\\", checkin: $checkin, checkout: $checkout, entry: $entry, guest: $guest, roomIds: $roomIds) {\\n    bookingDetails(size: $size) {\\n      roomTotal\\n      rooms {\\n        reprUrl\\n        resrvUrl\\n        drtOptionList {\\n          iconName\\n          optionName\\n          __typename\\n        }\\n        isBookable\\n        isMatching\\n        isNPayUsed\\n        bookingType\\n        resocId\\n        resocName\\n        resocDesc\\n        cond2Val\\n        cond3Val\\n        subImage\\n        excptMsg\\n        minPrice\\n        maxPrice\\n        avgPrice\\n        sumPrice\\n        index\\n        discountText\\n        priceInfo {\\n          off_friday\\n          off_weekday\\n          off_weekend\\n          on_friday\\n          on_weekday\\n          on_weekend\\n          peak_friday\\n          peak_weekday\\n          peak_weekend\\n          __typename\\n        }\\n        __typename\\n      }\\n      agencyName\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}]"
const body = "[{\"operationName\":\"bookingDetails\",\"variables\":{\"id\":\"422294477\",\"isNx\":false,\"checkin\":\"20211218\",\"checkout\":\"20211219\",\"entry\":\"pll\"},\"query\":\"query bookingDetails($id: String, $isNx: Boolean, $checkin: String, $checkout: String, $entry: String, $guest: String, $roomIds: String, $size: Int) {\\n  accommodation(id: $id, isNx: $isNx, deviceType: \\\"mobile\\\", checkin: $checkin, checkout: $checkout, entry: $entry, guest: $guest, roomIds: $roomIds) {\\n    bookingDetails(size: $size) {\\n      roomTotal\\n      rooms {\\n        reprUrl\\n        resrvUrl\\n        drtOptionList {\\n          iconName\\n          optionName\\n          __typename\\n        }\\n        isBookable\\n        isMatching\\n        isNPayUsed\\n        bookingType\\n        resocId\\n        resocName\\n        resocDesc\\n        cond2Val\\n        cond3Val\\n        subImage\\n        excptMsg\\n        minPrice\\n        maxPrice\\n        avgPrice\\n        sumPrice\\n        index\\n        discountText\\n        priceInfo {\\n          off_friday\\n          off_weekday\\n          off_weekend\\n          on_friday\\n          on_weekday\\n          on_weekend\\n          peak_friday\\n          peak_weekday\\n          peak_weekend\\n          __typename\\n        }\\n        __typename\\n      }\\n      agencyName\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}]"

console.log(JSON.parse(body))

const options = {
    host: 'pcmap-api.place.naver.com',
    path: '/graphql',
    method: 'POST',
    headers: {
        "accept": "*/*",
        "accept-language": "ko",
        "content-type": "application/json",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "cookie": "NRTK=ag#all_gr#1_ma#-2_si#0_en#0_sp#0; NNB=TLZZSDF2ERRF6; ASID=7a2244e4000001753922aee40000006b; page_uid=hkw3Zdp0YiRss46LA94ssssssvG-369116; nx_ssl=2; nid_inf=21394656; NID_AUT=GKqRwxrjptL2C+YqHc0VfPYJqBhg2Pngx/EcN3NQBnmqaTnk8fVZFlma2/8B/sE8; NID_JKL=ulvSU750tE8tc+R4wFV7kJP4aIt9vn0ZGPmsx0o0OEM=; NID_SES=AAABlVArwCktgjWra629XdVrEv/rpL17qw4FTm2fUP8yMWmtWQW7t7SGHwcH3EWfxC9UTYFDelyV0tnFZT508wdED2fux3EbcOnQj2ZRHgesyCInWu9Me+BjprPeeijEsyezk3Nf/sBAf7gA3sx8VuIzrgAhSGRY18GAEtF8xxFb1cXSNZwQ72cy8K/xC11OV9jj2miSCyxt9xjHjSTIdbIsKrKCZW3/oqFC3FNOCm3bnSDiASPEO6l3n5nhxDYr5SiuFua6DV3D4exIzD3ELXGWQA5HPGuZf/Anv1k4yT/axWNCp8ysJ7HeouNHdOpEmWiSxcpqHTuPbQX4bFnGk58/MDMEfgyfJZgYMYQOt6gCgBal+HjTejj0YlakTyhyz6KoOhKu1m0gxF9AjjDKySPeBRODt7DIaqe+q0FJiSTw6lPPElXmcaSb/YKqvAMuXG/aWJolrCf1u3zq/iUAHksMGPRpFMb2nuRm+cKfsLI96WVh2iG9NoLMH+AmEDaSQwVDaHH8Nr0wqp6vDmiqgI3v9CmgdZYr0tW1VT/txVC1eQxP",
        "Referer": "https://pcmap.place.naver.com/accommodation/1741794426/room?bounds=126.8129902%3B37.5122318%3B126.8674927%3B37.5368397&businessCategory=camping&entry=pll&mapUrl=https%3A%2F%2Fmap.naver.com%2Fv5%2F&c=14119313.3571491%2C4512486.7744044%2C15%2C0%2C0%2C0%2Cdh&query=%EC%BA%A0%ED%95%91%EC%9E%A5&ts=1639726918995&x=126.8401341&y=37.5246218&from=map&fromPanelNum=2&checkin=20211218&checkout=20211219",
        "Referrer-Policy": "unsafe-url"
      }
}

var req = https.request(
    options, 
    res=>{
        var result = ''
        res.on('data', function (chunk) {
            result += chunk
        })
        res.on('end', function () {
            // console.log(result)
            result = JSON.parse(result)
            const details = result[0].data.accommodation.bookingDetails
            console.log(details.roomTotal, 'total rooms')
            for(let r of details.rooms) {
                console.log('-', r.resocName, r.isBookable)
            }
            

        })
    }
)

req.data = body
options.headers['content-length'] = body.length

req.on('error', function(error) {
    console.error(error)
})

req.write(req.data)
req.end()