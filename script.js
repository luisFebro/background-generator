let endResultColor = document.querySelector(".endResultColor"),
    color1 = document.querySelector(".color1"),
    color2 = document.querySelector(".color2"),
    body = document.getElementById("gradient"),
    button = document.querySelector(".copyButton");


function setGradient() {
    body.style.background =
        "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    endResultColor.value = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Copy to clipboard and tooltip
function copyTextToClipboard(e) {
    const copyText = document.querySelector(".endResultColor"),
        tooltip = document.getElementById("myTooltip");
    if(copyText.value === "Current CSS Background") {
        e.preventDefault();
        tooltip.innerHTML = "Select your desired color first!";
    } else {
        copyText.select();
        document.execCommand("copy");
        tooltip.innerHTML = "Copied to Clipboard";
        setTimeout(() => tooltip.innerHTML = "", 4000);
    }
}

function showTooltipOnmouseover() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

button.addEventListener("click", copyTextToClipboard);
button.addEventListener("mouseover", showTooltipOnmouseover);
