// Auto populate table based on leagueKeepers and headers variables
// Modify leagueKeepers variable to reflect each team's keepers

const headers = [
  'Draft Round',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  'Players Kept'
];

function createTable(keepers) {  
  var body = document.getElementsByTagName('body')[0];
  const table = document.createElement('table');
  table.style.width = '100%';
  table.setAttribute('border', '1');
  
  table.appendChild(generateTableHeaders())
  table.appendChild(generateBody(keepers));

  body.appendChild(table);
}

function generateTableHeaders() {
  const tableHeaders = document.createElement('thead');

  headers.map(header => tableHeaders.appendChild(document.createElement('th')).appendChild(document.createTextNode(header)));
  return tableHeaders;
}

function generateBody(leagueKeepers) {
  const tableBody = document.createElement('tbody');
  leagueKeepers.map(({ teamName, keepers }) => {
    const tr = document.createElement('tr');
    let text = '';
    // 17 columns (team name, 1-15, players)
    for (let j = 0; j < headers.length; j++) {
      const td = document.createElement('td');
      let text = '';
      
      if (j === 0) {
        text = teamName;
      } else if (j === headers.length - 1) {
        text = keepers.map(({player, round}) => `${player} (${round})`).join(', ')
      } else if (keepers.map(({round}) => round).indexOf(j) > -1) {
        text = 'X'
      } else {
        text = ' ' 
      }

      td.appendChild(document.createTextNode(text));
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  });

  return tableBody;
}