const freelancers = [
    { name: "Dr. Slice", occupation: "gardener", price: 25 },
    { name: "Dr. Pressure", occupation: "programmer", price: 51 },
    { name: "Prof. Possibility", occupation: "teacher", price: 43 },
    { name: "Prof. Prism", occupation: "teacher", price: 81 },
    { name: "Dr. Impulse", occupation: "teacher", price: 43 },
    { name: "Prof. Spark", occupation: "programmer", price: 76 },
    { name: "Dr. Wire", occupation: "teacher", price: 47 },
    { name: "Prof. Goose", occupation: "driver", price: 72 },
  ];

  const priceValue = document.querySelector("#priceValue");

  function createTableHeader(table) {
    // Create thead
    const thead = document.createElement("thead");
    // Create the header rows for our table
    const headerRow = document.createElement("tr");
    // create an array that will store all the headings we want for our table
    const headers = ["Name", "Occupation", "Starting Price"];
  
    // loop over to get every element
    for (const header of headers) {
      //create a new table heading th
      // add the header text in between tags <th> Name </th>
      const th = document.createElement("th");
      // take the text from our header array and add it between th tags
      th.innerText = header;
      // add th to our tr
      headerRow.appendChild(th);
    }
    // add headerRow to thead
    thead.appendChild(headerRow);
    // Add thead to the table
    table.appendChild(thead);
  }
  // ********************* Table Body/ Table Rows ***************
  
  function createTableBody(table, freelancers) {
    // create tbody
    const tbody = document.createElement("tbody");
  
    for (const freelance of freelancers) {
      // create tr to put inside of tbody
      const tableRow = document.createElement("tr");
  
      // Add name, occupation, price to each cell
      for (const key in freelance) {
        // creates the td  ---> <td> Dr. Slice </td>
        const td = document.createElement("td");
        // add data to td
        td.innerText = freelance[key];
        // so add td's to tableRow
        tableRow.appendChild(td);
      }
      tbody.appendChild(tableRow);
    }
    // Add Tbody to our table
    table.appendChild(tbody);
  }
  
  // Calculate the average starting price
  function calculatAverageStartingPrice(freelancers) {
    const totalPrice = freelancers.reduce((prev, curr) => {
      const price = prev + curr.price;
      return price;
    }, 0);
  
    const averagePrice = totalPrice / freelancers.length;
    priceValue.innerText = Math.floor(averagePrice);
  }
  
  function appendTableToContainer(table) {
    // get root element
    const root = document.querySelector("#root");
    // reset table to default
    root.innerHTML = "";
    console.log("root", root);
    const h2 = document.createElement("h2");
    h2.innerText = "Available Freelancers";
    root.appendChild(h2);
    root.appendChild(table);
  }
  
  // Function to update the table and average dynamically
  function updateTableAndAverage(newFreelancer) {
    freelancers.push(newFreelancer);
    const table = document.createElement("table");
    createTableHeader(table);
    createTableBody(table, freelancers);
    appendTableToContainer(table);
  
    calculatAverageStartingPrice(freelancers);
  }
  
  function simulateNewFreelancer() {
    // SetInterval and grab the id
    const intervalId = setInterval(() => {
      const newFreelancer = {
        name: "Carol",
        occupation: "Programmer",
        price: 70,
      };
      updateTableAndAverage(newFreelancer);
    }, 5000);
  
    // return interval id
    return intervalId;
  }
  
  function render(initialState) {
    const table = document.createElement("table");
    createTableHeader(table);
    createTableBody(table, initialState);
    appendTableToContainer(table);
    calculatAverageStartingPrice(freelancers);
  }
  
  const intervalID = simulateNewFreelancer();
  
  setTimeout(() => {
    clearInterval(intervalID);
    console.log("Simulation stopped after 5 seconds");
  }, 5000);
  
  render(freelancers);
  