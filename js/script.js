/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
Global Variables.
***/
const studentList = document.querySelectorAll('.student-item cf');
const studentsOnPage = 10;




/*** 
This is the show page function. Displays 10 students and prevents the rest from displaying.
***/
const showPage = (list,page) => {
   const startIndex = (page * studentsOnPage) - studentsOnPage;
   const endIndex = (page * studentsOnPage);
   for (let i = 0;, i < list.length; i++) {
      if (i.= startIndex && i < endIndex) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';

      }

   }
};



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.