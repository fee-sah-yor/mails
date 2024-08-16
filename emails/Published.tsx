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
    Img,
    Hr,
    Row,
    Column,
} from "@react-email/components";
import * as React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

interface EmailProps {
    code?: string;
    hostUrl?: string;
    macrohouse: string;
    location: string;
}

export const VerifyEmail = ({
    hostUrl,
    macrohouse,
    location
}: EmailProps) => (
    <Tailwind
        config={{
            theme: {
                extend: {
                    colors: {
                        brand: "#060707",
                        gray: '#1F2937',
                        action: "#F59E0B",
                        black: '#000',
                        paragraph: "#4b5563",
                        mustard: '#f59e0b'
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
                    }
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
                    fallbackFontFamily="sans-serif"
                    webFont={{
                        url: `https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwaPGR_p.woff2`,
                        format: "woff2",
                    }}
                    fontWeight={700}
                    fontStyle="bold"
                />
            </Head>

            <Preview> Your listing is published and awaiting approval</Preview>

            <Body className="font-lato">
                <Container>
                    <Header hostUrl={hostUrl} />

                    <Section className="px-[20px] pt-[10px] pb-[20px]">

                        {/* =====Header text====== */}
                        <Section>
                            <Heading className="font-montserrat text-black text-[20px] leading-[30px]">
                                 Your listing is published and awaiting approval
                            </Heading>
                        </Section>

                        {/* =====introductory message======== */}

                        <Section>
                            <Text className="font-lato text-[14px] text-[#4b5563] leading-[23.8px]">
                                <span className="text-[#000] text-[14px] font-lato leading-[23.8px]">Dear Cynthia,</span><br />
                                We are pleased to inform you that your listing,
                                [Listing Title], has been successfully published on
                                our platform! Before it goes live and becomes visible
                                to our community, it is currently under review by our
                                team to ensure it meets all our guidelines and
                                standards. <br /><br />

                                This review process is typically quick, and you can
                                expect your listing to be live soon, provided there
                                are no issues. We will notify you once your listing
                                has been approved and is officially active. If any
                                adjustments are required, we will reach out to you
                                with specific feedback.
                            </Text>
                        </Section>

                        <Section>
                            <Heading className="font-[16px] text-[16px] leading-[24px] text-black font-lato"> Listing Details</Heading>
                        </Section>

                        <Section className="py-[13px] px-[15px] bg-[#f1f5f9] rounded-[10px]  leading-[23.8px]" >
                            <Row>
                                <Column>
                                    <img src={macrohouse} />
                                </Column>
                                <Column className="w-[10%]"></Column>
                                <Column className="text-left">
                                    <Row>
                                        <Column><Heading as="h3" className="m-0 text-[17px] leading-[17px] font-lato text-black">

                                            Large Multi Leveled Historic Loft</Heading></Column>
                                    </Row>
                                    <Row className="m-0">
                                        <Column>
                                            <Row>
                                                <Column><img src={location} /></Column>
                                                <Column> <Text className="text-black text-[16px]"> Terminal 3, Garhoud, Dubai</Text> </Column>
                                            </Row>
                                        </Column>
                                    </Row>
                                    <Row>
                                        <Column> <Text className="m-0 text-[16px] text-paragraph">
                                            Published date: 13 March,2024
                                        </Text></Column>
                                    </Row>
                                </Column>
                            </Row>

                        </Section>

                        <Section className=" text-[14px]">
                            <Row>
                                <Heading as="h3" className="font-lato text-[14px] text-black">What's next</Heading>
                                <ul>
                                    <li>
                                        <Text className="text-paragraph font-lato">
                                            You can review your listing details by logging
                                            into your account and visiting your dashboard.
                                        </Text>
                                    </li>
                                    <li>
                                        <Text className="text-paragraph font-lato">
                                            We encourage you to ensure that all information is
                                            accurate and up-to-date to facilitate a smooth
                                            approval process.
                                        </Text>
                                    </li>
                                </ul>
                            </Row>
                            <Row>
                                <Column className="text-right">  <button
                                    className="bg-white text-black border border-solid border-black text-[16px] leading-[24px]
                                 py-[15px] px-[10px] rounded-[10px] font-bold font-lato">
                                    Add New Listing
                                </button></Column>
                                <Column className="w-[30px]"></Column>
                                <Column>
                                    <button
                                        className="bg-mustard text-black text-[16px] leading-[24px] 
                                 py-[15px] px-[10px] border-0 rounded-[10px] font-bold font-lato">
                                        View Listing
                                    </button>
                                </Column>
                            </Row>
                        </Section>
                    </Section>

                    <Footer hostUrl={hostUrl} />

                </Container>
            </Body>

        </Html>
    </Tailwind >
);

VerifyEmail.PreviewProps = {
    location: 'https://staging.api.shuttrd.com/view/resources/img/location.png',
    macrohouse: 'https://staging.api.shuttrd.com/view/resources/img/macro.png'
} as EmailProps;

export default VerifyEmail;
