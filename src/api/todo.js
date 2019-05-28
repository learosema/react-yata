const baseURL = '/';

export async function isLoggedIn() {
  try {
    const result = await fetch(baseURL + 'api/todos');
    if (result.status !== 200) {
      return false;
    }
    return true;
  } catch (ex) {
    throw new Error(ex.message);
  }
}

export async function getTodos() {
  try {
    const response = await fetch(this.baseURL + 'api/todos');
    return await response.json();
  } catch (ex) {
    throw new Error(ex.message);
  }
}

export async function addTodo(data) {
  try {
    const response = await fetch(this.baseURL + 'api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (ex) {
    throw new Error(ex.message);
  }
}

export async function deleteTodo(id) {
  try {
    const response = await fetch(this.baseURL + `api/todos/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  } catch (ex) {
    throw new Error(ex.message);
  }
}
