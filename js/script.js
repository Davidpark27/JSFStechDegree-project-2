/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Global Variables. 

console.log('hello');
const studentList = document.querySelectorAll('.student-item');
const studentsOnPage = 10;

/*** 
This is the show page function. Displays 10 students and prevents the rest from displaying 
using a 'for loop'. 
***/
const showPage = (list,page) => {
   const startIndex = (page * studentsOnPage) - studentsOnPage;
   const endIndex = (page * studentsOnPage);
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';

      }

   }
};
//calling function to show 1st page on initial visit.
showPage(studentList,1);



//function to append students on page by creating new elements.
const appendPageLinks = (list) => {
   const totalPages = Math.ceil(list.length/studentsOnPage);
   const div = document.createElement('div'); 
   div.className = 'pagination';
   const ul = document.createElement('ul');
   const pageDiv = document.querySelector('.page'); 
   pageDiv.appendChild(div);
   div.appendChild(ul) 
      //for loop to append new 'a' and 'li' elements into 'ul'
      for (let i = 1; i <= totalPages; i+=1) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        ul.appendChild(li);
        li.appendChild(a);
        
        a.textContent = i;
        a.href = '#';
         if (i === 1) {
            a.className = 'active';
         }
         

      } 
      // The event listener that waits for users to click
      //page number and returning showPage function with 
      //event parameters.
      ul.addEventListener('click', (event) => {
         const click = event.target;
         const pageNum = event.target.textContent;
         showPage(studentList, pageNum);
         const links = document.querySelectorAll('a');
      for (let i = 0; i < links.length; i+=1) {
          links[i].className = 'none';
         } 
      click.className = 'active';

      }
);
}
//calling the appendPageLinks function.
appendPageLinks(studentList);


