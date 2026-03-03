async function initFred() {
    const API_KEY = 'YOUR_FRED_API_KEY';
    const SERIES = 'MORTGAGE30US';
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${SERIES}&api_key=${f238ee01098d0deae0fca2a6cce29b7b}&file_type=json&sort_order=desc&limit=26`;
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        // Insert your SVG Sparkline logic here...
        document.getElementById('fred-slot').innerHTML = `<div class="fred-box">Latest Rate: ${data.observations[0].value}%</div>`;
    } catch(e) { console.error("FRED failed"); }
}
initFred();
