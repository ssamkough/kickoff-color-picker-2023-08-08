import axios from "axios";
import { useEffect, useState } from "react";
import CurrentColor from "../components/palettes/CurrentColor";
import Picker from "../components/palettes/Picker";
import SavedPalettes from "../components/palettes/SavedPalettes";
import { rgbStringFromColor } from "../utils/palette";
import { Color, Palette } from "./types";

const Home = () => {
  const [savedPalettes, setSavedPalettes] = useState<Palette[]>([]);
  const [paletteName, setPaletteName] = useState<string>("");
  const [palette, setPalette] = useState<Color[]>([]);
  const [paletteId, setPaletteId] = useState<number | null>();

  // get
  useEffect(() => {
    const fetchPalettes = async () => {
      const { status, data } = await axios.get("/api/palettes");

      if (status === 200) {
        setSavedPalettes(data);
      } else {
        throw new Error("Error connecting to server");
      }
    };

    fetchPalettes();
  }, [setSavedPalettes, axios]);

  // update
  useEffect(() => {
    const foundPalette = savedPalettes.find(({ id }) => id === paletteId);
    if (foundPalette) {
      setPaletteName(foundPalette.name);
      setPalette([]);
    }
  }, [paletteId]);

  async function savePaletteToDatabase() {
    if (!paletteName || paletteName === "") {
      alert("Palette must have name!");
      return;
    }

    if (palette.length < 5) {
      alert("Must have 5 colors to save to database!");
      return;
    }

    const color_one = rgbStringFromColor(palette[0]);
    const color_two = rgbStringFromColor(palette[1]);
    const color_three = rgbStringFromColor(palette[2]);
    const color_four = rgbStringFromColor(palette[3]);
    const color_five = rgbStringFromColor(palette[4]);

    try {
      const { data } = await axios({
        method: paletteId ? "PUT" : "POST",
        url: `/api/palettes${paletteId ? `/${paletteId}` : ""}`,
        data: {
          body: {
            name: paletteName,
            color_one,
            color_two,
            color_three,
            color_four,
            color_five,
          },
        },
      });
      setPaletteName("");
      setPalette([]);
      setSavedPalettes([...data]);
      setPaletteId(null);
    } catch (e) {
      console.error("error: ", e);
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1 className="text-red-500">Kickoff Color Palettes</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          padding: 4,
        }}
      >
        <div>
          <h2>Color Picker</h2>
          <Picker
            palette={palette}
            setPalette={setPalette}
            isSaveDisabled={palette.length === 5}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div>
            <h2>Current Colors in Palette</h2>
            {paletteId && <h4>(edit mode)</h4>}
          </div>
          <CurrentColor
            paletteName={paletteName}
            setPaletteName={setPaletteName}
            palette={palette}
            savePaletteToDatabase={savePaletteToDatabase}
            isEditMode={!!paletteId}
          />
        </div>
      </div>
      <hr style={{ margin: 20 }} />
      <h2>Saved Palettes</h2>
      {savedPalettes.length > 0 ? (
        <SavedPalettes
          paletteName={paletteName}
          palette={palette}
          savedPalettes={savedPalettes}
          setSavedPalettes={setSavedPalettes}
          setPaletteId={setPaletteId}
        />
      ) : (
        "No currently saved palettes!"
      )}
    </div>
  );
};

export default Home;
