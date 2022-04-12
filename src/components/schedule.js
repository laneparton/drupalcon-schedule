import React, { useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const TableHead = ({ scheduleHead, scheduleData, setScheduleData }) => {
  const [sortField, setSortField] = useState("startDate");
  const [order, setOrder] = useState("asc");

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...scheduleData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setScheduleData(sorted);
    }
  };

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead className="border-b">
      <tr>
        {scheduleHead?.map((key) => {
          const cl =
            sortField && sortField === key && order === "asc"
              ? "up"
              : sortField && sortField === key && order === "desc"
              ? "down"
              : "default";
          return (
            <th
              key={key}
              scope="col"
              className={
                `pl-10 pr-6 py-4 text-sm font-medium text-left text-gray-900 ` +
                cl
              }
              onClick={() => handleSortingChange(key)}
            >
              {key}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

const Schedule = ({ scheduleData, setScheduleData }) => {
  dayjs.extend(customParseFormat);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  let scheduleHead = Object.keys(scheduleData[0]);

  return (
    <>
      <p className="mb-8 ">
        Here ya' go! Feel free to{" "}
        <a
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(scheduleData, null, "\t")
          )}`}
          download="DrupalCon_Schedule.json"
          className="underline underline-offset-1"
        >
          download the data
        </a>{" "}
        if you'd like &#128515;
      </p>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="table-fixed">
                <TableHead
                  scheduleHead={scheduleHead}
                  scheduleData={scheduleData}
                  setScheduleData={setScheduleData}
                />
                <tbody>
                  {scheduleData?.map((item, index) => (
                    <tr className="border-b" key={index}>
                      {Object.keys(item).map((key, index) => {
                        let returnVal = item[key];
                        if (["startDate", "endDate"].includes(key)) {
                          returnVal = dayjs(item[key], "YYYYMMDDTHHmmss")
                            .tz("America/Los_Angeles")
                            .format("dddd, MMMM D [at] h:mm A")
                            .toString();
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
