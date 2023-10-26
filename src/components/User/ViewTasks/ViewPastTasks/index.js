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
import { styles } from "../../../../styles/User/ViewTasks/ViewMyTasks";
import { Feather } from "@expo/vector-icons";
import RatingIndicator from "../../../common/RatingIndicator";

export const ViewPastTaskItem = ({
  title,
  location,
  category,
  postedDate,
  postedTime,
  completedDate,
  completedTime,
  rate,
  amount,
}) => {
  return (
    <Box style={styles.viewMyTaskItem} shadow={2}>
      <Box padding={2}>
        <HStack justifyContent={"space-between"}>
          <Heading w={"4/5"} fontSize="lg" fontWeight="bold" pb={2}>
            {title}
          </Heading>
        </HStack>
        <HStack
          marginBottom={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box style={styles.categoryLabel}>
            <Text style={styles.categoryText}>{category}</Text>
          </Box>
          <VStack>
            <Text>Rate</Text>
            <RatingIndicator rating={rate} />
          </VStack>
        </HStack>

        <HStack marginBottom={2}>
          <Icon
            as={Ionicons}
            name="location"
            size={6}
            color="gray.500"
            mr={2}
          />
          <Text fontSize="sm">{location}</Text>
        </HStack>

        <HStack marginBottom={2}>
          <HStack w={"1/2"}>
            <Icon
              as={Ionicons}
              name="md-time-outline"
              size={6}
              color="gray.500"
              mr={2}
            />
            <Text fontSize="sm">{postedTime}</Text>
          </HStack>
          <Text fontSize="sm">{postedDate}</Text>
        </HStack>

        <HStack marginBottom={2}>
          <HStack w={"1/2"}>
            <Icon
              as={Ionicons}
              name="md-time-sharp"
              size={6}
              color="gray.500"
              mr={2}
            />
            <Text fontSize="sm">{completedTime}</Text>
          </HStack>
          <HStack></HStack>
          <Text fontSize="sm">{completedDate}</Text>
        </HStack>

        <Divider bg="gray.400" marginTop={3} />
        <HStack justifyContent="space-between" padding={1}>
          <Text style={styles.Amount}>{amount} LKR</Text>
          <Feather name="trash-2" size={24} color="black" />
        </HStack>
      </Box>
    </Box>
  );
};
