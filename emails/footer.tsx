import { Column, Img, Link, Row, Section, Text } from "@react-email/components";
import React from "react";
import { resources } from "./resources";

export const Footer = ({
  hostUrl = resources.base,
}) => {
  const baseUrl = hostUrl + resources.basePath;

  return <Section className="bg-brand dark:bg-black  px-4 py-5">
    <Row >
      <Text className="text-white text-sm my-2">For further inquiries, please contact our support:</Text>
      <Text className="text-white text-sm my-2">Email:

        <Link className="text-[#fffffc] underline">team@shuttrd.com</Link>
      </Text>
    </Row>

    <Row>
      <Column style={{ width: "66%" }}>
        <Img
          className="h-4"
          src={`${baseUrl}${resources.logo}`}
          alt="Shuttrd"
        />
      </Column>
      <Column>
        <Section>
          <Row>
            <Column>
              <Link href="/">
                <Img
                  className="bg-white h-3 w-3 rounded p-1"
                  src={`${baseUrl}${resources.facebookLogo}`}
                />
              </Link>
            </Column>
            <Column>
              <Link href="/">
                <Img
                  src={`${baseUrl}${resources.linkdinLogo}`}
                  className="bg-white h-3 w-3 rounded p-1"
                />
              </Link>
            </Column>
            <Column>
              <Link href="/">
                <Img
                  src={`${baseUrl}${resources.instagramLogo}`}
                  className="bg-white h-3 w-3 rounded p-1"
                />
              </Link>
            </Column>
          </Row>
        </Section>
      </Column>
    </Row>
  </Section>
}
