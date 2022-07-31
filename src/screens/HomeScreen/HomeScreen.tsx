import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: 'grey',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag="h2" variant="heading1">
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  )
}
