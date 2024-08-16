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
    avatar2: string;
}

export const VerifyEmail = ({
    hostUrl,
    avatar2,
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

            <Preview>  Theodore Hills has responded to your inquiry</Preview>

            <Body className="font-lato">
                <Container>
                    <Header hostUrl={hostUrl} />

                    <Section className="px-[20px] pt-[10px] pb-[20px]">

                        {/* =====Header text====== */}
                        <Section>
                            <Heading className="font-montserrat text-black text-[20px] leading-[30px]">  Theodore Hills has responded to your inquiry
                            </Heading>
                        </Section>

                        {/* =====introductory message======== */}

                        <Section>
                            <Text className="font-lato text-[16px] text-[#4b5563] leading-[23.8px]">
                                <span className="text-[#000] text-[16px] font-lato leading-[25.6px]">Dear Cynthia,</span><br /><br />
                                Theodore has sent you a response regarding your
                                inquiry about the <span className="text-black leading-[24px] font-bold font-lato">
                                    Large Multi Leveled Historic Loft</span> space.
                            </Text>
                        </Section>

                        <Section className="py-[13px] px-[15px] border-l-[6px] border-solid border-black bg-[#f1f1f2] leading-[23.8px]" >
                            <Row>
                                <Column className="text-left">
                                    <Row>
                                        <Column className="w-[70px]">
                                            <img
                                                src={avatar2}
                                            />
                                        </Column>

                                        <Column className="">
                                            <Text className="text-[16px] font-lato text-paragraph text-left">Theodore Hills</Text>
                                        </Column>
                                    </Row>
                                </Column>
                            </Row>
                            <Row>
                                <Column> <Text className="text-[16px] font-lato text-paragraph leading-[25.6px]">
                                    Thank you for your interest in booking with us.
                                    We're excited to help you find the perfect space
                                    for your needs. Our spaces are designed to
                                    accommodate any number of guests, ensuring you
                                    have the flexibility to scale your event or
                                    production according to your needs.
                                </Text></Column>
                            </Row>
                            <Row>
                                <Column>
                                    <button className="bg-black rounded-[10px] border-0 text-white px-[15px] py-[10px] leading-[24px] text-[16px] font-lato font-[600]" >
                                        Reply Message
                                    </button>
                                </Column>
                            </Row>
                        </Section>

                        <Section className="font-lato">
                            <Row>
                                <Heading as="h3" className="font-lato text-[18px] leading-[28px] text-black">Ready to book?</Heading>
                            </Row>
                            <Row>
                                <Text className="font-lato text-paragraph text-[16px] leading-[25.6px]">
                                Booking your space is just a click away. Use the link below to secure your spot and confirm your details.
                        </Text>
                            </Row>
                            <Row>
                            <a href="#" className="text-mustard leading-[21px] font-lato font-bold"> Book Your Space Now</a>
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
    avatar2: 'https://staging.api.shuttrd.com/view/resources/img/Avatar.png'
} as EmailProps;

export default VerifyEmail;
