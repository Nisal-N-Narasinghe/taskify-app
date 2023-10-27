import {
  Box,
  Flex,
  Heading,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import styles from "../../../styles/User/UserDashBoard";
export const FindAnExpertCard = ({ jobText, image }) => {
  return (
    <Box
      style={styles.findanExpertCard}
      backgroundColor='white'
      borderRadius={8}
      shadow={3}
      mx={2}>
      <Stack alignItems='center'>
        <VStack>
          <Image source={image} alt='image base' style={styles.image} />
          <Text style={styles.jobText}>{jobText}</Text>
        </VStack>
      </Stack>
    </Box>
  );
};
