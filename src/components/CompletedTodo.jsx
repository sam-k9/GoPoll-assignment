import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CompletedTodo = () => {
  const { todoList } = useSelector((store) => store.todo);

  return (
    <div className="h-screen bg-gray-900">
      <ul className="flex py-10 gap-4 flex-col w-[700px] justify-center m-auto">
        {todoList.map(
          (todo) =>
            todo.status === "COMPLETED" && (
              <li
                key={todo.id}
                className="flex justify-between bg-cyan-200 rounded-xl px-4 py-2 gap-3 items-center"
              >
                <Link key={todo.id} to={`/todo/${todo.id}`} className="flex-1">
                  <h3 className="font-semibold">{todo.title}</h3>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default CompletedTodo;
