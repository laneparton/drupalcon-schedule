import * as React from "react";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <img
        src="https://www.hyperui.dev/photos/confused-travolta.gif"
        alt="John Travolta confused"
        className="object-cover w-full h-64 rounded-lg"
      />

      <p className="mt-6 text-gray-500">
        We can't find anything, try searching again.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
