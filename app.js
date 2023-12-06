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
    
    const thead = document.createElement("thead");
    
    const headerRow = document.createElement("tr");
    
    const headers = ["Name", "Occupation", "Starting Price"];
  
    
    for (const header of headers) {
      
      
      const th = document.createElement("th");
      
      th.innerText = header;
      
      headerRow.appendChild(th);
    }
    
    thead.appendChild(headerRow);
    
    table.appendChild(thead);
  }
  
  
  function createTableBody(table, freelancers) {
    
    const tbody = document.createElement("tbody");
  
    for (const freelance of freelancers) {
      
      const tableRow = document.createElement("tr");
  
      
      for (const key in freelance) {
        
        const td = document.createElement("td");
        
        td.innerText = freelance[key];
        
        tableRow.appendChild(td);
      }
      tbody.appendChild(tableRow);
    }
    
    table.appendChild(tbody);
  }
  
  
  function calculatAverageStartingPrice(freelancers) {
    const totalPrice = freelancers.reduce((prev, curr) => {
      const price = prev + curr.price;
      return price;
    }, 0);
  
    const averagePrice = totalPrice / freelancers.length;
    priceValue.innerText = Math.floor(averagePrice);
  }
  
  function appendTableToContainer(table) {
    
    const root = document.querySelector("#root");
    
    root.innerHTML = "";
    console.log("root", root);
    const h2 = document.createElement("h2");
    h2.innerText = "Available Freelancers";
    root.appendChild(h2);
    root.appendChild(table);
  }
  
  
  function updateTableAndAverage(newFreelancer) {
    freelancers.push(newFreelancer);
    const table = document.createElement("table");
    createTableHeader(table);
    createTableBody(table, freelancers);
    appendTableToContainer(table);
  
    calculatAverageStartingPrice(freelancers);
  }
  
  function simulateNewFreelancer() {
    
    const intervalId = setInterval(() => {
      const newFreelancer = {
        name: "Carol",
        occupation: "Programmer",
        price: 70,
      };
      updateTableAndAverage(newFreelancer);
    }, 5000);
  
    
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
  