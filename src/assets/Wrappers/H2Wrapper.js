export default function H2Wrapper({ children }) {
  return (
    <div className="flex justify-start w-full ">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8">{children}</h2>
    </div>
  );
}
