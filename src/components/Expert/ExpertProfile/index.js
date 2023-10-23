import { View, Text } from "react-native";
import RatingIndicator from "../../common/RatingIndicator";
import { Box, Flex, Heading, ScrollView, Stack } from "native-base";
import styles from "../../../styles/Expert/ExpertProfile";
export const RatingCard = ({ rating, review }) => {
  return (
    <Box
      style={styles.ratingCard}
      backgroundColor='white'
      borderRadius={8}
      shadow={1}
      p={2}
      mx={2}>
      <Stack alignItems='center' my={2}>
        <Text style={styles.ratintext}>Rating</Text>
        <RatingIndicator rating={rating} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Flex flex={1} flexDirection='row' width='auto'>
            <Text style={styles.reviewtext}>{review}</Text>
          </Flex>
        </ScrollView>
      </Stack>
    </Box>
  );
};

export const ExpertCard = ({ title, jobcount, experience, JobDiscription }) => {
  return (
    <Box
      style={styles.expertCard}
      backgroundColor='white'
      borderRadius={8}
      padding={4}
      marginY={2}
      shadow={1}>
      <Heading fontSize='18' fontWeight='bold' alignSelf='center'>
        {title}
      </Heading>

      <Text style={styles.expertCardDiscription} alignSelf='center'>
        {JobDiscription}
      </Text>
      <Text style={styles.expertCardText}>{jobcount}</Text>
      <Text style={styles.expertCardText}>{experience}</Text>
    </Box>
  );
};
