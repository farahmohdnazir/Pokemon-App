"use client";

import PokemonList from '@/components/PokemonList'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Bottom = () => {
    return (
        <>
            <div className='bottom-content'>
                <Row>
                    <Col sm={2}>
                        <div className="static-image">
                            <div className="static-image-container">
                                <div className="static-image-item">
                                    <img className="static-image-img d-block w-100" src="https://images.alphacoders.com/686/thumb-1920-686174.jpg" alt="Pokemon" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}><PokemonList /></Col>
                    <Col sm={4}>
                        <div className="static-image">
                            <div className="static-image-container">
                                <div className="static-image-item">
                                    <img className="static-image-img d-block w-100" src="https://images2.alphacoders.com/124/thumb-1920-1243963.jpg" alt="Pikachu" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Bottom;