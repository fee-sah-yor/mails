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
    minihouse: string;
    avatar: string;
}

export const VerifyEmail = ({
    hostUrl,
    minihouse,
    avatar
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

            <Preview> Your subscription has been cancelled</Preview>

            <Body className="font-lato">
                <Container>
                    <Header hostUrl={hostUrl} />

                    <Section className="px-[20px] pt-[10px] pb-[20px]">

                        {/* =====Header text====== */}
                        <Section>
                            <Heading className="font-montserrat text-[24px] leading-[30px] text-black"> 
                            Your subscription has been cancelled
                            </Heading>
                        </Section>

                        {/* =====introductory message======== */}

                        <Section>
                            <Text className="font-lato text-[16px] text-[#4b5563] leading-[23.8px]">
                                <span className="text-[#000] text-[16px] font-lato leading-[23.8px]">Dear Cynthia,</span><br />
                                We have processed your request, and your subscription
                          to Shuttrd monthly premium services has been
                          successfully cancelled.
                            </Text>
                        </Section>

                        <Section className=" ">
                            <Row>
                                <Heading as="h3" className="font-lato font-[18px] leading-[28px] text-black">What to expect:</Heading>
                                <ul>
                                    <li>
                                        <Text className="text-[16px] text-paragraph font-lato">
                                        You will continue to have access to the features
                              and benefits of your subscription until the end of
                              the current billing period. Your Subscription is
                              set to end on March 14, 2024.
                                        </Text>
                                    </li>
                                    <li>
                                    <Text className="text-[16px] text-paragraph font-lato">
                                    Rest assured, there will be no additional charges,
                              and no further billing will occur.
                                        </Text>
                                    </li>
                                </ul>
                            </Row>
                            <Row>
                               
                                <Column>
                                    <button
                                        className="bg-mustard text-black text-[16px] leading-[24px] 
                                 py-[15px] px-[10px] border-0 rounded-[10px] font-bold font-lato">
                                      Activate Subscription
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
    avatar: 'https://staging.api.shuttrd.com/view/resources/img/Avatar2.png',
    minihouse: 'https://staging.api.shuttrd.com/view/resources/img/mini.png'
} as EmailProps;

export default VerifyEmail;
