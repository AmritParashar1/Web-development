//Example 1
document.getElementById("changeTextButton").addEventListener('click',function(){
  let paragraph = document.getElementById("myParagraph")
  paragraph.textContent = "Hello World!"

});

//Example 2

document.getElementById("highlightFirstCity").addEventListener('click',function(){
    let citylist = document.getElementById("citiesList")
    citylist.firstElementChild.classList.add("highlight");
});

//Example 3

