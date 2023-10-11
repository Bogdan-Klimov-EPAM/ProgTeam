import { FC } from "react";
import BlockWrapper from "components/block-wrapper/block-wrapper";
import { deleteBlock, updateBlock } from "lib/actions/block-actions";

export type TextBlockContentProps = {
  description: string;
  subtitle: string;
  title: string;
};

type Props = {
  description: string;
  subtitle: string;
  title: string;
  id: string;
  projectId: string;
};

const TextBlock: FC<Props> = ({
  title,
  subtitle,
  description,
  id,
  projectId,
}) => {
  const content = { title, subtitle, description };

  const handleDelete = async () => {
    "use server";
    await deleteBlock(projectId, id);
  };

  const handleUpdate = async (values: any) => {
    "use server";
    await updateBlock(id, values, "TextBlockModel");
  };

  return (
    <BlockWrapper
      handleDelete={handleDelete}
      updateBlock={handleUpdate}
      content={content}
      className="text-center py-10 bg-blue-100"
    >
      <div className="flex flex-col justify-center mx-auto w-[1200px] h-full">
        <p>{subtitle}</p>
        <h1 className="text-3xl mt-10">{title}</h1>
        <p className="mt-10">{description}</p>
      </div>
    </BlockWrapper>
  );
};

export default TextBlock;