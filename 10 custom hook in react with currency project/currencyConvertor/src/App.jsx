import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');

  let currencyInfo = useCurrencyInfo(from);  // Get currency info based on 'from'

  // Wait for currencyInfo to be available before using it
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  function convert() {
    // Assuming the currency data is correctly fetched
    const conversionRate = currencyInfo ? currencyInfo[to] : 1; // Default to 1 if no conversion rate
    setConvertedAmount(amount * conversionRate);
  }

  return (
    <>
      <img
        src="https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg"
        className="screen"
      />
      <div className="card">
        <InputBox
          label={'From'}
          amount={amount}
          onCurrencyChange={(currency) => setFrom(currency)}  // Fix currency change handler
          currencyOptions={options}
          onAmountChange={(amount) => setAmount(Number(amount))}
          selectCurrency={from}
        />

        <InputBox
          label={'To'}
          amount={convertedAmount}
          onCurrencyChange={(currency) => setTo(currency)}  // Fix currency change handler
          onAmountChange={(amount) => setConvertedAmount(Number(amount))}
          currencyOptions={options}
          selectCurrency={to}
          amountDisabled={true}
        />

        <button
          className="border-2 p-4 bg-blue-700 text-white rounded-xl text-3xl border-none"
          onClick={convert}
        >
          Convert {from} to {to}
        </button>
      </div>
    </>
  );
}

export default App;
