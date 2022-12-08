export default function TextArea({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e)}
      className="border border-gray-200 rounded-sm w-full min-h-[96px] h-28 py-2 px-4 resize-none hover:shadow-lg"
    />
  );
}
