//Complex state and Form state - useState for complex data and two-way
// form data binding via valuelink pattern (read more...):
import React from "react";
import { useStateLink } from "react-use-state-x";

const UseStateLinkExample = () => {
  const stateLink = useStateLink(
    {
      title: "Code Complete",
      popularity: 1
    },
    {
      targetHooks: {
        popularity: {
          __validate: v =>
            !Number.isFinite(v) ? "Popularity should be a number" : undefined
        }
      }
    }
  );

  const links = stateLink.nested; // obtain valuelinks to nested fields
  return (
    <div>
      <label>Title</label>
      <input
        value={links.title.value}
        onChange={e => links.title.set(e.target.value)}
      />
      <label>Popularity</label>
      <input
        value={links.popularity.value}
        onChange={e => links.popularity.set(Number(e.target.value))}
      />
      {stateLink.valid ? "The input is valid" : stateLink.errors.join(",")}
    </div>
  );
};

export { UseStateLinkExample };
