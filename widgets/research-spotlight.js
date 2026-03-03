// 1. Updated Library using only Cite Keys from your .bib file
const library = [
    { displayDate: "2026-01-19", citeKey: "jacobs1961death", graphic: "assets/roanoke-intro.png", summary: "Introduction to the course..." },
    { displayDate: "2026-01-26", citeKey: "bertaud2018", graphic: "assets/planner-economist.png", summary: "FD Intro* + JA Ch. 1*..." }
];

async function fetchBibTeX(key) {
    try {
        const response = await fetch('references.bib'); // Pulls your uploaded file
        const text = await response.json();
        
        // This is a simple regex to find the block starting with your key
        const regex = new RegExp(`@\\w+\\{${key},[\\s\\S]+?\\n\\}`, 'g');
        const match = text.match(regex);
        
        return match ? match[0] : "Citation not found in references.bib";
    } catch (e) {
        return "Error loading references.bib";
    }
}

// Update the init function to be 'async'
async function initSpotlight() {
    const now = new Date();
    const activeItem = library.filter(item => new Date(item.displayDate) <= now).pop() || library[0];
    
    // Pull the real BibTeX from your file
    const fullBib = await fetchBibTeX(activeItem.citeKey);

    document.getElementById('spotlight-slot').innerHTML = `
        <div class="spotlight-box">
            <code id="bibCode">${fullBib}</code>
        </div>
    `;
}
