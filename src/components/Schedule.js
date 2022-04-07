import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const Schedule = ({ isLoaded, scheduleData }) => {
  dayjs.extend(customParseFormat);
  let scheduleHead = Object.keys(scheduleData[0]);

  return (
    <>
      <p className="mb-8 ">
        Here ya' go! Feel free to{" "}
        <a href="" className="underline underline-offset-1">
          download the data
        </a>{" "}
        if you'd like &#128515;
      </p>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="table-fixed">
                <thead className="border-b">
                  <tr>
                    {scheduleHead?.map((key, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scheduleData?.map((item, index) => (
                    <tr className="border-b" key={index}>
                      {Object.keys(item).map((key, index) => {
                        let returnVal = item[key];
                        if (["startDate", "endDate"].includes(key)) {
                          returnVal = dayjs(
                            item[key],
                            "YYYYMMDDTHHmmss"
                          ).toString();
                        }
                        return (
                          <td
                            key={index}
                            className="px-6 py-4 text-sm font-light text-left text-gray-900 whitespace-nowrap "
                          >
                            {returnVal}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
