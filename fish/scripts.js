document.addEventListener("DOMContentLoaded", function () {
    // Attach click event listener to the feed button.
    const feedButton = document.getElementById("feed-button");
    feedButton.addEventListener("click", function () {
      // Get the tank element.
      const tank = document.getElementById("tank");
  
      // Create the fish food image element.
      const fishFood = document.createElement("img");
      fishFood.src = "./assets/square-food.png"; // Adjust the image path as needed.
      fishFood.alt = "Fish Food";
  
      // Style the fish food for positioning and appearance.
      fishFood.style.position = "absolute";
      fishFood.style.left = "50%";
      fishFood.style.top = "0px"; // Start at the top of the tank.
      fishFood.style.transform = "translateX(-50%)";
      fishFood.style.width = "50px";
      fishFood.style.height = "50px";
      fishFood.style.opacity = "1"; // Fully visible at the start.
  
      // Append the fish food to the tank.
      tank.appendChild(fishFood);
  
      // Force reflow so the browser registers the starting position.
      void fishFood.offsetWidth;
  
      // Set up the CSS transitions:
      // - The food will drop over 2 seconds (top property)
      // - It will fade out over 1 second (opacity property)
      fishFood.style.transition = "top 2s ease-in, opacity 1s ease-out";
  
      // Calculate the drop distance (drop to near the bottom of the tank).
      const dropDistance = tank.clientHeight - fishFood.clientHeight;
  
      // Trigger the drop after a short delay.
      setTimeout(() => {
        fishFood.style.top = dropDistance + "px";
        fishFood.style.opacity = "0";
      }, 50);
  
      // Listen for the transition events to start the fade out when the drop finishes,
      // and then remove the element after the fade out completes.
    //   fishFood.addEventListener("transitionend", function handler(e) {
    //     // When the drop is complete (top property finishes transitioning)
    //     if (e.propertyName === "top") {
    //       // Start fading out by setting opacity to 0.
    //       fishFood.style.opacity = "0";
    //     } else if (e.propertyName === "opacity") {
    //       // When the fade-out is complete, remove the fish food element.
    //       fishFood.removeEventListener("transitionend", handler);
    //       fishFood.remove();
    //     }
    //   });
    });
  });
  