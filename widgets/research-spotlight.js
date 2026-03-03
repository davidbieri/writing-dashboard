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
    { displayDate: "2026-04-27", bib: "@article{yiftachel1998planning, title={Planning and Social Control}, author={Yiftachel, Oren}, year={1998}}", graphic: "assets/dark-side.png", summary: "Focus: The 'dark side' of planning—how spatial regulation can facilitate social exclusion." },

    {
        displayDate: "2026-01-19", // Week 1
        bib: "Syllabus Review: UAP 5174 Planning Theory & History",
        graphic: "assets/roanoke-intro.png",
        summary: "Introduction to the course and the 'Mapping Inequality' of Roanoke, VA[cite: 1, 17]. Focus: Overview of key planning processes[cite: 30]."
    },
    {
        displayDate: "2026-01-26", // Week 2
        bib: "Bertaud (2018) & Hayek (1952) [cite: 137, 138]",
        graphic: "assets/planner-economist.png",
        summary: "READING: FD Intro* + JA Ch. 1*[cite: 135]. Topic: Why study the history of urban planning and merging the visions of economists and planners[cite: 137, 142]."
    },
    {
        displayDate: "2026-02-02", // Week 3
        bib: "Mumford (1937) & Simmel (1950) [cite: 151, 152]",
        graphic: "assets/urban-culture.png",
        summary: "READING: FD Ch. 1* + JA Ch. 2-3*[cite: 148, 150]. Focus: Sidewalk safety and contact, and the 'Peculiar Nature of Cities'[cite: 150, 159]."
    },
    {
        displayDate: "2026-02-09", // Week 4
        bib: "Scott (1998) Seeing Like a State [cite: 167]",
        graphic: "assets/modernist-menace.png",
        summary: "READING: FD Ch. 3* + JA Ch. 4-5*[cite: 166, 169]. Topic: Authoritarian High Modernism vs. Neighborhood Parks and Sidewalk Children[cite: 167, 169]."
    },
    {
        displayDate: "2026-02-16", // Week 5
        bib: "Foglesong, Marcuse, & Hirt [cite: 177, 178]",
        graphic: "assets/capitalist-zoning.png",
        summary: "READING: FD Ch. 5, 6, 15* + JA Ch. 6*[cite: 177, 179]. Focus: Residential zoning and planning the capitalist city[cite: 177, 178]."
    },
    {
        displayDate: "2026-02-23", // Week 6
        bib: "Healey, Amin, & Klosterman [cite: 188, 189]",
        graphic: "assets/planning-debate.png",
        summary: "READING: FD Ch. 7, 8, 9* + JA Ch. 7-8*[cite: 188, 191]. DEBATE 1: Is urban planning even possible? [cite: 199]"
    },
    {
        displayDate: "2026-03-02", // Week 7 (Current)
        bib: "Campbell et al. (2010) [cite: 207]",
        graphic: "assets/losch-hexagons.png",
        summary: "READING: FD Ch. 10* + JA Ch. 9-10*[cite: 205, 207]. Focus: Space for planning in a Neoliberal world and the need for aged buildings[cite: 207]."
    },
    {
        displayDate: "2026-03-16", // Week 8 (After Spring Break)
        bib: "Campbell (1996) & Sandercock (1998) [cite: 215, 217]",
        graphic: "assets/just-city.png",
        summary: "READING: FD Ch. 11, 12, 13, 19, 20* + JA Ch. 11-12*[cite: 215, 218]. Focus: Green cities, just cities, and spatial justice[cite: 215, 216]."
    },
    {
        displayDate: "2026-03-23", // Week 9
        bib: "Wolf-Powers & Manning Thomas [cite: 234]",
        graphic: "assets/theory-action.png",
        summary: "READING: FD Ch. 16, 22* + JA Ch. 13-14*[cite: 234, 233]. Topic: The minority-race planner and the self-destruction of diversity[cite: 234, 233]."
    },
    {
        displayDate: "2026-03-30", // Week 10
        bib: "Fischer (2000) Participatory Governance [cite: 243]",
        graphic: "assets/citizen-table.png",
        summary: "READING: FD Ch. 17* + JA Ch. 15*[cite: 243, 245]. DEBATE 2: Is planning anti-democratic? [cite: 249]"
    },
    {
        displayDate: "2026-04-06", // Week 11
        bib: "Forrester & Davidoff [cite: 256, 257]",
        graphic: "assets/advocacy-hero.png",
        summary: "READING: FD Ch. 18, 21* + JA Ch. 16*[cite: 255, 260]. Focus: Advocacy and pluralism in planning[cite: 257]."
    },
    {
        displayDate: "2026-04-13", // Week 12
        bib: "Wachs (2016) & Schweitzer (2016) [cite: 272, 275]",
        graphic: "assets/ethics-compass.png",
        summary: "READING: FD Ch. 23* + JA Ch. 17-18*[cite: 272, 274]. Focus: Professional and restorative planning ethics[cite: 272, 275]."
    },
    {
        displayDate: "2026-04-20", // Week 13
        bib: "Miraftab (2009) Insurgent Planning [cite: 286]",
        graphic: "assets/smart-city-chorus.png",
        summary: "READING: FD Ch. 24* + JA Ch. 19*[cite: 285, 288]. DEBATE 3: Global perspectives on urban planning[cite: 293]."
    },
    {
        displayDate: "2026-04-27", // Week 14
        bib: "Watson (2009) & Shatkin (2007) [cite: 298]",
        graphic: "assets/global-south.png",
        summary: "READING: FD Ch. 27, 28* + JA Ch. 20-21*[cite: 297, 300]. Focus: Seeing from the South and governing urban districts[cite: 298, 300]."
    },
    {
        displayDate: "2026-05-04", // Week 15
        bib: "Jacobs (1961) Final Review [cite: 312]",
        graphic: "assets/jacobs-finale.png",
        summary: "READING: JA Ch. 22*[cite: 312]. Topic: The kind of problem a city is and review for final papers[cite: 312, 314]."
    }

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
