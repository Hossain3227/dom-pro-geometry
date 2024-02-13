

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
  //get length 
   const rlInput = document.getElementById('rectangle-length');
   const rlText = rlInput.value;
   const length = parseFloat(rlText); 
   console.log(length);

   //get width 

   const rwInput = document.getElementById('rectangle-width');
   const rwText = rwInput.value;
   const width =  parseFloat(rwText)
   console.log(width);

   //calculate r area 

   const rarea = length * width;
   console.log(rarea);

   //show rectangle area 

   const raSpan = document.getElementById('rectangle-area');
   raSpan.innerText = rarea;

}


//parallelogram area calculate

function calculatepArea(){
  //  const plInput = document.getElementById('p-base');
  //  const plText = plInput.value;
  //  const pbase = parseFloat(plText); 
   const pbase = getInputValueId('p-base');
   console.log(pbase);
   const pheight = getInputValueId('p-height');
   console.log(pheight);

   const area = pbase * pheight;
   console.log(area);

   setinnerTextById('p-area',area);
   // console.log(pbase);
}

// function pBase(){

//    const plInput = document.getElementById('p-base');
//    const plText = plInput.value;
//    const pbase = parseFloat(plText);
//    return pbase;
// }

function getInputValueId(inputfieldid){
   const inputfield = document.getElementById(inputfieldid);
   const inputValueText = inputfield.value;
   const inputValue = parseFloat(inputValueText);
   // console.log(inputValue);
   return inputValue;
}

function setinnerTextById(elementId, area){
   const element = document.getElementById(elementId);
   element.innerText = area;
}


function calculatePentaArea(){
  const pentabase = getInputValueId('penta-length');
  console.log(pentabase);
  const pentaheight = getInputValueId('penta-width');
  console.log(pentaheight); 
  
  const pentaArea = 0.5 * pentabase  * pentaheight;
  console.log(pentaArea);
  setinnerTextById('penta-area',pentaArea); 
}