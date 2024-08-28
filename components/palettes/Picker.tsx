import type { Dispatch, SetStateAction } from "react";
import React, { useEffect, useState } from "react";
import type { Color } from "../../pages/types";

interface Props {
  palette: Color[];
  setPalette: Dispatch<SetStateAction<Color[]>>;
  isSaveDisabled: boolean;
}

interface ColorInputProps {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  labelColor: "red" | "green" | "blue";
}

const ColorInput = ({ color, setColor, labelColor }: ColorInputProps) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const incomingValue = event.target.value;
    if (Number(incomingValue) > 255) return;
    setColor(incomingValue);
  }

  return (
    <div
      style={{
        width: 320,
        display: "flex",
        justifyContent: "space-between",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      <label htmlFor="color" style={{ marginRight: 4 }}>
        input a hex color for{" "}
        <span style={{ color: labelColor, fontWeight: 600 }}>{labelColor}</span>
      </label>
      <input
        name="color"
        type="number"
        value={color}
        onChange={handleChange}
        min={0}
        max={255}
        style={{ width: 80 }}
      />
    </div>
  );
};

const Picker = ({ palette, setPalette, isSaveDisabled }: Props) => {
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");

  // reset colors once palette updates
  useEffect(() => {
    setRed("");
    setGreen("");
    setBlue("");
  }, [palette]);

  function saveColorToPalette() {
    let sanitizedRed: number;
    let sanitizedGreen: number;
    let sanitizedBlue: number;

    // validation of colors
    if (red === "") sanitizedRed = 0;
    else sanitizedRed = Number(red);
    if (green === "") sanitizedGreen = 0;
    else sanitizedGreen = Number(green);
    if (blue === "") sanitizedBlue = 0;
    else sanitizedBlue = Number(blue);

    setPalette((currentPalette) => [
      ...currentPalette,
      { red: sanitizedRed, green: sanitizedGreen, blue: sanitizedBlue },
    ]);
  }

  const numericRed = red === "" ? 0 : red;
  const numericGreen = green === "" ? 0 : green;
  const numericBlue = blue === "" ? 0 : blue;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ColorInput color={red} setColor={setRed} labelColor="red" />
      <ColorInput color={green} setColor={setGreen} labelColor="green" />
      <ColorInput color={blue} setColor={setBlue} labelColor="blue" />
      <div>
        current rgb: rgb({numericRed}, {numericGreen}, {numericBlue})
      </div>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${numericRed} ${numericGreen} ${numericBlue})`,
          border: "1px solid black",
        }}
      ></div>
      <button
        onClick={saveColorToPalette}
        style={{
          width: 100,
          alignSelf: "flex-end",
          opacity: isSaveDisabled ? "0.5" : "1",
        }}
        disabled={isSaveDisabled}
      >
        Save Color
      </button>
    </div>
  );
};

export default Picker;
