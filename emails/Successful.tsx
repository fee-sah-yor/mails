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
    visa: string;
}

export const VerifyEmail = ({
    hostUrl,
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
                        black: '#000',
                        paragraph: "#4b5563"
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

            <Preview>Subscription successful</Preview>

            <Body className="font-lato">
                <Container>
                    <Header hostUrl={hostUrl} />

                    <Section className="px-[20px] pt-[10px] pb-[20px]">

                        <Section>
                            <Heading className="font-montserrat text-[24px] leading-[30px] text-black">Subscription successful
                            </Heading>
                        </Section>


                        <Section>
                            <Text className="font-lato text-[16px] text-[#4b5563] leading-[23.8px]">
                                <span className="text-[#000] font-lato text-[16px]">Dear Cynthia,</span><br />
                                Congratulations! Your subscription to Shuttrd monthly
                                services has been successfully processed.
                            </Text>
                        </Section>

                        <Hr className="border-t-[#4b5563]" />

                        <Section>
                            <Row>
                                <Column>
                                    <Row>
                                        <Column><Text className="mb-0 mt-1 font-lato text-[14px] text-[#4b5563] text-left">Order date</Text></Column>
                                    </Row>
                                    <Row>
                                        <Column><Text className="font-lato mt-0 mb-1 text-[14px] font-[700] text-[#000] text-left"> March 24, 2024</Text></Column>
                                    </Row>
                                </Column>

                                <Column>
                                    <Row>
                                        <Column><Text className="mb-0 mt-1 font-lato text-[14px] text-[#4b5563] text-center">Payment Id</Text></Column>
                                    </Row>
                                    <Row>
                                        <Column><Text className="font-lato mt-0 mb-1 text-[14px] font-[700] text-[#000] text-center">GH125489HI</Text></Column>
                                    </Row>
                                </Column>

                                <Column>
                                    <Row>
                                        <Column><Text className="mb-0 mt-1 font-lato text-[14px] text-[#4b5563] text-right">Payment Method</Text></Column>
                                    </Row>
                                    <Row>
                                        <Column className="text-right">
                                            <Row>
                                                <Column>
                                                    <img
                                                        src={visa}
                                                    />
                                                </Column>
                                                <Column className="w-[70px]">
                                                    <Text className="font-lato mt-0 mb-1 text-[14px] font-bold text-[#000] "> Visa card</Text>
                                                </Column>
                                            </Row>
                                        </Column>
                                    </Row>
                                </Column>
                            </Row>
                        </Section>

                        <Hr className="border-t-[#4b5563]" />

                        <Section>
                            <Row>
                                <Column>
                                    <Row>
                                        <Column><Text className="mb-0 mt-1 font-lato font-semibold text-sm text-[#000] text-left">Description</Text></Column>
                                    </Row>
                                    <Row >
                                        <Column className="w-[70px]">
                                            <Text className="font-lato mt-0 mb-1 text-sm text-[#4b5563] text-left">
                                                Shuttrd monthly premium services March 24
                                                - April 24, 2024
                                            </Text>
                                        </Column>
                                    </Row>
                                </Column>

                                <Column>
                                    <Row>
                                        <Column><Text className="mb-0 mt-1 font-lato font-semibold text-sm text-[#000] text-center">Quantity</Text></Column>
                                    </Row>
                                    <Row>
                                        <Column><Text className="font-lato mt-0 mb-1 text-sm text-[#4b5563] text-center">1</Text></Column>
                                    </Row>
                                </Column>

                                <Column>
                                    <Row>
                                        <Column><Text className="mb-0 mt-1 font-lato font-semibold text-sm text-[#000] text-right">Price</Text></Column>
                                    </Row>
                                    <Row>
                                        <Column><Text className="font-lato mt-0 mb-1 text-sm text-[#4b5563] text-right">800AED</Text></Column>
                                    </Row>
                                </Column>
                            </Row>
                        </Section>

                        <Hr className="border-t-[#4b5563]" />

                        <Section>
                            <Row >
                                <Column width='50%'></Column>
                                <Column>
                                    <Row>
                                        <Column>
                                            <Row> <Text className="m-2 text-base text-black text-left"> Subtotal</Text></Row>
                                            <Row><Text className="m-2 text-base text-black text-left">Total</Text></Row>
                                            <Row><Text className="m-2 font-bold text-base text-black text-left">Amount Paid</Text></Row>
                                        </Column>

                                        <Column>
                                            <Row><Text className="m-2 text-base text-black text-right">1,100AED</Text></Row>
                                            <Row><Text className="m-2 text-base text-black text-right">1,100AED</Text></Row>
                                            <Row><Text className="m-2 text-base text-black text-right">3,100AED</Text></Row>
                                        </Column>
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
    visa: 'https://staging.api.shuttrd.com/view/resources/img/visa.png'
} as EmailProps;

export default VerifyEmail;
