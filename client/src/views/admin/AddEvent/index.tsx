import { useReducer } from "react";

const initialState = {
  eventType: "Marathon", // Default event type
  name: "",
  date: "",
  location: "",
  description: "",
};

function formReducer(state: any, action: any) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_EVENT_TYPE":
      return { ...state, eventType: action.eventType };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const CreateEvent = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: "RESET" });
  };
  return (
    <>
      <div className="h-max">
        <div className="mt-6 rounded-xl bg-white px-12 py-6 shadow-2xl">
          <h2 className="text-3xl font-bold capitalize text-navy-700 dark:text-white">
            Organize a Marathon
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2"></div>
            <div className="mb-4 pt-4">
              <label htmlFor="name" className="block text-gray-600">
                Event Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={state.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-600">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={state.date}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-600">
                Location:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={state.location}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-600">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={state.description}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-70 w-64 rounded-md bg-navy-700 px-4 py-2 text-white shadow-2xl  transition duration-300 hover:bg-navy-900 "
              >
                Select Route
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
