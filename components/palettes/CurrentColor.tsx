import { Dispatch, SetStateAction } from "react";
import { Color } from "../../pages/types";
import Palette from "./Palette";

interface Props {
  paletteName: string;
  setPaletteName: Dispatch<SetStateAction<string>>;
  palette: Color[];
  savePaletteToDatabase: () => {};
  isEditMode: boolean;
}

const CurrentColor = ({
  paletteName,
  setPaletteName,
  palette,
  savePaletteToDatabase,
  isEditMode,
}: Props) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <div>
        <label htmlFor="palette-name" style={{ marginRight: 4 }}>
          Palette name:
        </label>
        <input
          name="palette-name"
          value={paletteName}
          onChange={(event) => setPaletteName(event.target.value)}
        />
      </div>
      {<Palette palette={palette} />}
      <button
        onClick={savePaletteToDatabase}
        style={{ width: 120, alignSelf: "flex-end" }}
      >
        {isEditMode ? "Update" : "Save"} Palette
      </button>
    </div>
  );
};

export default CurrentColor;
