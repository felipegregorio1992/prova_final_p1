function buscarDadosDasLives() {
    fetch('/buscarlives')
      .then((response) => response.json())
      .then((data) => {
       
        const tabelaLives = document.getElementById('tabela-lives');
        const tbody = tabelaLives.querySelector('tbody');
  
       
        tbody.innerHTML = '';
  
 
        data.forEach((live) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${live.nome}</td>
            <td>${new Date(live.data).toLocaleDateString()}</td>
            <td>${live.categoria}</td>
            <td>${live.descricao}</td>
          `;
  
          tbody.appendChild(row);
        });
      })
      .catch((error) => {
        console.error('Erro ao buscar dados das lives:', error);
      });
  }
  
  
  window.onload = buscarDadosDasLives;
  