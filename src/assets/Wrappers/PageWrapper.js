export default function PageWrapper({ children, bgColor }) {
  return (
    <div
      className={
        `w-full min-h-screen flex flex-col items-center relative ` +
        ` ${bgColor} `
      }
    >
      <div className="w-full">{children}</div>
    </div>
  );
}
