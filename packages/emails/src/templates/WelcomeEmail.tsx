import {
  Html,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  churchName: string;
}

export default function WelcomeEmail({ churchName }: WelcomeEmailProps) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading>Welcome to SundayFlow</Heading>
          <Text>
            Hi {churchName}, you are all set. Upload your first sermon to get a
            full week of content automatically.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
