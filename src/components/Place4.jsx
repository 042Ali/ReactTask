import "./Place4.css";

export default function Place4() {
  return (
    <>
      <form onSubmit={handleStep4Submit} className="form-inputs">
        <h2 className="form-title">Currency</h2>
        <TextField
          className="form-select"
          select
          label="Select your currency..."
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
        </TextField>

        <h2 className="form-title">Bank Country</h2>
        <TextField
          className="form-select"
          select
          label="Select your bank country..."
          value={bankCountry}
          onChange={(e) => setBankCountry(e.target.value)}
        >
          <MenuItem value="Germany">Germany</MenuItem>
          <MenuItem value="UK">UK</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
        </TextField>

        <h2 className="form-title">IBAN</h2>
        <input
          type="text"
          placeholder="Your IBAN"
          className="form-input"
          value={iban}
          onChange={(e) => setIban(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Confirm your IBAN"
          className="form-input"
          value={ibanConfirm}
          onChange={(e) => setIbanConfirm(e.target.value)}
        />

        <div className="button-container">
          <button type="button" onClick={previousPhase} className="form-button">
            Back to Step 3
          </button>
          <button type="submit" className="form-button">
            Continue to Step 5
          </button>
        </div>
      </form>
    </>
  );
}
