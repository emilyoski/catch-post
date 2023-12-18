export default function LargeCustomButton({ handleCreateNewBin, text }) {
  return (
    <button
      onClick={handleCreateNewBin}
      className="rounded-full bg-spacecadet px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-glaucous focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-4"
    >
      {text}
    </button>
  );
}
