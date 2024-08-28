import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { Color, Palette as PaletteType } from "../../pages/types";
import { colorFromRgbString } from "../../utils/palette";
import Palette from "./Palette";

interface Props {
  paletteName: string;
  palette: Color[];
  savedPalettes: PaletteType[];
  setSavedPalettes: Dispatch<SetStateAction<PaletteType[]>>;
  setPaletteId: Dispatch<SetStateAction<number>>;
  searchStr: string;
  setSearchStr: Dispatch<SetStateAction<string>>;
}

const SavedPalettes = ({
  paletteName,
  palette,
  savedPalettes,
  setSavedPalettes,
  setPaletteId,
  searchStr,
  setSearchStr,
}: Props) => {
  function updatePalette(paletteId: number) {
    if (
      window.confirm("Are you sure you want to override the existing palette?")
    ) {
      setPaletteId(paletteId);
    }
  }

  async function deletePalette(paletteId: number) {
    try {
      const { status, data } = await axios.delete(`/api/palettes/${paletteId}`);
      if (status === 200) {
        setSavedPalettes((currentlySavedPalettes) =>
          currentlySavedPalettes.filter(({ id }) => id !== paletteId)
        );
      }
    } catch (e) {
      console.error("error: ", e);
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="search-bar">Search for saved palettes (by name):</label>{" "}
        <input
          name="search-bar"
          value={searchStr}
          onChange={(event) => setSearchStr(event.target.value)}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {savedPalettes.length > 0
          ? savedPalettes.map(
              ({
                id,
                name,
                color_one,
                color_two,
                color_three,
                color_four,
                color_five,
              }) => (
                <div
                  key={id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: 16,
                    border: "1px solid black",
                  }}
                >
                  <div>
                    <h3>{name}</h3>
                    <Palette
                      palette={[
                        colorFromRgbString(color_one),
                        colorFromRgbString(color_two),
                        colorFromRgbString(color_three),
                        colorFromRgbString(color_four),
                        colorFromRgbString(color_five),
                      ]}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <button onClick={() => updatePalette(id)}>update</button>
                    <button onClick={() => deletePalette(id)}>delete</button>
                  </div>
                </div>
              )
            )
          : "No saved palettes!"}
      </div>
    </div>
  );
};

export default SavedPalettes;
