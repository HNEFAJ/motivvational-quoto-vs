let quotes = [];

// Fetch quotes from the JSON file
fetch("quotes.json")
    .then(response => response.json())
    .then(data => {
        quotes = data;
        displayNewQuote(); // Display a quote on load
    })
    .catch(error => console.error("Error loading quotes:", error));

// Function to display a new random quote with animation
function displayNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteText = document.getElementById("quote");
    const quoteAuthor = document.getElementById("author");
    
    // Update text content
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;

    // Add fade-in effect
    const quoteBox = document.getElementById("quote-box");
    quoteBox.classList.remove("fade-in");
    void quoteBox.offsetWidth; // Trigger reflow
    quoteBox.classList.add("fade-in");
}

document.getElementById("new-quote-btn").addEventListener("click", displayNewQuote);
