import express from 'express';
const app = express();
const PORT = process.env.PORT || 3001;
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API funcionando perfeitamente!' });
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
