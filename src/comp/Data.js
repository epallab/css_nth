export const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const data = [
  {
    id: `:nth-child(1)`,
    element: [1],
    desc: `Selects elements that are the first child of their parent.`,
  },
  {
    id: `:nth-child(2)`,
    element: [2],
    desc: `Selects elements that are the second child of their parent.`,
  },
  {
    id: `:nth-child(3)`,
    element: [3],
    desc: `Selects elements that are the third child of their parent.`,
  },
  {
    id: `:nth-child(10)`,
    element: [10],
    desc: `Selects elements that are the 10th child of their parent.`,
  },
  {
    id: `:nth-child(2n)`,
    element: [2, 4, 6, 8, 10],
    desc: `Selects even-numbered elements (e.g., 2nd, 4th, 6th, etc.) of their parent.`,
  },
  {
    id: `:nth-child(even)`,
    element: [2, 4, 6, 8, 10],
    desc: `Selects even-numbered elements (e.g., 2nd, 4th, 6th, etc.) of their parent.`,
  },
  {
    id: `:nth-child(odd)`,
    element: [1, 3, 5, 7, 9],
    desc: `Selects odd-numbered elements (e.g., 1st, 3rd, 5th, etc.) of their parent.`,
  },
  {
    id: `:nth-child(3n + 2)`,
    element: [2, 5, 8],
    desc: `Selects every third element (e.g., 2nd, 5th, 8th, etc.) after the starting point.`,
  },
  {
    id: `:nth-child(3n)`,
    element: [3, 6, 9],
    desc: `Selects elements whose position is a multiple of 3 (3rd, 6th, 9th, etc.) within their parent.`,
  },
  {
    id: `:nth-child(4n - 3)`,
    element: [1, 5, 9],
    desc: `Starts at the 1st position. Then, selects every fourth element (adding 4 to the position) after the starting point.`,
  },
];
