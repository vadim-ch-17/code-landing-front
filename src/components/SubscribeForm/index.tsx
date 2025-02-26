"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuSend } from "react-icons/lu";

interface IFormInput {
  email: string;
}

const Subscribe = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          type="email"
          placeholder="Your email address"
          className="!bg-lightGray !text-white !text-body-14-20 placeholder:text-white placeholder:text-body-14-20 focus:ring-0 focus:outline-none rounded-lg p-2 pr-6"
        />
        <button
          type="submit"
          className="absolute right-2 top-2/4 transform -translate-y-2/4">
          <LuSend />
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
