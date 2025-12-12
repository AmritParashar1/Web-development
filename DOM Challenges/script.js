// Dom manipulations are basically two parts 
//get the element
//event listening

//listening to an event and grabbing the element

//example 1:

// document.getElementById("changeTextButton").addEventListener('click',function() {
// let paragraph = document.getElementById("myParagraph")
// paragraph.textContent = "the paragraph is changed"
// });

document.getElementById("changeTextButton").addEventListener('click',function() {
  let paragraph = document.getElementById("myParagraph")
  paragraph.textContent = "the paragraph has been changed"
});

//example 2:
// document.getElementById("highlightFirstCity").addEventListener("click",function() {
//    let citiesList =  document.getElementById("citiesList")
//    citiesList.firstElementChild.classList.add("highlight");
// });

document.getElementById("highlightFirstCity").addEventListener("click",function() {
  let citiesList = document.getElementById("citiesList")
  citiesList.firstElementChild.classList.add("highlight");
});

//example 3:

// document.getElementById("changeOrder").addEventListener("click",function() {
//   let coffeeType = document.getElementById("coffeeType")
//   coffeeType.textContent = "Espresso";
//   coffeeType.style.backgroundColor = "red";
//   coffeeType.style.padding = "5px";
// });

document.getElementById("changeOrder").addEventListener("click",function() {
  let coffeeType = document.getElementById("coffeeType")
  coffeeType.textContent = "Expresso";
  coffeeType.style.backgroundColor = "red";
  coffeeType.style.padding = "5px";
})

// example 4:

// document.getElementById("addNewItem").addEventListener("click",function(){
//   let newItem =  document.createElement("li")
//   newItem.textContent = "Eggs";
  
//   document.getElementById("shoppingList").appendChild(newItem);

// });

document.getElementById("addNewItem").addEventListener("click",function() {
  let newItem = document.createElement("li");
  newItem.textContent = "Bilaota";

  document.getElementById("shoppingList").appendChild(newItem);
});

// example 5:

// document.getElementById("removeLastTask").addEventListener("click",function(){
//   let taskList = document.getElementById("taskList");
//   taskList.lastElementChild.remove();

// });

document.getElementById("removeLastTask").addEventListener("click",function() {
  let taskList = document.getElementById("taskList");
  taskList.lastElementChild.remove();
})


// example 6:

document.getElementById("clickMeButton").addEventListener("dblclick",function(){
  alert("Kiyo");

});


// example 7:

// document.getElementById("teaList").addEventListener("click",function(event){
//   if(event.target && event.target.matches(".teaItem")) {
//     alert("You selected : " + event.target.textContent);

//   }
// });

document.getElementById("teaList").addEventListener("click",function(event) {
  if(event.target && event.target.matches(".teaItem")) {
    alert("You selected : " + event.target.textContent);
  }
})


// example 8:

// document.getElementById("feedbackForm").addEventListener("submit",function(event){
//   event.preventDefault();
//   let feedback = document.getElementById("feedbackInput").value;
//   console.log(feedback);
//   document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;
//   feedbackDisplay.style.backgroundColor = "yellow";
//   feedbackDisplay.style.color = "black"
// });

document.getElementById("feedbackForm").addEventListener("submit",function(event) {
  event.preventDefault();
  let feedback = document.getElementById("feedbackInput").value;
  console.log(feedback);
  document.getElementById("feedbackDisplay").textContent = `Feedback is : ${feedback}`;
  feedbackDisplay.style.backgroundColor = "yellow";
  feedbackDisplay.style.color = "black";
})




// example 9:

document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});


// example 10:

document.getElementById("toggleHighlight").addEventListener("click",function(){
  let descriptionText = document.getElementById("description");
  descriptionText.classList.toggle("highlight");
});



