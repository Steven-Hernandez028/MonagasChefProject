import {Box, Heading, Text, Image, useMediaQuery} from "@chakra-ui/react";

interface Cardprops {
    title: string;
    description: string;
    imageSrc: string;
}

const Card : React.FC<Cardprops>   = ({title, description, imageSrc}) =>{

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    return(
        <Box
        maxW= {isLargerThan768? '300px' : '500px'}
        width={!isLargerThan768? '250px' : '1200px    '} 
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
