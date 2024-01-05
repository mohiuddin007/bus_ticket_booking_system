

const BookingForm = () => {
  return (
    <div>
        <div className="flex justify-between my-2 border px-2">
            <div>
              <p>
                <span className="font-semibold text-gray-700">Seat Num:</span>{" "}
                <span className="text-blue-900 font-bold">A1</span>{" "}
              </p>
            </div>
            <div>
              <p className="text-blue-900 font-bold text-xl">৳ 700</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl">
              <span className="font-semibold text-gray-700">Total:</span>{" "}
              <span className="text-blue-900 font-bold ">৳ 700</span>
            </p>
          </div>
          
    </div>
  )
}

export default BookingForm