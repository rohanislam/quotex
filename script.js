(function () {
    // Remove if already open
    const oldPopup = document.getElementById("leaderboard-popup");
    if (oldPopup) oldPopup.remove();

    // Create popup container
    const popup = document.createElement("div");
    popup.id = "leaderboard-popup";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.width = "350px";
    popup.style.background = "linear-gradient(180deg, #ffdd80, #ffbb55)";
    popup.style.borderRadius = "15px";
    popup.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
    popup.style.padding = "20px";
    popup.style.zIndex = "999999";
    popup.style.fontFamily = "Arial, sans-serif";
    popup.style.color = "#222";
    popup.style.textAlign = "center";

    popup.innerHTML = `
        <h2 style="margin-bottom: 15px;">📊 Leaderboard Settings</h2>
        
        <label>Leaderboard Name:</label>
        <input id="lb-name" type="text" value="Rohan Islam" style="width:90%;padding:6px;margin:5px;border-radius:8px;border:1px solid #aaa;"><br>

        <label>Leaderboard Balance:</label>
        <input id="lb-balance" type="number" value="1850" style="width:90%;padding:6px;margin:5px;border-radius:8px;border:1px solid #aaa;"><br>

        <label>Mid Position:</label>
        <input id="lb-mid" type="number" value="29" style="width:90%;padding:6px;margin:5px;border-radius:8px;border:1px solid #aaa;"><br>

        <label>Maximum Position:</label>
        <input id="lb-max" type="number" value="78934" style="width:90%;padding:6px;margin:5px;border-radius:8px;border:1px solid #aaa;"><br>

        <label>Country:</label>
        <select id="lb-country" style="width:90%;padding:6px;margin:5px;border-radius:8px;border:1px solid #aaa;">
            <option value="🇧🇩 Bangladesh">🇧🇩 Bangladesh</option>
            <option value="🇮🇳 India">🇮🇳 India</option>
            <option value="🇺🇸 USA">🇺🇸 USA</option>
            <option value="🇬🇧 UK">🇬🇧 UK</option>
        </select><br><br>

        <button id="lb-save" style="padding:8px 15px;background:#28a745;color:#fff;border:none;border-radius:10px;margin:5px;cursor:pointer;">💾 Save Settings</button>
        <button id="lb-close" style="padding:8px 15px;background:#dc3545;color:#fff;border:none;border-radius:10px;margin:5px;cursor:pointer;">❌ Close</button>
    `;

    document.body.appendChild(popup);

    // Save button handler
    document.getElementById("lb-save").onclick = () => {
        const data = {
            name: document.getElementById("lb-name").value,
            balance: document.getElementById("lb-balance").value,
            mid: document.getElementById("lb-mid").value,
            max: document.getElementById("lb-max").value,
            country: document.getElementById("lb-country").value,
        };
        localStorage.setItem("leaderboardData", JSON.stringify(data));
        alert("✅ Settings Saved!");
    };

    // Close button handler
    document.getElementById("lb-close").onclick = () => {
        popup.remove();
    };

    // Auto-fill from saved data
    const saved = localStorage.getItem("leaderboardData");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            document.getElementById("lb-name").value = data.name || "";
            document.getElementById("lb-balance").value = data.balance || "";
            document.getElementById("lb-mid").value = data.mid || "";
            document.getElementById("lb-max").value = data.max || "";
            document.getElementById("lb-country").value = data.country || "🇧🇩 Bangladesh";
        } catch (e) {
            console.error("Saved data parse error", e);
        }
    }
})();
