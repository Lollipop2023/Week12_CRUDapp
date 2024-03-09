/*JavaScript and I are finally starting to not always fight, we aren't friends yet...but 
there is a start to respect. Someday I hope we get to be friends...the work from my end is 
gonna be a long road. The new row being added to the table still gave me some fits, but I 
WIN! I think anyway. Hoping when I try the API this thing works.  I used an array for the entries
so the API has something to record and access. Assigned the inputs of the form to recognize
the values given so they can be useful. Then I grouped the input values to be an entry and have
that push to the array. After an entry is made, I wanted the form to automatically clear so the
next time it is ready to go and I don't have to do a bunch of deleting first! To get the table to 
display correctly, I had a few hours eyeballs deep into what the heck I was doing wrong, I wrote the 
function to displayEntries...but seriously underestimated how many times I would need to call it
in this program. Still wrapping my head around it, but starting to grasp the rerendering part it needs
after each portion of code. After that, I just want the information to show on the screen. So 
I made sure it would make a new row on my table. That each new row also had an added delete button
in case something is entered wrong and we don't want it displayed any more. That pretty much
sums up this app. Create a days recording, read it on the page, update the information as needed, 
and delete information not wanted or incorrect. */

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('healthForm');
  const entryTableBody = document.getElementById('entryTableBody');
  let healthEntries = []; 
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const dateInput = document.getElementById(`date`);
    const bloodPressureInput = document.getElementById('bloodPressure');
    const glucoseInput = document.getElementById('glucose');
    
    const date = dateInput.value;
    const bloodPressure = bloodPressureInput.value;
    const glucose = glucoseInput.value;
    
    
    const newEntry = {
      date: date,
      bloodPressure: bloodPressure,
      glucose: glucose
    };
    
    
    healthEntries.push(newEntry);
    
    bloodPressureInput.value = '';
    glucoseInput.value = '';
    dateInput.value = '';
    
    displayEntries();
  });

  function displayEntries() {
    entryTableBody.innerHTML = '';
    
    
    healthEntries.forEach(function(entry) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${entry.date}</td>
        <td>${entry.bloodPressure}</td>
        <td>${entry.glucose}</td>
        <td><button class="btn btn-warning btn-sm delete-btn">Remove</button></td>
      `;
      entryTableBody.appendChild(newRow);
    });
  }

  function deleteEntry(index) {
    healthEntries.splice(index, 1); 
    displayEntries(); 
  }

  entryTableBody.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      const row = event.target.closest('tr');
      const index = Array.from(row.parentNode.children).indexOf(row); 
      deleteEntry(index); 
    }
  });
 
  displayEntries();
});

  