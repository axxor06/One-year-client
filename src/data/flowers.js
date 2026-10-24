
 // EDITABLE: all Flower Memories text lives here. Order matters: 1 rose, 2 first handmade, 3 second handmade.
 // To add a photo: put the file in public/assets/photos/ (or a Cloudinary URL) and set `image` + `alt`.
export const flowersIntro = "three bouquets, three little memories from you";

export const bouquets = [
  {
    id: "rose",
    number: 1,
    heading: "The real rose",
    image: "/assets/photos/gift.jpg",
    alt: "A bouquet of red roses with baby's breath in orange wrapping, on a dark table",
    message: "The first one had a real rose. It dried up in the end, but it never stopped being special to me. The moment you gave it to me is still there, bubu.",
    caption: "the first one, from you"
  },
  {
    id: "handmade-1",
    number: 2,
    heading: "The one you made",
    image: "/assets/photos/bouquet2.jpg",
    alt: "The first handmade bouquet you made for me",
    message: "You made this one with your own hands for our second meeting. I don't only love how it looks, I love the time and effort you put into making it for me.",
    caption: "made by you, for our second meeting"
  },
  {
    id: "handmade-2",
    number: 3,
    heading: "Another one, by hand",
    image: "/assets/photos/bouquet3.jpg",
    alt: "The second handmade bouquet you made for me",
    message: "You made another one by hand, and this is my third special flower memory from you. You chose to spend your own time making something for me, and that means a lot.",
    caption: "made by you again"
  },
];

export const whatMakesSpecial = [
  { title: "The rose", text: "It was from you. That's why it matters, even after it dried." },
  { title: "The first handmade one", text: "The effort behind it, more than the way it looks." },
  { title: "The second handmade one", text: "You chose to make something with your own time for me." },
];

export const flowersClosing = [
  "The first rose may have dried up, but it will always be special to me because it was from you.",
  "And the handmade bouquets mean so much to me because I know how much effort you put into making them.",
  "It's not just about the flowers, bubu. It's about you making something with your own hands for me.",
  "I love them so much because they came from you. I love you soo much.",
];

export const closingNote = "flowers don't need to last forever to leave a lasting memory.";
