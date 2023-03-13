import React, { useEffect, useState } from "react";

export const Notes = () => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    fetch("https://sleepy-snaps-crow.cyclic.app/notes/", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setNotes(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandle = (noteID) => {
    fetch(`https://sleepy-snaps-crow.cyclic.app/notes/delete/${noteID}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  };

  return (
    <div>
      <h1>Notes Here</h1>
      {notes ? (
        notes.map((e) => {
          return (
            <div key={e._id}>
              <h2>Title : {e.title}</h2>
              <h2>Description : {e.body}</h2>
              <button onClick={() => deleteHandle(e._id)}>Delete</button>
              <hr />
            </div>
          );
        })
      ) : (
        <h1> Notes Not Available</h1>
      )}
    </div>
  );
};
