// makeTitleOfApp.js

function makeTitleOfApp()
{
    // titleContainer
    let titleContainer = ce('div');
    titleContainer.style.position = 'absolute';
    titleContainer.style.right = '10px';
    titleContainer.style.bottom = '5px';
    titleContainer.style.zIndex = 1;
    ba(titleContainer);

    //-//

    // titleText
    let titleText = ce('div');
    titleText.className = 'titleStyle001';
    titleText.innerHTML =
    `<a href = 'https://github.com/christopherandrewtopalian/' target = '_blank'> CATopalian JavaScript Teacher </a>`;
    titleContainer.append(titleText);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

