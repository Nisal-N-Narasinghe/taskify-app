import React, { useState, useEffect } from "react";
import { Box, Button, Text, Image, ScrollView, VStack } from "native-base";
import Modal from "react-native-modal";
import { styles } from "../../../styles/Expert/ExpertViewExpertiseArea";
import {
  Availability,
  ExpertDetails,
  ExpertDiscription,
} from "../../../components/Expert/ExpertViewExpertiseArea";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ImageSlider from "../../../components/common/ImageSlider";
import ImageSliderIndicator from "../../../components/common/ImageSliderIndicator";
import "firebase/firestore";
import { firebase } from "../../../../config";

const ExpertViewExpertiseArea = ({ route, navigation }) => {
  const [completedWorks, setCompletedWorks] = useState([]);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const images = [
    require("../../../../assets/cleaning.jpg"),
    require("../../../../assets/computer.jpg"),
    require("../../../../assets/gardening.jpg"),
    require("../../../../assets/plumber.jpg"),
    require("../../../../assets/dog.jpg"),
  ];
  const expertId = route.params ? route.params.expertId : null;
  console.log("Expert ID:", expertId);
  console.log("Completed Works:", completedWorks);
  const expertDetails = completedWorks.find((work) => work.id === expertId);
  const [currentStep, setCurrentStep] = useState(0);
  const toggleDeleteModal = () => {
    setDeleteModalVisible(!isDeleteModalVisible);
  };

  const handleEdit = () => {
    //console.log("Edit button pressed");
  };
  const handleDelete = () => {
    console.log("Delete button pressed");
    toggleDeleteModal();
  };
  const confirmDelete = () => {
    // Perform the delete operation here
    const expertCollection = firebase.firestore().collection("experts");

    if (expertId) {
      expertCollection
        .doc(expertId)
        .delete()
        .then(() => {
          console.log("Expert deleted successfully");
          navigation.navigate("Expert Profile");
        })
        .catch((error) => {
          console.error("Error deleting expert:", error);
        });
    } else {
      console.error(
        "Expert ID is missing. Delete operation cannot be performed."
      );
    }
    toggleDeleteModal();
  };

  const handleSwiperIndexChanged = (index) => {
    setCurrentStep(index + 1);
  };
  useEffect(() => {
    const expertCollection = firebase.firestore().collection("experts");

    const fetchData = async () => {
      try {
        const snapshot = await expertCollection.get();
        const works = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCompletedWorks(works);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Box style={styles.container} background={"white"}>
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={true}
        background={"white"}>
        <Box safeArea flex={1} background={"white"}>
          <VStack>
            <ImageSlider
              images={images}
              onIndexChanged={handleSwiperIndexChanged}
            />
            <ImageSliderIndicator
              currentStep={currentStep}
              totalStep={images.length}
            />
            <ExpertDiscription discription='Detail Description' />
            {expertDetails && (
              <ExpertDetails
                name={expertDetails.name}
                field={expertDetails.service}
                experience={5}
                location={expertDetails.location}
                phone={expertDetails.phone}
              />
            )}
            <Availability availability='Weekdays' />
          </VStack>

          <Box justifyContent='center' alignItems='center'>
            <Button
              style={styles.button}
              onPress={handleEdit}
              background={"#149873"}
              endIcon={<MaterialIcons name='edit' size={24} color='white' />}>
              <Text style={styles.buttonContent}>Edit</Text>
            </Button>
            <Button
              style={styles.button}
              onPress={handleDelete}
              background={"red.500"}
              endIcon={<MaterialIcons name='delete' size={24} color='white' />}>
              <Text style={styles.buttonContent}>Delete</Text>
            </Button>
          </Box>
        </Box>
        <Modal isVisible={isDeleteModalVisible}>
          <Box>
            <Box
              style={{
                backgroundColor: "white",
                borderRadius: 16,
                padding: 16,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text style={styles.deleteText}>
                Are you sure you want to delete?
              </Text>
              <Button style={styles.deleteYesbtn} onPress={confirmDelete}>
                Yes
              </Button>
              <Button
                style={styles.deleteCancelbtn}
                onPress={toggleDeleteModal}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
      </ScrollView>
    </Box>
  );
};

export default ExpertViewExpertiseArea;
