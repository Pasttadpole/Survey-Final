
const wwiiPosters = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmh8Pokdnf9poj6aOp0VxIT5PuBU-xdr3WYdv1cMlzt-NI4-AZNqWRI-WER-aYpqiUyiN",
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/The_Great_Dictator_%281940%29_poster.jpg",
    "https://m.media-amazon.com/images/M/MV5BMGNiN2NmMWYtMGQ3Yy00NDllLTk0OTctMjU3YjRkMzBlNTYxXkEyXkFqcGc@._V1_.jpg",
    "https://upload.wikimedia.org/wikipedia/en/f/f2/Intsqpos.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTAwMTk4MjQtNDAzYS00NWRlLWI5ZDktZTY1M2I4ODUyNzdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
];

const modernPosters = [
    "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg",
    "https://musicart.xboxlive.com/7/7e206d00-0000-0000-0000-000000000002/504/image.jpg",
    "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_.jpg",
    "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg",
    "https://m.media-amazon.com/images/I/61QbqeCVm0L.jpg"
];

// Function to randomly select a poster from each array
function getRandomPoster(posters) {
    return posters[Math.floor(Math.random() * posters.length)];
}

// Update the image sources
document.getElementById("wwii-poster-img").src = getRandomPoster(wwiiPosters);
document.getElementById("modern-poster-img").src = getRandomPoster(modernPosters);


function submitAnswers() {
    // Get the comment from the single text area
    const modernComment = document.getElementById("modern-comment").value.toLowerCase();
    
    let resultText = '';

    // Check if the comment mentions typical propaganda elements
    const modernElements = ["military", "Nazi", "Japanese", "evil", "plane", "American", "hero", "Danger", "Threat", "enemy", "patriotism", "heroism", "sacrifice", "fear", 
    "propaganda", "duty", "nationalism", "bravery", "valor", "glory", 
    "good vs. evil", "call to action", "rallying cry", "emotional appeal", 
    "threat", "danger", "invasion", "unity", "strength", "victory", 
    "American identity", "fascism", "dictatorship", "democracy", 
    "wartime spirit", "loyalty", "freedom", "allies", "axis powers"];

    // Analyze the Modern comment
    const modernAnalysis = modernElements.filter(word => modernComment.includes(word));

    if (modernAnalysis.length > 0) {
        resultText += `<span style="color: green;">Correct! Good job identifying elements of propoganda</span>`;
        //`<p><strong>Correct! Good job identifying elements of propoganda</strong><br></p>`;</span>
    } 
    
    else {
        resultText += `<span style="color: red;">Try again! Look for themes like nationalism, fear, or democracy.</span>`;
        //resultText += `<p><strong>Try Again!</strong></p>`;
    }

    document.getElementById("result").innerHTML = resultText;
}
