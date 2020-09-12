import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TextInput, Picker
  } from 'react-native';

export default function CurrencyRow(props) {

    const [selectedValue, setSelectedValue]= useState()

    const{
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        amountChange
    } = props

const changedValue=(value)=>{
    onChangeCurrency(value);
    setSelectedValue(value);
}
const changedAmount=(newAmount)=>{
    amountChange(newAmount);
}
    return (
        <SafeAreaView>
        <TextInput 
        keyboardType="numeric" 
        placeholder="Type here to convert"
        value={amount}
        onChangeText={(value) => changedAmount(value)}
         />
        <Picker
            selectedValue={selectedCurrency}
            onValueChange={(itemValue,itemIndex) => changedValue(itemValue)}
        >
            {currencyOptions.map(option => (
                <Picker.Item value={option} label={option} key={option}/>
            ))}
            
        </Picker>
        
        </SafeAreaView>
    )
}
