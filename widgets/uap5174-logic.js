(function() {
    const config = { target: 15000, deadline: "2026-05-08", start: "2026-01-19" };
    const now = new Date();
    const dLine = new Date(config.deadline);
    const sDate = new Date(config.start);

    // Business Day Logic
    let bizDays = 0; let tmp = new Date(now);
    while (tmp <= dLine) {
        if (tmp.getDay() !== 0 && tmp.getDay() !== 6) bizDays++;
        tmp.setDate(tmp.getDate() + 1);
    }

    const target = bizDays > 0 ? Math.ceil(config.target / bizDays) : 0;
    document.getElementById('target-slot').innerHTML = `
        <div class="target-section">
            <span class="target-num">${target.toLocaleString()}</span>
            <p>words per business day</p>
        </div>
    `;
})();
