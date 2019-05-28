require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.SERVER_PORT || 3000;

const GitHubApi = require('./github-api');
const { verifyCookie, createCookie } = require('./token-cookie');
const { addTodo, deleteTodo, getTodos } = require('./store');

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('../dist'));

app.get('/api/todos', async (req, res) => {
  try {
    const token = await verifyCookie(req);
    res.json(getTodos(token.username));
  } catch (ex) {
    res.status(401).json({error: ex.message});
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const token = await verifyCookie(req);
    const todo = {
      task: req.body.task,
      done: Boolean(req.body.done)
    }
    addTodo(token.username, todo.task, todo.done);
    res.json({ok: true});
  } catch (ex) {
    res.status(401).json({error: ex.message});
  }
});

app.delete('/api/todos/:id', async (req, res) => {
  try {
    const token = await verifyCookie(req);
    const affected = deleteTodo(token.username, req.params.id);
    res.json({affected});
  } catch (ex) {
    res.status(401).json({error: ex.message});
  }
});

app.get('/auth', async (req, res) => {
  const code = req.query.code;
  if (!code) {
    res.send('Please pass a valid code.');
    return;
  }
  try {
    const githubToken = await GitHubApi.getToken(
      process.env.GITHUB_CLIENT_ID,
      process.env.GITHUB_CLIENT_SECRET,
      code
    );
    const userData = await GitHubApi.getUser(githubToken);
    await createCookie(
      res,
      {username: userData.login, name: userData.name}
    )
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(401).send('Authorization failed');
  }
});

app.listen(port, '0.0.0.0', () => console.log(`Server listening on port ${port}`));