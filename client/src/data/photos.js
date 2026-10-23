// EDITABLE: gallery photos. Photos that are not in public/assets/photos yet (night-together, bus-hands, ad looking, hands-no-watch, family) are skipped automatically and appear as soon as the file is added.
// EDITABLE: gallery photos. Add a photo = copy the file to public/assets/photos/ (or use a Cloudinary URL) and add a line.
// Captions are deliberately neutral; I haven't assumed which event any photo is from, except hands.jpg (its camera stamp says 25 Dec 2025).
const p = (file, alt, caption) => ({ src: `/assets/photos/${encodeURIComponent(file)}`, alt, caption }); // encodeURIComponent handles the space in "ad looking.jpg"
export const photoGroups = [
  { title: "Lulu Mall day", note: "25 December 2025, our first in-person meeting", photos: [
    p("hands.jpg", "Our hands held together", "our hands, 25 Dec 2025") ] },
  { title: "Hand in hand", note: "", photos: [
    p("bus-hands.jpg", "You lying on my hand while we hold hands on the bus", "holding hands on the bus, with you resting on my hand"),
    p("hands-no-watch.jpg", "Our hands held together, with both our watches visible", "No matter how much time passes, I'll always want to hold your hand, kanna. ♡") ] },
  { title: "Our first temple date", note: "Sree Padmanabhaswamy Temple, Thiruvananthapuram", photos: [
    p("family.jpg", "The two of us at Sree Padmanabhaswamy Temple with your mom and your sister", "our first temple date, with your mom and your sister") ] },
  { title: "Photo booth", note: "", photos: [
    p("love-1.jpg", "Us making a heart shape with our hands in a photo booth", "our little heart"),
    p("kiss1.jpg", "Photo booth picture of us leaning close together", "photo booth, take one"),
    p("kiss2.jpg", "Photo booth picture of us close together", "photo booth, take two"),
    p("kiss3.jpg", "Photo booth picture of us close together", "photo booth, take three"),
    p("togther9.jpg", "A hand holding two strips of our photo booth pictures", "holding the strips") ] },
  { title: "Just us", note: "", photos: [
    p("Selfie.jpg", "A selfie of the two of us smiling", "a selfie of us"),
    p("togther4.jpg", "Another selfie of the two of us", "another selfie"),
    p("togther2.jpg", "A candid photo of the two of us", "a candid one"),
    p("togther3.jpg", "A mirror selfie of the two of us", "mirror selfie"),
    p("togther5.jpg", "Another mirror selfie of the two of us", "mirror selfie again"),
    p("togther8.jpg", "The two of us sitting together", "us together"),
    p("night-together.jpg", "The two of us together at night", "us, after dark"),
    p("ad looking.jpg", "Me looking at you with admiration", "the way I look at you. I can't help it.") ] },
  { title: "Gifts", note: "", photos: [
    p("gift2.jpg", "Gifts laid out on a table, including a pencil eye sketch and cards", "a gift from you"),
    p("gift3.jpg", "A framed birthday hamper with a red ribbon", "the birthday hamper I gave you") ] },
];

// EDITABLE: video clips. I haven't assumed what this clip is from, so the caption is neutral. Tell me and I'll update it.
export const videos = [
  { src: "/assets/photos/togther1.mp4", poster: "/assets/photos/togther1-poster.jpg", caption: "a short clip of us", label: "A short video clip of the two of us" },
];
