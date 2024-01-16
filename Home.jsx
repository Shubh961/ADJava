import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


export const Home = ({ clientName }) => {
  return (
    <Container fluid="md">
      <Row
        style={{
          height: "100px",
          backgroundColor: "#ffa07a",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row style={{ textAlign: "center" }}>
          <h1>Welcome to Money Magnet</h1>
        </Row>
      </Row>

      <Row style={{ height: "1300px", width: "100%" }}>
        <Row style={{ height: "230px", width: "100%" }}>
          <p>
            The loan recovery agent, are those who work for banks to recover the
            due debts from clients and organizations who owe them. These agents
            work on a small percentage of the total amount owed and recovered
            from the clients. The agents are generally third parties who are not
            a part of the main deal. In some cases, the recovery agent can also
            be one of the parties directly involved in the deal, but majorly
            they are the third parties. With the easier process for loan
            sanctions, consumers are taking loans for their personal and
            professional works. But on the contrary, it has been seen that a
            large number of consumers are not able to repay their debt due to
            various circumstances. During the pandemic, when the businesses were
            hit coupled with an economic slowdown, there has been a huge crisis
            for repayment of debt resulting in multiple litigation and
            court-ordered action. Cases concerning illegal conduct for the
            recovery of the loan recovery agents were recorded. Cruel conducts
            were majorly recorded on senior citizens, poor, and marginalized
            where police actions were taken against agents.
          </p>
        </Row>
        <Row>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>LOAN COLLECTION SOFTWARE</Accordion.Header>
              <Accordion.Body>
                Loan collection is usually a process which is highly regulated.
                As the creditor wants to get back the loan with its interest,
                they usually offer the loan with either a mortgage or a
                guarantor to back the debtor. The debtor enters into a legal
                agreement with the lender to repay the loan by a particular time
                and date. This is monitored by both the creditor and the rating
                agencies to track how prompt a debtor is in repaying the loan.
                This is used to calculate the credit score of a debtor for
                future loans.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Payments Mode</Accordion.Header>
              <Accordion.Body>
                Credit and Debit Cards Mobile Wallets Bank Transfers Digital
                Currencies Cash on Delivery (COD) E-Wallets Prepaid Cards Bank
                EMI Buy Now, Pay Later Contactless Payments Online Banking
                Cheques
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
        <Carousel>
          <Carousel.Item interval={500}>
            <img
              src="i/img2.jpg"
              height="800px"
              width="100%"
              alt="cdac image"
            ></img>
            <Carousel.Caption>
              <h3>Emi Recovery Agency</h3>
              <p>
                With the easier process for loan sanctions, consumers are taking
                loans for their personal and professional works
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="i/img1.jpg"
              height="800px"
              width="100%"
              alt="cdac image"
            ></img>
            <Carousel.Caption>
              <h3>Emi Recovery Agency</h3>
              <p>
                The loan recovery agent, are those who work for banks to recover
                the due debts from clients and organizations who owe them.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="i/img3.jpg"
              height="800px"
              width="100%"
              alt="cdac image"
            ></img>
            <Carousel.Caption>
              <h3>Emi Recovery Agency</h3>
              <p>
                The agents are generally third parties who are not a part of the
                main deal. In some cases, the recovery agent can also be one of
                the parties directly involved in the deal, but majorly they are
                the third parties.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="i/img4.jpg"
              height="800px"
              width="100%"
              alt="cdac image"
            ></img>
            <Carousel.Caption>
              <h3>Emi Recovery Agency</h3>
              <p>
                The agents are generally third parties who are not a part of the
                main deal. In some cases, the recovery agent can also be one of
                the parties directly involved in the deal, but majorly they are
                the third parties.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel.Item>
          <img
            src="i/img5.jpg"
            height="800px"
            width="100%"
            alt="cdac image"
          ></img>
          <Carousel.Caption>
            <h3>Emi Recovery Agency</h3>
            <p>
              These agents work on a small percentage of the total amount owed
              and recovered from the clients.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Row>

      <Row style={{ height: "400px", width: "100%" }}>
        <Col>
          <h1>CENTERS</h1>
          <ul>
            <li> Bengaluru </li>
            <li> Chennai </li>
            <li> Delhi </li>
            <li> Hyderabad </li>
            <li> Kolkata </li>
            <li> Mohali </li>
            <li> Mumbai </li>
            <li> Noida </li>
            <li> Patna </li>
            <li> Pune </li>
            <li> Silchar </li>
            <li> Thiruvananthapuram </li>
          </ul>
        </Col>
        <Col>
          <h1>LINKS</h1>
          <ul>
            <li> About Us </li>
            <li> Products & Services </li>
            <li> R & D </li>
            <li> Careers </li>
            <li> Tenders </li>
            <li> Press Kit </li>
            <li> Video Gallery </li>
            <li> Noida </li>
            <li> Events </li>
            <li>Awards </li>
            <li> Downloads </li>
            <li> Achievements </li>
          </ul>
        </Col>
        <Col>
          <h1>CONTACT US</h1>
          <p>
            EMI RECOVERY AGENCY , MONEY MAGNET HUB 408, 4th Floor, Suratwala
            Mark Plazzo, Wakad-Hinjewadi Road, Hinjewadi, Pune 0 411 057.
            Maharashtra (India) Phone: +91-22-896322/1574 Fax:
            +91-22-264654368745/ 5646411
          </p>
        </Col>
      </Row>
    </Container>
  );
};
