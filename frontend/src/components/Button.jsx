export default function CustomButton({ handleDelete, text }) {
  return (
    <button
      onClick={handleDelete}
      className="rounded-full bg-teal-900 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-raspberryrose focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
}
