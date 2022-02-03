import { Payment } from "@prisma/client";
import { useState } from "react";
import { SliderPicker } from "react-color";
import { Controller, useForm } from "react-hook-form";
import { SolidButton } from "../buttons/SolidButton";
import { TextButton } from "../buttons/TextButton";
import { SolidLink } from "../links/SolidLink";
import NumberFormat from "react-number-format";
import { Input } from "../form-elements/Input";

interface PaymentFormProps {
  onSubmit: (data: any) => void;
  onDelete?: () => void;
  initialValues?: Payment;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({
  onSubmit,
  onDelete,
  initialValues,
}) => {
  const [color, setColor] = useState(initialValues?.color || "#aaa");

  const { handleSubmit, register, setValue, control } = useForm<Payment>({
    defaultValues: initialValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col space-y-4"
    >
      <div className="p-2">
        <Input label="Descrição" {...register("name")} />
      </div>

      <div className="p-2">
        <label>
          <span className="mb-1 block text-sm text-gray-400">Limite</span>
          <Controller
            name="limit"
            control={control}
            render={({ field }) => (
              <NumberFormat
                className="bg-dark-800 w-full rounded py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
                prefix="R$ "
                thousandSeparator={"."}
                decimalSeparator=","
                decimalScale={2}
                onValueChange={(values) => {
                  field.onChange(values.floatValue);
                }}
                value={field.value}
              />
            )}
          />
        </label>
      </div>

      <div className="space-y-4 p-2">
        <Input label="Cor" {...register("color")} readOnly />
        <SliderPicker
          onChange={(color) => setColor(color.hex)}
          onChangeComplete={(color) => setValue("color", color.hex)}
          color={color}
        />
      </div>

      <hr className="border-dark-700" />

      <div className="flex items-center justify-between">
        <div>
          {onDelete && (
            <TextButton type="button" variant="danger" onClick={onDelete}>
              Remover
            </TextButton>
          )}
        </div>

        <div className="flex space-x-4">
          <SolidButton type="submit" variant="success">
            Salvar
          </SolidButton>

          <SolidLink href="/settings/payments" variant="danger">
            Cancelar
          </SolidLink>
        </div>
      </div>
    </form>
  );
};
