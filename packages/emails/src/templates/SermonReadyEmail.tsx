import {
  Html,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

interface SermonReadyEmailProps {
  sermonTitle: string;
  dashboardUrl: string;
}

export default function SermonReadyEmail({
  sermonTitle,
  dashboardUrl,
}: SermonReadyEmailProps) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading>Your sermon content is ready</Heading>
          <Text>
            Content for &ldquo;{sermonTitle}&rdquo; has been generated. Review
            and download your clips, posts, and devotionals at{" "}
            <a href={dashboardUrl}>{dashboardUrl}</a>.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
