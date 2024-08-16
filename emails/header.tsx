import { Img, Section } from "@react-email/components";
import React from "react";
import { resources } from "./resources";

export const Header = ({
  hostUrl = resources.base,
}) => {
  const baseUrl = hostUrl + resources.basePath;

  return <Section className="bg-black p-5 ">
    <Img
      className="h-4"
      src={`${baseUrl}${resources.logo}`}
      alt="Shuttrd"
    />
  </Section>
}
