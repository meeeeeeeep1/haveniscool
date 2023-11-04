   const colors = ["#FF6B81", "#6AC9FF", "#FFD200" ]; // Valid CSS color values
    // URL to your JSON data
    const jsonURL = 'https://meeeeeeeep1.github.io/haveniscool/crosswords/crosswords.json'; // Replace with your JSON URL

    const gridContainer = document.getElementById("grid-container");

    // Fetch the JSON data
    fetch(jsonURL)
      .then(response => response.json())
      .then(data => {
   
        // Iterate through the JSON data and create grid items
        let colorIndex = 0

        for (const key in data1) {
          if (data1.hasOwnProperty(key)) {

            const name = key;
            const imageLink = data1[key];

            // Create grid item
            const gridItem = document.createElement("div");
            gridItem.classList.add("box");
            gridItem.style.backgroundColor = colors[colorIndex]; // Apply background color

            // Create an image element
            const image = document.createElement("img");
            image.classList.add("image-preview")
            image.src = imageLink;

            // Create a paragraph element for the name
            const nameElement = document.createElement("div");
            const name1 = document.createElement("span");
            nameElement.classList.add("title")
            name1.textContent = name;
            nameElement.appendChild(name1);

            // Append the image and name to the grid item
            gridItem.appendChild(image);
            gridItem.appendChild(nameElement);

            // Append the grid item to the grid container
            gridContainer.appendChild(gridItem);
          }
                            console.log(colorIndex)

          if (colorIndex + 2 > colors.length) {
          colorIndex = 0
          } else {
    colorIndex += 1

          }

        }

      })
      .catch(error => console.error("Error fetching JSON:", error));
