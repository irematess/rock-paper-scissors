// Get  to DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  computerResult = document.querySelector(".computer_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");
// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    userResult.src = computerResult.src = "images/rock.png";
    result.textContent = "Wait...";
    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });
    gameContainer.classList.add("start");
    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;
      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let computerImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
      // Set the CPU image to a random option from the array
      computerResult.src = computerImages[randomNumber];
      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let computerValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];
      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Computer",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Computer",
        SS: "Draw",
        SR: "Computer",
        SP: "User",
      };
      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + computerValue];
      // Display the result
      result.textContent = userValue === computerValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});