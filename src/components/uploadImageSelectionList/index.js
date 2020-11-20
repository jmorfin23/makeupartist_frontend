import React from "react";
import { UL, LI } from "../UI/index";

export const UploadImageSelectionList = ({
  setWedding,
  setHairStyle,
  setCommercial,
  setStudio
}) => {
  return (
    <UL className="type-list">
      <LI onClick={setWedding} className="type type-1">
        Wedding
      </LI>
      <LI onClick={setHairStyle} className="type type-2">
        Hairstyle
      </LI>
      <LI onClick={setCommercial} className="type type-3">
        Commercial
      </LI>
      <LI onClick={setStudio} className="type type-4">
        Studio
      </LI>
    </UL>
  );
};
