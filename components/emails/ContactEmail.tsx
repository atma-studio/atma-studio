import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

import type { TEmailSchema } from '@/lib/types';

// import Logo from '@/public/images/logo.webp';

export const ContactEmail = ({ firstname, lastname, email, message, sourceOfDiscovery = '' }: TEmailSchema) => {
  return (
    <Html>
      <Head />
      <Preview>Formulaire de contact ATMA Studio</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src="https://atma-studio.vercel.app/images/logo.png"
                width="55"
                height="50"
                alt="Atma Studio Logo"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              <strong>Nouvelle</strong> prise de contact de : {firstname} {lastname}
            </Heading>
            <Text>Contenu de son message :</Text>
            <Text className="pl-2 text-[14px] leading-[24px] text-black">{message}</Text>
            <div>
              <Text className="pt-4">
                Contact de <strong>{firstname}</strong> :
              </Text>
              <Text className="mt-2 pl-2">
                Email :{' '}
                <Link href={`mailto:${email}`} className="text-blue-600 no-underline">
                  {email}
                </Link>
              </Text>
            </div>
            {sourceOfDiscovery && (
              <Text>
                <strong>{firstname}</strong> nous a découvert via : <u>{sourceOfDiscovery}</u>
              </Text>
            )}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;