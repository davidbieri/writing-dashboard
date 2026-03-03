<style>
    .fred-box { margin: 20px; padding: 20px; background: #fff; border: 1px solid #ddd; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; }
    .fred-info { flex: 1; }
    .fred-sparkline { flex: 1; text-align: right; max-width: 150px; height: 50px; }
    .sparkline-path { fill: none; stroke: var(--vt-orange); stroke-width: 2.5; stroke-linecap: round; }
    .fred-label { font-size: 11px; text-transform: uppercase; color: #888; letter-spacing: 0.5px; }
    .fred-val { font-size: 28px; font-weight: bold; color: var(--vt-maroon); margin: 5px 0; }
</style>

<div class="fred-box">
    <div class="fred-info">
        <div class="fred-label" id="fred-title">Loading FRED Data...</div>
        <div class="fred-val" id="fred-data">--</div>
        <div style="font-size: 10px; color: #aaa;">Last 6 Months Trend</div>
    </div>
    <div class="fred-sparkline">
        <svg id="sparklineSvg" viewBox="0 0 100 30" preserveAspectRatio="none" style="width: 100%; height: 100%;"></svg>
    </div>
</div>

<script>
    async function initFredWithSparkline() {
        const API_KEY = 'f238ee01098d0deae0fca2a6cce29b7b'; 
        const SERIES_ID = 'MORTGAGE30US'; // Try 'M2SL' for Money Stock or 'CPIAUCSL' for Inflation
        
        const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${SERIES_ID}&api_key=${API_KEY}&file_type=json&sort_order=desc&limit=26`; // Approx 6 months of weekly data

        try {
            const response = await fetch(url);
            const data = await response.json();
            const observations = data.observations.map(d => parseFloat(d.value)).reverse();
            const latest = observations[observations.length - 1];
            
            // 1. Update Text
            document.getElementById('fred-data').innerText = latest.toFixed(2) + "%";
            document.getElementById('fred-title').innerText = "30-Year Fixed Mortgage Rate";

            // 2. Generate Sparkline SVG
            const min = Math.min(...observations);
            const max = Math.max(...observations);
            const range = max - min;
            const width = 100;
            const height = 30;
            
            const points = observations.map((val, i) => {
                const x = (i / (observations.length - 1)) * width;
                const y = height - ((val - min) / range) * height;
                return `${x},${y}`;
            }).join(' ');

            document.getElementById('sparklineSvg').innerHTML = `
                <polyline points="${points}" class="sparkline-path" />
            `;
        } catch (e) {
            document.getElementById('fred-title').innerText = "FRED Connection Error";
        }
    }
    initFredWithSparkline();
</script>
