
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ExpenseForm } from './components/ExpenseForm';
import { Expense, selectExpenses, selectTotal } from './expensesReportSlice';

// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';


export function ExpensesReport() {

  const expenses = useAppSelector(selectExpenses);
  const total = useAppSelector(selectTotal);
  // const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <ReportWrapper>
      <ExpenseForm />
      {expenses.length ? <ExpensesList>
        {expenses.map((expense)=><Row>
          <ExpenseCell>{expense.description}</ExpenseCell>
          <ExpenseCell>{expense.amount}</ExpenseCell>
          <ExpenseCell>{expense.currency}</ExpenseCell>
        </Row>)}
        <Row>
        <TotalCell>TOTAL</TotalCell>
          <TotalCell>{total}</TotalCell>
        </Row>
      </ExpensesList> : <div>No expenses submitted.</div>}
    </ReportWrapper>
  );
}

const ReportWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const ExpensesList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-direction: row;
  border-top: 1px solid black;
`;

const ExpenseCell = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;


const TotalCell = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  flex-basis: 0;
  padding: 0px 20px;
`;