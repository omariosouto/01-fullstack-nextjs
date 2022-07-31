import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Menu from "./patterns/Menu/Menu";

export default function HomeScreen() {
  return (
    <Box
      tag="main"
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text>
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed>
    </Box>
  )
}
