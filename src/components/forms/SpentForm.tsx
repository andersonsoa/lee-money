import { Spent } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";
import { SolidButton } from "../buttons/SolidButton";
import { TextButton } from "../buttons/TextButton";
import NumberFormat from "react-number-format";
import { Select } from "../form-elements/Select";
import { trpc } from "../../utils/trpc";

interface SpentFormProps {
  onSubmit: (data: any) => void;
  onDelete?: () => void;
  onClose?: () => void;
  initialValues?: Spent;
}

export const SpentForm: React.FC<SpentFormProps> = ({
  onSubmit,
  onDelete,
  onClose,
  initialValues,
}) => {
  const { handleSubmit, register, control } = useForm<Spent>({
    defaultValues: initialValues,
  });

  const {
    data: payments,
    isLoading: paymentLoading,
    isFetching: paymentFetching,
  } = trpc.useQuery(["payment-get-all"]);

  const paymentOptions = payments
    ? payments.map((payment) => ({
        value: payment.id,
        label: payment.name,
      }))
    : [];

  const {
    data: tags,
    isLoading: tagLoading,
    isFetching: tagFetching,
  } = trpc.useQuery(["tag-get-all"]);

  const tagOptions = tags
    ? tags.map((tag) => ({ value: tag.id, label: tag.name }))
    : [];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col space-y-4"
    >
      {/* Descrição */}
      <div className="p-2">
        <label>
          <span className="mb-1 block text-sm text-gray-400">Descrição</span>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full rounded bg-slate-800 py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
          />
        </label>
      </div>

      {/* Valor */}
      <div className="p-2">
        <label>
          <span className="mb-1 block text-sm text-gray-400">Valor</span>
          <Controller
            name="amount"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <NumberFormat
                className="w-full rounded bg-slate-800 py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
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

      {/* Método de pagamento */}
      <div className="p-2">
        <label>
          <span className="mb-1 block text-sm text-gray-400">
            Método de Pagamento
          </span>
          <Controller
            name="payment_id"
            control={control}
            render={({ field }) => (
              <Select
                name="payment_id"
                isLoading={paymentLoading || paymentFetching}
                options={paymentOptions}
                placeholder="Selecione um método de Pagamento"
                onChange={(v) => field.onChange(v)}
                value={field.value}
              />
            )}
          />
        </label>
      </div>

      {/* Tipo de gasto */}
      <div className="p-2">
        <label>
          <span className="mb-1 block text-sm text-gray-400">
            Tipo de Gasto
          </span>
          <Controller
            name="tag_id"
            control={control}
            render={({ field }) => (
              <Select
                name="tag_id"
                isLoading={tagLoading || tagFetching}
                options={tagOptions}
                placeholder="Selecione um tipo de gasto"
                onChange={(v) => field.onChange(v)}
                value={field.value}
              />
            )}
          />
        </label>
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

          <SolidButton onClick={onClose} variant="danger">
            Cancelar
          </SolidButton>
        </div>
      </div>
    </form>
  );
};
