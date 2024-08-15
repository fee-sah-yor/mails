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
    validationCode?: string;
    code?: string;
    hostUrl?: string;
    avater: string;
    visa: string;
}



export const VerifyEmail = ({
    validationCode,
    hostUrl,
    avater,
    visa
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

            <Preview>Payout Successful</Preview>

            <Body className="font-lato">
                <Container>
                    <Header hostUrl={hostUrl} />

                    <Section className="px-5">

                        <Section>
                            <Heading className="font-montserrat text-2xl"> A payout of 1,100 AED has been sent to your account
                            </Heading>
                        </Section>


                        <Section>
                            <Text className="font-lato text-sm text-[#4b5563]">
                                <span className="text-[#000] leading-[23.8px]">Dear Cynthia,</span><br />
                                We are pleased  to inform you that a payout of 1,100 AED has been successfully sent to your account.
                            </Text>
                        </Section>

                        <Section>
                            <Hr />
                        </Section>

                        <Section>
                            <Row>
                                <Column><Text className="mb-0 mt-1 font-lato text-sm text-[#4b5563] text-left">Order date</Text></Column>
                                <Column><Text className="mb-0 mt-1 font-lato text-sm text-[#4b5563] text-center">Payment Id</Text></Column>
                                <Column><Text className="mb-0 mt-1 font-lato text-sm text-[#4b5563] text-right">Payment Method</Text></Column>
                            </Row>
                            <Row>
                                <Column><Text className="font-lato mt-0 mb-1 text-sm font-bold text-[#000] text-left"> March 24, 2024</Text></Column>
                                <Column><Text className="font-lato mt-0 mb-1 text-sm font-bold text-[#000] text-center">GH125489HI</Text></Column>

                                <Column className="text-right flex items-center justify-end">
                                    <Img src={visa}></Img> <Text className="font-lato mt-0 mb-1 text-sm font-bold text-[#000] "> Visa card</Text>
                                </Column>
                            </Row>
                        </Section>

                        <Section>
                            <Hr />
                        </Section>

                        <Section>
                            <Row>
                                <Column><Text className="mb-0 mt-1 font-lato font-semibold text-sm text-[#000] text-left">Description</Text></Column>
                                <Column><Text className="mb-0 mt-1 font-lato font-semibold text-sm text-[#000] text-center">Quantity</Text></Column>
                                <Column><Text className="mb-0 mt-1 font-lato font-semibold text-sm text-[#000] text-right">Price</Text></Column>
                            </Row>
                            <Row>
                                <Column><Text className="font-lato mt-0 mb-1 text-sm text-[#4b5563] text-left">Payout for Space Rental</Text> <br />
                                    <Text className="font-lato mt-0 mb-1 text-sm text-[#000] text-left font-bold">Booking ID: <span className="underline font-bold">GH123498IO</span></Text>
                                </Column>
                                <Column><Text className="font-lato mt-0 mb-1 text-sm text-[#4b5563] text-center">1</Text></Column>

                                <Column className="text-right flex items-center justify-end">
                                    <Img src={visa}></Img> <Text className="font-lato mt-0 mb-1 text-sm text-[#4b5563] ">800AED</Text>
                                </Column>
                            </Row>
                        </Section>

                        <Section>
                            <Hr />
                        </Section>

                        <Section>
                            <Row>
                                <Column width='50%'></Column>
                                <Column>
                                <Row>
                                    <Column>
                                    <p className="m-1 text-base text-center"> Subtotal</p>
                                    </Column>
                                    <Column> <p className="m-1 text-base text-right">1,100AED</p></Column>
                                </Row>
                                <Row>
                                    <Column><p className="m-1 text-base text-center">Total</p></Column>
                                    <Column> <p className="m-1 text-base text-right">1,100AED</p></Column>
                                </Row>
                                <Row>
                                    <Column><p className="m-1 font-bold text-base text-center">Amount Paid</p></Column>
                                    <Column><p className="m-1 font-bold text-base text-right">3,100AED</p></Column>
                                </Row>
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
    validationCode: "DJZ-TLX",
    avater: 'https://staging.api.shuttrd.com/view/resources/img/Avatar.png',
    visa: 'https://staging.api.shuttrd.com/view/resources/img/visa.png'
} as EmailProps;

export default VerifyEmail;
