import { useState } from "react";
import React from "react";

export default function Textbox(props) {
  const [text, setText] = useState("Enter your text here");
  const handle = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handler = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const Clear = () => {
    let blueText = "";
    setText(blueText);
  };
  const Space = () => {
    let spaceText = text.split(/[ ]+/);
    setText(spaceText.join(" "));
  };
  const fchar = () => {
    const words = text.split(" ");
    const firstLetters = words.map((word) => word[0]);
    setText(firstLetters.join(" "));
  };
  const Upchar = () => {
    const words = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    setText(words.join(" "));
  };
  const Lochar = () => {
    const words = text
      .split(" ")
      .map((word) => word.charAt(0).toLowerCase() + word.slice(1));
    setText(words.join(" "));
  };
  const Lschar = () => {
    const words = text
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
    setText(words.join(" "));
  };
  const handlechange = (event) => {
    setText(event.target.value);
  };
  const Time = () => {
    const A =
      0.008 * text.split(" ").filter((space) => space.length !== 0).length;
    const B = Math.floor(A);
    if (A < 1) {
      return A.toFixed(2) + " " + "Second to read it.";
    } else {
      return (
        Math.floor(A) +
        " " +
        "Minutes" +
        " " +
        Math.round((A - B) * 60) +
        " " +
        "Second to read it."
      );
    }
  };
  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className={`form-label `}
          >
            <h1>Write Your Text Here</h1>
          </label>
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "dark" : "light"
            } bg-${props.mode}`}
            value={text}
            onChange={handlechange}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
          <p className="my-2">
            {text.split(" ").filter((space) => space.length !== 0).length} words
            and {text.split("").filter((char) => char !== " ").length} character{" "}
            <br />
            {Time()}
          </p>
        </div>

        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={handle}>
          Convert to uppercase
        </button>
        <br />
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={handler}>
          Convert to lowerCase
        </button>
        <br />
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={Space}>
          manage multiple Space
        </button>
        <br />
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={fchar}>
          Get first character
        </button>
        <br />
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={Upchar}>
          Convert 1st character to uppercase
        </button>
        <br />
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={Lochar}>
          Convert 1st character to lowercase
        </button>
        <br />
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={Lschar}>
          lowercase all character except 1st character
        </button>
        <br />
        <button className={`btn btn-${props.mode} mx-1 my-1`} onClick={Clear}>
          Clear
        </button>
        <br />
      </div>
    </>
  );
}
