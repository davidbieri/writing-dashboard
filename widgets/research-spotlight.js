const library = [
    // --- PAST WEEKS (Archival) ---
    { displayDate: "2026-01-19", bib: "@book{jacobs1961death, title={The Death and Life of Great American Cities}, author={Jacobs, Jane}, year={1961}}", graphic: "assets/jacobs.png", summary: "Focus: The social capital of sidewalks and the critique of rationalist urban renewal." },
    { displayDate: "2026-01-26", bib: "@article{harvey1989governance, title={From Managerialism to Entrepreneurialism}, author={Harvey, David}, year={1989}}", graphic: "assets/harvey.png", summary: "Focus: The shift toward entrepreneurial urban governance and global capital competition." },
    { displayDate: "2026-02-02", bib: "@book{flyvbjerg2001making, title={Making Social Science Matter}, author={Flyvbjerg, Bent}, year={2001}}", graphic: "assets/flyvbjerg.png", summary: "Focus: Phronetic planning and the integration of power into rational decision-making." },
    { displayDate: "2026-02-09", bib: "@article{fainstein2000new, title={New Directions in Planning Theory}, author={Fainstein, Susan S.}, year={2000}}", graphic: "assets/fainstein.png", summary: "Focus: A typology of planning paradigms—communicative vs. just city models." },
    { displayDate: "2026-02-16", bib: "@book{scott1998seeing, title={Seeing Like a State}, author={Scott, James C.}, year={1998}}", graphic: "assets/scott.png", summary: "Focus: High modernism and the failure of 'thin' planning that ignores local knowledge (metis)." },
    { displayDate: "2026-02-23", bib: "@article{arnstein1969ladder, title={A Ladder of Citizen Participation}, author={Arnstein, Sherry R.}, year={1969}}", graphic: "assets/arnstein.png", summary: "Focus: Power dynamics in participation—moving from tokenism to citizen control." },

    // --- CURRENT WEEK (Active March 3) ---
    { 
        displayDate: "2026-03-02", 
        bib: "@book{losch1954economics, title={The Economics of Location}, author={Lösch, August}, year={1954}, publisher={Yale University Press}}",
        graphic: "assets/losch-hexagons.png",
        summary: "AI SUMMARY: This week we dive into spatial equilibrium. Lösch's work is foundational for understanding the hexagonal logic of market areas and the spatial organization of the economy." 
    },

    // --- FUTURE WEEKS (Automatic Unlock) ---
    { displayDate: "2026-03-09", bib: "@article{bieri2026spatial, title={The Geography of Money}, author={Bieri, David}, year={2026}}", graphic: "assets/money-map.png", summary: "AI SUMMARY: Exploring how monetary systems and spatial structures interact to shape urban resilience." },
    { displayDate: "2026-03-16", bib: "@article{purcell2002excavating, title={Excavating Lefebvre}, author={Purcell, Mark}, year={2002}}", graphic: "assets/lefebvre.png", summary: "Focus: The 'Right to the City' and the restructuring of citizenship in a globalizing world." },
    { displayDate: "2026-03-23", bib: "@book{sandercock1998towards, title={Towards Cosmopolis}, author={Sandercock, Leonie}, year={1998}}", graphic: "assets/sandercock.png", summary: "Focus: Planning for multicultural cities and the role of storytelling/memory in urban space." },
    { displayDate: "2026-03-30", bib: "@article{roy2005medieval, title={Medieval Modernity: 21st Century Urbanism}, author={Roy, Ananya}, year={2005}}", graphic: "assets/roy.png", summary: "Focus: Post-colonial theory and urban informality as a mode of planning." },
    { displayDate: "2026-04-06", bib: "@book{brenner2004new, title={New State Spaces}, author={Brenner, Neil}, year={2004}}", graphic: "assets/brenner.png", summary: "Focus: Rescaling urban governance and the creation of competitive regional territories." },
    { displayDate: "2026-04-13", bib: "@article{campbell1996green, title={Green Cities, Growing Cities, Just Cities?}, author={Campbell, Scott}, year={1996}}", graphic: "assets/planner-triangle.png", summary: "Focus: The Planner's Triangle—balancing equity, economy, and environmental protection." },
    { displayDate: "2026-04-20", bib: "@book{hall2014cities, title={Cities of Tomorrow}, author={Hall, Peter}, year={2014}}", graphic: "assets/hall.png", summary: "Focus: An intellectual history of urban planning and design in the 20th century." },
    { displayDate: "2026-04-27", bib: "@article{yiftachel1998planning, title={Planning and Social Control}, author={Yiftachel, Oren}, year={1998}}", graphic: "assets/dark-side.png", summary: "Focus: The 'dark side' of planning—how spatial regulation can facilitate social exclusion." }
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
