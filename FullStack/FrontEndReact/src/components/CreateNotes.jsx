import React, { useState } from "react";

export const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    const payload = {
      title,
      body,
    };
    // console.log(payload);
    fetch("https://sleepy-snaps-crow.cyclic.app/notes/create", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Create Notes Here</h1>
      <input
        type="text"
        placeholder="enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Notes</button>
    </div>
  );
};
