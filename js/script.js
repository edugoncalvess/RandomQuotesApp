/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
// associative array. Each inner array represents a different quote and it's stored as [quote, author, where-was-citted, year-when-was-citted]
var quotes = [
    ['If life were predictable it would cease to be life, and be without flavor', 'Eleanor Roosevelt', 'Book: Tomorrow Is Now', 1963],
    ['If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough', 'Oprah Winfrey', 'Book: What I Know For Sure', 2014],
    ['Life is what happens when you\'re busy making other plans', 'John Lennon', 'Song: Beautiful Boy (Darling Boy)', 1980],
    ['Tell me and I forget. Teach me and I remember. Involve me and I learn', 'Benjamin Franklin', '',  1779],
    ['Success is walking from failure to failure with no loss of enthusiasm', 'Winston Churchill', 'Book: Churchill By Himself', 1945],
    ['You miss 100% of the shots you don\'t take', 'Wayne Gretzky', 'Interview to Bob McKenzie', 1983],
    ['The health of your brain is much more about your actions than your age.', 'Dr. Daniel Amen', '', ''],
    ['You’re either green and growing or you’re ripe and rotting.', 'John Addison', '', '']
]

// newQuote object to be used further
var newQuoteObject= {}


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

    // This variable stores a random number between zero and the last index in the `quotes` array
    // I left the sum and subtraction of 0 just for demonstration/clarification, since the index (minimum value) starts with 0.
    $randomIndex = Math.floor( Math.random() * (quotes.length - 0) + 0);
    
    // The new object is populated with one quote picked from 'quotes' array using the random number as index
    newQuoteObject = {
        quote: quotes[$randomIndex][0],
        source: quotes[$randomIndex][1],
        citation: quotes[$randomIndex][2],
        year: quotes[$randomIndex][3]
    }


    // Return the object storing the random quote
    return newQuoteObject;
}



/***
 * `printQuote` function
***/
function printQuote() {

    // Creating a variable to store the oject from getRandomQuote() function
    let randomQuote = getRandomQuote();

    
    // The htmlContent variable will store the quotes with respective html tags.
    // After finishing each step of the concatenation, it will used to replace the inicial quote as the button is clicked.
    let htmlContent = '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source;

    // If the citation property exists in the object quote, that informatio is added to the htmlContent variable with the respective tags.
    // If not, nothing is added to the string
    if (randomQuote.citation != "") {
        htmlContent += '<span class="citation">' + randomQuote.citation + '</span>';
    }

    // If the year property exists in the object quote, that informatio is added to the htmlContent variable with the respective tags.
    // If not, nothing is added to the string
    if (randomQuote.year != "") {
        htmlContent += '<span class="year">' + randomQuote.year + '</span>';
    }

    // Closing the </p> tag to finishing the htmlContent concatenation.
    htmlContent += '</p>';


    // Setting the content of the div which has the ID as 'quote-box' with the data retrieved from the random selection.
    // By doing that, whenever the printQuote method is called, the DOM is modified and the random quote takes place of the default one.
    document.getElementById('quote-box').innerHTML = htmlContent;


    // For debugging pupposes: uncomment the respective line to see the values in the console
    // console.log(randomQuote); // It prints the quote object received from the getRandomQuote method.
    // console.log(randomQuote.quote); // It prints only the quote, retrieved from the picked object.
    // console.log(htmlContent);// It shows the varible containing the html concatenated code.

}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
// Calling the printQuote method when the button is clicked.
document.getElementById('load-quote').addEventListener("click", printQuote);
