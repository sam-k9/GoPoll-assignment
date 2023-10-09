import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markCompleted } from "../features/todo/todoSlice";
import { Link } from "react-router-dom";

const CreatedTodos = () => {
  const { todoList } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  return (
    <div className="h-screen bg-gray-900">
      <ul className="flex py-10 gap-4 flex-col w-[700px] justify-center m-auto">
        {todoList.map(
          (todo) =>
            todo.status === "CREATED" && (
              <li
                key={todo.id}
                className="flex justify-between bg-cyan-200 rounded-xl px-4 py-2 gap-3 items-center hover:bg-green-300"
              >
                <Link className="flex-1" to={`/todo/${todo.id}`}>
                  <h3 className="font-semibold">{todo.title}</h3>
                </Link>

                <section className="flex gap-6">
                  <button
                    className="bg-cyan-500 hover:bg-cyan-700 px-2 py-1 rounded-lg text-gray-50"
                    onClick={() => dispatch(markCompleted({ id: todo.id }))}
                  >
                    Mark as completed
                  </button>
                  <button
                    className="bg-cyan-500 hover:bg-cyan-700 px-2 py-1 rounded-lg text-gray-50"
                    onClick={() => dispatch(deleteTodo({ id: todo.id }))}
                  >
                    Delete
                  </button>
                </section>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default CreatedTodos;
