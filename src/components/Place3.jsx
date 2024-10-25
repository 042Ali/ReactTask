import "./Place3.css";

export default function Place3() {
  return (
    <>
      <div className="place-card">
        <div className="input-fields">
          <h2 className="input-title">VAT</h2>
          <div className="name-inputs">
            <input
              type="text"
              placeholder="VAT number"
              className="text-input"
            />
          </div>

          <h2 className="input-title">Industry</h2>
          <input
            type="text"
            placeholder="Please select your industry..."
            className="text-input"
          />

          <h2 className="input-title">Organization Website</h2>
          <input
            type="text"
            placeholder="www.example.com"
            className="text-input"
          />

          <div className="button-container">
            <a href="#">
              <button className="submit-button">Continue</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
