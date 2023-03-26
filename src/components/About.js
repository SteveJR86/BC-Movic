import React from "react";
import { Grommet, Box, Heading, Card, CardHeader, CardBody, CardFooter, Grid, Text, Avatar, Nav, Anchor } from 'grommet';
import { Github, Linkedin, MailOption } from 'grommet-icons';

function About() {
    return (
        <Grommet>
            <Box>
                <Box
                    background="url('https://lh4.googleusercontent.com/a0UVkd8rdgeeoBTIZqctBCr4CUK1OqNXg2_MTBYf9tTbzKkleWxkzWx-RdEehYCg5Di_QisnV14VIWzE4Twl3X4vy79HOtyFct9cAHjvaqwyWdBJJsujNguGnI_y7KEJTQ=w1280')"
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
                            background="url('https://lh5.googleusercontent.com/nwve0MkTgPqFnqqfMuX0FY7X2dG5JEF5zDZGl5oizJFsSyHn802FzjTC6O6lXqXdAS8-tDWp7nYIH25hFzAN0MP37d7ifcPLyrw1290Vqu2Bs8tOXQnnfxgtHlCTPZ0YAg=w1280')"
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
                                            <Avatar size='5xl' src="https://lh5.googleusercontent.com/O_itfy1tjBqGhz_g3bYhf1nQ2S-NDyjxdrgS8YBv3oG_xYIdlDLpzC_Ii5q2vdWabxEQH2_U49xJWCoYZuWyb_kEyM9kDxEoejCk8WNQKvY9BLx9rvboXJr4YKrZKQHMGA=w1280" />
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
                                            <Avatar size='5xl' src="https://lh5.googleusercontent.com/O_itfy1tjBqGhz_g3bYhf1nQ2S-NDyjxdrgS8YBv3oG_xYIdlDLpzC_Ii5q2vdWabxEQH2_U49xJWCoYZuWyb_kEyM9kDxEoejCk8WNQKvY9BLx9rvboXJr4YKrZKQHMGA=w1280" />
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
                                            <Avatar size='5xl' src="https://lh5.googleusercontent.com/O_itfy1tjBqGhz_g3bYhf1nQ2S-NDyjxdrgS8YBv3oG_xYIdlDLpzC_Ii5q2vdWabxEQH2_U49xJWCoYZuWyb_kEyM9kDxEoejCk8WNQKvY9BLx9rvboXJr4YKrZKQHMGA=w1280" />
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
                                            <Avatar size='5xl' src="https://lh5.googleusercontent.com/O_itfy1tjBqGhz_g3bYhf1nQ2S-NDyjxdrgS8YBv3oG_xYIdlDLpzC_Ii5q2vdWabxEQH2_U49xJWCoYZuWyb_kEyM9kDxEoejCk8WNQKvY9BLx9rvboXJr4YKrZKQHMGA=w1280" />
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

