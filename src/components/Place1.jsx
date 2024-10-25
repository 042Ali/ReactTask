import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useFormStore from "../store";
import "./Place1.css";
import Place2 from "./Place2";
import Place3 from "./place3";
import Place4 from "./Place4";

export default function Place1() {
  const {
    formPhase,
    businessAddress,
    businessType,
    addressLine1,
    city,
    zip,
    setBusinessAddress,
    setBusinessType,
    setAddressLine1,
    setAddressLine2,
    setCity,
    setZip,
    nextPhase,
    previousPhase,
  } = useFormStore();

  const handleNextPhase = (e) => {
    e.preventDefault();

    if (formPhase === 1) {
      if (!businessAddress || !businessType) {
        alert("Xahiş edirəm, iş adresini və növünü seçin!");
        return;
      }
      nextPhase();
    } else if (formPhase === 2) {
      if (!addressLine1 || !city || !zip) {
        alert("Xahiş edirəm, tələb olunan adres sahələrini doldurun!");
        return;
      }
      nextPhase();
    }
  };

  const handleBack = () => {
    if (formPhase > 1) {
      previousPhase();
    }
  };

  return (
    <div style={{ marginLeft: "100px" }}>
      <div className="sidebar">
        <div className="Sidebarcard">
          <h1 style={{ backgroundColor: "blue" }}>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
        </div>
        <div className="Text__card">
          <h2>Business structure</h2>
          <h2>Bank details</h2>
          <h2>2-step authentication</h2>
          <h2>Overview</h2>
        </div>
      </div>

      <form onSubmit={handleNextPhase} className="inputs">
        {formPhase === 1 && (
          <div style={{ marginLeft: "100px" }}>
            <div className="Account">
              <div>
                <h1>Business address</h1>
                <TextField
                  style={{ height: "34px", width: "400px" }}
                  label="Registered business address"
                  variant="outlined"
                  onChange={(e) => setBusinessAddress(e.target.value)}
                />
              </div>
              <div className="Input1">
                <h2>Type</h2>
                <TextField
                  style={{ height: "34px", width: "400px" }}
                  label="Type"
                  variant="outlined"
                  onChange={(e) => setBusinessType(e.target.value)}
                />
              </div>
              <div className="input2">
                <div style={{ marginTop: "10px" }}>
                  <h2>Address</h2>
                </div>
                <input
                  placeholder="Address line 1"
                  type="text"
                  onChange={(e) => setAddressLine1(e.target.value)}
                />
                <input
                  placeholder="Address line 2"
                  type="text"
                  onChange={(e) => setAddressLine2(e.target.value)}
                />
                <input
                  placeholder="City"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  placeholder="Zip"
                  type="text"
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                style={{ marginTop: "30px", width: "410px" }}
                variant="contained"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {formPhase === 2 && <Place2 />}
        {formPhase === 3 && <Place3 />}
        {formPhase === 4 && <Place4 />}
      </form>
    </div>
  );
}
