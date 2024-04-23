import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import useRazorpay from 'react-razorpay';
import { useParams } from 'react-router-dom';

function LoanRegistration() {
    const { pk } = useParams();
    // const [user, setUser] = useState({});
    const [amount, setAmount] = useState('')
    // const [Razorpay] = useRazorpay();

    const {register, handleSubmit, setValue} = useForm()

    function fetchUser(){
        axios.get(`http://localhost:8000/loan_sanctioning/loan/${pk}/`).then((response)=>{
            // console.log(response.data)
            // alert('This works check console')
            setValue('application', response.data.application)
            setValue('loan_principal_amount', response.data.loan_principal_amount)
            setValue('loan_tenure', response.data.loan_tenure)
            setValue('interest_rate', response.data.interest_rate)
            setValue('amount_inr', response.data.total_amount_and_processing_fees)
            setValue('installment', response.data.installment)
            setValue('naturity_date', response.data.naturity_date)

        }).catch((error)=>{
            console.log(error)
            alert('message: ' + error.message)
        })
    }

    useEffect(()=>{fetchUser()}, [])

    // this function will handel payment when user submit his/her money
    // and it will confim if payment is successfull or not
    const handlePaymentSuccess = async (response) => {
        try {
        let bodyData = new FormData();

        // we will send the response we've got from razorpay to the backend to validate the payment
        bodyData.append("response", JSON.stringify(response));

        await Axios({
            url: `http://localhost:8000/loan_sanctioning/payment/success/`,
            method: "POST",
            data: bodyData,
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
        })
            .then((res) => {
            console.log("Everything is OK!");
            // setName("");`
            setAmount("");
            })
            .catch((err) => {
            console.log(err);
            });
        } catch (error) {
        console.log(console.error());
            }
    };

    // this will load a script tag which will open up Razorpay payment card to make //transactions
    const loadScript = () => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        document.body.appendChild(script);
    };

    const handlePayment = async (data) => {

        const res = await loadScript();

        console.log('Handle Payment Data', data)

        axios.post('http://localhost:8000/loan_sanctioning/transactions/', data)
            .then(response => {
                console.log('RESPONSE dATA', response.data)

                var options = {
                    key_id: 'rzp_test_SQNVraTjPz4OUx',
                    key_secret: 'acxrOrWOpf5rblEPYCIVfCkD',
                    amount: response.data.transaction.amount_inr,
                    currency: "INR",
                    name: "Org. Name", 
                    description: response.data.transaction.description,
                    image: "", // add image url
                    order_id: response.data.payment.id,
                    handler: function (response) {
                    // we will handle success by calling handlePaymentSuccess method and
                    // will pass the response that we've got from razorpay
                    handlePaymentSuccess(response);
                        },
                        prefill: {
                        name: "User's name",
                        email: "User's email",
                        contact: "User's phone",
                        },
                        notes: {
                        address: "Razorpay Corporate Office",
                        },
                        theme: {
                        color: "#3399cc",
                        },
                }
                var rzp1 = new window.Razorpay(options);
                rzp1.open();

            }).catch((error)=>{
                console.error('Error creating order:', error);
            })
    }

    return (
        <form className='container' onSubmit={handleSubmit(handlePayment)} >
            <div>
                <label>Application</label>
                <input type='text' id='Application' className='form-control' {...register('application')} />
            </div>
            <div>
                <label>loan_principal_amount</label>
                <input type='number' id='loan_principal_amount' className='form-control' {...register('loan_principal_amount')} />
            </div>
            <div>
                <label>loan_tenure</label>
                <input type='number' id='loan_tenure' className='form-control' {...register('loan_tenure')} />
            </div>
            <div>
                <label>interest_rate</label>
                <input type='number' id='interest_rate' className='form-control' {...register('interest_rate')} />
            </div>
            <div>
                <label>total_amount_and_processing_fees</label>
                <input type='number' id='total_amount_and_processing_fees' className='form-control' {...register('amount_inr')} />
            </div>
            <div>
                <label>installment</label>
                <input type='number' id='installment' className='form-control' {...register('installment')} />
            </div>
            <div>
                <label>naturity_date</label>
                <input type='date' id='naturity_date' className='form-control' {...register('naturity_date')} />
            </div>
            <div>
                <label>description</label>
                <input type='text' id='description' className='form-control' {...register('description')} />
            </div>

            <button onClick={handlePayment} >Pay</button>
            {/* <button onClick={fetchUser} >Get the Data</button> */}
        </form>
    );
}

export default LoanRegistration;
