import React, { useEffect, useReducer } from 'react';
import {useLocation} from 'react-router-dom';




const EditEvent = () => {
  const location = useLocation();
  
  const initialState = {
    id: location.state.event.id,
    eventType: location.state.event.eventType, // Default event type
    name: location.state.event.name,
    date: location.state.event.date,
    location: location.state.event.location,
    description: location.state.event.description,
  };

  function formReducer(state:any, action:any) {
    switch (action.type) {
      case 'SET_FIELD':
        return { ...state, [action.field]: action.value };
      case 'SET_EVENT_TYPE':
        return { ...state, eventType: action.eventType };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
}
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: 'RESET' });
  };
  return (
    <>
    <div className="h-max">
        <div className='bg-white mt-6 rounded-xl px-16 py-6 shadow-2xl'>
        <h2 className="font-bold capitalize text-navy-700 dark:text-white text-3xl">Organize a Marathon</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4 pt-4">
          <label htmlFor="name" className="block text-gray-600">Event Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-600">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={state.date}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-600">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={state.location}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600">Description:</label>
            <textarea
              id="description"
              name="description"
              value={state.description}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="text-center">
          <button
            type="submit"
            className="bg-navy-700 text-white py-2 w-70 px-4 rounded-md w-64 hover:bg-navy-900  shadow-2xl transition duration-300 "
          >
            Save
          </button></div>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default EditEvent;
