import {useEffect , useSate} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisabled=false,
    currencyDisabled = false,
    selectCurrency='usd',
    currencyOptions=[]

}){
    return(
        <div className="top">
          <div className="top-1">
              <label className='p-3 text-gray-400 font-bold '>{label}</label>
              <label className="p-3 text-gray-400 font-bold">Currency Type</label>
          </div>
          <div className="top-1">
             <input type="number" className='box'
             placeholder={amount}
             value = {amount}
             disabled={amountDisabled}
             onChange={(e)=>onAmountChange(Number(e.target.value))}/>

             <select name="" id="" className='mr-5 outline-none' 
             value={selectCurrency}
             onChange={(currency)=>(onCurrencyChange(currency.target.value))}>
                
                {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                
             </select>
          </div>
       </div>
    )
}

export default InputBox;