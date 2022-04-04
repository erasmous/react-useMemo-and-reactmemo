import React from "react";
import MaskInput from "react-maskinput";

function MaskedInput() {
  return (
    <div>
      <MaskInput maskChar="-" mask="000-000-000" size={9} />
    </div>
  );
}

export default MaskedInput;
