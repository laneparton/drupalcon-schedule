import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="What is this?" />
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
              What is this?
            </h1>
            <p className="mb-4">
              This is just a pet project using Gatsby serverless functions. When
              I originally saw "My Schedule" on the DrupalCon website, I was sad
              that it didn't output in any fun formats. I converted the .ics to
              JSON and then realized - why not put a frontend on it for fun?
              &#128515;
            </p>
            <p>
              My biggest takeaway with this short little project was:{" "}
              <span className="font-bold">holy cow Tailwind is awesome</span>{" "}
              <span className="text-sm">
                (I already was obsessed with React and the Jamstack)
              </span>
              .
            </p>
            <p className="mt-4 text-xs">
              Disclaimer: I built this in a mini-sprint one night. It may or may
              not work incredibly well.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
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
