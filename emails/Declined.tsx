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

            <Preview> Declined booking request</Preview>

            <Body className="font-lato">
                <Container>
                    <Header hostUrl={hostUrl} />

                    <Section className="px-[20px] pt-[10px] pb-[20px]">

                        {/* =====Header text====== */}
                        <Section>
                            <Heading className="font-montserrat text-[24px] leading-[30px] text-black"> Declined booking request
                            </Heading>
                        </Section>

                        {/* =====introductory message======== */}

                        <Section>
                            <Text className="font-lato text-[14px] text-[#4b5563] leading-[23.8px]">
                                <span className="text-[#000] text-[14px] font-lato leading-[23.8px]">Dear Cynthia,</span><br />
                                This is to confirm that you have declined the booking
                                request from Theodore hills for your space. Here are
                                the details of the declined booking:
                            </Text>
                        </Section>

                        <Section>
                            <Heading className="text-[16px] leading-[24px] font-lato text-black"> Booking Details</Heading>
                        </Section>
                        <Section className="py-[13px] px-[15px] bg-[#f1f5f9] rounded-[10px] leading-[23.8px]" >
                            <Row>
                                <Column><Text className="text-[14px] font-lato text-paragraph text-left">Guest name</Text></Column>
                                <Column className="text-right">
                                    <Row>
                                        <Column>
                                            <img
                                                src={avatar}
                                            />
                                        </Column>
                                        <Column className="w-[120px]">
                                            <Text className="text-[16px] font-lato text-black text-right">Theodore Hills</Text>
                                        </Column>
                                    </Row>
                                </Column>
                            </Row>
                            <Row>
                                <Column><Text className="text-[14px] font-lato  text-paragraph text-left">Space title</Text></Column>
                                <Column className="text-right">
                                    <Row>
                                        <Column>
                                            <img
                                                src={minihouse}
                                            />
                                        </Column>
                                        <Column className="w-[240px]">
                                            <Text className="text-[16px] font-lato text-black text-right">Large Multi Leveled Historic Loft</Text>
                                        </Column>
                                    </Row>
                                </Column>
                            </Row>
                            <Row>
                                <Column><Text className="text-[14px] text-paragraph text-left font-lato">Location</Text></Column>
                                <Column><Text className="text-[16px] text-black text-right font-lato ">Terminal 3, Garhoud, Dubai</Text></Column>
                            </Row>
                            <Row>
                                <Column><Text className="text-[14px] font-lato text-paragraph text-left">Scheduled date</Text></Column>
                                <Column><Text className="text-[16px] font-lato  text-black text-right">13 March 2024</Text></Column>
                            </Row>
                            <Row>
                                <Column><Text className="text-[14px] font-lato text-paragraph text-left">Check-in time</Text></Column>
                                <Column><Text className="text-[16px] font-lato  text-black text-right">10:00 AM</Text></Column>
                            </Row>
                            <Row>
                                <Column><Text className="text-[14px] font-lato text-paragraph text-left">Check-out time</Text></Column>
                                <Column><Text className="text-[16px] font-lato  text-black text-right">1:00 AM</Text></Column>
                            </Row>
                        </Section>

                        <Section className=" text-[14px]">
                            <Row>
                                <Heading as="h3" className="font-lato text-black">Next Step</Heading>
                                <ul>
                                    <li>
                                        <Text className="text-paragraph font-lato">
                                        Guest Notification: We have informed Theodore
                                        Hills that their booking request was declined.
                                        </Text>
                                    </li>
                                    <li>
                                    <Text className="text-paragraph font-lato">
                                    Availability: Your space will now show as
                              available for other potential bookings on these
                              dates. If any changes arise, you can update your
                              calendar through the platform.
                                        </Text>
                                    </li>
                                </ul>
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
