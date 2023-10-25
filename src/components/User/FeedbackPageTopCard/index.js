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
import { styles } from "../../../styles/User/ViewTasks/ViewMyTasks";
import { Feather } from "@expo/vector-icons";

export const FeedbackTopCard = ({
  title,
  location,
  category,
  image,
  countFromPostedDate,
}) => {
  return (
    <Box style={styles.viewMyTaskItem} shadow={2}>
      <HStack space={4} p={2}>
        {/* Left Section */}
        <VStack flex={1}>
          <Box>
            <Image
              source={image}
              alt="job Image"
              // size="100px"
              w={"full"}
              h={"100"}
              borderRadius="10px"
            />
          </Box>
        </VStack>
        {/* Right Section */}
        <VStack flex={2}>
          <Heading fontSize="lg" fontWeight="bold" pb={2}>
            {title}
          </Heading>
          <HStack alignItems="center" pb={2}>
            <Icon
              as={Ionicons}
              name="location"
              size={6}
              color="gray.500"
              mr={2}
            />
            <Text fontSize="sm">
              {location} - {countFromPostedDate}
            </Text>
          </HStack>
          <HStack alignItems="center" pb={2} justifyContent={"space-between"}>
            <VStack>
              <Box style={styles.categoryLabel}>
                <Text style={styles.categoryText}>{category}</Text>
              </Box>
            </VStack>
            <VStack>
              <HStack alignItems="center"></HStack>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};
