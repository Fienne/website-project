import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "Digital Marketing FAQs",
  rows: [
    {
      title: "How does Email Marketing Work?",
      content:
        "We primarily leverage GetResponse’s email marketing and automation tools to manage email marketing and lead nurturing campaigns for our clients.",
    },
    {
      title: "Do you offer marketing strategy and creation?",
      content:
        "We believe scaling startups require a radically different kind of agency. Our lean, flexible approach is designed to help the businesses of tomorrow move forward, fast.",
    },
    {
      title: "How does a paid search campaign work?",
      content:
        "We primarily leverage on Powerful link-building campaign (Source having high page rank and domain authority) and Promotion of traffic-driving & high-search volume keywords.",
    },
    {
      title: "How do I pay for agency fees?",
      content:
        "Contact Us Directly and we will give you a quote based on your needs",
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "var(--primary-color)",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  animate: true,
  arrowIcon: "v",
  tabFocus: true,
};

const FAQ = () => {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
export default FAQ;
