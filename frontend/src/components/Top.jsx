"use client";

import Carousel from '@/components/Carousel'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Top() {
    return (
        <>
            <div className='top-banner'>
                <Row>
                    <Col xs={9}><Carousel /></Col>
                    {/* <Col><StaticBanner /></Col> */}
                    <Col>
                        <div className="static-banner">
                            <div className="static-banner-container">
                                <div className="static-banner-item">
                                    <img className="static-banner-img d-block w-100" src="https://images7.alphacoders.com/665/thumb-1920-665083.png" alt="Pikachu" />
                                </div>
                            </div>
                            <div className="static-banner-container">
                                <div className="static-banner-item">
                                    <img className="static-banner-img d-block w-100" src="https://images.alphacoders.com/675/thumb-1920-675514.jpg" alt="Jigglypuff" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Top;