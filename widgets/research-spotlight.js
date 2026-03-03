const library = [
    {
        displayDate: "2026-01-19", // Week 1
        bib: "@book{jacobs1961death, title={The Death and Life of Great American Cities}, author={Jacobs, Jane}, year={1961}}",
        graphic: "assets/jane-jacobs.png",
        summary: "AI SUMMARY: This week we look at Jacobs' critique of mid-century urban planning and her arguments for diversity and 'eyes on the street'."
    },
    {
        displayDate: "2026-01-26", // Week 2
        bib: "@article{harvey1989governance, title={From Managerialism to Entrepreneurialism}, author={Harvey, David}, year={1989}}",
        graphic: "assets/harvey-chart.png",
        summary: "AI SUMMARY: A pivot to Harvey's analysis of urban governance and the transition toward entrepreneurial urbanism."
    }
    // Continue adding your syllabus dates here...
];

function initSpotlight() {
    const now = new Date();
    
    // Find the latest item where displayDate is today or in the past
    const activeItem = library
        .filter(item => new Date(item.displayDate) <= now)
        .pop() || library[0]; // Fallback to the first item if semester hasn't started

    document.getElementById('spotlight-slot').innerHTML = `
        <div class="spotlight-box">
            <div class="spotlight-flex">
                <img src="${activeItem.graphic}" class="spotlight-img" onerror="this.src='https://via.placeholder.com/240x150?text=Graphic+Pending'">
                <div class="ai-box">
                    <strong>Weekly Spotlight</strong>
                    <p>${activeItem.summary}</p>
                    <div style="background: white; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                        <code id="bibCode" style="font-size: 11px; display: block;">${activeItem.bib}</code>
                        <button onclick="copyBib()" style="margin-top: 8px;">📋 Copy BibTeX</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.copyBib = function() {
    const text = document.getElementById('bibCode').innerText;
    navigator.clipboard.writeText(text);
    alert("BibTeX copied to clipboard!");
};

initSpotlight();;
