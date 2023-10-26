import { AspectRatio, Box, Heading, Image, Stack } from "native-base";

export const CategoryItem = ({ image, category }) => {
  return (
    <Box
      id="clean"
      maxW="100%"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image source={image} alt="image" width="100%" height="auto" />
        </AspectRatio>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {category}
          </Heading>
        </Stack>
      </Stack>
    </Box>
  );
};
