// OVERLAY ------------------------------------------------------------------------------
const settingsBtn = document.getElementById('settings-btn');
const settingsOverlay = document.getElementById('settings-overlay');
const closeBtn = document.getElementById('close-btn');

// Open the overlay
settingsBtn.addEventListener('click', function(event) {
    event.preventDefault();
    settingsOverlay.style.display = 'flex';
});

//Close the overlay
closeBtn.addEventListener('click', function() {
    settingsOverlay.style.display = 'none';
});

//Close the overlay when clicking outside of the overlay
settingsOverlay.addEventListener('click', function(event) {
    if (event.target === settingsOverlay) {
        settingsOverlay.style.display = 'none';
    }
});


//FONT SIZE ------------------------------------------------------------------------------
const paragraphs = document.querySelectorAll('p');
const fontSlider = document.getElementById('font-slider');

//Update font size
function updateFontSize() {
    const fontSize = fontSlider.value + 'px';
    paragraphs.forEach(p => {
        p.style.fontSize = fontSize;
    });
}

//Listen to the changes of the slider
fontSlider.addEventListener('input', updateFontSize);

//Reset the font to 16
document.getElementById('font-reset').onclick = function(){
    fontSlider.value = 16;
    updateFontSize();
};


//DARK THEME ------------------------------------------------------------------------------
const themeToggle = document.getElementById('theme');
const body = document.body;
const checkboxLabel = document.getElementById('checkbox-label');

//Togle the theme off and on
function toggleTheme() {
    body.classList.toggle('dark-theme', themeToggle.checked);
    settingsOverlay.classList.toggle('dark-theme', themeToggle.checked);
    if(themeToggle.checked){
        checkboxLabel.innerHTML = 'Dark Mode: On';
    } else{
        checkboxLabel.innerHTML = 'Dark Mode: Off';
    }
    
}

// Listen for changes on the checkbox
themeToggle.addEventListener('change', toggleTheme);


//SWAP ELEMENTS ---------------------------------------------------------------------------
const swapButton = document.getElementById('swap-btn');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

let isSwapped = false;

//Swap two sections
function swapSections() {
    // Store section1's parent
    const parent = section1.parentNode;

    if (isSwapped) {
        parent.insertBefore(section1, section2);
    } else {
        parent.insertBefore(section1, section2.nextSibling);
    }

    isSwapped = !isSwapped;
}

//Listen to the button change
swapButton.addEventListener('click', swapSections);


