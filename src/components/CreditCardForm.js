import React from 'react';
import useForm from '../useForm';
import {Button, Form, Alert, Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";





const CreditCardForm = () =>{
	const {handleChange, handleFocus, handleSubmit, values, errors,maxLengthCheck} =useForm();

	 
	return (
		<div>
			<div className = 'container'>
				<div className = 'box justify-content-center align-items-center'>
					<div className = 'form-div'>
						<div className = 'creidt-card'>
							<Cards 
								cvc={values.cardSecurityCode}
					            expiry={values.cardMonth + values.cardYear}
					            focused={values.focus}
					            name={values.cardName}
					            number={values.cardNumber}

							/>
						<div className='inputCard'>
							<Form  className = 'inputContent' onSubmit={handleSubmit}>
								<Form.Group className= 'rowContent'>
								  <Form.Label>Card Number</Form.Label>
					              <Form.Control
					                type="number"
					                id="cardNumber"
					                data-testid="cardNumber"
					                name="cardNumber"
					                placeholder="Card Number"
					                value={values.cardNumber}
					                onChange={handleChange}
					                onFocus={handleFocus}
					                isValid={errors.cnumber}
					                maxLength = "16" 
					                onInput={maxLengthCheck}
					              />
					            </Form.Group>
								<Form.Group className= 'rowContent'>
									<Form.Label>Card Name</Form.Label>
									<Form.Control
						                type="text"
						                id="cardName"
						                data-testid="cardName"
						                name="cardName"
						                placeholder="Cardholder Name"
						                value={values.cardName}
						                onChange={handleChange}
						                onFocus={handleFocus}
						                isValid={errors.cname}
						              />
								</Form.Group>

					            <Row >
					        
					              <Col>
					                <Form.Group  className= 'rowContent'>
					                <Form.Label>Expiration Date   </Form.Label>
					                  <Form.Control
					                    type="text"
					                    id="cardMonth"
					                    data-testid="cardMonth"
					                    name="cardMonth"
					                    placeholder="Month"
					                    value={values.cardMonth}
					                    onChange={handleChange}
					                    onFocus={handleFocus}
					                    isValid={errors.cexp}
					                    maxLength = "2" 
					                    onInput={maxLengthCheck}
					                  />
					                </Form.Group>
					                
					              </Col>

					              <Col>
					                <Form.Group  className= 'year'>
					                <Form.Label> </Form.Label>
					                  <Form.Control
					                    type="text"
					                    id="cardYear"
					                    data-testid="cardYear"
					                    name="cardYear"
					                    placeholder="Year"
					                    value={values.cardYear}
					                    onChange={handleChange}
					                    onFocus={handleFocus}
					                    isValid={errors.cexp}
					                    maxLength = "2" 
					                    onInput={maxLengthCheck}
					                  />
					                </Form.Group>
					                
					              </Col>


					          

					              <Col>
					                <Form.Group className= 'rowContent'>
					                  <Form.Label>CVC</Form.Label>
					                  <Form.Control
					                    type="number"
					                    id="cardSecurityCode"
					                    data-testid="cardSecurityCode"
					                    name="cardSecurityCode"
					                    placeholder="Security Code"
					                    value={values.cardSecurityCode}
					                    onChange={handleChange}
					                    onFocus={handleFocus}
					                    isValid={errors.ccvv}
					                    maxLength = "3" 
					                    onInput={maxLengthCheck}
					                  />
					                </Form.Group>
					              </Col>
            					</Row>  

								<Row className='button'>
								
	            					<Button
						              size="sm"
						              data-testid="validateButton"
						              id="validateButton"
						              type="submit"
						            >
						              Submit
						            </Button>   
						         
						        
					            </Row>    

					            <Row className='button'>
					            
						            <Button
						              size="sm"
						              data-testid="saveButton"
						              id="saveButton"
						              type="save"
						            >
						              Save card
						            </Button>
						         
						         </Row>

					                					
							</Form>

						</div>

							<Alert
					            id="alertMessage"
					            data-testid="alertMessage"
					            variant={errors.variant}
					            show={errors.show}
					          >
					            {errors.message}
					          </Alert>{" "}
					  </div>
					</div> 
				</div>
			</div>
		</div>
	);
};

export default CreditCardForm