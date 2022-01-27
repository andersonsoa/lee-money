interface CardProps {
  title: string;
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="bg-dark-800 rounded-md overflow-hidden shadow-md divide-y-2 divide-dark-700 h-full">
      <div className="px-4 pt-4 pb-2">
        <h3 className="text-sm text-gray-300">{title}</h3>
      </div>

      <div className="px-4 pb-4">
        <div className="overflow-x-auto overflow-y-auto pb-4 scrollbar-thin scrollbar-thumb-dark-600 scrollbar-thumb-rounded scrollbar-track-transparent">
          {children}
        </div>
      </div>
    </div>
  );
};
