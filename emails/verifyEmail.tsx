import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Font,
} from "@react-email/components";
import * as React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

interface EmailProps {
  validationCode?: string;
  code?: string;
  hostUrl?: string;
}



export const VerifyEmail = ({
  validationCode,
  hostUrl
}: EmailProps) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#060707",
            gray: '#1F2937',
            action: "#F59E0B",
          },

          height: {
            logo: '2rem',
          },
          fontSize: {
            'header-1': '2rem',
            'body-1': '1rem',
          },
          fontFamily: {

            montserrat: ['Montserrat', 'Helvetica', 'Arial', 'Trebuchet MS', 'sans-serif'],
            lato: ['Lato', 'Tahoma', 'Verdana', 'Arial', 'sans-serif'],
          },
        },
      },
    }}
  >
    <Html>
      <Head>

        <Font
          fontFamily="Montserrat"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: `https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aXp-p7K4KLg.woff2`,
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="bold"
        />
        <Font
          fontFamily="Lato"
          fallbackFontFamily="Verdana"
          webFont={{
            url: `https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2`,
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Verify your email address</Preview>

      <Body className="font-lato">
        <Container>
          <Header hostUrl={hostUrl} />

          <Section className="px-5">
            <Heading className="font-montserrat text-2xl">Verify your email</Heading>
          </Section>

          <Section className="px-5">
            <Text className="font-lato text-sm">
              Welcome to Shuttrd! To complete your registration, please verify your email address by entering the 4-digit code below. Enter this code on the verification page to activate your account.
            </Text>
          </Section>

          <Section className="px-5 mt-2 mb-10" style={{
            backgroundColor: '#F5F4F5',
            borderRadius: '4px',
          }}>
            <Text className="font-lato text-action text-2xl text-center ">
              {validationCode}
            </Text>
          </Section>
          <Footer hostUrl={hostUrl} />
        </Container>
      </Body>

    </Html>
  </Tailwind >
);

VerifyEmail.PreviewProps = {
  validationCode: "DJZ-TLX",

} as EmailProps;

export default VerifyEmail;
