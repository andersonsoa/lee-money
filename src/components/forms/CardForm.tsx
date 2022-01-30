import { Card } from "@prisma/client";
import NextLink from "next/link";
import { useState } from "react";
import { SliderPicker } from "react-color";
import { useForm } from "react-hook-form";

interface CardFormProps {
  onSubmit: (data: any) => void;
  onDelete?: () => void;
  initialValues?: Card;
}

export const CardForm: React.FC<CardFormProps> = ({ onSubmit, onDelete, initialValues }) => {
  const [color, setColor] = useState(initialValues?.color || "#aaa");

  const { handleSubmit, register, setValue } = useForm<Card>({ defaultValues: initialValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col space-y-4">
      <div className="p-2">
        <label>
          <span className="mb-1 block text-sm text-gray-400">Descrição</span>
          <input
            type="text"
            {...register("name")}
            className="w-full rounded bg-slate-800 py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
          />
        </label>
      </div>

      <div className="p-2">
        <label>
          <span className="mb-1 block text-sm text-gray-400">Limite</span>
          <input
            type="number"
            {...register("limit")}
            className="w-full rounded bg-slate-800 py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
          />
        </label>
      </div>

      <div className="space-y-4 p-2">
        <label>
          <span className="mb-1 block text-sm text-gray-400">Cor</span>
          <input
            type="text"
            {...register("color")}
            readOnly
            className="w-full rounded bg-slate-800 py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
          />
        </label>
        <SliderPicker onChange={(color) => setColor(color.hex)} onChangeComplete={(color) => setValue("color", color.hex)} color={color} />
      </div>

      <hr className="border-dark-700" />

      <div className="flex items-center justify-between">
        <div>
          {onDelete && (
            <button
              className="bg-gray-900/15 hover:bg-dark-800 cursor-pointer rounded-md px-2 py-2 text-sm font-bold uppercase text-red-500 transition-colors hover:shadow-lg"
              onClick={onDelete}
            >
              Remover
            </button>
          )}
        </div>

        <div className="space-x-4">
          <button className="rounded bg-green-600 px-4 py-2 text-sm text-gray-100 hover:brightness-110">Salvar</button>

          <NextLink href="/settings/cards">
            <a className="cursor-pointer rounded bg-red-600 px-4 py-2 text-sm text-gray-100 hover:brightness-110">Cancelar</a>
          </NextLink>
        </div>
      </div>
    </form>
  );
};
