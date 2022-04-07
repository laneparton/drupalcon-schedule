import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Schedule from "../components/Schedule";

const IndexPage = () => {
  const [scheduleData, setScheduleData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      <title>Home Page</title>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
          <div className="flex justify-center object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6">
            <img
              className="object-cover object-center rounded"
              alt="DrupalCon Logo"
              src="https://pbs.twimg.com/profile_images/857713875445264384/m2mohdgQ_400x400.jpg"
              width="250px"
              height="250px"
            />
          </div>
          <div className="w-full text-center lg:w-2/3">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              Beautify Your DrupalCon Schedule
            </h1>
            {!isLoading && (
              <>
                <p className="mb-8 leading-relaxed">
                  Grab the .ics URL from your "Subscribe to My Schedule" link on{" "}
                  <a href="https://events.drupal.org/portland2022/schedule/mine/all">
                    DrupalCon
                  </a>{" "}
                  and make it{" "}
                  <span className="font-bold text-indigo-500">Beautiful.</span>
                </p>
                <Form
                  setIsLoading={setIsLoading}
                  setScheduleData={setScheduleData}
                />
                <p className="w-full mt-2 mb-8 text-sm text-gray-500">
                  You'll be directed to a beautified and downloadable schedule.
                </p>
              </>
            )}
            {isLoading && (
              <Schedule isLoading={isLoading} scheduleData={scheduleData} />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
