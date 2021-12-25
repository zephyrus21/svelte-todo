<script lang="ts">
  export let todo: Todo;
</script>

<div class="todo" class:done={todo.done}>
  <form action="/todos/{todo.uid}.json?_method=patch" method="post">
    <input type="hidden" name="done" value={todo.done ? "" : "true"} />
    <button class="toggle" />
  </form>

  <form
    action="/todos/{todo.uid}.json?_method=patch"
    method="post"
    class="text"
  >
    <input type="text" name="text" value={todo.text} />
  </form>

  <form action="/todos/{todo.uid}.json?_method=delete" method="post">
    <button aria-label="Delete todo" class="delete" />
  </form>
</div>

<style>
  .todo {
    display: grid;
    grid-template-columns: 2rem 1fr 2rem;
    grid-gap: 0.5rem;
    align-items: center;
    margin: 0 0 0.5rem 0;
    padding: 0.5rem;
    background-color: white;
    border-radius: 8px;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
    transform: translate(-1px, -1px);
    transition: filter 0.2s, transform 0.2s;
  }

  .todo button {
    width: 2em;
    height: 2em;
    border: none;
    background-color: transparent;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .todo input {
    flex: 1;
    padding: 0.5em 2em 0.5em 0.8em;
    border-radius: 3px;
  }

  button.toggle {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    box-sizing: border-box;
    background-size: 1em auto;
  }

  .text {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
  }

  .delete {
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    opacity: 0.2;
  }

  .delete:hover,
  .delete:focus {
    transition: opacity 0.2s;
    opacity: 1;
  }

  .done {
    transform: none;
    opacity: 0.4;
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));
  }

  .done .toggle {
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  }
</style>
