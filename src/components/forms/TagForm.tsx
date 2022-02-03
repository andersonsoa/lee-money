import { Tag } from "@prisma/client";
import NextLink from "next/link";
import { useState } from "react";
import { SliderPicker } from "react-color";
import { useForm } from "react-hook-form";
import { SolidButton } from "../buttons/SolidButton";
import { TextButton } from "../buttons/TextButton";
import { Input } from "../form-elements/Input";
import { SolidLink } from "../links/SolidLink";
import { TextLink } from "../links/TextLink";

interface TagFormProps {
  onSubmit: (data: any) => void;
  onDelete?: () => void;
  initialValues?: Tag;
}

export const TagForm: React.FC<TagFormProps> = ({
  onSubmit,
  onDelete,
  initialValues,
}) => {
  const [color, setColor] = useState(initialValues?.color || "#aaa");

  const { handleSubmit, register, setValue } = useForm<Tag>({
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

          <SolidLink variant="danger" href="/settings/tags">
            Cancelar
          </SolidLink>
        </div>
      </div>
    </form>
  );
};
