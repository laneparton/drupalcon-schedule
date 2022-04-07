import * as React from "react";

const Form = ({ setScheduleData, setIsLoading, setIsLoaded }) => {
  const [value, setValue] = React.useState({});

  // Listen to form changes and save them.
  function handleChange(e) {
    value[e.target.id] = e.target.value;
    setValue({ ...value });
  }
  // When the form is submitted, send the form values
  // to our function for processing.
  async function onSubmit(e) {
    e.preventDefault();

    const response = await window
      .fetch(`/api/fetch-schedule`, {
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(value),
      })
      .then((res) => res.json());
    setScheduleData(JSON.parse(response));
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 2000);
  }

  return (
    <form
      onSubmit={onSubmit}
      method="POST"
      action="/api/fetch-schedule"
      className="flex items-end justify-center w-full"
    >
      <div className="relative w-2/4 mr-4 text-left lg:w-full xl:w-2/3">
        <label className="text-sm leading-7 text-gray-600">Calendar URL</label>
        <input
          type="text"
          id="scheduleUrl"
          name="hero-field"
          value={value[`scheduleUrl`] || ``}
          onChange={handleChange}
          placeholder="webcal://events.drupal.org/schedule/802eded1a6/DrupalConCal.ics"
          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
      >
        Beautify
      </button>
    </form>
  );
};

export default Form;
