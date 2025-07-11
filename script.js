
async function fetchQuotes() {

    let url = await fetch('https://dummyjson.com/quotes');
    let responseData = await url.json();
    let quotes = responseData.quotes;
    let randonIndex = Math.floor(Math.random()*quotes.length);
    let randomQuotes = quotes[randonIndex];
    document.getElementById('quotesText').innerText = randomQuotes.quote;
    document.getElementById('quotesAuthor').innerText = randomQuotes.author;
}
