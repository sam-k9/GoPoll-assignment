import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  const onSUbmit = (e) => {
    e.preventDefault();
    const tagArray = tags.split(" ");
    dispatch(addTodo({ title, tags: tagArray }));
    setTitle("");
    setTags("");
  };

  return (
    <form
      onSubmit={onSUbmit}
      className="py-4 px-4 flex justify-between bg-gray-900"
    >
      <label className="text-lg font-medium text-gray-100">
        Title
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-gray-900 bg-cyan-50 ml-6 py-2 px-2 focus:outline-none rounded-md border-gray-400 border-l-2"
        />
      </label>
      <label className="text-lg font-medium text-gray-100">
        Tags{" "}
        <span className="text-sm font-normal">
          (upto 3 | space b/w each tag)
        </span>
        <input
          required
          type="text"
          value={tags}
          onChange={(e) => {
            if (e.target.value.split(" ").length < 4) setTags(e.target.value);
          }}
          className="text-gray-900 bg-cyan-50 ml-6 py-2 px-2 focus:outline-none rounded-md border-gray-400 border-l-2 text"
        />
      </label>
      <button
        type="submit"
        className="px-4 rounded-xl font-semibold text-white bg-cyan-500"
      >
        Create Todo
      </button>
    </form>
  );
};

export default Form;
