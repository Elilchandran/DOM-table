// create table function
function createTable(tableData) {
    const table = document.createElement('table');
    table.classList.add('table');
  
    const thead = document.createElement('thead');
    thead.classList.add('thead-dark');
  
    const tr = document.createElement('tr');
  
    for (let header of tableData.headers) {
      const th = document.createElement('th');
      th.setAttribute('scope', 'col');
      th.textContent = header;
      tr.appendChild(th);
    }
  
    thead.appendChild(tr);
  
    const tbody = document.createElement('tbody');
  
    for (let row of tableData.rows) {
      const tr = document.createElement('tr');
  
      for (let cell of row) {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      }
  
      tbody.appendChild(tr);
    }
  
    table.appendChild(thead);
    table.appendChild(tbody);
  
    return table;
  }
  
  // insert table into DOM
  const tableData = {
    headers: ['.', 'First', 'Last', 'Handle'],
    rows: [
      ['1', 'Mark', 'Otto', '@mdo'],
      ['2', 'Jacob', 'Thornton', '@google'],
      ['3', 'Larry', 'the Bird', '@twitter']
    ]
  };
  
  const tableContainer = document.getElementById('table-container');
  const table = createTable(tableData);
  tableContainer.appendChild(table);
  