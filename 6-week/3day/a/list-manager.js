// grap the body
let body = document.getElementsByTagName('body')[0];
let script = document.getElementsByTagName('script')[0];

// div countiner
let continer = document.createElement('div');
continer.setAttribute('style',
  'dipsplay: flex; justify-count: space-between; width: 400px;');
body.insertBefore(continer, script);


// left box
let leftList = document.createElement('ul');
leftList.setAttribute('style',
  'border:1px solid black; width: 120px; min-height: 92px; padding: 0px;');
continer.appendChild(leftList);

let items = ['bread', 'milk', 'orange', 'tomato'];
// add the element 
// make box 

for (let i of items) {
  let listElement = document.createElement('li');
  listElement.textContent = i;
  listElement.setAttribute('style', 'list-style-type:none;');
  leftList.appendChild(listElement);
}

// middelBox

let middleList = document.createElement('ul');
middleList.setAttribute('style',
  'width: 120px; min-heigh:92px; padding: 0px; text-align:center;');
continer.appendChild(middleList);

let Buttons = ['Up', '>', 'X', 'Down'];

//   add element inside of box
for (let i of Buttons) {
  let listElement = document.createElement('li');
  let buttonElement = document.createElement('button');
  buttonElement.textContent = i;
  listElement.setAttribute('style', 'list-style-type: none;');
  buttonElement.setAttribute('style', 'width:120px;');

  listElement.appendChild(buttonElement);
  middleList.appendChild(listElement);
}

// rightBox
let rightList = document.createElement('ul');
rightList.setAttribute('style',
  'border: 1px solid black; width: 120px; min-hight: 92px; padding: 0px;');
continer.appendChild(rightList);

//  setting defult hightlight to the first element in the list
leftList.children[0].setAttribute('style', 'background-color: grey');

// clicking on the Down Button
let down = middleList.children[3];
down.onclick = function (event){
  // saving the left ul into a varible on the  basic of the current event
  let leftListWithEvent = event.currentTarget.parrentElement.perviousSibling;

  let indexOfHighlightedElelemnt = 0;

  for (let i = 0; i < leftListWithEvent.childElementCount; i++) {
    if (leftListWithEvent.children[i].style.backgroundColor === 'grey') {
      indexOfHighlightedElelemnt = i;
    }
  }
  // we need if statemant, to stop the moving of hightlighteen when the highlight is on the last item
  if (indexOfHighlightedElelemnt != leftListWithEvent.childElementCount - 1) {
    leftListWithEvent.children[indexOfHighlightedElelemnt].style.backgroundColor = 'white';
    leftListWithEvent.children[indexOfHighlightedElelemnt + 1].style.backgroundColor = 'grey';
  }
};




