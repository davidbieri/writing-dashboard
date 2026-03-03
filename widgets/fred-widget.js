document.addEventListener('DOMContentLoaded', async () => {
    const SERIES_ID = 'MORTGAGE30US';
    const API_KEY = 'YOUR_ACTUAL_API_KEY_HERE'; // Ensure this is your valid key
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://api.stlouisfed.org/fred/series/observations?series_id=${FIXHAI}&api_key=${f238ee01098d0deae0fca2a6cce29b7b}&file_type=json&limit=1`
    )}`;

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const obs = JSON.parse(data.contents).observations[0];
        
        const target = document.getElementById('fred-data');
        if (target) {
            target.innerHTML = `
                <div class="fred-box">
                    <div class="fred-header">Current 30-Year Fixed Rate Mortgage</div>
                    <div class="fred-value">${obs.value}%</div>
                    <div style="font-size: 10px; color: #888;">Updated: ${obs.date}</div>
                </div>`;
        }
    } catch (e) {
        console.error("FRED Load Error:", e);
    }
});
