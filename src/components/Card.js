import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Card.css"


const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <div className="Card" >
      <Image src={imageSrc} id="img" />
      <div className="text">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>
          {description}
        </Text>
      <HStack>
        <a href="#">See More</a>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
      </div>
    </div>
  );
};

export default Card;
