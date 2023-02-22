import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './App.css';

type FormInput ={
  name: string;
  age: number;
};

export default function App() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>名前</label>
          <input {...register('name', { required: true})} placeholder='名前'/>
          {errors.name && <p className='error'>名前の入力は必須です</p>}
        </div>
        <div>
          <label>年齢</label>
          <input {...register('age', {
            required: { value: true, message: "年齢の入力は必須です"},
            min: { value: 0, message: "最小数は0です"},
            max: { value: 150, message: "最大値は150です"}
            })} placeholder='年齢'
          />歳
          {errors.age && <p className='error'>{errors.age.message}</p>}
        </div>
        <div>
          <button type='submit'>送信</button>
        </div>
      </form>
    </div>
  );
}


