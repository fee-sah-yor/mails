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
  Button,
} from "@react-email/components";
import * as React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

interface EmailProps {
  name: string;
  link: string;
  hostUrl?: string;
}



export const ResetPasswordEmail = ({
  name,
  link,
  hostUrl,
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
      <Preview>We received a request to reset your password. Please click the button below to reset your password</Preview>

      <Body className="font-lato">
        <Container>
          <Header hostUrl={hostUrl} />

          <Section className="px-5">
            <Heading className="font-montserrat text-2xl">Reset Password</Heading>
          </Section>

          <Section className="px-5">
            <Text className="font-lato text-sm">
              Dear {name},           </Text>
          </Section>
          <Section className="px-5">
            <Text className="font-lato text-sm">
              We received a request to reset your password. Please click the button below to reset your password
            </Text>
          </Section>

          <Section className="px-5 mt-2 mb-10">
            <Button
              className="bg-action rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
              href={link}
            >
              Reset Password
            </Button>
          </Section>
          <Footer hostUrl={hostUrl} />
        </Container>
      </Body>

    </Html>
  </Tailwind >
);

ResetPasswordEmail.PreviewProps = {
  link: "https://example.com",
  name: "John",

} as EmailProps;

export default ResetPasswordEmail;
