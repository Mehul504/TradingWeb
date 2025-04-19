import React, { useState } from 'react';
import { app } from '../firebase'; // Import app from firebase.js
import { getFirestore, collection, addDoc } from 'firebase/firestore';
const AccordionDemoForm = (props) => {

    const [openIndex, setOpenIndex] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        trading: '',
        segment: '',
        investment: '',
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const db = getFirestore(app);
    const addData = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    
        const isEmpty = Object.values(formData).some(value => value.trim() === '');
    
        if (isEmpty) {
            setError('Please fill in all the fields before submitting.');
            return;
        }
    
        try {
            const docRef = await addDoc(collection(db, 'users'), formData);
            console.log('Document written with ID: ', docRef.id);
            setSuccess('Form submitted successfully!');
            setFormData({ // Reset form
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                trading: '',
                segment: '',
                investment: '',
            });
        } catch (e) {
            console.error('Error adding document: ', e);
            setError('Something went wrong. Please try again.');
        }
    };
    
    return (
        <div class={props.isMobile ? 'container-fluid faq-section pb-2' : "container-fluid pb-2"}>
            <div className= { props.isMobile ? '' : 'container overflow-hidden'}>
            <div className="row align-items-stretch"style={{width:"100%"}}>
              <div className={ props.isMobile ? 'col-12 section-mobile' : 'col-lg-6'} >
            <div className={ props.isMobile ? "accordion-container-mobile" : "accordion-container" }>
                <div className="accordion" id="accordionFlushSection">
                    {accordionData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`collapse${index}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#accordionFlushSection"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            <div className="col-lg-6" >
        
            <div className="r">
                <div className="col-lg-12">
                    <div className="p-4 rounded shadow bg-white">
                        <h3 className="text-center mb-4">Request a Live Demo Call Now!</h3>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" id="firstName" value={formData.firstName} onChange={handleChange}  placeholder="First Name" className="form-control"  />
                                        </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" id="lastName" placeholder="Last Name" value={formData.lastName}  onChange={handleChange}  required className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="tel" id="phone" placeholder="Mobile Number" value={formData.phone}  onChange={handleChange}  required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" placeholder="Email ID" value={formData.email}  onChange={handleChange}  required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="trading" className="form-label">Are you currently trading?</label>
                                <select id="trading" required className="form-select" onChange={handleChange} >
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="segment" className="form-label">Segment</label>
                                        <select id="segment" required className="form-select" onChange={handleChange} >
                                            <option value="">Select Segment</option>
                                            <option value="Equity Cash/Intraday">Equity Cash/Intraday</option>
                                            <option value="Option (Call/Put)">Option (Call/Put)</option>
                                            <option value="Future (Derivatives)">Future (Derivatives)</option>
                                            <option value="Index">Index</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="investment" className="form-label">Investment Amount</label>
                                        <select id="investment" className="form-select" onChange={handleChange} >
                                            <option value="">Select Amount</option>
                                            <option value="Below ₹50,000">Below ₹50,000</option>
                                            <option value="₹50,000 - 1 Lakh">₹50,000 - 1 Lakh</option>
                                            <option value="1 Lakh -3 Lakhs">1 Lakh -3 Lakhs</option>
                                            <option value="3 Lakhs -5 Lakhs">3 Lakhs -5 Lakhs</option>
                                            <option value="5 Lakhs & above">5 Lakhs & above</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" onClick={addData} className="w-100 my-3 btn btn-dark">Submit</button>

                        </form>
                        {error && <div className="alert alert-danger">{error}</div>}
{success && <div className="alert alert-success">{success}</div>}
                    </div>
                </div>
            
        </div>
            </div>
        </div>
            </div>

        </div>
       
    );
};

const accordionData = [
    { question: "Why is MM trading  Trusted Among Traders?", answer: `They maintain a high level of transparency in their trading strategies, market analysis, and customer interactions. This builds confidence and trust among traders who want honest and clear communication.MM Trading Vision is known for its team of experienced traders and analysts who provide accurate insights and market forecasts. Their expert support helps traders make informed decisions.MM Trading Vision is known for its team of experienced traders and analysts who provide accurate insights and market forecasts. Their expert support helps traders make informed decisions.

` },
    { question: "What Services Does MM trading Offer?", answer: "While specific details about the services offered by MM trading LLP are not readily available in public records, the company's classification suggests involvement in trading activities. However, without more detailed information, it's challenging to provide a comprehensive overview of their services" },
    { question: "What Markets Does MM trading  Cover?", answer: "MM trading primarily operates within the Indian stock market, focusing on options trading. Their services are tailored to assist traders in navigating the complexities of options trading by providing professional analysis and actionable recommendations. This includes identifying opportunities in various market segments such as equities, indices, and derivatives.​" },
    { question: "What Makes MM trading Analysts Unique?", answer: "Market Making (MM) trading analysts are unique due to their deep understanding of both quantitative analysis and real-time market dynamics. They blend data science, finance, and technology to develop and optimize trading strategies that ensure liquidity and efficient pricing in various markets. Unlike traditional analysts, MM trading analysts operate in high-frequency environments where speed, precision, and risk management are critical. Their work involves continuous innovation, algorithmic tuning, and close collaboration with traders and engineers, making them integral to maintaining competitive edge and profitability in fast-paced trading ecosystems." },
    { question: "How Does MM trading Ensure Quality?", answer: "Market Making (MM) trading ensures quality by providing consistent liquidity with tight bid-ask spreads and reliable pricing. Advanced algorithms, real-time data analysis, and strong risk controls help maintain efficiency and minimize errors. Continuous strategy refinement and robust technology further support stable and transparent market participation." }
];

export default AccordionDemoForm;
