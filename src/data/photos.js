
 // EDITABLE: Add photos to public/assets/photos/ and add their entries below.
// Photos that are missing are skipped automatically until the files are added.

const p = (file, alt, caption) => ({
  src: `/assets/photos/${encodeURIComponent(file)}`,
  alt,
  caption,
});

export const photoGroups = [
  {
    title: "Lulu Mall day",
    note: "25 December 2025, our first in-person meeting",
    photos: [
      p(
        "hands.jpg",
        "Our hands held together",
        "our hands, 25 Dec 2025"
      ),
    ],
  },

  {
    title: "Hand in hand",
    note: "",
    photos: [
      p(
        "bus-hands.jpg",
        "You lying on my hand while we hold hands on the bus",
        "holding hands on the bus, with you resting on my hand"
      ),
      p(
        "hands-no-watch.jpg",
        "Our hands held together without a watch",
        "No matter how much time passes, I'll always want to hold your hand, kanna. ♡"
      ),
      p(
        "us.jpg",
        "You wrapping your hands around mine and resting your head on my shoulder on the bus",
        "I love it when you hold my hands and rest your head on my shoulder, kanna. I wish every bus ride could be like this. ♡"
      ),
    ],
  },

  {
    title: "Our first temple date",
    note: "Sree Padmanabhaswamy Temple, Thiruvananthapuram",
    photos: [
      p(
        "family.jpg",
        "The two of us at Sree Padmanabhaswamy Temple with your mom and your sister",
        "our first temple date, with your mom and your sister"
      ),
    ],
  },

  {
    title: "Photo booth",
    note: "",
    photos: [
      p(
        "love-1.jpg",
        "Us making a heart shape with our hands in a photo booth",
        "our little heart"
      ),
      p(
        "kiss1.jpg",
        "Photo booth picture of us leaning close together",
        "photo booth, take one"
      ),
      p(
        "kiss2.jpg",
        "Photo booth picture of us close together",
        "photo booth, take two"
      ),
      p(
        "kiss3.jpg",
        "Photo booth picture of us close together",
        "photo booth, take three"
      ),
      p(
        "togther9.jpg",
        "A hand holding two strips of our photo booth pictures",
        "holding the strips"
      ),
    ],
  },

  {
    title: "Just us",
    note: "",
    photos: [
      p(
        "Selfie.jpg",
        "A selfie of the two of us smiling",
        "a selfie of us"
      ),
      p(
        "togther4.jpg",
        "Another selfie of the two of us",
        "another selfie"
      ),
      p(
        "togther2.jpg",
        "A candid photo of the two of us",
        "a candid one"
      ),
      p(
        "togther3.jpg",
        "A mirror selfie of the two of us",
        "mirror selfie"
      ),
      p(
        "togther5.jpg",
        "Another mirror selfie of the two of us",
        "mirror selfie again"
      ),
      p(
        "togther8.jpg",
        "The two of us sitting together",
        "us together"
      ),
      p(
        "night-together.jpg",
        "The two of us together at night",
        "us, after dark"
      ),
      p(
        "ad looking.jpg",
        "Me looking at you with admiration",
        "the way I look at you. I can't help it. ♡"
      ),
      p(
        "laying.jpg",
        "Me lying in your lap",
        "Your lap is one of those places where I could just lie down and forget about everything else. Just me and you, baby. ♡"
      ),
      p(
        "look.jpg",
        "Me looking at you while you take a photo",
        "Caught looking at you again. What can I do, baby? You're always prettier than whatever I'm supposed to be looking at. ♡"
      ),
      p(
        "cheek.jpg",
        "A close-up selfie with our cheeks together while you hold my cheeks",
        "Your cheeks, my cheeks, and one more picture I could never get tired of. I just wanna stay this close to you. ♡"
      ),
      p(
        "head.jpg",
        "The two of us touching foreheads",
        "Just our foreheads touching, and you right there with me. Sometimes being this close to you says everything. ♡"
      ),
    ],
  },

  {
    title: "Gifts",
    note: "",
    photos: [
      p(
        "gift2.jpg",
        "Gifts laid out on a table, including a pencil eye sketch and cards",
        "a gift from you"
      ),
      p(
        "gift3.jpg",
        "A framed birthday hamper with a red ribbon",
        "the birthday hamper I gave you"
      ),
    ],
  },
];

// EDITABLE: Video clips
export const videos = [
  {
    src: "/assets/photos/togther1.mp4",
    poster: "/assets/photos/togther1-poster.jpg",
    caption: "a short clip of us",
    label: "A short video clip of the two of us",
  },
];
