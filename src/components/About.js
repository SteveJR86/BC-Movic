import React from "react";
import { Grommet, Box, Heading, Card, CardHeader, CardBody, CardFooter, Grid, Text, Avatar, Nav, Anchor } from 'grommet';
import { Github, Linkedin, MailOption } from 'grommet-icons';

function About() {
    return (
        <Grommet>
            <Box>
                <Box
                    background="url('https://i.ibb.co/27dmzSG/My-project-1-4.jpg')"
                    height="small"
                    width="100%"
                    align='center'
                    justify="center">
                    <Heading color="white">About Movic</Heading>
                </Box>
                <Box
                    height="auto"
                    width="100%">

                    <Grid
                        columns={['1/2', '1/2']}
                        areas={[
                        ]}
                    >
                        <Box margin={{ vertical: "medium" }}>
                            <Heading color="black" margin={{ horizontal: "small" }}>About Movic</Heading>
                            <Box pad={{ horizontal: "medium" }}>
                                <Text>Welcome to Movic, the social media application designed for music and movie enthusiasts! Our app aims to bring people together in a unique social experience, providing a platform where users can connect, share their interests, and express their views on music and movies.</Text>
                                <Text margin={{ vertical: "medium" }}>At Movic, we're passionate about bringing people together through music and movies. We believe that everyone deserves a space to connect and share their love for these art forms, and we hope you'll join us in creating a vibrant and supportive community.</Text>
                            </Box>
                        </Box>
                        <Box
                            background="url('https://i.ibb.co/0m99Jw3/My-project-1.jpg')"
                        >

                        </Box>
                    </Grid>
                </Box>
                <Box fill>
                    <Box gridArea="footer" background="dark-2">
                        <Heading level="3" margin={{ vertical: "medium", horizontal: "medium" }} >Made By</Heading>
                        <Box background="dark-2" gridArea="footer" >
                            <Grid
                                columns={['1fr', '1fr', '1fr', '1fr']}
                                areas={[
                                    ['Chido', 'Steven', 'Thomas', 'Yasha'],

                                ]}
                                gap="small"
                                margin={{ vertical: "medium", horizontal: "medium" }}
                            >
                                <Card width="100%" height="medium" background="light-1" gridArea="Chido" align="center">
                                    <CardHeader pad="small" ><Heading level={3}>Chido Munyanyi</Heading></CardHeader>
                                    <CardBody pad="small">
                                        <Box direction="row" gap="small">
                                            <Avatar size='5xl' src="https://i.ibb.co/DwxKsWG/My-project-1-9.jpg" />
                                        </Box>
                                    </CardBody>
                                    <CardFooter pad={{ vertical: "small" }} background="light-2">
                                        <Box direction="row" width='100%'>
                                            <Nav direction="row" background='none'>
                                                <Anchor href="https://github.com/ChidoMunyanyi" icon={<Github />} hoverIndicator />
                                                <Anchor href="#" icon={<Linkedin />} hoverIndicator />
                                                <Anchor href="#" icon={<MailOption />} hoverIndicator />
                                            </Nav>
                                        </Box>
                                    </CardFooter>
                                </Card>
                                <Card width="100%" height="medium" background="light-1" gridArea="Steven" align="center">
                                    <CardHeader pad="small" ><Heading level={3}>Steven Riley</Heading></CardHeader>
                                    <CardBody pad="small">
                                        <Box direction="row" gap="small">
                                            <Avatar size='5xl' src="https://i.ibb.co/DwxKsWG/My-project-1-9.jpg" />
                                        </Box></CardBody>
                                    <CardFooter pad={{ vertical: "small" }} background="light-2">
                                        <Box direction="row" width='100%'>
                                            <Nav direction="row">
                                                <Anchor href="https://github.com/SteveJR86" icon={<Github />} hoverIndicator />
                                                <Anchor href="#" icon={<Linkedin />} hoverIndicator />
                                                <Anchor href="#" icon={<MailOption />} hoverIndicator />
                                            </Nav>
                                        </Box>
                                    </CardFooter>
                                </Card>
                                <Card width="100%" height="medium" background="light-1" gridArea="Thomas" align="center">
                                    <CardHeader pad="small" ><Heading level={3}>Thomas Hands</Heading></CardHeader>
                                    <CardBody pad="small">
                                        <Box direction="row" gap="small">
                                            <Avatar size='5xl' src="https://i.ibb.co/DwxKsWG/My-project-1-9.jpg" />
                                        </Box></CardBody>
                                    <CardFooter pad={{ vertical: "small" }} background="light-2">
                                        <Box direction="row" width='100%'>
                                            <Nav direction="row">
                                                <Anchor href="https://github.com/tjhandson" icon={<Github />} hoverIndicator />
                                                <Anchor href="https://www.linkedin.com/in/thomas-hands#" icon={<Linkedin />} hoverIndicator />
                                                <Anchor href="mailto:thomjhands@gmail.com" icon={<MailOption />} hoverIndicator />
                                            </Nav>
                                        </Box>
                                    </CardFooter>
                                </Card>
                                <Card width="100%" height="medium" background="light-1" gridArea="Yasha" align="center">
                                    <CardHeader pad="small" ><Heading level={3}>Yasha Zamanpour Kolouee</Heading></CardHeader>
                                    <CardBody pad="small" >
                                        <Box direction="row" gap="small">
                                            <Avatar size='5xl' src="https://i.ibb.co/DwxKsWG/My-project-1-9.jpg" />
                                        </Box>

                                    </CardBody>
                                    <CardFooter pad={{ vertical: "small" }} background="light-2">
                                        <Box direction="row" width='100%'>
                                            <Nav direction="row">
                                                <Anchor href="https://github.com/zamanpour" icon={<Github />} hoverIndicator />
                                                <Anchor href="#" icon={<Linkedin />} hoverIndicator />
                                                <Anchor href="#" icon={<MailOption />} hoverIndicator />
                                            </Nav>
                                        </Box>
                                    </CardFooter>
                                </Card>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </Grommet >
    );
}

export default About;

