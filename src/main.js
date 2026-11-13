import './style.css';
document.querySelector('#app').innerHTML = `
<div>
<h1>Projeto Integrador - ONG<h1>
<p id="api-status">Carregando status da API...</p>
</div>
`;
// Faz a requisição para a nossa API através do proxy do Vite
fetch('/api/health')
  .then((res) => res.json())
  .then((data) => {
    document.querySelector('#api-status').innerHTML = `
  Status da API: <strong>${data.status}</strong> - ${data.message}
  `;
  })
  .catch((err) => {
    document.querySelector('#api-status').innerText =
      'Erro ao conectar com a API.';
    console.error(err);
  });
