import { Color } from "../../pages/types";

interface Props {
  palette: Color[];
}

const Palette = ({ palette }: Props) => {
  const formattedPalette = palette
    .filter((color) => color)
    .filter((color) => typeof color !== "undefined");

  return (
    <div
      style={{
        display: "flex",
        gap: 6,
        flex: 1,
      }}
    >
      {formattedPalette.length > 0 ? (
        formattedPalette.map(({ red, green, blue }) => (
          <div
            key={`${red}-${green}-${blue}`}
            style={{
              width: 40,
              height: 40,
              backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            }}
          ></div>
        ))
      ) : (
        <div style={{ width: 250 }}>
          No colors added to palette yet! You must have 5 colors to upload a
          palette!
        </div>
      )}
    </div>
  );
};

export default Palette;
