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
}

export const VerifyEmail = ({
    hostUrl,
    minihouse
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

            <Preview>Your payment is successful</Preview>

            <Body className="font-lato">
                <Container>
                    <Header hostUrl={hostUrl} />

                    <Section className="px-[20px] pt-[10px] pb-[20px]">

                        {/* =====Header text====== */}
                        <Section>
                            <Heading className="font-montserrat text-black text-[20px] leading-[30px]">Your payment is successful
                            </Heading>
                        </Section>

                        {/* =====introductory message======== */}

                        <Section>
                            <Text className="font-lato text-[14px] text-[#4b5563] leading-[23.8px]">
                            Thank you for your booking request. Your payment has been
                          successfully processed, and your booking request is now
                          pending approval from the host. Here are the details of your
                          pending reservation.
                            </Text>
                        </Section>

                        <Section>
                            <Heading className="font-[16px] text-[16px] leading-[24px] text-black font-lato"> Booking Details</Heading>
                        </Section>

                        <Section className="py-[13px] px-[15px] bg-[#f1f5f9] rounded-[10px]  leading-[23.8px]" >
                            <Row>
                                <Column><Text className="text-[14px] text-paragraph text-left font-lato">Booking ID</Text></Column>
                                <Column><Text className="text-[16px] text-black text-right font-lato">BK-20240619-1234</Text></Column>
                            </Row>
                            <Row>
                                <Column><Text className="text-[14px] text-paragraph text-left font-lato">Scheduled date</Text></Column>
                                <Column><Text className="text-[16px] text-black text-right font-lato">13 March 2024</Text></Column>
                            </Row>
                            <Row>
                                <Column><Text className="text-[14px] text-paragraph text-left font-lato">Check-in time</Text></Column>
                                <Column><Text className="text-[16px] text-black text-right font-lato">10:00 AM</Text></Column>
                            </Row>
                            <Row>
                                <Column><Text className="text-[14px] text-paragraph text-left font-lato">Check-out time</Text></Column>
                                <Column><Text className="text-[16px] text-black text-right font-lato">1:00 PM</Text></Column>
                            </Row>
                            <Row>
                                <Column><Text className="text-[14px] text-paragraph text-left font-lato">Location</Text></Column>
                                <Column><Text className="text-[16px] text-black text-right font-lato">Terminal 3, Garhoud, Dubai</Text></Column>
                            </Row>
                            <Row>
                                <Column><Text className="text-[14px]  text-paragraph text-left font-lato">Space title</Text></Column>
                                <Column className="text-right">
                                    <Row>
                                        <Column>
                                            <img
                                                src={minihouse}
                                            />
                                        </Column>
                                        <Column className="w-[225px]">
                                            <Text className="text-[16px] text-black text-right font-lato">Large Multi Leveled Historic Loft</Text>
                                        </Column>
                                    </Row>
                                </Column>
                            </Row>
                        </Section>

                        <Section className="font-lato">
                            <Row>
                                <Text className="text-paragraph font-lato">
                                The host has 24 hours to respond to your booking request.
                          You will be notified via email once your booking is
                          confirmed by the host. If the host does not approve your
                          booking or does not respond within 24 hours, your payment
                          will be fully refunded automatically.
                                </Text>

                            </Row>
                            <Row>
                                <Column>
                                    <button  className="bg-black text-white text-[18px] leading-[28px] w-full 
                                 p-[10px] border-0 rounded-[10px] font-bold font-lato">
                                        View Booking Details
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
    minihouse: 'https://staging.api.shuttrd.com/view/resources/img/mini.png'
} as EmailProps;

export default VerifyEmail;
