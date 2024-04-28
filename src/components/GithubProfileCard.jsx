import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";
// https://avatars.githubusercontent.com/u/55402924?v=4

const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-lg bg-gradient-info shadow-lg border-0">
                <Container className="">
                <div className="p-2">
                  <Row className="">
                  <Col className="order-lg-2" lg="4">
                      <img src="https://media.licdn.com/dms/image/D4D03AQFn3dBsMhEtTw/profile-displayphoto-shrink_800_800/0/1710790819550?e=1720051200&v=beta&t=qLXFJv19-q913BJlwgzHZgDb1znxtS7_t-mPwY3oH1I" style={{width: "200px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 className="text-white">
                        Me encontre por meio das minhas redes 
                      </h2>
                      <p className="text-white mt-3">
                      Dev Python / Javascript.
                      </p>
                      <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                        <i className="ni ni-pin-3 text-info mr-2" />
                        Minas Gerais - Juiz de Fora
                        </div>
                        <SocialLinks />
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>      
     );
}
 
export default GithubProfileCard;