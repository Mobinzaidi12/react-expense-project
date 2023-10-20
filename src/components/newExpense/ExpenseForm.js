import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enterExpense, setExpense] = useState('');
  const [enterAmount, setAmount] = useState('');
  const [enterDate, setDate] = useState('');

  const expenseChangeHandler = (e) => {
    setExpense(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      expense: enterExpense,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpense(expenseData);

    setExpense('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>New Expense</label>
          <input type='text' onChange={expenseChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
