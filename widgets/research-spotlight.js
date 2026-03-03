const library = [
    {
        bib: "@article{bieri2026spatial, title={The Geography of Money}, author={Bieri, David}, year={2026}}",
        graphic: "assets/monetary-map.png", 
        summary: "AI SUMMARY: This highlights how local currencies impact urban resilience."
    }
];

function initSpotlight() {
    const item = library[Math.floor(Math.random() * library.length)];
    document.getElementById('spotlight-slot').innerHTML = `
        <div class="spotlight-box">
            <img src="${item.graphic}" class="spotlight-img">
            <div class="ai-box">${item.summary} <code id="bCode">${item.bib}</code></div>
            <button onclick="navigator.clipboard.writeText('${item.bib}')">Copy BibTeX</button>
        </div>
    `;
}
initSpotlight();
