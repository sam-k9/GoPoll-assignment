import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DeletedTodo = () => {
  const { todoList } = useSelector((store) => store.todo);
  return (
    <div className="h-screen bg-gray-900">
      <ul className="flex py-10 gap-4 flex-col w-[700px] justify-center m-auto">
        {todoList.map((todo) => {
          if (
            todo.status === "DELETED" &&
            (new Date().getTime() - new Date(todo.updatedAt).getTime()) /
              (1000 * 60 * 60) <
              24
          ) {
            return (
              <li
                key={todo.id}
                className="flex justify-between bg-cyan-200 rounded-xl px-4 py-2 gap-3 items-center"
              >
                <Link to={`/todo/${todo.id}`} className="flex-1">
                  <h3 className="font-semibold">{todo.title}</h3>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default DeletedTodo;
