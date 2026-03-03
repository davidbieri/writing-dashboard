/**
 * UAP 5174: Planning Theory & History - Research Spotlight Module
 * Features: Auto-date sync, BibTeX fetching, and Reflection Prompt Generator
 */

const library = [
    { displayDate: "2026-01-19", citeKey: "jacobs1961", graphic: "assets/week1.png", theme: "Planning History", summary: "Introduction to the course and the 'Mapping Inequality' of Roanoke, VA." },
    { displayDate: "2026-01-26", citeKey: "bertaud2018", graphic: "assets/week2.png", theme: "Market vs. Design", summary: "Why study the history of urban planning and merging the visions of economists and planners." },
    { displayDate: "2026-02-02", citeKey: "simmel1950", graphic: "assets/week3.png", theme: "Urban Culture", summary: "Sidewalk safety and contact, and the 'Peculiar Nature of Cities'." },
    { displayDate: "2026-02-09", citeKey: "scott1998", graphic: "assets/week4.png", theme: "High Modernism", summary: "Authoritarian High Modernism vs. Neighborhood Parks and Sidewalk Children." },
    { displayDate: "2026-02-16", citeKey: "hirt2014", graphic: "assets/week5.png", theme: "Zoning", summary: "Residential zoning and planning the capitalist city." },
    { displayDate: "2026-02-23", citeKey: "klosterman1985", graphic: "assets/week6.png", theme: "Justifications", summary: "DEBATE 1: Is urban planning even possible?" },
    { displayDate: "2026-03-02", citeKey: "campbell2010", graphic: "assets/week7.png", theme: "Neoliberalism", summary: "Space for planning in a Neoliberal world and the need for aged buildings." },
    { displayDate: "2026-03-16", citeKey: "fainstein2000", graphic: "assets/week8.png", theme: "Just City", summary: "Green cities, just cities, and spatial justice." },
    { displayDate: "2026-03-23", citeKey: "thomas1994", graphic: "assets/week9.png", theme: "Race & Planning", summary: "The minority-race planner and the self-destruction of diversity." },
    { displayDate: "2026-03-30", citeKey: "fischer2000", graphic: "assets/week10.png", theme: "Participation", summary: "DEBATE 2: Is planning anti-democratic?" },
    { displayDate: "2026-04-06", citeKey: "davidoff1965", graphic: "assets/week11.png", theme: "Advocacy", summary: "Advocacy and pluralism in planning." },
    { displayDate: "2026-04-13", citeKey: "schweitzer2016", graphic: "assets/week12.png", theme: "Ethics", summary: "Professional and restorative planning ethics." },
    { displayDate: "2026-04-20", citeKey: "miraftab2009", graphic: "assets/week13.png", theme: "Insurgent Planning", summary: "DEBATE 3: Global perspectives on urban planning." },
    { displayDate: "2026-04-27", citeKey: "watson2009", graphic: "assets/week14.png", theme: "Global South", summary: "Seeing from the South and governing urban districts." },
    { displayDate: "2026-05-04", citeKey: "jacobs1961final", graphic: "assets/week15.png", theme: "Complexity", summary: "The kind of problem a city is and review for final papers." }
];

// 1. Fetch the raw BibTeX string from the data folder
async function fetchBibTeX(key) {
    try {
        const response = await fetch('data/references.bib');
        const text = await response.text();
        const regex = new RegExp(`@\\w+\\{${key},[\\s\\S]+?\\n\\}`, 'g');
        const match = text.match(regex);
        return match ? match[0] : `@misc{${key}, title={Citation pending in references.bib}}`;
    } catch (e) {
        return "Error: references.bib not found in /data/";
    }
}

// 2. Generate a Phronetic Reflection Prompt
function generatePrompt(theme) {
    const prompts = {
        "High Modernism": "How does Scott's critique of 'thin' planning apply to a modern Virginia Tech campus project?",
        "Just City": "Is the 'Just City' a reachable goal, or is it a 'Utopia' in the Fishman sense?",
        "Neoliberalism": "Can aged buildings survive in a market-driven 'Order Without Design' (Bertaud)?",
        "Participation": "Where does this week's reading sit on Arnstein's Ladder of Participation?",
        "Ethics": "How would a 'Restorative Ethics' approach change a local Blacksburg zoning dispute?"
    };
    return prompts[theme] || "How does this week's theory challenge your previous assumptions about planning practice?";
}

// 3. Main Logic
async function initSpotlight() {
    const now = new Date();
    const activeItem = library.filter(item => new Date(item.displayDate) <= now).pop() || library[0];
    const fullBib = await fetchBibTeX(activeItem.citeKey);
    const reflectionPrompt = generatePrompt(activeItem.theme);

    document.getElementById('spotlight-slot').innerHTML = `
        <div class="spotlight-box">
            <div class="spotlight-flex">
                <img src="${activeItem.graphic}" class="spotlight-img" alt="1950s Comic Style Illustration">
                <div class="ai-box">
                    <strong>WEEKLY SPOTLIGHT: ${activeItem.theme}</strong>
                    <p>${activeItem.summary}</p>
                    <div class="reflection-generator">
                        <span style="font-size: 11px; color: var(--vt-orange); font-weight: bold;">REFLECTION PROMPT:</span>
                        <p style="font-style: italic; margin-top: 5px;">"${reflectionPrompt}"</p>
                    </div>
                    <div class="bib-container" style="background: white; padding: 10px; border: 1px solid #ddd; margin-top: 10px;">
                        <code id="bibCode" style="font-size: 10px; display: block; white-space: pre-wrap;">${fullBib}</code>
                        <button onclick="copyBib()" style="margin-top: 5px;">Copy BibTeX</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.copyBib = function() {
    const text = document.getElementById('bibCode').innerText;
    navigator.clipboard.writeText(text);
    alert("BibTeX copied for your Weekly Reflection!");
};

initSpotlight();
