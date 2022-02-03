interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export const PaginationItem: React.FC<PaginationItemProps> = ({
  isCurrent = false,
  number,
  onPageChange,
}) => {
  if (isCurrent) {
    return (
      <button
        disabled
        className="grid h-8 w-8 place-items-center rounded-md bg-fuchsia-700 text-xs shadow-md transition-all  disabled:cursor-default disabled:bg-fuchsia-700"
      >
        {number}
      </button>
    );
  }

  return (
    <button
      className="hover: grid h-8 w-8 place-items-center rounded-md bg-gray-700 text-xs shadow-md transition-all hover:bg-gray-600"
      onClick={() => onPageChange(number)}
    >
      {number}
    </button>
  );
};
