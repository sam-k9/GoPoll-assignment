/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { markCompleted } from "../features/todo/todoSlice";

export const loader = ({ params }) => {
  const id = params.id;

  return id;
};

const IdPage = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((store) => store.todo);
  const id = useLoaderData();
  const todo = todoList.filter((s) => s.id === id);

  console.log(todo);
  if (todo.length < 1) {
    return <h1>Id Not Found</h1>;
  }

  return (
    <div className="bg-gray-900 h-screen flex  gap-20 items-center justify-center">
      <div className="flex flex-col gap-10 py-8 px-6 min-h-[500px] justify-center w-max rounded-xl bg-purple-600 text-xl font-semibold text-gray-300">
        <h1 className="text-center font-bold text-2xl text-gray-200">
          Task Detail&apos;s
        </h1>
        <p>
          <span className="text-green-500">Id:</span> {todo[0].id}
        </p>
        <p>
          <span className="text-green-500">Title:</span> {todo[0].title}
        </p>
        <p>
          <span className="text-green-500">Status: </span>
          {todo[0].status}
          {todo[0].status === "CREATED" && (
            <button
              onClick={() => dispatch(markCompleted({ id: todo[0].id }))}
              className="ml-4 cursor-pointer bg-purple-900 w-max px-4 py-2 rounded-xl text-cyan-300 text-base"
            >
              Mark as completed
            </button>
          )}
        </p>

        <p>
          <span className="text-green-500">Tags:</span> {todo[0].tags}
        </p>
        <p>
          <span className="text-green-500">Created at:</span>{" "}
          {new Date(todo[0].createdAt).toLocaleString()}
        </p>
        <p>
          <span>
            <span className="text-green-500">Updated at:</span>
          </span>{" "}
          {new Date(todo[0].updatedAt).toLocaleString()}
        </p>
        <Link
          to="/"
          className="hover:bg-gray-800 hover:text-purple-600 text-center cursor-pointer bg-purple-900 px-4 py-2 rounded-xl text-cyan-300 text-base"
        >
          GO HOME
        </Link>
      </div>
    </div>
  );
};

export default IdPage;
