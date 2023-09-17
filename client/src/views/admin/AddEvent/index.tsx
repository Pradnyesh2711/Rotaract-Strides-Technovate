import axios from "axios";
import InputField from "components/fields/InputField";
import { BACKEND_URL } from "constants/definitions";
import { ChangeEvent, useEffect, useReducer, useState } from "react";

const initialState = {
  title: "",
  date: "",
  city: "",
  description: "",
  club: "",
  contactNo: "",
  contactEmail: "",
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
  const [errorField, setErrorField] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const { value } = e.target;
    dispatch({ type: "SET_FIELD", field, value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = {
      title: state.title,
      date: state.date,
      city: state.city,
      description: state.description,
      club: state.club,
      contactNo: state.contactNo,
      contactEmail: state.contactEmail,
    };
    const event = await axios.post(`${BACKEND_URL}/events/addEvent`, payload);
    dispatch({ type: "RESET" });
  };
  return (
    <>
      <div className="h-max">
        <div className="mt-6 rounded-xl bg-white px-12 py-6 shadow-2xl">
          <h2 className="text-3xl font-bold capitalize text-navy-700 dark:text-white">
            Organize a Marathon
          </h2>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <InputField
                variant="auth"
                extra="mb-4 pt-4"
                label="Event Title"
                placeholder="Event ABCD"
                id="title"
                type="text"
                maxLength={25}
                value={state.title}
                errorMsg="Invalid Title"
                onChange={(e) => handleFieldChange(e, "title")}
                state={errorField === "title" ? "error" : ""}
              />
              <InputField
                variant="auth"
                extra="mb-4 pt-4"
                label="Date"
                placeholder="Today's Date"
                id="date"
                type="date"
                value={state.date}
                errorMsg="Invalid Date"
                onChange={(e) => handleFieldChange(e, "date")}
                state={errorField === "date" ? "error" : ""}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="mb-2">
                <label htmlFor="description" className="text-sm text-navy-800">
                  Description:
                </label>
                <textarea
                  placeholder="Description..."
                  id="description"
                  name="description"
                  value={state.description}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full  rounded-xl border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div className="flex-col">
                <InputField
                  variant="auth"
                  extra="mb-2"
                  label="City"
                  placeholder="E.g. Mumbai"
                  id="city"
                  type="text"
                  value={state.city}
                  errorMsg="Invalid City"
                  onChange={(e) => handleFieldChange(e, "city")}
                  state={errorField === "city" ? "error" : ""}
                />
                <InputField
                  variant="auth"
                  extra="mb-2"
                  label="Club"
                  placeholder="E.g. RC-SPIT"
                  id="club"
                  type="text"
                  value={state.club}
                  errorMsg="Invalid Value"
                  onChange={(e) => handleFieldChange(e, "club")}
                  state={errorField === "club" ? "error" : ""}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <InputField
                variant="auth"
                extra="mb-4"
                label="Contact No."
                placeholder="9191919191"
                id="contactNo"
                type="text"
                maxLength={10}
                value={state.contactNo}
                errorMsg="Invalid Contact No."
                onChange={(e) => handleFieldChange(e, "contactNo")}
                state={errorField === "contactNo" ? "error" : ""}
              />
              <InputField
                variant="auth"
                extra="mb-4"
                label="Contact Email"
                placeholder="example@gmail.com"
                id="contactEmail"
                type="text"
                value={state.contactEmail}
                errorMsg="Invalid Email-ID"
                onChange={(e) => handleFieldChange(e, "contactEmail")}
                state={errorField === "contactEmail" ? "error" : ""}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-70 w-64 rounded-md bg-navy-700 px-4 py-2 text-white shadow-2xl  transition duration-300 hover:bg-navy-900 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
