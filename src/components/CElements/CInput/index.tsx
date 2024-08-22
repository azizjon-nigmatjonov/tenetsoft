import { TextField } from "@mui/material";

interface Props {
  label?: string;
  required?: boolean;
  error: any;
}

const CInput = ({ label = "", required = false, error, ...props }: Props) => {
  return (
    <div id="cInput" className={error ? "error" : ""}>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        {...props}
      />
    </div>
  );
};

export default CInput;
