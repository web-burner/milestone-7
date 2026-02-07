export default function ToDo({ task, isDone }) {
  return (
    <div className="student">
      <h2>ToDos</h2>
      <p>{isDone ? `Done: ${task}` : `Pending: ${task}`}</p>
    </div>
  );
}
