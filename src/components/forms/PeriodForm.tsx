import { Period } from "@prisma/client";
import { useForm } from "react-hook-form";
import { SolidButton } from "../buttons/SolidButton";
import { TextButton } from "../buttons/TextButton";
import { SolidLink } from "../links/SolidLink";

interface PeriodFormProps {
  onSubmit: (data: any) => void;
  onDelete?: () => void;
  initialValues?: Period;
}

export const PeriodForm: React.FC<PeriodFormProps> = ({ onSubmit, onDelete, initialValues }) => {
  const { handleSubmit, register } = useForm<Period>({ defaultValues: initialValues });

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
          <span className="mb-1 block text-sm text-gray-400">Data de Inicio</span>
          <input
            type="text"
            {...register("start_date")}
            disabled
            className="w-full rounded bg-slate-800 py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
          />
        </label>
      </div>

      <div className="p-2">
        <label>
          <span className="mb-1 block text-sm text-gray-400">Data de Encerramento</span>
          <input
            type="text"
            {...register("end_date")}
            disabled
            className="w-full rounded bg-slate-800 py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
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

        <div className="space-x-4">
          <SolidButton type="submit" variant="success" size="md">
            Salvar
          </SolidButton>

          <SolidLink href="/settings/periods" size="md" variant="danger">
            Cancelar
          </SolidLink>
        </div>
      </div>
    </form>
  );
};
