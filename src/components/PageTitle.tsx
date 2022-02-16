export const PageTitle: React.FC = ({ children }) => {
  return (
    <h1 className="text-2xl font-bold underline decoration-fuchsia-700 decoration-4 underline-offset-4">
      {children}
    </h1>
  );
};
