// Function to handle mouse click event
function handleClick(event) {
    console.log("Mouse clicked!");
    console.log("Coordinates:", event.clientX, event.clientY);
    // Additional code for handling click event
  }
  
  // Function to handle mouse movement event
  function handleMouseMove(event) {
    console.log("Mouse moved!");
    console.log("Coordinates:", event.clientX, event.clientY);
    // Additional code for handling mouse movement
  }
  
  // Function to handle key press event
  function handleKeyPress(event) {
    console.log("Key pressed!");
    console.log("Key code:", event.keyCode);
    // Additional code for handling key press event
  }
  
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
    // Additional code for handling form submission
  }
  
  // Function to handle window resize event
  function handleWindowResize() {
    console.log("Window resized!");
    console.log("Window dimensions:", window.innerWidth, window.innerHeight);
    // Additional code for handling window resize event
  }
  
  // Add event listeners
  document.addEventListener("click", handleClick);
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("keydown", handleKeyPress);
  document.addEventListener("submit", handleSubmit);
  window.addEventListener("resize", handleWindowResize);
  