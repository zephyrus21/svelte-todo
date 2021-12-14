<script>
  import TodoItem from "../components/todo-item.svelte";
</script>

<svelte:head>
  <title>Todo List</title>
</svelte:head>

<h1>Todos</h1>

<form action="">
  <input type="text" name="todo" placeholder="tap + to add a todo" />
</form>

<TodoItem />
<TodoItem />
<TodoItem />
