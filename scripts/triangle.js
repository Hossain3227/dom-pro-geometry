

function calculateTriangleArea(){
    const tbInput = document.getElementById('triangle-base');
    const tbText = tbInput.value;
    const base = parseFloat(tbText);
    console.log(base);

    // get height value

    const thInput = document.getElementById('triangle-height')
    const thText = thInput.value; 
    const height = parseFloat(thText);
    console.log(height);

    // calculate area
    const area = 0.5 * base * height;
    console.log(area);

    const taSpan = document.getElementById('triangle-area');
    taSpan.innerText = area;
}


//rectangle area 

function calculateRectangleArea(){
 console.log('something');    
}

