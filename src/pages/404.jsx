const { useTheme } = require("@emotion/react");
const { default: FlexBox } = require("components/FlexBox");

const ErrorPage = () => {
  const theme = useTheme();
  <FlexBox
    p={4}
    height="100%"
    alignItems="center"
    flexDirection="column"
    justifyContent="center">
    <Box maxWidth={350}>
      <img
        src="/static/illustration/error-page.svg"
        width="100%"
        alt="Error 404"
      />
    </Box>
  </FlexBox>;
};
