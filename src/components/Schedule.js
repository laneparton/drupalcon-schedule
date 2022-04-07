import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const Schedule = ({ isLoading, scheduleData }) => {
  dayjs.extend(customParseFormat);

  let scheduleHead = [];

  if (isLoading) {
    scheduleHead = Object.keys(scheduleData[0]);
  }
  return (
    <>
      <p className="mb-8 ">
        Here ya' go! Feel free to{" "}
        <a href="" className="underline underline-offset-1">
          download the data
        </a>{" "}
        if you'd like &#128515;
      </p>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
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
                {isLoading && (
                  <tbody>
                    {scheduleData?.map((item, index) => (
                      <tr className="border-b" key={index}>
                        {Object.keys(item).map((key) => {
                          let returnVal = item[key];
                          if (["startDate", "endDate"].includes(key)) {
                            console.log(item[key]);
                            //2022-04-25T15:00:00Z
                            returnVal = dayjs(
                              item[key],
                              "YYYYMMDDTHHmmss"
                            ).toString();
                          }
                          console.log(returnVal);
                          return (
                            <td className="px-6 py-4 text-sm font-light text-left text-gray-900 whitespace-nowrap ">
                              {returnVal}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
