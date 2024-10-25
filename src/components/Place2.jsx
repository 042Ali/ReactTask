import { Button, TextField } from "@mui/material";
import "./Place2.css";

export default function Place2() {
  return (
    <>
      <div style={{ marginLeft: "100px" }}>
        <div className="sidebar">
          <div className="Account">
            <div>
              <h1>Currency</h1>
            </div>
            <div className="Input1">
              <h2>Country of bank account</h2>

              <TextField
                style={{ height: "34px", width: "400px" }}
                id="outlined-basic"
                label="Country"
                variant="outlined"
              />
            </div>
            <div className="input2"></div>
            <Button
              style={{ marginTop: "30px", width: "410px" }}
              variant="contained"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
