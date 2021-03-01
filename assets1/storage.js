    const CACHE_KEY = "calculation_history";
     
    function checkForStorage() {
       return typeof(Storage) !== "undefined";
    }
     
    function putHistory(data) {
       if (checkForStorage()) {
           let historyData = null;
           if (localStorage.getItem(CACHE_KEY) === null) {
               historyData = [];
           } else  {
               historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
           }
     
           historyData.unshift(data);
     
           if (historyData.length > 6) {
               historyData = [];
           }
          
           
     
           localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
       }
    }
     
    function showHistory() {
       if (checkForStorage) {
           return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
       } else {
           return [];
       }
    }
     
    function renderHistory() {
       const historyData = showHistory();
       let historyList = document.querySelector("#historyList");
       historyList.innerHTML = "";
     
       for (let history of historyData) {
           let row = document.createElement('tr');
           row.innerHTML = "<td>" + history.firstAlfabet + "</td>";
           row.innerHTML += "<td>" + history.jumlah + "</td>";
           row.innerHTML += "<td>" + history.result + "</td>";
           row.innerHTML += "<td>" + history.poin + "</td>";

     
           historyList.appendChild(row);
       }
    }
     
    renderHistory();

