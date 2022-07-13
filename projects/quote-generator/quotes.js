// Get all quotes
let quotes = [
    {
        quotes: "code never lies comments do.",
    },
    {
        quotes: "Human beings need forgiveness like we need oxygen — a nation devoid of grace will make its people miserable.",
    },
    {
        quotes: "Do the best you can until you know better. Then when you know better, do better.",
    },
    {
        quotes: "Do as little as needed, not as much as possible.",
    },
    {
        quotes: "Nothing can be loved or hated unless it is first understood.",
    },
    {
        quotes: "Don’t be the person who says yes with their mouth but no with their actions.”",
    },
    {
        quotes: "If there is any period one would desire to be born in, is it not the age of Revolution; when the old and the new stand side by side, and admit of being compared.",
    },
    {
        quotes: "The test of tolerance comes when we are in a majority; the test of courage comes when we are in a minority.",
    },
    {
        quotes: "Their heads sometimes so little that there is no room for wit; sometimes so long that there is no wit for so much room.",
    },
    {
        quotes: "Some persons make promises for the pleasure of breaking them.",
    },
];

//  button generate quotes

let btn = document.getElementById('generate');
btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);
    document.getElementById('quotes').innerHTML = quotes[random].quotes;
});
