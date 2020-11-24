import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deposit, withdraw } from './balanceSlice';

const Balance = () => {

  const balance = useSelector(state => state.balance);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(
      deposit(10)
    )
  };

  const handleWithdraw = () => {
    dispatch(
      withdraw(10)
    )
  };

  return (
    <>
    <section>
      <h2>Total Saldo</h2>
      <p>$ {balance.total}</p>
    </section>
    <section>
      <button type="button" onClick={handleDeposit}>Deposit $10</button>
      <button type="button" onClick={handleWithdraw}>Withdraw $10</button>
    </section>
    </>
  )
}

export default Balance;