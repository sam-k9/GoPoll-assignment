import { useState } from "react";
import { CreatedTodos, CompletedTodo, DeletedTodo, Form } from "../components";

const HomePage = () => {
  const [todoTypeSelected, setTodoTypeSelected] = useState("CREATED");

  return (
    <>
      <div className="bg-gray-900">
        <h1 className="text-3xl font-bold text-center  p-4 text-gray-100">
          Todo App
        </h1>
        <h3 className="flex items-center gap-10 py-2 justify-center ">
          <button
            className={`px-4 py-2 rounded-xl font-semibold ${
              todoTypeSelected == "CREATED"
                ? "text-white bg-cyan-500"
                : "text-gray-600 bg-green-300"
            }`}
            onClick={() => setTodoTypeSelected("CREATED")}
          >
            CREATED
          </button>
          <button
            className={`px-4 py-2 rounded-xl font-semibold ${
              todoTypeSelected == "COMPLETED"
                ? "text-white bg-cyan-500"
                : "text-gray-600 bg-green-300"
            }`}
            onClick={() => setTodoTypeSelected("COMPLETED")}
          >
            COMPLETED
          </button>
          <button
            className={`px-4 py-2 rounded-xl font-semibold ${
              todoTypeSelected == "DELETED"
                ? "text-white bg-cyan-500"
                : "text-gray-600 bg-green-300"
            }`}
            onClick={() => setTodoTypeSelected("DELETED")}
          >
            DELETED
          </button>
        </h3>
      </div>

      {todoTypeSelected === "CREATED" && <Form />}

      {todoTypeSelected === "CREATED" && <CreatedTodos />}
      {todoTypeSelected === "COMPLETED" && <CompletedTodo />}
      {todoTypeSelected === "DELETED" && <DeletedTodo />}
    </>
  );
};

export default HomePage;
