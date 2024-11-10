import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface YelpRecentLoginEmailProps {
  userFirstName?: string;
  bookingStartDate?: Date;
  bookingEndDate?: Date;
  bookingCreatedDate?: Date;
  bookingRoom?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const YelpRecentLoginEmail = ({
  userFirstName,
  bookingStartDate,
  bookingEndDate,
  bookingCreatedDate,
  bookingRoom,
}: YelpRecentLoginEmailProps) => {
  const formattedStartDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(bookingStartDate);

  const formattedEndDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(bookingEndDate);

  const formattedCreatedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(bookingCreatedDate);

  return (
    <Html>
      <Head />
      <Preview>Yelp recent login</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img src={`${baseUrl}/static/yelp-logo.png`} />
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={`${baseUrl}/static/yelp-header.png`}
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {userFirstName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Thank you for booking a room with the Hatch Booking System.
                  Below are your booking details.
                </Heading>

                <Section style={{ padding: "20px" }} />

                <Text style={paragraph}>
                  <b>Booking Start Time: </b>
                  {formattedStartDate}
                </Text>
                <Text style={paragraph}>
                  <b>Booking End Time: </b>
                  {formattedEndDate}
                </Text>
                <Text style={paragraph}>
                  <b>Created at: </b>
                  {formattedCreatedDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Booking Room: </b>
                  {bookingRoom}
                </Text>

                <Section style={{ padding: "20px" }} />

                <Text style={paragraph}>
                  If you have any questions or need further assistance, please
                  don't hesitate to contact us.
                </Text>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            McMaster Engineering Society
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

YelpRecentLoginEmail.PreviewProps = {
  userFirstName: "Baoze",
  bookingStartDate: new Date(),
  bookingEndDate: new Date(),
  bookingCreatedDate: new Date(),
  bookingRoom: "H201",
} as YelpRecentLoginEmailProps;

export default YelpRecentLoginEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
