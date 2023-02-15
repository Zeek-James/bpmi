import React from "react";

const Questionnaire = () => {
  return (
    <div>
      <p>Please rate your satisfaction with each of the following statement:</p>
      <div className="flex justify-between">
        <span>1. Dissatisfied</span>
        <span>2. Somewhat dissatisfied</span>
        <span>3. Neutral</span>
        <span>4. Somewhat satisfied</span>
        <span>5. Satisfied</span>
      </div>

      <table className="table-auto">
        <thead>
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              How satisfied were you with the customer service experience for
              this company?
            </td>
          </tr>
          <tr>
            <td>How satisfied were you with the company’s service delivery?</td>
          </tr>
          <tr>
            <td>
              How strongly do you agree with the following statement: the
              company’s process is simple and painless.
            </td>
          </tr>
          <tr>
            <td>How easy is the transaction process with the company? </td>
          </tr>
          <tr>
            <td>How satisfied are you with the services of the company?</td>
          </tr>
          <tr>
            <td>
              How likely would you be to recommend to a friend or a colleague?
            </td>
          </tr>
          <tr>
            <td>To what extent does the company services meet your need?</td>
          </tr>
          <tr>
            <td>
              How satisfied were you with using the website of this company?
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Questionnaire;
