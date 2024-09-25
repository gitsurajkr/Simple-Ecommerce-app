import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-9 h-9 rounded bg-red-500 text-white hover:bg-red-600"
    >
       <DeleteForeverIcon />
    </button>
  );
}   

export default DeleteButton;