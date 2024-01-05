/* eslint-disable react/prop-types */

const DeleteConfirmation = ({ onDelete, isVisible, setIsVisible }) => {
  const hideConfirmation = () => {
    setIsVisible(false);
  };

  const handleDelete = () => {
    onDelete();
    hideConfirmation();
  };

  return (
    <div>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Are you sure you want to delete this booking?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={hideConfirmation}
                className="mr-2 px-4 py-2 text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-800 text-white px-4 py-2 rounded"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteConfirmation;
