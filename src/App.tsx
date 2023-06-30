import * as React from "react"
import { useState, useRef } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Badge,
  theme,
  Container,
  Flex,
  Spacer,
  Circle,
  Center,
  SimpleGrid,
  Image,
  Heading,
  extendTheme,
  Button,
  Avatar,
  HStack,
  StackDivider,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  ListItem,
  List,
  Card,
  CardHeader, 
  CardBody, 
  CardFooter 
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Star from "./components/Star"
import { motion, Variants,useScroll, useTransform } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import '@fontsource/bungee/400.css';
import '@fontsource/poppins/600.css';
import "./App.css";


export const App = () => {
  const theme = extendTheme({
  fonts: {
    heading: `'Bungee', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
})
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  const moonRef = useRef(null)
  const whoamiRef = useRef(null)
  const waterRef = useRef(null)
  const { scrollYProgress } = useScroll({target:moonRef, offset: ["end end", "end start"]});
  const { scrollYProgress:scrollYWho } = useScroll({target:whoamiRef, offset: ["end end", "end start"]});
  const { scrollYProgress:scrollYWater } = useScroll({target:waterRef, offset: ["start end", "start start"]});
  const whoamiCol = useTransform(
    scrollYWho,
    [0.6, 0.8],
    [ '#484858','#FFFFFF'],
    { clamp: false }
  )
  const waterOp = useTransform(
    scrollYWater,
    [0.1, 0.5],
    [0,1],
    { clamp: true }
  )
  const waterOpShine = useTransform(
    scrollYWater,
    [0.8,1],
    [0,1],
    { clamp: false }
  )
  const waterY = useTransform(
    scrollYWater,
    [0.1,0.5],
    ["-300px","0px"],
    { clamp: true }
  )
  const skillsCol = useTransform(
    scrollYWater,
    [0.7, 0.9],
    ['#e2e8f0','#FFFFFF'],
    { clamp: true }
  )
  
  const starTrans = useTransform(
    scrollYWho,
    [0.5, 0.85],
    [0,1],
    { clamp: true }
  )
  const moonSize = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0.5],
    { clamp: true }
  )
  const moonX = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    ['0%', '-93%'],
    { clamp: true }
  )
  const moonY = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0],
    { clamp: true }
  )
  const cloudOp = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0],
    { clamp: true }
  )

  const header:Variants = {
    hidden:{
    },
    visible:{

      transition:{
        duration: 1,
        ease: "easeInOut",
        when:'beforeChildren',
      }
    }
  }
  const whoamiContainer:Variants = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        duration: 1,
        
        
        
      }
    }
  }
  const whoamiStuff:Variants = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        duration: 0.5,
        
        
        
        
      }
    }
  }
  const moonContainer:Variants = {
    hidden:{
    },
    visible:{

      transition:{
        duration: 1,
        ease: "easeInOut",
        when:'beforeChildren',
        staggerChildren: 0.25
      }
    }
  }
  const moonRing1:Variants = {
    hidden:{
      opacity:0
    },
    visible:{
        opacity:50,
        transition:{
        duration: 3,
        delay: 3,
        ease: "easeInOut"
      }
    }
  }
  const moonRing2:Variants = {
    hidden:{
      opacity:0
    },
    visible:{
        opacity:25,
        transition:{
        duration: 3,
        delay: 3,
        ease: "easeInOut"
      }
    }
  }
  const moonRing3:Variants = {
    hidden:{
      opacity:0
    },
    visible:{
        opacity:12,
        transition:{
        duration: 3,
        delay: 3,
        ease: "easeInOut"
      }
    }
  }
  const moon:Variants = {
    hidden:{
      
      scale:0.5
    },
    visible:{
        type: "spring",
        
        scale:1,
        transition:{
        
        duration: 3,
        ease: "easeInOut"
      }
    }
  }
  const cloudBox:Variants = {
    hidden:{

    },
    visible:{
      transition:{
        duration: 1,
        ease: "easeInOut",
        when:'beforeChildren',
        staggerChildren: 0.25
      }

      }
    }
  const cloudBox1:Variants = {
    hidden:{
      opacity:0,
      left:"5%"
    },
    visible:{
      opacity:1,
      left:"10%",
      transition:{
        duration:0.5
      }

      }
    }
    const cloudBox2:Variants = {
    hidden:{
      opacity:0,
      right:"5%"
    },
    visible:{
      opacity:1,
      right:"10%",
      transition:{
        duration:0.5
      }

      }
    }
  

  const cloud1:Variants = {
    hidden:{
      
      opacity:0,
      right:"75vh",
      zIndex:5
    },
    visible:{
        opacity:1,
        right:"70vh",
        transition:{
        delay:4,
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }
  const cloud2:Variants = {
    hidden:{
      
      opacity:0,
      right:"30vh",

    },
    visible:{
        opacity:1,
        right:"35vh",
        transition:{
          delay:4,
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }
  const cloud3:Variants = {
    hidden:{
      
      opacity:0,
      right:"15vh",

    },
    visible:{
        opacity:1,
        right:"20vh",
        transition:{
          delay:4,
        duration: 0.3,
        ease: "easeInOut",
        zIndex:0
      }
    }
  }
  const stars:Variants = {
    hidden:{
      
      opacity:0,
      

    },
    visible:{
        opacity:1,
        
        transition:{
          delay:5,
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }
  const list = {
  visible: { opacity: 1,
  transition:{

        ease: "easeInOut",
        when:'beforeChildren',
        staggerChildren: 0.1
  } },
  hidden: { opacity: 0 },

}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

  /*
  <Box as={motion.div} initial={{opacity:"0%"}} animate={{opacity:"100%"}} transition={{duration:'3',when:'afterChildren'}}display="grid" placeItems="center" bg="rgba(111,141,190,0.25)" height="50vh" width="50vh" borderRadius="50%">
            <Box as={motion.div} display="grid" placeItems="center" bg="rgba(111,141,190,0.5)" height="85%" width="85%" borderRadius="50%">
              <Box as={motion.div} initial={{opacity:"0%"}} animate={{opacity:"100%"}} transition={{duration:'3',when:'afterChildren'}} display="grid" placeItems="center" opacity="100%" bg="rgba(255,255,255,1)"height="80%" width="80%" borderRadius="50%">
              </Box>
            </Box>
          </Box>
          */
return(
  <ChakraProvider theme={theme}>

    
    <Box width="100%" overflowX="hidden">
      
    <Box color="white" as={motion.div} ref={moonRef} variants={header} initial="hidden" animate="visible" height="100vh" bg="linear-gradient(180deg, rgba(29,52,87,1) 0%, rgba(5,10,18,1) 100%)" textAlign="center" fontSize="xl">
    <Container maxW='70%' py="150px" height="inherit">
      <SimpleGrid columns={2} spacing="30%" maxH="90vh">
        <Box justifyContent="left" as={motion.div} variants={stars}>
          <Heading fontSize="9vh">
          Namashi Sivaram
          </Heading>
          <Text>
            SOFTWARE ENGINEER
          </Text>
          <br/>
          <HStack>
          <Link href={process.env.PUBLIC_URL + '/ResumeMain NamashivayanSivaram.pdf'} isExternal>
          <Button colorScheme="blue" size="lg">PDF Resume</Button></Link>
          <Link href={process.env.PUBLIC_URL + '/ResumeMain NamashivayanSivaram.pdf'} isExternal>
          <Button colorScheme="gray" size="lg">Email Me!</Button></Link>
          </HStack>
          
        </Box>
        <Box as={motion.div} variants={moonContainer}>
          <Box as={motion.div} zIndex={2} style={{scale:moonSize,zIndex:2,x:moonX}}>
            <Box as={motion.div} position="relative" zIndex={4} variants={moon} bg="rgba(255,255,255,1)" height="50vh" width="50vh" borderRadius="50%">
            </Box>
            <Box as={motion.div} position="relative" zIndex={3} variants={moonRing1} bg="rgba(111,141,190,0.5)" top="-55vh" right="5vh" height="60vh" width="60vh" borderRadius="50%">
            </Box>
            <Box as={motion.div} position="relative" zIndex={2} variants={moonRing2} bg="rgba(111,141,190,0.25)" top="-120vh" right="10vh" height="70vh" width="70vh" borderRadius="50%">
            </Box>
            <Box as={motion.div} position="relative" zIndex={1} variants={moonRing3} bg="rgba(111,141,190,0.12)" top="-195vh" right="15vh" height="80vh" width="80vh" borderRadius="50%">
            </Box>
          </Box>
          <Box as={motion.div}>
            <Box as={motion.div} variants={cloud1} position="absolute" top="50vh" right="70vh" zIndex="5">
              <Image src={require('./images/cloud1.png')}/>
            </Box>

            <Box as={motion.div} variants={cloud2} position="absolute" top="60vh" right="35vh" zIndex="5">
              <Image src={require('./images/cloud2.png')}/>
            </Box>
            <Box as={motion.div} variants={cloud3} opacity="70%" position="absolute" zIndex="0" top="40vh" right="20vh">
              <Image  src={require('./images/cloud3.png')}/>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <Box as={motion.div} variants={stars} opacity="0%">

        <Star top="10vh" left="20vh"/>
        <Star top="80vh" left="25vh"/>
        <Star top="18vh" left="33vh"/>
        <Star top="50vh" left="10vh"/>
        <Star top="18vh" left="60vh"/>
        <Star top="60vh" left="40vh"/>
        <Star top="27vh" left="77vh"/>
        <Star top="33vh" left="80vh"/>
        <Star top="63vh" left="52vh"/>
        <Star top="82vh" left="91vh"/>

        <Star top="9vh" left="100vh"/>
        <Star top="84vh" left="123vh"/>
        <Star top="18vh" left="140vh"/>
        <Star top="53vh" left="113vh"/>
        <Star top="82vh" left="200vh"/>
        <Star top="60vh" left="155vh"/>
        <Star top="27vh" left="200vh"/>
        <Star top="33vh" left="160vh"/>

        <Star top="11vh" left="190vh"/>
      </Box>
      
      
      </Container>
    </Box>
    <Box pt="10vh" as={motion.div} height="100vh" bg="rgba(5,10,18,1)" >
      
      <Box as={motion.div}
            initial="hidden" variants={whoamiContainer} whileInView="visible" viewport={{ once: true }}
            pos='relative'
            >
          <Box as={motion.div} ref={whoamiRef} style={{color:whoamiCol}}>
            <Heading size="2xl" textAlign='center'>
              WHO AM I
            </Heading>
          </Box>
          <br/>
          <Box zIndex={0} position='absolute'>
        <svg width="500" height="500">
          <motion.path
            d="M100 50 L200 55 L235 85 L280 110 L290 190 L390 198 L410 140 L280 110" // Completed Big Dipper constellation path
            stroke="white"
            strokeWidth="1"
            fill="none"
            
            
            style={{pathLength:starTrans}}
          />
          <circle cx="100" cy="50" r="3" fill="white" />       // Dot at the first vertex of Big Dipper
          <circle cx="200" cy="55" r="3" fill="white" />       // Dot at the second vertex of Big Dipper
          <circle cx="235" cy="85" r="3" fill="white" />       // Dot at the third vertex of Big Dipper
          <circle cx="280" cy="110" r="3" fill="white" />      // Dot at the fourth vertex of Big Dipper
          <circle cx="290" cy="190" r="3" fill="white" />      // Dot at the fifth vertex of Big Dipper
          <circle cx="390" cy="198" r="3" fill="white" />      // Dot at the sixth vertex of Big Dipper
          <circle cx="410" cy="140" r="3" fill="white" />      // Dot at the seventh vertex of Big Dipper
          <circle cx="280" cy="110" r="3" fill="white" />      // Dot at the eighth vertex of Big Dipper
        </svg>
      </Box>
      <Box zIndex={0} position='absolute' left="1000">
        <svg width="400" height="400">
          <motion.path
            d="M100 200 L160 160 L230 200 L290 160" // Cassiopeia constellation path
            stroke="white"
            strokeWidth="1"
            fill="none"
            
            style={{pathLength:starTrans}}
          />
          <circle cx="100" cy="200" r="3" fill="white" />      // Dot at the first vertex of Cassiopeia
          <circle cx="160" cy="160" r="3" fill="white" />      // Dot at the second vertex of Cassiopeia
          <circle cx="230" cy="200" r="3" fill="white" />      // Dot at the third vertex of Cassiopeia
          <circle cx="290" cy="160" r="3" fill="white" />      // Dot at the fourth vertex of Cassiopeia
        </svg>
      </Box>
      <Box zIndex={0} position="absolute" top="80">
        <svg width="500" height="500">
          <motion.path
            d="M100 250 L160 200 L190 220 L230 190 L270 240 L330 200 L360 230" // Orion constellation path
            stroke="white"
            strokeWidth="1"
            fill="none"
            
            style={{pathLength:starTrans}}

          />
          <circle cx="100" cy="250" r="3" fill="white" />     // Dot at the first vertex of Orion
          <circle cx="160" cy="200" r="3" fill="white" />     // Dot at the second vertex of Orion
          <circle cx="190" cy="220" r="3" fill="white" />     // Dot at the third vertex of Orion
          <circle cx="230" cy="190" r="3" fill="white" />     // Dot at the fourth vertex of Orion
          <circle cx="270" cy="240" r="3" fill="white" />     // Dot at the fifth vertex of Orion
          <circle cx="330" cy="200" r="3" fill="white" />     // Dot at the sixth vertex of Orion
          <circle cx="360" cy="230" r="3" fill="white" />     // Dot at the seventh vertex of Orion
        </svg>
      </Box>
      
      <Container zIndex={2} maxW='60%' mt="25vh" height="inherit">
        <Box as={motion.div} variants={whoamiStuff} px="100px">
        <Flex>

          <Avatar size='2xl' name='Namashi Sivaram' src={require('./images/headShot1.jpeg')} />{' '}
          <Spacer/>
          <Box width="50%" color="white">
            <Heading>
              From BIO to CS
            </Heading>
            <Text>
              As a bio student who transitioned to computer science, I am driven by the potential to code with a big picture in mind. I approach coding with passion and creativity, using it as a tool to envision innovative solutions and tackle complex problems from a holistic perspective. Through computer science, I can bring my ideas to life, creating transformative applications and interactive experiences that leave a lasting impact. This field empowers me to merge my passions and skills, leveraging technology to shape a better future and make a meaningful difference.
            </Text>
          </Box>
        </Flex>
        </Box>
      </Container>
      
      </Box>
    </Box> 
    <Box position="relative" ref={waterRef} minH="100vh" bg="linear-gradient(180deg, rgba(5,10,18,1) 0%, rgba(0,0,0,1) 100%)">
      <Box zIndex={0} left="0" top="0">
       <Star top="10vh" left="20vh"/>
        
        <Star top="18vh" left="33vh"/>
        
        <Star top="18vh" left="60vh"/>
        
        <Star top="27vh" left="77vh"/>
        

        <Star top="9vh" left="100vh"/>
        
        <Star top="18vh" left="140vh"/>
        <Star top="53vh" left="113vh"/>
        <Star top="50vh" left="10vh"/>
        <Star top="50vh" left="190vh"/>
        
        <Star top="27vh" left="200vh"/>
        <Star top="33vh" left="160vh"/>
        <Flex flexDirection="column" width="100%">
          <Box minH="30vh">
          </Box>
          <Center>
          <Box position="relative" as={motion.div} style={{scale:waterOp,top:waterY}} outline='3mm solid rgba(111,141,190,0.5)' border="5mm solid rgba(97,107,140,1)" bg="#FFFFFF" width="30vh" height="30vh" borderRadius="50%">
          </Box>
          </Center>
          <Box bg="#10162B" width="100%" minH="40vh">
            <Center as={motion.div} initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:1}}} transition={{'duration':'1'}}>
              <Image src={require('./images/waterShine.png')}/>
            </Center>
          </Box>
        </Flex>
      </Box>
      <Box position="absolute" zIndex={1} left="0" top="10%" width="100%">
      <Container maxW='80%'>
        <Center as={motion.div} style={{color:skillsCol}}><Heading size="2xl">SKILLS</Heading></Center>
        <Flex pt="100px" minHeight="40vh">
          <Box as={motion.div} position="relative" initial={{top:"20px",opacity:0}} whileInView={{top:"0px",opacity:1}} bg="#5E6B8C" height="100%" width="50vh" borderRadius="20">
            <Container maxW="90%" mt="5%">
            <Center><Heading size="lg">Technical</Heading></Center>
            <HStack alignItems="start" mt="5%" divider={<StackDivider borderColor='blue.900' />} mb="10px">
              
              <Box alignItems="start" width="50%">
                <Box>
                  <Badge>Languages</Badge>
                </Box>
                <Box mt="5%">
                  <Text color="white">
                Python, Java, JavaScript, Typescript, MATLAB, R, C, C++, HTML/CSS
                  </Text>
                </Box>
              </Box>

              
              

              <Box alignItems="start" width="50%">
                <Box>
                  <Badge>Frameworks</Badge>
                </Box>
                <Box mt="5%">
                  <Text color="white">
                ReactJS, NoSQL, NodeJS, Git, gulp
                  </Text>
                </Box>
              </Box>
            </HStack>
            </Container>
          </Box>
          <Spacer/>
          <Box as={motion.div} position="relative" initial={{top:"20px",opacity:0}} whileInView={{top:"0px",opacity:1}} bg="#5E6B8C" height="100%" width="50vh" borderRadius="20">
            <Container maxW="90%" mt="5%">
            <Center><Heading size="lg">production</Heading></Center>
            <HStack alignItems="start" mt="5%" divider={<StackDivider borderColor='blue.900' />} mb="10px">
              
              <Box alignItems="start" width="50%">
                <Box>
                  <Badge>Management</Badge>
                </Box>
                <Box mt="5%">
                  <Text color="white">
                Agile Development, Requirements Gathering, User Stories, Story Boarding, Scrum, Side by Side Coding
                  </Text>
                </Box>
              </Box>

              
              A56363

              <Box alignItems="start" width="50%">
                <Box>
                  <Badge>Tools</Badge>
                </Box>
                <Box mt="5%">
                  <Text color="white">
                Figma, Jira, Confluence, WireFrames, Git/Version Control, Googling & Stackoverflow
                  </Text>
                </Box>
              </Box>
            </HStack>
            </Container>
          </Box>
        </Flex>
        </Container>
      </Box>
    </Box>
    <Box as={motion.div} bg="linear-gradient(180deg, rgba(16,22,43,1) 0%, rgba(95,110,163,1) 100%)" position="relative" width="100%" minH="100vh">
      <Box width="100%" minH="100vh" position="absolute" top="0" left="0">
        <Box position="absolute" left="13%" top="30%" opacity="80%" as={motion.div} outline='3mm solid rgba(111,141,190,0.5)' border="5mm solid rgba(97,107,140,1)" bg="#FFFFFF" width="10vh" height="10vh" borderRadius="50%">
          </Box>
        <Box variants={cloudBox1} whileInView="visible" initial="hidden" as={motion.div} position="absolute" top="70%" left="10%">
          <Image  src={require('./images/cloud5.png')}/>
        </Box>
        <Box variants={cloudBox2} whileInView="visible" initial="hidden" as={motion.div} position="absolute" top="10%" right="10%">
          <Image  src={require('./images/cloud4.png')}/>
        </Box>

      </Box>
      <Box width="100%" minH="100vh" position="absolute" top="0" left="0">
        <Container px="10%" mt="10%" maxWidth="100%">
        <Flex>
          <Box width="50%" pt="15%">

              <Heading size="2xl">
                WHAT DO<br/> 
                I DO?
              </Heading>
    
          </Box>
          
          <Box width="50%">
            <Tabs variant='soft-rounded' colorScheme='pink'>
              <TabList>
                <Tab>Projects</Tab>
                <Tab>Work</Tab>
                <Tab>Achievements</Tab>
                <Tab>In Prog</Tab>

              </TabList>
              <TabPanels>
                <TabPanel>

                  <List as={motion.div} whileInView="visible" variants={list} initial="hidden"  spacing="5px">
                    
                      <ListItem>
                        <Box as={motion.div} variants={item} padding="1vh" whileHover={{scale:1.1,transition:{duration:0.2}}} width="100%" minH="10vh" bg="gray.200" borderRadius="10">
                          <Flex>
                            <Box height="8vh" width="8vh">
                              <Image  src={require('./images/pokemonIcon.png')}/>
                            </Box>
                            <Box ml="5px" width="100%">
                              <Flex>
                              <Badge colorScheme='purple' color="black">
                                POKEMON RED REMAKE
                              </Badge>
                              <Spacer/>
                              <Badge colorScheme="blue">
                                JAVA
                              </Badge>
                              </Flex>
                              <Text color="black" fontSize="10px">
                                A remake of the classic Pokemon Red Game. Complete with 151 Pokemon, evolution/level progression, battle mechanics, and basic enemy AI
                                Created with extensibility in mind; new Pokemon, moves and foes can by a txt file. There are 4 gyms to play and beat!
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Box as={motion.div} variants={item} padding="1vh" whileHover={{scale:1.1,transition:{duration:0.2}}} width="100%" minH="10vh" bg="gray.200" borderRadius="10">
                          <Flex>
                            <Box height="8vh" width="8vh">
                              <Image  src={require('./images/tronIcon.png')}/>
                            </Box>
                            <Box ml="5px" width="100%">
                              <Flex>
                              <Badge colorScheme='purple' color="black">
                                TRON
                              </Badge>
                              <Spacer/>
                              <Badge colorScheme="blue">
                                PYTHON
                              </Badge>
                              </Flex>
                              <Text color="black" fontSize="10px">
                                A remake of the arcade Tron game! Allows for 2 players, complete with powerups and round system.
                                
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Box as={motion.div} variants={item} padding="1vh" whileHover={{scale:1.1,transition:{duration:0.2}}} width="100%" minH="10vh" bg="gray.200" borderRadius="10">
                          <Flex>
                            <Box height="8vh" width="8vh">
                              <Image  src={require('./images/rpgIcon.png')}/>
                            </Box>
                            <Box ml="5px" width="100%">
                              <Flex>
                              <Badge colorScheme='purple' color="black">
                                Infiniy Dungeon
                              </Badge>
                              <Spacer/>
                              <Badge colorScheme="blue">
                                PYTHON
                              </Badge>
                              </Flex>
                              <Text color="black" fontSize="10px">
                                An original RPG that has the player explore randomly generated rouge-like dungeons, battling foes and leveling up, all to defeat the final boss on floor 20!
                                
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Link href='https://github.com/namasheep/MAPP' isExternal>
                        <Box as={motion.div} variants={item} padding="1vh" whileHover={{scale:1.1,transition:{duration:0.2}}} width="100%" minH="10vh" bg="gray.200" borderRadius="10">
                          <Flex>
                            <Box height="8vh" width="8vh">
                              <Image  src={require('./images/uwoIcon.png')}/>
                            </Box>
                            <Box ml="5px" width="100%">
                              <Flex>
                              <Badge colorScheme='purple' color="black">
                                WESTERN MAP APP
                              </Badge>
                              <Spacer/>
                              <Badge colorScheme="blue">
                                JAVA
                              </Badge>
                              </Flex>
                              <Text color="black" fontSize="10px">
                                A map system built for WesternU buildings, allowing for user to search for points of intrest bewteen maps. Contains admin mode to allow for new maps to be added
                                
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href='https://github.com/namasheep/WeatherGarden' isExternal>
                        <Box as={motion.div} variants={item} padding="1vh" whileHover={{scale:1.1,transition:{duration:0.2}}} width="100%" minH="10vh" bg="gray.200" borderRadius="10">
                          <Flex>
                            <Box height="8vh" width="8vh">
                              <Image  src={require('./images/gardenIcon.png')}/>
                            </Box>
                            <Box ml="5px" width="100%">
                              <Flex>
                              <Badge colorScheme='purple' color="black">
                                WEATHER GARDEN
                              </Badge>
                              <Spacer/>
                              <Badge colorScheme="blue">
                                PYTHON
                              </Badge>
                              </Flex>
                              <Text color="black" fontSize="10px">
                                A simple web scraping weather software that, in combination with a raspberry pi, turns on and off a pump to water a miniature garden whenver it rains outside!
                                
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                        </Link>
                      </ListItem>
                  </List>
                </TabPanel>
                <TabPanel>

                  <List as={motion.div} whileInView="visible" variants={list} initial="hidden"  spacing="5px">
                    
                      <ListItem>
                        <Link href="https://eigenfitness.com/" isExternal>
                        <Box as={motion.div} variants={item} padding="1vh" whileHover={{scale:1.1,transition:{duration:0.2}}} width="100%" minH="10vh" bg="gray.200" borderRadius="10">
                          <Flex>
                            <Box height="8vh" width="8vh">
                              <Image  src={require('./images/eigenIcon.png')}/>
                            </Box>
                            <Box ml="5px" width="100%">
                              <Badge colorScheme='purple' color="black">
                                EIGEN FITNESS
                              </Badge>
                              <Text color="black" fontSize="10px">
                                Working as a software dev, worked in conjuction with the team to help in the development of wearable tech. Specifically, designed and implemented large 'Teams' feature for consumers to group clients.
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                        </Link>
                      </ListItem>
                      
                  </List>
                </TabPanel>
                <TabPanel>

                  <List as={motion.div} whileInView="visible" variants={list} initial="hidden"  spacing="5px">
                    
                      <ListItem>
                        <Box as={motion.div} variants={item} padding="1vh" whileHover={{scale:1.1,transition:{duration:0.2}}} width="100%" minH="10vh" bg="gray.200" borderRadius="10">
                          <Flex>
                            <Box height="8vh" width="8vh">
                              <Image  src={require('./images/hosaIcon.jpg')}/>
                            </Box>
                            <Box ml="5px" width="100%">
                              <Badge colorScheme='purple' color="black">
                                HOSA MEDICAL INNOVATION
                              </Badge>
                              <Text color="black" fontSize="10px">
                                Using clinical research, designed isometric handgrip device that aids those with high blood pressure. Implemented treatment protocols into a python platformer game using SPI and a raspberry to make being healthy fun. Recieved 1st place in Canada!
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </ListItem>
                      
                  </List>
                </TabPanel>
                <TabPanel>

                  <List as={motion.div} whileInView="visible" variants={list} initial="hidden"  spacing="5px">
                    
                      <ListItem>
                        <Box as={motion.div} variants={item} padding="1vh" whileHover={{scale:1.1,transition:{duration:0.2}}} minH="10vh" bg="gray.200" borderRadius="10">
                          <Flex>
                            <Box height="8vh" width="8vh">
                              <Image  src={require('./images/soundIcon.png')}/>
                            </Box>
                            <Box ml="5px" width="100%">
                              <Badge colorScheme='purple' color="black">
                                SOUNDSCAPE
                              </Badge>
                              <Text color="black" fontSize="10px">
                                Combing Spotify and Google Maps APIs to allow users to set playlists for specific real life locations!
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Box as={motion.div} variants={item} padding="1vh" whileHover={{scale:1.1,transition:{duration:0.2}}} minH="10vh" bg="gray.200" borderRadius="10">
                          <Flex>
                            <Box height="8vh" width="8vh">
                              <Image  src={require('./images/icon-avatar.png')}/>
                            </Box>
                            <Box ml="5px" width="100%">
                              <Badge colorScheme='purple' color="black">
                                WEBSITE
                              </Badge>
                              <Text color="black" fontSize="10px">
                                This Website! Built from scratch without templates, using knowledge of framer motion, Chakra UI and React development. Designed all assets myself in Figma. Will always be a work in progress.
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </ListItem>
                      
                  </List>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
        </Container>
      </Box>
    </Box>
    <Box as={motion.div} bg="linear-gradient(180deg, rgba(95,110,163,1) 0%, rgba(255,214,224,1) 100%)" position="relative" width="100%" minH="100vh">
      <Box position="absolute" width="100%" minH="100vh" overflow="hidden" top="0" left="0">
      <Box variants={cloudBox2} whileInView="visible" initial="hidden" as={motion.div} position="absolute" top="10%" right="10%">
          <Image  src={require('./images/cloud6.png')}/>
        </Box>
      <Box variants={cloudBox1} whileInView="visible" initial="hidden" as={motion.div} position="absolute" top="70%" left="10%">
          <Image  src={require('./images/cloud7.png')}/>
        </Box>
      <Center>
        <Box as={motion.div} initial={{opacity:0,top:"80%"}} whileInView={{opacity:1,top:"60%",transition:{duration:1}}} borderRadius="50%" bg="#FBF9D1" width="120vh" height="120vh" position="absolute" top="60%">
        </Box>
      </Center>
      </Box>
      <Box position="absolute" width="100%" minH="100vh" overflow="hidden" top="0" left="0">
        <Container maxWidth="80%">
          <Box width="100%" mt="20%">
          <Flex>
         
          <Box width="50%">
            <Card bg="gray.200" >
              <CardHeader color="gray.700">
                <Heading size="lg">
                  More About Me!
                </Heading>
              </CardHeader>
              <CardBody color="blue.400">
              <Text>
                Enjoy reading history oriented books
                <br/>
                <br/>
                Love playing any sport especially soccer! (Chelsea Fan)
                <br/>
                <br/>
                Dream travel destination is Japan
                <br/>
                <br/>
                Board game enthusiast
              </Text>
              </CardBody>
              <CardFooter>
                <HStack spacing={8}>
                  <Box as={motion.div} width="5vh" height="5vh">
                    <Link  href="https://open.spotify.com/user/namasheep" isExternal>
                      <Image
                      _hover={{
                        'transform': "scale(1.1)",
                        
                      }}
                      
                      borderRadius='full'
                          
                          src={require('./images/soundIcon.png')}/>
                    </Link>
                  </Box>
                  <Box as={motion.div} width="5vh" height="5vh">
                    <Link href="https://github.com/namasheep" isExternal>
                      <Image
                      _hover={{
                        'transform': "scale(1.1)",
                        
                      }}
                      
                      borderRadius='full'
                          
                          src={require('./images/gitIcon.png')}/>
                    </Link>
                  </Box>
                  <Box as={motion.div} width="5vh" height="5vh">
                    <Link href="https://in.pinterest.com/namashi/" isExternal>
                      <Image
                      _hover={{
                        'transform': "scale(1.1)",
                        
                      }}
                      
                      borderRadius='full'
                          
                          src={require('./images/pinIcon.png')}/>
                    </Link>
                  </Box>
                </HStack>
              </CardFooter>
              
            </Card>
          </Box>
          <Spacer/>
           <Box width="45%">
            <Heading size="2xl">
              IN <br></br>conclusion
            </Heading>
            <br/>
            <Text size="xl" color="gray.700">
              My favourite thing to do is exploring creativity and bringing it to life, whatever the media is. When it comes to software, it means injecting my ideas and designs into whatever
              it is I am building. I find that in doing so, I can push myself to create things far more appealing and polished as passion is my main motivator. 
              I've got a lot more to create, and would love to chat about potential opportunities! 
            </Text>
          </Box>
          
          </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
    </Box>
  </ChakraProvider>
);
};
