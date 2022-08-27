import { Flex, Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center">
      <h2 className="ui header">
        <Image
          alt="logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
          padding={tokens.space.medium}
        />
        <div className="content">The Gaming Console</div>
      </h2>
    </Flex>
  );
}
