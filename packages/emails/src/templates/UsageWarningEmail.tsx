import {
  Html,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

interface UsageWarningEmailProps {
  used: number;
  limit: number;
}

export default function UsageWarningEmail({
  used,
  limit,
}: UsageWarningEmailProps) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading>Approaching your sermon limit</Heading>
          <Text>
            You have used {used} of {limit} sermons this month. Upgrade your
            plan to continue generating content without interruption.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
