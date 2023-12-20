const randomize = function(){

    // Create arrays for each group(by header) of items(randomized)
    const   group1 = agroupRandomized(1,1,4), 
            group2 = agroupRandomized(2,5,11),
            group3 = agroupRandomized(3,12,17),
            group4 = agroupRandomized(4,18,19),
            text20 = document.getElementById('Q366C20');

    // Add the shuffled elements to the main array
    const elements = group1.concat(group2,group3,group4,text20);

    // Render the randomized list
    const listElement = document.getElementsByClassName('response-set')[0];
    for (let i=0; i<elements.length; i++) {
        listElement.appendChild(elements[i]);
    }
}

/**
 * 
 * @param {Number} header
 * @param {Number} start 
 * @param {Number} end
 * @returns {Array}
 */
const agroupRandomized = function (header,start, end){
    let headerG = document.getElementById(`Q366G${header}`),
        group = [];
    for(let i=start; i<end+1; i++){
        group.push(document.getElementById(`Q366C${i}`));
    }
    // Shuffle the element of group
    group.sort(() => Math.random() - 0.5);
    return [headerG, ...group];
}