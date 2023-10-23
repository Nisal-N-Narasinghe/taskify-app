import { Icon, Input } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SearchBar = ({ marginTop, marginBottom }) => {
  return (
    <Input
      placeholder="Search"
      width="100%"
      borderRadius="16"
      py="3"
      px="1"
      fontSize="16"
      InputLeftElement={
        <Icon
          m="2"
          ml="3"
          size="6"
          color="gray.400"
          as={<MaterialIcons name="search" />}
        />
      }
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};

export default SearchBar;
