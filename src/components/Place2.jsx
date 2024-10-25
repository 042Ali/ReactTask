import "./Place2.css";

export default function Place2() {
  return (
    <>
      <div className="Place__card">
        <div className="input-fields">
          <h2 className="input-title">Name</h2>
          <div className="name-inputs">
            <input
              type="text"
              placeholder="First Name"
              className="text-input"
            />
            <input type="text" placeholder="Last Name" className="text-input" />
          </div>

          <h2 className="input-title">Email</h2>
          <input type="email" placeholder="Email" className="text-input" />

          <h2 className="input-title">Address</h2>
          <input
            type="text"
            placeholder="Address Line 1"
            className="text-input"
          />
          <input
            type="text"
            placeholder="Address Line 2"
            className="text-input"
          />
          <input type="text" placeholder="City" className="text-input" />
          <input type="text" placeholder="Zip" className="text-input" />

          <div className="button-container">
            <button
              className="submit-button"
              style={{
                width: "295px",
                background: "rgb(74, 58, 255)",
                border: "1px solid rgb(74, 58, 255)",
                color: "white",
                borderRadius: "5px",
                height: "30px",
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
