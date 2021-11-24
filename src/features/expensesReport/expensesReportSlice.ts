import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export type Expense = {
    description: string,
    amount: number,
    currency: string // @TODO get from somewhere?
}

export interface ReportState {
    expenses: Expense[];
    total: number
  }

const initialState: ReportState = {
    expenses: [],
    total: 0
  };

export const expensesReportSlice = createSlice({
    name: 'counter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addExpense: (state, action: PayloadAction<Expense>) => {
            state.expenses.push(action.payload);
            state.total += action.payload.amount;
        },
    },
});

export const selectExpenses = (state: RootState) => state.report.expenses;
export const selectTotal = (state: RootState) => state.report.total;

export default expensesReportSlice.reducer;
