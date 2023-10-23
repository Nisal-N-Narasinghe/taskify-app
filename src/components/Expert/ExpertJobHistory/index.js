import {
  Box,
  Heading,
  Image,
  VStack,
  Icon,
  HStack,
  Text,
  Divider,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../styles/Expert/ExpertJobHistory";
import RatingIndicator from "../../../components/common/RatingIndicator";

export const JobHistoryItem = ({
  title,
  location,
  startTime,
  endTime,
  rating,
  image,
  startDate,
  endDate,
  countFromEndDate,
  Amount,
}) => {
  return (
    <Box style={styles.jobHistoryItem} shadow={2}>
      <HStack space={4} p={2}>
        {/* Left Section */}
        <VStack flex={3}>
          <Heading fontSize='lg' fontWeight='bold' pb={2}>
            {title}
          </Heading>
          <HStack alignItems='center'>
            <Icon
              as={Ionicons}
              name='location'
              size={4}
              color='gray.500'
              ml={2}
              mr={2}
            />
            <Text fontSize='sm' pb={1}>
              {location}
            </Text>
          </HStack>
          <HStack alignItems='center'>
            <Icon
              as={Ionicons}
              name='alarm-outline'
              size={4}
              color='gray.500'
              mr={2}
              ml={2}
            />
            <Text style={styles.jobHistoryText} pb={1}>
              Start: {startTime} - {startDate}
            </Text>
          </HStack>
          <HStack alignItems='center'>
            <Icon
              as={Ionicons}
              name='timer-outline'
              size={4}
              color='gray.500'
              mr={2}
              ml={2}
            />
            <Text style={styles.jobHistoryText} pb={1}>
              End: {endTime} - {endDate}
            </Text>
          </HStack>
        </VStack>

        {/* Right Section */}
        <VStack flex={1}>
          <Text fontSize='sm'>Rating</Text>
          <RatingIndicator rating={rating} />
          <Box pt={2}>
            <Image
              source={image}
              alt='job Image'
              size='64px'
              borderRadius='10px'
            />
          </Box>
        </VStack>
      </HStack>
      <Divider bg='gray.400' />
      <HStack justifyContent='space-between'>
        <HStack>
          <Icon
            as={Ionicons}
            name='hourglass-outline'
            size={4}
            color='#EF7D41'
            mr={0}
            ml={2}
            mt={2}
          />
          <Text style={styles.countFromEndDate}>{countFromEndDate}</Text>
        </HStack>
        <Text style={styles.Amount}>{Amount} LKR</Text>
      </HStack>
    </Box>
  );
};
