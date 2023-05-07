import {Box, Heading, Text, Image} from "@chakra-ui/react";

interface Cardprops {
    title: string;
    description: string;
    imageSrc: string;
}

const Card : React.FC<Cardprops>   = ({title, description, imageSrc}) =>{

    return(
        <Box
        maxW= "sm"
        borderWidth = "1px"
        borderRadius="lg"
        overflow ="hidden"
        margin  = "1rem"
        >
            <Image src={imageSrc} alt={title} />
            <Box padding="1rem">
                <Heading as = "h4" size="md">
                    {title}
                </Heading>

                <Text marginTop ="1rem">{description}</Text>
            </Box>

        </Box>
    )
}

export default Card;
