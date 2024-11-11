function showData() {
    //lots of code
    console.log("ShowData function finished")
}
//runs asynchronus
async function getRandomFact() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    //console.log(response)
    const data = await response.json()
    //console.log(data.text)
    console.log(data.text, "\n")
}

async function getTodaysFact() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")
    //console.log(response)
    const data = await response.json()
    //console.log(data.text)
    console.log(data.text, "\n")
}

getRandomFact()
getTodaysFact()
// getData()
// showData()