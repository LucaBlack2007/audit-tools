document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["hideEnabled", "lookupMode", "projectEnabled", "projectDays"], (data) => {
        document.getElementById("hideEnabled").checked = data.hideEnabled;
        document.getElementById("lookupMode").value = data.lookupMode || "clipboard";
        document.getElementById("projectEnabled").checked = data.projectEnabled;
        if (data.projectDays !== undefined) {
            document.getElementById("projectDays").value = data.projectDays;
        }
    });

    document.getElementById("save").addEventListener("click", () => {
        const hideEnabled = document.getElementById("hideEnabled").checked;
        const lookupMode = document.getElementById("lookupMode").value;
        const projectEnabled = document.getElementById("projectEnabled").checked;
        const projectDays = parseInt(document.getElementById("projectDays").value) || 2;

        chrome.storage.sync.set({ hideEnabled, lookupMode, projectEnabled, projectDays }, () => {
            alert("Settings saved!");
        });
    });
});
