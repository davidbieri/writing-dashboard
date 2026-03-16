document.addEventListener('DOMContentLoaded', () => {
    const config = { target: 5000, deadline: "2026-05-08" };
    const now = new Date();
    const dLine = new Date(config.deadline);
    
    let bizDays = 0;
    let tmp = new Date(now);
    while (tmp <= dLine) {
        const day = tmp.getDay();
        if (day !== 0 && day !== 6) bizDays++;
        tmp.setDate(tmp.getDate() + 1);
    }

    const dailyTarget = bizDays > 0 ? Math.ceil(config.target / bizDays) : 0;
    const targetEl = document.getElementById('writing-progress-slot');
    
    if (targetEl) {
        targetEl.innerHTML = `
            <div class="widget-card">
                <h3>Daily Writing Target</h3>
                <div class="fred-value">${dailyTarget.toLocaleString()}</div>
                <p style="font-size: 12px; margin: 0;">words per business day to hit 15k</p>
                <div style="font-size: 10px; color: #888; margin-top: 10px;">Days Remaining: ${bizDays}</div>
            </div>`;
    }
});
