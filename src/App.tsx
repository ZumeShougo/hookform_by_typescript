import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './App.css';

type FormInput ={
  name: string;
  age: number;
};

export default function App() {

  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>名前</label>
          <input {...register('name', { required: true})} placeholder='名前'/>
        </div>
        <div>
          <label>年齢</label>
          <input {...register('age', { required: true})} placeholder='年齢'/>歳
        </div>
        <div>
          <button type='submit'>送信</button>
        </div>
      </form>
    </div>
  );
}


