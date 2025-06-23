document.addEventListener('DOMContentLoaded', () => { // Document will load after whole HTML content is loaded
    const taskinput = document.getElementById('task-input'); // Use to collect task from the user 
    const addtaskbtn = document.getElementById('add-task-btn'); // User will click this button to add tasks from input box to the task list.
    const tasklist = document.getElementById('task-list'); // The list will dynamically add new items in this container.
    
    // FIXED: Added missing # for ID selector and corrected variable name
    const emptyimage = document.querySelector('#empty-image'); // or document.getElementById('empty-image');

    // DEBUG: Let's see what's happening
    console.log('Empty image element:', emptyimage); // Check if element is found

    // FIXED: Corrected function syntax and property names
    const toggleemptystate = () => {
        console.log('Task list children count:', tasklist.children.length); // Debug line
        if (emptyimage) { // Check if element exists
            const shouldShow = tasklist.children.length === 0;
            console.log('Should show image:', shouldShow); // Debug line
            emptyimage.style.display = shouldShow ? 'block' : 'none';
            console.log('Image display style set to:', emptyimage.style.display); // Debug line
        } else {
            console.log('Empty image element not found!'); // Debug line
        }
    };

    // This function holds the process of adding new task to the to-do list
    const addTask = (event) => {
        event.preventDefault();
        const tasktext = taskinput.value.trim();

        // If the text is invalid or empty then the function stops
        if(!tasktext){
            return; // After writing return, the function doesn't proceed as anything written after return statement is not valid.
        }
        
        const li = document.createElement('li'); // Dynamically creates a li(list item element in javascript)
        li.textContent = tasktext; // Each task in the to-list is represented as the li element inside the task list 
        tasklist.appendChild(li); // The appendChild() method in JavaScript is used to add a new child node to an existing parent node within the Document Object Model (DOM).
        
        // FIXED: Input clearing should work properly now
        taskinput.value = ''; // Clears the text box after the task is added, preparing the text box for the next element adding
        
        // FIXED: Focus back on input for better user experience
        taskinput.focus();
        
        // Toggle image visibility
        toggleemptystate();
    };

    // Initialize empty state on page load
    toggleemptystate();

    // Event listeners
    addtaskbtn.addEventListener('click', addTask);
    taskinput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            addTask(e);
        }
    });
});