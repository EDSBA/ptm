import React, { useState } from 'react';
import styled from "styled-components";

const supportedCurrencies = [
    {
        value: 'CAD',
        text: "Canadian Dollar"
    },
    {
        value: 'USD',
        text: "US Dollar"
    }
]

export function ExpenseForm() {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
  
    return (
      <FormWrapper>
        <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
            Amount:
            <input
                name="numberOfGuests"
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))} />
        </label>
        <label>
            Currency:
            <select name="cars" id="cars">
                {supportedCurrencies.map((curr)=><option value={curr.value}>{curr.text}</option>)}
            </select>
        </label>
        <button type="button">Sumbit</button>
      </FormWrapper>
    );
  }

  const FormWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-direction: row;
  parring: 80px;
`;