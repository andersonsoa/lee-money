import { Cicle } from "@prisma/client";
import { useForm } from "react-hook-form";
import { SolidButton } from "../buttons/SolidButton";
import { TextButton } from "../buttons/TextButton";
import { Input } from "../form-elements/Input";
import { SolidLink } from "../links/SolidLink";

interface CicleFormProps {
  onSubmit: (data: any) => void;
  onDelete?: () => void;
  initialValues?: Cicle;
}

export const CicleForm: React.FC<CicleFormProps> = ({
  onSubmit,
  onDelete,
  initialValues,
}) => {
  const { handleSubmit, register } = useForm<Cicle>({
    defaultValues: initialValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col space-y-4"
    >
      <div className="p-2">
        <Input {...register("name", { required: true })} label="Descrição" />
      </div>

      <div className="p-2">
        <Input {...register("start_date")} disabled label="Data de Inicio" />
      </div>

      <div className="p-2">
        <Input
          {...register("end_date")}
          disabled
          label="Data de Encerramento"
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
          <SolidButton type="submit" variant="success" size="md">
            Salvar
          </SolidButton>

          <SolidLink href="/settings/cicles" size="md" variant="danger">
            Cancelar
          </SolidLink>
        </div>
      </div>
    </form>
  );
};
