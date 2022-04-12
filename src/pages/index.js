import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import Form from "../components/form";
import Schedule from "../components/schedule";
import Loader from "../components/loader";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const [scheduleData, setScheduleData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Layout>
      <SEO title="Beautify Your Schedule" />
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
          <div className="flex justify-center object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6">
            <a href="/">
              <Img
                className="object-cover object-center rounded"
                alt="DrupalCon Logo"
                fixed={data.file.childImageSharp.fixed}
                width="250px"
                height="250px"
              />
            </a>
          </div>
          <div className="w-full text-center lg:w-2/3">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              Beautify Your DrupalCon Schedule
            </h1>
            {!(isLoading || isLoaded) && (
              <>
                <p className="mb-8 leading-relaxed ">
                  Grab the .ics URL from your "Subscribe to My Schedule" link on{" "}
                  <a
                    className="underline underline-offset-1"
                    href="https://events.drupal.org/portland2022/schedule/mine/all"
                  >
                    DrupalCon
                  </a>{" "}
                  and make it{" "}
                  <span className="font-bold text-indigo-500">beautiful.</span>
                </p>
                <Form
                  setIsLoaded={setIsLoaded}
                  setIsLoading={setIsLoading}
                  setScheduleData={setScheduleData}
                />
                <p className="w-full mt-2 mb-8 text-sm text-gray-500">
                  You'll be directed to a beautified and downloadable schedule.
                </p>
                <Link className="text-sm text-indigo-500" to="/about">
                  Wait, what is this?
                </Link>
              </>
            )}
            {isLoading && <Loader />}
            {isLoaded && (
              <Schedule
                scheduleData={scheduleData}
                setScheduleData={setScheduleData}
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    file(relativePath: { eq: "drupalcon_logo_400x400.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fixed(width: 250, height: 250, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
